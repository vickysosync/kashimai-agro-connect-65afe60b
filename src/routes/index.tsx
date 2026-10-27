import { createFileRoute } from "@tanstack/react-router";
import Home from "@/views/Home";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: "Shri Sant Kashimai Agro — Growing Agriculture, Empowering Farmers",
      },
      {
        name: "description",
        content:
          "Shri Sant Kashimai Agro Farmer Producer Company Limited works in crop production, horticulture and agricultural services from Ahmedpur, Latur, Maharashtra — supporting farmers and sustainable agricultural practices.",
      },
      {
        property: "og:title",
        content: "Shri Sant Kashimai Agro — Growing Agriculture, Empowering Farmers",
      },
      {
        property: "og:description",
        content:
          "Farmer producer company in Latur, Maharashtra focused on crop production, horticulture and agricultural services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
