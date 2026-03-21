import { createFileRoute } from "@tanstack/react-router";

import { MarketingHomePage } from "@/components/marketing-page";

export const Route = createFileRoute("/_marketing/")({
  head: () => ({
    meta: [
      {
        title: "Mike Cebulski | Northern Michigan Technical Consulting",
      },
      {
        name: "description",
        content:
          "Technical consulting, marketing websites, and automation support for Northern Michigan businesses that want modern systems with a human touch.",
      },
    ],
  }),
  component: MarketingHomeRoute,
});

function MarketingHomeRoute() {
  return <MarketingHomePage />;
}
