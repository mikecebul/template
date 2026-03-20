import { createFileRoute } from "@tanstack/react-router";

import { MarketingPage } from "@/components/marketing-page";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      {
        title: "Services | Mike Cebul",
      },
      {
        name: "description",
        content:
          "Consulting, websites, and hybrid meeting systems for Northern Michigan businesses that need practical technical execution.",
      },
    ],
  }),
});

function ServicesPage() {
  return <MarketingPage page="services" />;
}
