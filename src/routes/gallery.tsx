import { createFileRoute } from "@tanstack/react-router";
import Gallery from "@/views/Gallery";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Agriculture Gallery | Shri Sant Kashimai Agro Farmer Producer Company" },
      {
        name: "description",
        content:
          "Agricultural photographs from rural Maharashtra — crop fields, horticulture, irrigation, harvesting and sustainable farming practices.",
      },
      {
        property: "og:title",
        content: "Agriculture Gallery | Shri Sant Kashimai Agro Farmer Producer Company",
      },
      {
        property: "og:description",
        content:
          "Crop farming, horticulture, irrigation, harvesting and sustainable farming imagery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
