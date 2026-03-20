import {
  IconArrowRight,
  IconCheck,
  IconCpu,
  IconMapPin,
  IconPresentationAnalytics,
  IconSparkles,
  IconWorldWww,
} from "@tabler/icons-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroImageSrc = "/marketing/lighthouse.jpg";
const officeImageSrc = "/marketing/modern-office.jpg";
const dataVisualizationImageSrc = "/marketing/data-visualization.jpg";

type MarketingPageProps = {
  page: "home" | "services";
};

type ServiceIcon = typeof IconSparkles;

type ServiceCardData = {
  bullets: string[];
  ctaLabel: string;
  description: string[];
  eyebrow: string;
  featured?: boolean;
  icon: ServiceIcon;
  note?: string;
  price: string;
  priceSuffix: string;
  title: string;
};

const serviceCards: ServiceCardData[] = [
  {
    bullets: ["Workflow Auditing", "AI Implementation Workshops", "Process Optimization"],
    ctaLabel: "Inquire for Dates",
    description: [
      "Learn to leverage LLMs and automated workflows to reduce overhead and focus on creative growth.",
      "Personalized training for your specific business needs.",
    ],
    eyebrow: "Teaching & Integration",
    icon: IconSparkles,
    price: "$285",
    priceSuffix: "/day",
    title: "AI & Automation Consulting",
  },
  {
    bullets: ["Unlimited Content Edits", "Custom Responsive Design", "SEO & Speed Optimization"],
    ctaLabel: "View Portfolio",
    description: [
      "High-conversion websites optimized for speed and SEO.",
      "Includes unlimited future edits so your digital presence never goes out of date.",
    ],
    eyebrow: "Managed Performance",
    featured: true,
    icon: IconWorldWww,
    note: "+$100/mo management",
    price: "$600",
    priceSuffix: "setup",
    title: "Marketing Websites",
  },
  {
    bullets: ["Equipment Procurement", "On-site Installation", "Continuous IT Management"],
    ctaLabel: "Consult on Hardware",
    description: [
      "Bridging the gap between in-person and remote.",
      "Professional AV setups for medium-sized firms who demand broadcast-quality clarity.",
    ],
    eyebrow: "Corporate Audio/Visual",
    icon: IconPresentationAnalytics,
    note: "+ equipment + $100/mo",
    price: "$2000",
    priceSuffix: "setup",
    title: "Hybrid Meeting Solutions",
  },
];

const differentiators = [
  {
    body: "I'm just a short drive away. No timezone lag, no outsourcing. Local support for local visionaries.",
    icon: IconMapPin,
    title: "Charlevoix Presence",
  },
  {
    body: "Every project uses modern stacks and thoughtful systems, from performant websites to advanced automation layers.",
    icon: IconCpu,
    title: "Technical Excellence",
  },
];

