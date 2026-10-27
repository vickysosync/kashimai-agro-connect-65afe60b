import { createFileRoute } from "@tanstack/react-router";
import AdminLogin from "@/views/AdminLogin";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
  head: () => ({
    meta: [
      { title: "Admin Login | Shri Sant Kashimai Agro Demo Website" },
      {
        name: "description",
        content:
          "Demonstration admin login for the Shri Sant Kashimai Agro portfolio website. Demo credentials only — not a production authentication system.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});
