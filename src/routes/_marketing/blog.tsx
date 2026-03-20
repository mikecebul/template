import { createFileRoute } from "@tanstack/react-router";

import { MarketingBlogPage } from "@/components/marketing-page";

export const Route = createFileRoute("/_marketing/blog")({
  component: MarketingBlogRoute,
  head: () => ({
    meta: [
      {
        title: "Blog | Mike Cebul",
      },
      {
        name: "description",
        content:
          "Insights on modern web systems, hybrid meeting spaces, and practical automation for small businesses and local teams.",
      },
    ],
  }),
});

function MarketingBlogRoute() {
  return <MarketingBlogPage />;
}