function MarketingPage({ page }: MarketingPageProps) {
  const isHomePage = page === "home";

  return (
    <div
      id="top"
      className="min-h-svh bg-[radial-gradient(circle_at_top,_rgba(123,208,255,0.14),_transparent_0_28%),linear-gradient(180deg,_var(--marketing-ink)_0%,_#07101f_100%)] text-[var(--marketing-heading)]"
    >
      <MarketingNav page={page} />

      <main className="pt-8 pb-24 sm:pt-10 lg:pt-14 lg:pb-32">
        <section className="mx-auto grid max-w-[1184px] gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.8fr)_minmax(320px,0.9fr)] lg:items-end lg:px-12">
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="space-y-4">
              <p className="text-xs font-medium tracking-[0.35em] text-[var(--marketing-sky)] uppercase">
                {isHomePage ? "Northern Michigan digital consulting" : "Based in Charlevoix, MI"}
              </p>
              <div className="max-w-3xl space-y-4">
                <h1 className="max-w-3xl font-heading text-5xl leading-[0.95] tracking-[-0.06em] text-balance sm:text-6xl lg:text-7xl">
                  Technical precision.
                  <span className="block text-[var(--marketing-gold)]">
                    Northern Michigan soul.
                  </span>
                </h1>
                <p className="max-w-2xl text-base leading-7 text-[var(--marketing-copy)] sm:text-lg">
                  I help local businesses navigate the digital landscape with automation, modern and
                  captivating websites, and seamless hybrid meeting solutions.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <MarketingButtonLink href={isHomePage ? "/services" : "#pricing"}>
                {isHomePage ? "Explore Services" : "View Pricing Details"}
              </MarketingButtonLink>
              <MarketingButtonLink href={isHomePage ? "#about" : "#cta"} tone="secondary">
                {isHomePage ? "Learn About the Approach" : "Book Consultation"}
              </MarketingButtonLink>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[var(--marketing-panel)] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(123,208,255,0.14),transparent)]" />
            <div className="relative overflow-hidden rounded-[20px]">
              <img
                alt="Charlevoix lighthouse at dusk"
                className="h-[320px] w-full object-cover sm:h-[360px] lg:h-[420px]"
                src={heroImageSrc}
              />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(11,19,38,0.86),rgba(11,19,38,0.05))]" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                <div>
                  <p className="text-xs font-medium tracking-[0.35em] text-[var(--marketing-sky)] uppercase">
                    Independent operator
                  </p>
                  <p className="mt-2 font-heading text-2xl tracking-[-0.05em] text-[var(--marketing-heading)]">
                    Designed for sharp local brands
                  </p>
                </div>
                <div className="hidden rounded-full border border-[var(--marketing-gold)]/30 bg-[var(--marketing-panel-strong)]/80 px-4 py-2 text-sm font-medium text-[var(--marketing-gold)] sm:block">
                  Charlevoix, MI
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="mx-auto mt-20 flex max-w-[1280px] flex-col gap-8 px-4 sm:px-6 lg:mt-28 lg:px-12"
        >
          <div className="space-y-3">
            <p className="text-sm tracking-[0.28em] text-[var(--marketing-copy-soft)] uppercase">
              {isHomePage ? "Featured Services" : "Core Services"}
            </p>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="font-heading text-3xl tracking-[-0.05em] text-[var(--marketing-heading)] sm:text-4xl">
                {isHomePage
                  ? "Built for operators who need momentum, not fluff."
                  : "Consulting and build packages that stay practical."}
              </h2>
              <p className="max-w-xl text-sm leading-6 text-[var(--marketing-copy)] sm:text-base">
                The services page stays faithful to the Figma tray layout. The homepage uses the
                same visual system, but frames these offers as an overview before someone dives
                deeper.
              </p>
            </div>
          </div>

          <div
            id="services"
            className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)_minmax(0,1fr)]"
          >
            {serviceCards.map((serviceCard) => (
              <ServiceCard key={serviceCard.title} card={serviceCard} page={page} />
            ))}
          </div>
        </section>

        <section
          id="about"
          className="mx-auto mt-20 grid max-w-[1184px] gap-10 px-4 sm:px-6 lg:mt-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:px-12"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-[24px] border border-white/8 bg-[var(--marketing-panel)]">
              <img
                alt="A modern office with a chair and desk"
                className="h-full min-h-[280px] w-full object-cover"
                loading="lazy"
                src={officeImageSrc}
              />
            </div>
            <div className="pt-8">
              <div className="overflow-hidden rounded-[24px] border border-white/8 bg-[var(--marketing-panel)]">
                <img
                  alt="A glowing bar chart visualization"
                  className="h-full min-h-[280px] w-full object-cover"
                  loading="lazy"
                  src={dataVisualizationImageSrc}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm tracking-[0.28em] text-[var(--marketing-copy-soft)] uppercase">
                Why this works
              </p>
              <h2 className="max-w-lg font-heading text-3xl tracking-[-0.05em] text-[var(--marketing-heading)] sm:text-4xl">
                Locally sourced, globally capable.
              </h2>
            </div>

            <div className="space-y-4">
              {differentiators.map((differentiator, index) => (
                <article
                  key={differentiator.title}
                  className={cn(
                    "rounded-[22px] border border-white/6 bg-[var(--marketing-panel)] p-6",
                    index === 0 && "border-l-4 border-l-[var(--marketing-gold)]",
                  )}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--marketing-panel-strong)] text-[var(--marketing-gold)]">
                      <differentiator.icon className="size-5" />
                    </div>
                    <h3 className="font-heading text-xl tracking-[-0.04em] text-[var(--marketing-heading)]">
                      {differentiator.title}
                    </h3>
                  </div>
                  <p className="max-w-xl text-sm leading-6 text-[var(--marketing-copy)] sm:text-base">
                    {differentiator.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-[1040px] px-4 sm:px-6 lg:mt-28 lg:px-12">
          <div
            id="cta"
            className="relative overflow-hidden rounded-[32px] border border-white/8 bg-[linear-gradient(155deg,rgba(34,42,61,1),rgba(19,27,46,1))] px-6 py-12 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:px-10 lg:px-16 lg:py-16"
          >
            <div className="absolute -top-12 -right-20 size-56 rounded-full bg-[var(--marketing-gold)]/10 blur-3xl" />
            <div className="relative flex flex-col items-center gap-6 text-center">
              <div className="space-y-4">
                <p className="text-sm tracking-[0.28em] text-[var(--marketing-copy-soft)] uppercase">
                  Next step
                </p>
                <h2 className="font-heading text-3xl tracking-[-0.05em] text-[var(--marketing-heading)] sm:text-4xl">
                  Ready to streamline your operations?
                </h2>
                <p className="mx-auto max-w-2xl text-sm leading-6 text-[var(--marketing-copy)] sm:text-base">
                  Let&apos;s discuss how we can lower your overhead and elevate your professional
                  presence in Northern Michigan.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <MarketingButtonLink href={isHomePage ? "/services#pricing" : "#pricing"}>
                  Schedule a Consultation
                </MarketingButtonLink>
                <MarketingButtonLink href={isHomePage ? "/services" : "#services"} tone="secondary">
                  View Pricing Details
                </MarketingButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}

function MarketingNav({ page }: MarketingPageProps) {
  const navItems =
    page === "home"
      ? [
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { href: "#about", label: "About" },
          { href: "#cta", label: "Contact" },
        ]
      : [
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { href: "/#about", label: "About" },
          { href: "#cta", label: "Contact" },
        ];

  return (
    <header className="sticky top-0 z-20 border-b border-white/6 bg-[rgba(11,19,38,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-12">
        <a
          className="font-heading text-xl tracking-[-0.06em] text-[var(--marketing-gold)]"
          href="/"
        >
          Mike Cebul
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-5 text-sm text-[var(--marketing-copy)]">
          {navItems.map((navItem) => {
            const isActive =
              (page === "home" && navItem.label === "Home") ||
              (page === "services" && navItem.label === "Services");

            return (
              <a
                key={navItem.label}
                className={cn(
                  "border-b-2 border-transparent pb-1 transition-colors hover:text-[var(--marketing-heading)]",
                  isActive && "border-[var(--marketing-gold)] text-[var(--marketing-gold)]",
                )}
                href={navItem.href}
              >
                {navItem.label}
              </a>
            );
          })}
        </nav>

        <MarketingButtonLink
          className="hidden sm:inline-flex"
          href={page === "home" ? "/services#cta" : "#cta"}
        >
          Book Consultation
        </MarketingButtonLink>
      </div>
    </header>
  );
}

function ServiceCard({
  card,
  page,
}: {
  readonly card: ServiceCardData;
  readonly page: MarketingPageProps["page"];
}) {
  const ctaHref = page === "home" ? "/services#cta" : "#cta";

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-[28px] border border-white/6 bg-[var(--marketing-panel)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.28)] lg:p-8",
        card.featured &&
          "border-[var(--marketing-gold)]/80 bg-[linear-gradient(180deg,rgba(34,42,61,0.98),rgba(19,27,46,0.98))] lg:-translate-y-4",
      )}
    >
      {card.featured ? (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--marketing-gold)]/30 bg-[var(--marketing-gold)] px-4 py-1 text-[11px] font-semibold tracking-[0.24em] text-[var(--marketing-gold-foreground)] uppercase shadow-lg">
          Most Popular
        </div>
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-[rgba(49,57,77,0.6)] text-[var(--marketing-gold)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm">
          <card.icon className="size-7" />
        </div>

        <div className="text-right">
          <p className="text-[11px] font-medium tracking-[0.24em] text-[var(--marketing-sky)] uppercase">
            {card.eyebrow}
          </p>
          <div className="mt-3 flex items-end justify-end gap-2">
            <span className="font-heading text-4xl tracking-[-0.06em] text-[var(--marketing-gold)]">
              {card.price}
            </span>
            <span className="pb-1 text-sm text-[var(--marketing-copy)]">{card.priceSuffix}</span>
          </div>
          {card.note ? (
            <p className="mt-1 text-sm text-[var(--marketing-copy)]">{card.note}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <h3 className="font-heading text-3xl leading-tight tracking-[-0.05em] text-[var(--marketing-heading)]">
          {card.title}
        </h3>
        <div className="space-y-2 text-sm leading-6 text-[var(--marketing-copy)] sm:text-base">
          {card.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm text-[var(--marketing-heading)]">
        {card.bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-3">
            <span className="flex size-5 items-center justify-center rounded-full border border-[var(--marketing-gold)]/40 bg-[var(--marketing-gold)]/10 text-[var(--marketing-gold)]">
              <IconCheck className="size-3.5" />
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <MarketingButtonLink className="mt-8 w-full justify-center" href={ctaHref} tone="secondary">
        {card.ctaLabel}
      </MarketingButtonLink>
    </article>
  );
}

function MarketingButtonLink({
  children,
  className,
  href,
  tone = "primary",
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly href: string;
  readonly tone?: "primary" | "secondary";
}) {
  const variant = tone === "primary" ? "default" : "secondary";
  const themeClassName =
    tone === "primary"
      ? "[--primary:var(--marketing-gold)] [--primary-foreground:var(--marketing-gold-foreground)]"
      : "[--secondary:var(--marketing-panel-strong)] [--secondary-foreground:var(--marketing-gold)]";

  return (
    <div className={themeClassName}>
      <a
        className={cn(
          buttonVariants({ size: "lg", variant }),
          "h-12 rounded-xl border border-white/6 px-6 text-sm font-semibold shadow-[0_12px_32px_rgba(0,0,0,0.2)]",
          className,
        )}
        href={href}
      >
        {children}
        <IconArrowRight data-icon="inline-end" />
      </a>
    </div>
  );
}

function MarketingFooter() {
  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/#about", label: "About" },
    { href: "/services#cta", label: "Contact" },
  ];

  return (
    <footer className="border-t border-white/6 bg-[rgba(7,16,31,0.96)]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="space-y-2">
          <p className="font-heading text-xl tracking-[-0.05em] text-[var(--marketing-heading)]">
            Mike Cebul
          </p>
          <p className="text-xs tracking-[0.24em] text-[var(--marketing-copy-soft)] uppercase">
            Northern Michigan consulting for websites, systems, and automation
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-[var(--marketing-copy)]">
          {footerLinks.map((footerLink) => (
            <a
              key={footerLink.label}
              className="transition-colors hover:text-[var(--marketing-heading)]"
              href={footerLink.href}
            >
              {footerLink.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export { MarketingPage };
