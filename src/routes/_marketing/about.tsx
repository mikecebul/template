import { createFileRoute } from "@tanstack/react-router";

import { MarketingAboutPage } from "@/components/marketing-page";

export const Route = createFileRoute("/_marketing/about")({
  component: MarketingAboutRoute,
  head: () => ({
    meta: [
      {
        title: "About | Mike Cebulski",
      },
      {
        name: "description",
        content:
          "Learn more about Mike Cebulski's approach to websites, hybrid meeting systems, and practical technical execution in Northern Michigan.",
      },
    ],
  }),
});

function MarketingAboutRoute() {
  return <MarketingAboutPage />;
}
