import { createFileRoute } from "@tanstack/react-router";

import { MarketingPage } from "@/components/marketing-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Mike Cebul | Northern Michigan Technical Consulting",
      },
      {
        name: "description",
        content:
          "Technical consulting, marketing websites, and automation support for Northern Michigan businesses that want modern systems with a human touch.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return <MarketingPage page="home" />;
}
