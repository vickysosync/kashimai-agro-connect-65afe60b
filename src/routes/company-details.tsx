import { createFileRoute } from "@tanstack/react-router";
import CompanyDetails from "@/views/CompanyDetails";

export const Route = createFileRoute("/company-details")({
  component: CompanyDetails,
  head: () => ({
    meta: [
      { title: "Company Details | Shri Sant Kashimai Agro Farmer Producer Company" },
      {
        name: "description",
        content:
          "Registered company information — incorporation date, CIN, registered office address and primary business activity of Shri Sant Kashimai Agro Farmer Producer Company Limited.",
      },
      {
        property: "og:title",
        content: "Company Details | Shri Sant Kashimai Agro Farmer Producer Company",
      },
      {
        property: "og:description",
        content:
          "Incorporation, CIN, registered office and business activity at a glance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
