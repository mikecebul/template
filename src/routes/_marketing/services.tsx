import { createFileRoute } from "@tanstack/react-router";

import { MarketingServicesPage } from "@/components/marketing-page";

export const Route = createFileRoute("/_marketing/services")({
  component: MarketingServicesRoute,
  head: () => ({
    meta: [
      {
        title: "Services | Mike Cebulski",
      },
      {
        name: "description",
        content:
          "Consulting, websites, and hybrid meeting systems for Northern Michigan businesses that need practical technical execution.",
      },
    ],
  }),
});

function MarketingServicesRoute() {
  return <MarketingServicesPage />;
}
