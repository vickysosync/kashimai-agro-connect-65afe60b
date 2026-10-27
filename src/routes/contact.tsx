import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/views/Contact";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Us | Shri Sant Kashimai Agro Farmer Producer Company" },
      {
        name: "description",
        content:
          "Get in touch with Shri Sant Kashimai Agro Farmer Producer Company Limited — registered office in Ahmedpur, Latur, Maharashtra, with an enquiry form for farmers and partners.",
      },
      {
        property: "og:title",
        content: "Contact Us | Shri Sant Kashimai Agro Farmer Producer Company",
      },
      {
        property: "og:description",
        content:
          "Send an enquiry or visit our registered office in Ahmedpur, Latur district, Maharashtra.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
