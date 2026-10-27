import { createFileRoute } from "@tanstack/react-router";
import About from "@/views/About";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us | Shri Sant Kashimai Agro Farmer Producer Company" },
      {
        name: "description",
        content:
          "Learn about Shri Sant Kashimai Agro Farmer Producer Company Limited — our vision, mission, core values and commitment to sustainable farming in Latur district, Maharashtra.",
      },
      {
        property: "og:title",
        content: "About Us | Shri Sant Kashimai Agro Farmer Producer Company",
      },
      {
        property: "og:description",
        content:
          "Our background, vision, mission and farmer-oriented development philosophy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
