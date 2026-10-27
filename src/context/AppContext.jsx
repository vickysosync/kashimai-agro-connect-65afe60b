import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ADMIN_SESSION_KEY,
  DEMO_CREDENTIALS,
  initialData,
} from "@/data/mockData";

/**
 * Shared application state for the whole demo website.
 *
 * The public pages and the admin dashboard read and write the SAME in-memory
 * state, so edits made in the admin panel appear on the public pages
 * immediately. State lives only for the current application session — there is
 * no backend, database or persistence layer. Demo authentication uses
 * sessionStorage for the signed-in flag only.
 */

const AppContext = createContext(null);

let idCounter = 0;
function nextId(prefix) {
  idCounter += 1;
  return `${prefix}-${Date.now()}-${idCounter}`;
}

export function AppProvider({ children }) {
  const [data, setData] = useState(() => initialData());
  const [isAdmin, setIsAdmin] = useState(false);

  // Restore the demo admin session flag (current browser tab only).
  useEffect(() => {
    try {
      if (sessionStorage.getItem(ADMIN_SESSION_KEY) === "1") setIsAdmin(true);
    } catch {
      /* sessionStorage unavailable — demo auth stays in memory */
    }
  }, []);

  const updateCompany = useCallback((patch) => {
    setData((d) => ({ ...d, company: { ...d.company, ...patch } }));
  }, []);

  const updateHome = useCallback((patch) => {
    setData((d) => ({ ...d, home: { ...d.home, ...patch } }));
  }, []);

  const updateHomeSections = useCallback((patch) => {
    setData((d) => ({
      ...d,
      home: { ...d.home, sections: { ...d.home.sections, ...patch } },
    }));
  }, []);

  const updateApproachIntro = useCallback((patch) => {
    setData((d) => ({
      ...d,
      approach: { ...d.approach, ...patch },
    }));
  }, []);

  const updateApproachStep = useCallback((id, patch) => {
    setData((d) => ({
      ...d,
      approach: {
        ...d.approach,
        steps: d.approach.steps.map((s) =>
          s.id === id ? { ...s, ...patch } : s,
        ),
      },
    }));
  }, []);

  const updateSettings = useCallback((patch) => {
    setData((d) => ({ ...d, settings: { ...d.settings, ...patch } }));
  }, []);

  const addService = useCallback((service) => {
    setData((d) => ({
      ...d,
      services: [
        ...d.services,
        {
          visible: true,
          category: "General",
          image: "",
          benefits: [],
          ...service,
          id: nextId("svc"),
        },
      ],
    }));
  }, []);

  const updateService = useCallback((id, patch) => {
    setData((d) => ({
      ...d,
      services: d.services.map((s) => (s.id === id ? { ...s, ...patch } : s)),
    }));
  }, []);

  const deleteService = useCallback((id) => {
    setData((d) => ({
      ...d,
      services: d.services.filter((s) => s.id !== id),
      home: {
        ...d.home,
        featuredServiceIds: d.home.featuredServiceIds.filter((x) => x !== id),
      },
    }));
  }, []);

  const addGalleryItem = useCallback((item) => {
    setData((d) => ({
      ...d,
      gallery: [
        ...d.gallery,
        {
          visible: true,
          category: "Crop Farming",
          image: "",
          ...item,
          id: nextId("gal"),
        },
      ],
    }));
  }, []);

  const updateGalleryItem = useCallback((id, patch) => {
    setData((d) => ({
      ...d,
      gallery: d.gallery.map((g) => (g.id === id ? { ...g, ...patch } : g)),
    }));
  }, []);

  const deleteGalleryItem = useCallback((id) => {
    setData((d) => ({
      ...d,
      gallery: d.gallery.filter((g) => g.id !== id),
      home: {
        ...d.home,
        galleryPreviewIds: d.home.galleryPreviewIds.filter((x) => x !== id),
      },
    }));
  }, []);

  const moveGalleryItem = useCallback((id, direction) => {
    setData((d) => {
      const list = [...d.gallery];
      const index = list.findIndex((g) => g.id === id);
      if (index === -1) return d;
      const target = index + direction;
      if (target < 0 || target >= list.length) return d;
      [list[index], list[target]] = [list[target], list[index]];
      return { ...d, gallery: list };
    });
  }, []);

  const addEnquiry = useCallback((enquiry) => {
    const entry = {
      id: nextId("enq"),
      status: "New",
      submittedAt: new Date().toISOString(),
      ...enquiry,
    };
    setData((d) => ({ ...d, enquiries: [entry, ...d.enquiries] }));
    return entry;
  }, []);

  const updateEnquiryStatus = useCallback((id, status) => {
    setData((d) => ({
      ...d,
      enquiries: d.enquiries.map((e) => (e.id === id ? { ...e, status } : e)),
    }));
  }, []);

  const deleteEnquiry = useCallback((id) => {
    setData((d) => ({
      ...d,
      enquiries: d.enquiries.filter((e) => e.id !== id),
    }));
  }, []);

  const toggleFeaturedService = useCallback((id) => {
    setData((d) => {
      const has = d.home.featuredServiceIds.includes(id);
      const list = has
        ? d.home.featuredServiceIds.filter((x) => x !== id)
        : [...d.home.featuredServiceIds, id].slice(-6);
      return { ...d, home: { ...d.home, featuredServiceIds: list } };
    });
  }, []);

  const toggleGalleryPreview = useCallback((id) => {
    setData((d) => {
      const has = d.home.galleryPreviewIds.includes(id);
      const list = has
        ? d.home.galleryPreviewIds.filter((x) => x !== id)
        : [...d.home.galleryPreviewIds, id].slice(-6);
      return { ...d, home: { ...d.home, galleryPreviewIds: list } };
    });
  }, []);

  const login = useCallback((username, password) => {
    const ok =
      username.trim() === DEMO_CREDENTIALS.username &&
      password === DEMO_CREDENTIALS.password;
    if (!ok) return false;
    try {
      sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    setIsAdmin(true);
    return true;
  }, []);

  const logout = useCallback(() => {
    try {
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
    } catch {
      /* ignore */
    }
    setIsAdmin(false);
  }, []);

  const resetDemo = useCallback(() => {
    setData(initialData());
  }, []);

  const value = useMemo(
    () => ({
      ...data,
      isAdmin,
      updateCompany,
      updateHome,
      updateHomeSections,
      updateApproachIntro,
      updateApproachStep,
      updateSettings,
      addService,
      updateService,
      deleteService,
      addGalleryItem,
      updateGalleryItem,
      deleteGalleryItem,
      moveGalleryItem,
      addEnquiry,
      updateEnquiryStatus,
      deleteEnquiry,
      toggleFeaturedService,
      toggleGalleryPreview,
      login,
      logout,
      resetDemo,
    }),
    [
      data,
      isAdmin,
      updateCompany,
      updateHome,
      updateHomeSections,
      updateApproachIntro,
      updateApproachStep,
      updateSettings,
      addService,
      updateService,
      deleteService,
      addGalleryItem,
      updateGalleryItem,
      deleteGalleryItem,
      moveGalleryItem,
      addEnquiry,
      updateEnquiryStatus,
      deleteEnquiry,
      toggleFeaturedService,
      toggleGalleryPreview,
      login,
      logout,
      resetDemo,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <AppProvider>");
  return ctx;
}

export function formatContactValue(value, placeholder = "Contact details to be updated") {
  return value && value.trim() ? value.trim() : placeholder;
}
