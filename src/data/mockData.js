/**
 * Mock data for the Shri Sant Kashimai Agro Farmer Producer Company Limited
 * demo website. All content here is frontend-only demo data — there is no
 * backend, database or upload service. The admin dashboard edits this data in
 * memory for the current browser session only.
 *
 * Contact details (phone, email, client name) were NOT supplied, so they are
 * intentionally left blank and the UI shows "Contact details to be updated"
 * until real details are entered in the admin panel. Nothing is fabricated.
 */

export const ADMIN_SESSION_KEY = "kashimai-agro-admin-session";

export const DEMO_CREDENTIALS = {
  username: "admin",
  password: "Admin@123",
};

export const GALLERY_CATEGORIES = [
  "All",
  "Crop Farming",
  "Horticulture",
  "Irrigation",
  "Harvesting",
  "Sustainable Farming",
];

export function initialData() {
  return {
    company: {
      name: "Shri Sant Kashimai Agro Farmer Producer Company Limited",
      // Alternative spelling — reference only, not a separate company.
      alternativeName: "Shri Sant Kashiai Agro Farmer Producer Company Limited",
      clientName: "",
      address:
        "H.No. 89, Main R. Sawargaon Road, Ahmadpur Ugilewadi, Ahmedpur, Latur, Maharashtra, 413515, India.",
      incorporationDate: "August 7, 2026",
      cin: "U01619ME2026PTC476123",
      status: "Active",
      statusNote:
        "Status as stated in the supplied reference screenshot. This is user-provided reference information, not independently verified live registry data.",
      primaryActivity:
        "Crop and animal production, horticulture, and agricultural services (Division 01 under the MCA/NIC classification)",
      phone: "",
      email: "",
      vision:
        "To contribute to a more productive, sustainable, and opportunity-driven agricultural ecosystem.",
      mission:
        "To support agricultural development through practical services, horticultural opportunities, farmer coordination, and responsible agricultural practices.",
      aboutDescription:
        "Shri Sant Kashimai Agro Farmer Producer Company Limited is a farmer producer company based in the Latur district of Maharashtra, focused on agriculture, horticulture, and agricultural services. The company works with a farmer-oriented outlook — supporting crop production, encouraging horticultural opportunities, and promoting sustainable farming practices in the communities it serves.",
    },

    home: {
      heroLabel: "Agriculture • Horticulture • Farmer Development",
      heroHeading:
        "Growing Agriculture. Empowering Farmers. Building a Sustainable Future.",
      heroDescription:
        "Shri Sant Kashimai Agro Farmer Producer Company Limited is focused on agriculture, horticulture, and agricultural services, with a vision of supporting farmers and encouraging sustainable agricultural practices.",
      heroImage: "/images/hero-home.jpg",
      ctaPrimary: "Explore Our Services",
      ctaSecondary: "Contact Our Team",
      introHeading: "Rooted in Agriculture, Growing Together",
      introContent:
        "Agriculture is more than an occupation in our region — it is a way of life passed down through generations. Shri Sant Kashimai Agro Farmer Producer Company Limited is built around that reality. We focus on the everyday needs of farming families: planning crops well, developing horticultural opportunities, and coordinating practical support so that sustainable practices become part of routine farming.\n\nAs a farmer producer company, our purpose is to stand with farmers — sharing knowledge, coordinating activities, and working steadily towards a stronger rural agricultural economy.",
      introImage: "/images/about-banner.jpg",
      contactCtaHeading: "Let's Grow a Stronger Agricultural Future Together",
      contactCtaText:
        "Whether you are a farmer, a partner, or simply curious about our work, we would be glad to hear from you.",
      featuredServiceIds: ["svc-1", "svc-2", "svc-3", "svc-4", "svc-5", "svc-6"],
      galleryPreviewIds: ["gal-1", "gal-3", "gal-6", "gal-7", "gal-9", "gal-12"],
      sections: {
        showIntro: true,
        showServices: true,
        showApproach: true,
        showGallery: true,
        showCompany: true,
        showContactCta: true,
      },
    },

    services: [
      {
        id: "svc-1",
        title: "Crop Production Support",
        category: "Crop Production",
        image: "/images/service-crop.jpg",
        visible: true,
        shortDescription:
          "Guidance and coordination for seasonal crop planning, field preparation and cultivation practices.",
        description:
          "We work alongside farmers to plan crop cycles suited to local soil and weather conditions, and to coordinate access to practical cultivation support. The focus is on steady, season-by-season improvement of crop production practices rather than one-time advice.",
        benefits: [
          "Season-appropriate crop planning",
          "Coordination of field preparation and sowing support",
          "Practical guidance on cultivation practices",
          "Continuous follow-up across the growing season",
        ],
      },
      {
        id: "svc-2",
        title: "Horticulture and Orchard Development",
        category: "Horticulture",
        image: "/images/service-horticulture.jpg",
        visible: true,
        shortDescription:
          "Support for planning and developing orchards, fruit crops and plantation horticulture.",
        description:
          "Horticulture offers long-term income opportunities for farming families. We support the planning and development of orchards and fruit crops such as pomegranate, mango and banana, with attention to spacing, irrigation and orchard management practices suited to the region.",
        benefits: [
          "Planning for fruit orchards and plantation crops",
          "Guidance on orchard layout and irrigation",
          "Attention to long-term orchard health",
          "Support aligned to local agro-climatic conditions",
        ],
      },
      {
        id: "svc-3",
        title: "Agricultural Advisory and Support Services",
        category: "Advisory",
        image: "/images/service-advisory.jpg",
        visible: true,
        shortDescription:
          "Field-level advisory on crops, horticulture and day-to-day agricultural questions.",
        description:
          "Farmers often need a reliable point of contact for practical questions — from plant health observations to input choices and field practices. Our advisory support is intended to be accessible, local and grounded in each farmer's actual field situation.",
        benefits: [
          "A local point of contact for farming questions",
          "Observations shared directly in the field",
          "Referral and coordination where specialist input is needed",
          "Simple, practical language and guidance",
        ],
      },
      {
        id: "svc-4",
        title: "Farmer Coordination",
        category: "Farmer Support",
        image: "/images/service-coordination.jpg",
        visible: true,
        shortDescription:
          "Bringing farmers together for collective planning, information sharing and coordinated activity.",
        description:
          "Collective action helps small farmers access information, plan activities together and reduce isolation. We coordinate farmer groups and village-level meetings so members can share experience and organise common agricultural activities.",
        benefits: [
          "Village-level farmer meetings and group coordination",
          "Shared information across farming families",
          "Collective planning of seasonal activities",
          "A stronger collective voice for member farmers",
        ],
      },
      {
        id: "svc-5",
        title: "Sustainable Agriculture Awareness",
        category: "Sustainability",
        image: "/images/service-sustainable.jpg",
        visible: true,
        shortDescription:
          "Awareness and orientation on water-efficient irrigation, soil health and sustainable practices.",
        description:
          "Long-term farming depends on healthy soil and careful use of water. We conduct awareness activity on practices such as drip irrigation, mulching, compost use and crop rotation, so that sustainable methods become everyday practice.",
        benefits: [
          "Awareness of water-efficient irrigation methods",
          "Orientation on compost and soil health practices",
          "Reduced dependence on avoidable chemical use where practical",
          "Practices that protect long-term farm productivity",
        ],
      },
      {
        id: "svc-6",
        title: "Agricultural Resource Planning",
        category: "Planning",
        image: "/images/service-planning.jpg",
        visible: true,
        shortDescription:
          "Practical planning of land, water, inputs and labour for each farming season.",
        description:
          "Good seasons begin with good planning. We help farmers think through land use, water availability, input requirements and labour needs before the season starts, so resources are used deliberately rather than reactively.",
        benefits: [
          "Season-wise land and crop planning",
          "Water and irrigation planning",
          "Input and labour planning support",
          "Better use of available farm resources",
        ],
      },
      {
        id: "svc-7",
        title: "Post-Harvest Handling Awareness",
        category: "Post-Harvest",
        image: "/images/service-postharvest.jpg",
        visible: true,
        shortDescription:
          "Orientation on sorting, grading, storage and handling of harvested produce.",
        description:
          "Careful handling after harvest protects the value farmers have worked all season to create. We share awareness on sorting, grading, safe storage and packing practices, particularly for perishable vegetables and fruits.",
        benefits: [
          "Awareness of sorting and grading practices",
          "Orientation on safe storage of perishables",
          "Reduced post-harvest losses through better handling",
          "Better presentation of produce for markets",
        ],
      },
      {
        id: "svc-8",
        title: "Agricultural Business Development",
        category: "Business Development",
        image: "/images/service-business.jpg",
        visible: true,
        shortDescription:
          "Support for collective marketing, aggregation and agri-entrepreneurial planning.",
        description:
          "A farmer producer company exists to strengthen the business side of farming. We work on collective aggregation of produce, planning for better market linkage, and building member awareness of the company's role in agricultural business development.",
        benefits: [
          "Collective aggregation of member produce",
          "Orientation on market linkage and sale planning",
          "Support for agri-entrepreneurial initiatives",
          "Building the company's business capability step by step",
        ],
      },
    ],

    approach: {
      introHeading: "Our Approach to Agricultural Development",
      introContent:
        "Agricultural change does not happen overnight. Our approach is deliberately simple and practical — understand first, plan carefully, support consistently, and improve continuously.",
      steps: [
        {
          id: "step-1",
          number: "01",
          title: "Understand",
          heading: "Understand Local Agricultural Needs",
          description:
            "We begin in the field: listening to farmers, observing local farming conditions and understanding the crops, water, soil and market situation of each village before suggesting anything.",
          image: "/images/approach-understand.jpg",
        },
        {
          id: "step-2",
          number: "02",
          title: "Plan",
          heading: "Plan Practical Farming Solutions",
          description:
            "Based on what we learn, we develop practical approaches for crop production, horticulture and agricultural activities that fit the farmer's land, resources and season.",
          image: "/images/approach-plan.jpg",
        },
        {
          id: "step-3",
          number: "03",
          title: "Support",
          heading: "Support Agricultural Activities",
          description:
            "We stay involved through the season — coordinating activities, sharing advisory support and connecting farmers according to our actual service offerings.",
          image: "/images/approach-support.jpg",
        },
        {
          id: "step-4",
          number: "04",
          title: "Improve",
          heading: "Review Progress and Improve Practices",
          description:
            "After every season we review progress together, gather feedback and identify what can be improved in the next cycle.",
          image: "/images/approach-improve.jpg",
        },
      ],
      principles: [
        {
          title: "Farmer-First Philosophy",
          description:
            "Every decision starts with what is practical and useful for farming families — not with what is easiest for the company.",
        },
        {
          title: "Sustainable Agricultural Practices",
          description:
            "We encourage methods that protect soil, water and long-term productivity, so farms remain healthy for the next generation.",
        },
        {
          title: "Responsible Resource Use",
          description:
            "Land, water, inputs and labour are used deliberately and carefully, with planning rather than reaction.",
        },
        {
          title: "Long-Term Agricultural Development",
          description:
            "We measure progress in seasons and years, building slowly and steadily rather than promising overnight results.",
        },
        {
          title: "Collaboration and Communication",
          description:
            "Clear, honest communication with farmers, members and partners keeps expectations realistic and work moving together.",
        },
      ],
    },

    gallery: [
      {
        id: "gal-1",
        title: "Green Crop Fields",
        category: "Crop Farming",
        image: "/images/gallery-fields.jpg",
        visible: true,
        caption: "A patchwork of green crop fields in the Latur district countryside.",
        alt: "Wide view of green crop fields divided by a dirt path, with trees and low hills in rural Maharashtra.",
      },
      {
        id: "gal-2",
        title: "Soil Preparation",
        category: "Crop Farming",
        image: "/images/gallery-ploughing.jpg",
        visible: true,
        caption: "A tractor preparing the seedbed before the sowing season.",
        alt: "A red tractor pulling a plough through dry soil in preparation for sowing.",
      },
      {
        id: "gal-3",
        title: "Standing Jowar Crop",
        category: "Crop Farming",
        image: "/images/gallery-sorghum.jpg",
        visible: true,
        caption: "A farmer walks through a healthy standing sorghum (jowar) crop.",
        alt: "A farmer in a white turban walking among tall green sorghum plants with grain heads.",
      },
      {
        id: "gal-4",
        title: "Mango Orchard",
        category: "Horticulture",
        image: "/images/gallery-mango.jpg",
        visible: true,
        caption: "Young mangoes hanging among dense orchard foliage.",
        alt: "Clusters of small green mangoes hanging from branches in a mango orchard.",
      },
      {
        id: "gal-5",
        title: "Banana Plantation",
        category: "Horticulture",
        image: "/images/gallery-banana.jpg",
        visible: true,
        caption: "Rows of banana plants with developing fruit bunches.",
        alt: "Green banana bunches growing on tall banana plants arranged in plantation rows.",
      },
      {
        id: "gal-6",
        title: "Vegetable Cultivation",
        category: "Horticulture",
        image: "/images/gallery-vegetables.jpg",
        visible: true,
        caption: "Neatly cultivated cauliflower and cabbage beds.",
        alt: "A farmer walking between rows of leafy cauliflower and cabbage plants in a vegetable field.",
      },
      {
        id: "gal-7",
        title: "Sprinkler Irrigation",
        category: "Irrigation",
        image: "/images/gallery-sprinkler.jpg",
        visible: true,
        caption: "Sprinkler jets watering a young crop field.",
        alt: "Sprinkler irrigation jets spraying arcs of water over young green crops under a blue sky.",
      },
      {
        id: "gal-8",
        title: "Field Channel Irrigation",
        category: "Irrigation",
        image: "/images/gallery-canal.jpg",
        visible: true,
        caption: "A farmer guides water along a field channel between crop rows.",
        alt: "A farmer using a spade to guide irrigation water along an earthen channel between green crop rows.",
      },
      {
        id: "gal-9",
        title: "Wheat Harvest",
        category: "Harvesting",
        image: "/images/gallery-wheat-harvest.jpg",
        visible: true,
        caption: "Bundles of harvested golden wheat after cutting.",
        alt: "Farmers harvesting ripe golden wheat with bundled stalks in the foreground.",
      },
      {
        id: "gal-10",
        title: "Grape Harvest",
        category: "Harvesting",
        image: "/images/gallery-grape-harvest.jpg",
        visible: true,
        caption: "Cutting a ripe bunch of grapes at harvest time.",
        alt: "Hands using secateurs to cut a bunch of ripe purple grapes from the vine beside a filled crate.",
      },
      {
        id: "gal-11",
        title: "Compost Application",
        category: "Sustainable Farming",
        image: "/images/gallery-compost.jpg",
        visible: true,
        caption: "Compost being applied to vegetable beds to build soil health.",
        alt: "A farmer spreading dark compost from a heap onto a vegetable bed beside a basket.",
      },
      {
        id: "gal-12",
        title: "Solar Pump Irrigation",
        category: "Sustainable Farming",
        image: "/images/gallery-solar.jpg",
        visible: true,
        caption: "A solar-powered pump supplying water for irrigation.",
        alt: "A solar panel array beside a small pump house delivering water to a green paddy field.",
      },
    ],

    enquiries: [],

    settings: {
      logoText: "Kashimai Agro",
      footerDescription:
        "An agricultural business focused on crop production, horticulture, and agricultural services.",
      copyright: "Shri Sant Kashimai Agro Farmer Producer Company Limited. All rights reserved.",
      adminDisplayName: "Administrator",
      socialLinks: [],
    },
  };
}
