import { createFileRoute } from "@tanstack/react-router";

import { MarketingHybridMeetingSolutionsCaseStudyPage } from "@/components/marketing-page";

export const Route = createFileRoute("/_marketing/case-studies/hybrid-meeting-solutions")({
  component: MarketingHybridMeetingSolutionsCaseStudyRoute,
  head: () => ({
    meta: [
      {
        title: "Hybrid Meeting Solutions Case Study | Mike Cebul",
      },
      {
        name: "description",
        content:
          "A case study in designing a hybrid meeting environment that feels professional, clear, and dependable.",
      },
    ],
  }),
});

function MarketingHybridMeetingSolutionsCaseStudyRoute() {
  return <MarketingHybridMeetingSolutionsCaseStudyPage />;
}
