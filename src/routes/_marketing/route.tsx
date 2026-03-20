import { createFileRoute } from "@tanstack/react-router";

import { MarketingLayout } from "@/components/marketing-page";

export const Route = createFileRoute("/_marketing")({
  component: MarketingLayout,
});
