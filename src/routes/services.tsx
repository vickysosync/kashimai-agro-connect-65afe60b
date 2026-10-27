import { createFileRoute } from "@tanstack/react-router";
import Services from "@/views/Services";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Our Services | Shri Sant Kashimai Agro Farmer Producer Company" },
      {
        name: "description",
        content:
          "Proposed service areas: crop production support, horticulture and orchard development, agricultural advisory, farmer coordination, sustainable agriculture awareness and more.",
      },
      {
        property: "og:title",
        content: "Our Services | Shri Sant Kashimai Agro Farmer Producer Company",
      },
      {
        property: "og:description",
        content:
          "Practical agricultural service categories built around the needs of farming families.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
