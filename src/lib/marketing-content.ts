export const heroImageSrc = "/marketing/lighthouse.jpg";
export const officeImageSrc = "/marketing/modern-office.jpg";
export const dataVisualizationImageSrc = "/marketing/data-visualization.jpg";

export type MarketingPath =
  | "/"
  | "/services"
  | "/about"
  | "/blog"
  | "/contact"
  | "/case-studies/hybrid-meeting-solutions"
  | "/case-studies/websites";

export type ServiceSummary = {
  bullets: string[];
  ctaLabel: string;
  description: string;
  eyebrow: string;
  featured?: boolean;
  headline: string;
  price: string;
  priceDetail?: {
    amount: string;
    label: string;
  };
  priceSuffix: string;
  title: string;
};

export const marketingServices: ServiceSummary[] = [
  {
    bullets: ["Discovery workshops", "System mapping", "AI adoption planning"],
    ctaLabel: "Inquire for Dates",
    description:
      "Operational consulting for teams that need a practical path from manual work to repeatable systems.",
    eyebrow: "Consulting",
    headline: "AI & automation consulting",
    price: "$285",
    priceSuffix: "/day",
    title: "Automation that respects how your team actually works.",
  },
  {
    bullets: ["Custom design", "SEO foundations", "Ongoing content support"],
    ctaLabel: "View Portfolio",
    description:
      "Marketing sites and web experiences designed to look polished, load fast, and stay easy to evolve.",
    eyebrow: "Websites",
    featured: true,
    headline: "Business websites",
    price: "$2400",
    priceDetail: {
      amount: "+$100/mo",
      label: "hosting + unlimited edits",
    },
    priceSuffix: "setup",
    title: "A sharper digital presence without the agency overhead.",
  },
  {
    bullets: ["Room planning", "AV integration", "Support documentation"],
    ctaLabel: "Consult on Hardware",
    description:
      "Hybrid meeting environments that help in-room and remote participants feel equally present and heard.",
    eyebrow: "AV Systems",
    headline: "Hybrid meeting solutions",
    price: "$3200",
    priceDetail: {
      amount: "+$100/mo",
      label: "device management",
    },
    priceSuffix: "setup",
    title: "Boardrooms and studios built for calm, confident collaboration.",
  },
];

export const servicePrinciples = [
  {
    body: "Work is scoped around real operational constraints, not trendy tooling checklists.",
    title: "Practical by default",
  },
  {
    body: "The design, copy, and implementation all reinforce the same business story.",
    title: "One system, not silos",
  },
  {
    body: "Every deliverable is meant to keep working after launch, not collapse into maintenance debt.",
    title: "Built for longevity",
  },
];

export const aboutHighlights = [
  {
    body: "I work at the intersection of software, systems design, and the physical environments where teams meet.",
    title: "Technical range",
  },
  {
    body: "Northern Michigan roots shape the way I work: direct communication, careful follow-through, and local accountability.",
    title: "Local perspective",
  },
  {
    body: "Projects are designed to feel composed on day one and manageable six months later.",
    title: "Long-term thinking",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    body: "We map the business problem, the friction points, and the desired outcome before touching implementation.",
  },
  {
    number: "02",
    title: "Design",
    body: "Information architecture, content direction, and interface hierarchy are shaped around clarity and trust.",
  },
  {
    number: "03",
    title: "Build",
    body: "Delivery stays lightweight and modern, with systems that can be maintained without ceremony.",
  },
  {
    number: "04",
    title: "Refine",
    body: "The final pass focuses on polish, guidance, and the small details that make the result feel dependable.",
  },
];

export const blogPosts = [
  {
    category: "Automation",
    description:
      "A practical look at where AI can actually reduce overhead without creating fragile internal processes.",
    imageSrc: dataVisualizationImageSrc,
    imageAlt: "Glowing network visualization",
    readTime: "6 min read",
    title: "Beyond the prompt: architectural AI workflows for 2024",
  },
  {
    category: "Web Strategy",
    description:
      "How a small-business website can feel premium, load quickly, and still remain easy to maintain.",
    imageSrc: officeImageSrc,
    imageAlt: "Modern office interior",
    readTime: "4 min read",
    title: "Modern websites, calmer operations",
  },
  {
    category: "AV Systems",
    description:
      "The small room decisions that make hybrid meetings feel intentional instead of improvised.",
    imageSrc: heroImageSrc,
    imageAlt: "Lighthouse by the water",
    readTime: "5 min read",
    title: "Designing hybrid rooms people trust",
  },
];

export type CaseStudyData = {
  challenge: string;
  ctaBody: string;
  ctaHeading: string;
  eyebrow: string;
  gallery: Array<{
    body: string;
    imageAlt: string;
    imageSrc: string;
    title: string;
  }>;
  intro: string;
  metrics: Array<{
    label: string;
    value: string;
  }>;
  path: MarketingPath;
  results: string[];
  role: string;
  solution: string;
  summary: Array<{
    body: string;
    title: string;
  }>;
  title: string;
};

