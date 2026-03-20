import { createFileRoute } from "@tanstack/react-router";

import { MarketingWebsitesCaseStudyPage } from "@/components/marketing-page";

export const Route = createFileRoute("/_marketing/case-studies/websites")({
  component: MarketingWebsitesCaseStudyRoute,
  head: () => ({
    meta: [
      {
        title: "Website Case Study | Mike Cebul",
      },
      {
        name: "description",
        content:
          "A case study in building a website system that improves clarity, credibility, and ongoing maintainability.",
      },
    ],
  }),
});

function MarketingWebsitesCaseStudyRoute() {
  return <MarketingWebsitesCaseStudyPage />;
}
