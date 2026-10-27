import { createFileRoute } from "@tanstack/react-router";
import Approach from "@/views/Approach";

export const Route = createFileRoute("/approach")({
  component: Approach,
  head: () => ({
    meta: [
      { title: "Our Approach | Shri Sant Kashimai Agro Farmer Producer Company" },
      {
        name: "description",
        content:
          "Understand, plan, support, improve — our proposed four-stage approach to agricultural development, built on a farmer-first philosophy and sustainable practices.",
      },
      {
        property: "og:title",
        content: "Our Approach | Shri Sant Kashimai Agro Farmer Producer Company",
      },
      {
        property: "og:description",
        content:
          "A practical four-stage framework for agricultural development in rural Maharashtra.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