export const caseStudies: CaseStudyData[] = [
  {
    challenge:
      "A leadership team needed their main boardroom to support executive meetings, remote collaboration, and client presentations without the usual cable chaos and inconsistent audio.",
    ctaBody:
      "If your meeting rooms need to feel more dependable, we can design the workflow before the next hardware purchase becomes expensive guesswork.",
    ctaHeading: "Ready to upgrade your workspace?",
    eyebrow: "AV & Zoom Rooms",
    gallery: [
      {
        body: "A clean presentation wall and camera-ready room layout created a more professional experience for internal and client-facing calls.",
        imageAlt: "Modern meeting space",
        imageSrc: officeImageSrc,
        title: "Created hybrid hub",
      },
      {
        body: "Control logic and equipment placement were organized around how the room is used, not just how the products are marketed.",
        imageAlt: "Lighthouse at dusk",
        imageSrc: heroImageSrc,
        title: "Simple control flow",
      },
      {
        body: "Supporting documentation reduced support calls and made everyday room operation easier for non-technical staff.",
        imageAlt: "Data visualization",
        imageSrc: dataVisualizationImageSrc,
        title: "Operational clarity",
      },
    ],
    intro:
      "A hybrid meeting environment designed to feel executive-ready, quietly reliable, and easy for teams to operate without technical supervision.",
    metrics: [
      { label: "Room profile", value: "Executive boardroom" },
      { label: "Primary stack", value: "Zoom Rooms + AV control" },
      { label: "Outcome", value: "Faster, calmer meetings" },
    ],
    path: "/case-studies/hybrid-meeting-solutions",
    results: [
      "Reduced setup friction at the start of meetings.",
      "Improved audio and presentation consistency for remote participants.",
      "Delivered a room that matched the professional standard of the organization using it.",
    ],
    role: "Strategy, room planning, hardware guidance, integration direction",
    solution:
      "The solution centered on a Zoom Rooms-first experience with clearer device roles, stronger presentation flow, and room planning that balanced aesthetics with operational simplicity.",
    summary: [
      {
        body: "The room needed to support leadership, clients, and hybrid attendees without technical babysitting.",
        title: "Context",
      },
      {
        body: "The system was designed around clarity: where people look, how they speak, and how quickly a meeting can start.",
        title: "Approach",
      },
      {
        body: "The final setup felt composed and repeatable, with fewer awkward transitions between in-person and remote collaboration.",
        title: "Impact",
      },
    ],
    title: "Bridging the gap between ambition and infrastructure.",
  },
  {
    challenge:
      "The client needed a website that communicated authority, loaded quickly, and gave them a structure they could keep fresh without a redesign every quarter.",
    ctaBody:
      "If your website is underselling the quality of your work, we can reshape the story, structure, and execution into something that earns trust faster.",
    ctaHeading: "Need a sharper web presence?",
    eyebrow: "Website Case Study",
    gallery: [
      {
        body: "A stronger visual hierarchy turned scattered messaging into a page flow that guided visitors from context to action.",
        imageAlt: "Data visualization image",
        imageSrc: dataVisualizationImageSrc,
        title: "Sharper narrative",
      },
      {
        body: "Performance-minded implementation kept the experience feeling premium without bloated frontend decisions.",
        imageAlt: "Modern office",
        imageSrc: officeImageSrc,
        title: "Faster interactions",
      },
      {
        body: "The resulting system made future edits easier and reduced the need for one-off layout work every time content changed.",
        imageAlt: "Lighthouse near water",
        imageSrc: heroImageSrc,
        title: "Sustainable editing",
      },
    ],
    intro:
      "A refined marketing website focused on clarity, conversion, and a design system that could hold up as the business evolved.",
    metrics: [
      { label: "Project type", value: "Marketing website" },
      { label: "Focus", value: "Speed + storytelling" },
      { label: "Outcome", value: "Higher trust at first glance" },
    ],
    path: "/case-studies/websites",
    results: [
      "Clearer positioning and stronger above-the-fold messaging.",
      "A more maintainable structure for future content updates.",
      "A website that felt more aligned with the quality of the business behind it.",
    ],
    role: "Content direction, interface design, frontend implementation",
    solution:
      "The site was rebuilt around a tighter information hierarchy, stronger page rhythm, and a frontend system that kept both performance and editability in view.",
    summary: [
      {
        body: "The original site lacked visual focus and did not communicate the sophistication of the service offering.",
        title: "Context",
      },
      {
        body: "The rebuild prioritized narrative flow, responsive polish, and a component structure that could scale with future content.",
        title: "Approach",
      },
      {
        body: "The final product gave the business a more credible digital front door and a better foundation for ongoing marketing.",
        title: "Impact",
      },
    ],
    title: "A website system built to earn trust in the first scroll.",
  },
];
