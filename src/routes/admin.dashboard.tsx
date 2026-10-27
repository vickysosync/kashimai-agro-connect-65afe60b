import { createFileRoute } from "@tanstack/react-router";
import AdminDashboard from "@/views/AdminDashboard";

export const Route = createFileRoute("/admin/dashboard")({
  component: AdminDashboard,
  head: () => ({
    meta: [
      { title: "Admin Dashboard | Shri Sant Kashimai Agro Demo Website" },
      {
        name: "description",
        content:
          "Demonstration admin dashboard for editing the demo website content in the current browser session.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});
