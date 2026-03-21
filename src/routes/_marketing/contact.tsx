import { createFileRoute } from "@tanstack/react-router";

import { MarketingContactPage } from "@/components/marketing-page";

export const Route = createFileRoute("/_marketing/contact")({
  component: MarketingContactRoute,
  head: () => ({
    meta: [
      {
        title: "Contact | Mike Cebulski",
      },
      {
        name: "description",
        content:
          "Get in touch about marketing websites, hybrid meeting solutions, and AI automation consulting.",
      },
    ],
  }),
});

function MarketingContactRoute() {
  return <MarketingContactPage />;
}
