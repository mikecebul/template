import {
  IconArrowRight,
  IconBrandLinkedin,
  IconBrandX,
  IconBolt,
  IconBrandZoom,
  IconCheck,
  IconCpu,
  IconMapPin,
  IconNotebook,
  IconSparkles,
  IconWorldWww,
} from "@tabler/icons-react";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState, type ReactNode } from "react";

import { ContactForm } from "@/components/contact-form";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { CaseStudyData, MarketingPath } from "@/lib/marketing-content";
import {
  aboutHighlights,
  blogPosts,
  caseStudies,
  dataVisualizationImageSrc,
  heroImageSrc,
  marketingServices,
  officeImageSrc,
  processSteps,
  servicePrinciples,
} from "@/lib/marketing-content";
import { cn } from "@/lib/utils";

const serviceIconMap = {
  "AI & automation consulting": IconSparkles,
  "Hybrid meeting solutions": IconBrandZoom,
  "Business websites": IconWorldWww,
} as const;

const navHighlightTransition = {
  type: "spring",
  stiffness: 460,
  damping: 34,
  mass: 0.9,
} as const;

export function MarketingLayout() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <div
      id="top"
      className="min-h-svh bg-[radial-gradient(circle_at_top,_rgba(123,208,255,0.16),_transparent_0_24%),linear-gradient(180deg,_#0b1326_0%,_#08101f_48%,_#0b1326_100%)] text-[var(--marketing-heading)]"
    >
      <MarketingNav pathname={pathname} />
      <Outlet />
      <MarketingFooter />
    </div>
  );
}

export function MarketingHomePage() {
  return (
    <MarketingPageMain>
      <section className="mx-auto grid max-w-305 gap-8 px-4 pt-6 sm:px-6 lg:grid-cols-[minmax(0,1.16fr)_minmax(320px,0.84fr)] lg:items-center lg:px-12">
        <div className="flex flex-col gap-6">
          <MarketingEyebrow>Independent technology services</MarketingEyebrow>
          <div className="max-w-184 space-y-5">
            <h1 className="max-w-[10.5ch] font-heading text-5xl font-semibold tracking-tighter text-balance sm:text-[4.35rem] lg:text-[5.6rem]">
              Elevate Your <span className="text-(--marketing-gold)">Business</span> with Modern
              Tech.
            </h1>
            <p className="max-w-xl text-base leading-7 text-(--marketing-copy) sm:text-lg">
              Mike Cebulski provides hands-on technical services across web systems, automation, AV,
              and hardware integration for businesses throughout Northern Michigan.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <MarketingButtonLink to="/contact">Start a Project</MarketingButtonLink>
            <MarketingButtonLink tone="secondary" to="/services">
              View Services
            </MarketingButtonLink>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/8 bg-[var(--marketing-panel)] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,236,185,0.16),_transparent_38%)]" />
          <div className="relative overflow-hidden rounded-[24px]">
            <img
              alt="Charlevoix lighthouse at dusk"
              className="h-[420px] w-full object-cover"
              src={heroImageSrc}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,19,38,0.04),rgba(11,19,38,0.56)_72%,rgba(11,19,38,0.8))]" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="max-w-sm rounded-[24px] border border-white/10 bg-[rgba(9,16,31,0.6)] px-5 py-4 backdrop-blur-md">
                <p className="text-xs font-medium tracking-[0.3em] text-[var(--marketing-sky)] uppercase">
                  Serving Northern Michigan
                </p>
                <p className="mt-2 font-heading text-xl tracking-[-0.04em] text-[var(--marketing-heading)]">
                  Hands-on support for regional businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-[1220px] gap-10 bg-[rgba(19,27,46,0.72)] px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.1fr] lg:px-12">
        <div className="space-y-3">
          <MarketingEyebrow>Background</MarketingEyebrow>
          <h2 className="max-w-md font-heading text-3xl tracking-[-0.06em] sm:text-4xl">
            Technical Mind. Strategic Vision.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-[var(--marketing-copy)]">
          <p>
            Based in Charlevoix the beautiful, I turn overwhelming tech issues into simple
            solutions. My focus is user experience first so the user doesn't even notice the
            complexity underneath. Over the years I have developed trust in our community from local
            non-profits to courts across Michigan. On top of tech integrations I am also a certified
            counselor at BASES here in Charlevoix. I have discovered a passion for helping others
            and improving work efficiency. My mission is to provide businesses with the technical
            backbone they need to scale without friction.
          </p>
          <p>
            Whether I&apos;m architecting a custom web experience or designing an automated hybrid
            meeting room, the focus stays the same: reliability, performance, and future-proof
            design.
          </p>
          <MarketingInlineLink to="/about">Learn more about the journey</MarketingInlineLink>
        </div>
      </section>

      <MarketingServicesOverview />
      <MarketingLocalRootsSection />
      <MarketingCtaSection />
    </MarketingPageMain>
  );
}

export function MarketingServicesPage() {
  return (
    <MarketingPageMain>
      <MarketingPageHero
        eyebrow="Services"
        title="Technical services shaped around clarity, trust, and momentum."
        body="From sharper marketing sites to hybrid room systems and workflow automation, each engagement is designed to stay useful beyond launch week."
      />

      <MarketingServicesOverview />

      <section className="mx-auto mt-20 grid max-w-[1220px] gap-6 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        <div className="rounded-[32px] border border-white/8 bg-[var(--marketing-panel)] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
          <MarketingEyebrow>Engagement style</MarketingEyebrow>
          <h2 className="mt-3 font-heading text-3xl tracking-[-0.05em]">
            A flexible model for scoped builds and longer-term support.
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-7 text-[var(--marketing-copy)]">
            <p>
              Some projects start with a fast diagnostic and recommendation sprint. Others move
              straight into implementation and ongoing refinement. The structure depends on how much
              clarity already exists.
            </p>
            <p>
              The goal is always the same: reduce friction, improve confidence, and leave you with a
              system that feels easier to operate.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {servicePrinciples.map((principle) => (
            <Card
              key={principle.title}
              className="rounded-[28px] border border-white/8 bg-[rgba(19,27,46,0.9)] py-0 text-[var(--marketing-heading)] ring-0"
            >
              <CardHeader className="gap-3 px-6 pt-6">
                <CardTitle className="text-xl">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 text-sm leading-7 text-[var(--marketing-copy)]">
                {principle.body}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[1220px] px-4 sm:px-6 lg:px-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-[28px] border border-white/8 bg-[rgba(19,27,46,0.78)] p-6"
            >
              <p className="text-sm tracking-[0.28em] text-[var(--marketing-gold)] uppercase">
                {step.number}
              </p>
              <h3 className="mt-4 font-heading text-2xl tracking-[-0.04em]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--marketing-copy)]">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <MarketingCtaSection />
    </MarketingPageMain>
  );
}

export function MarketingAboutPage() {
  return (
    <MarketingPageMain>
      <section className="mx-auto grid max-w-[1220px] gap-8 px-4 pt-6 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.9fr)] lg:items-start lg:px-12">
        <div className="space-y-5">
          <MarketingEyebrow>About Mike</MarketingEyebrow>
          <h1 className="max-w-3xl font-heading text-5xl leading-[0.94] tracking-[-0.07em] sm:text-6xl">
            Perspective from the North.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--marketing-copy)] sm:text-lg">
            I build the systems around the work: websites that communicate clearly, spaces that
            support collaboration, and automation that makes the day-to-day feel less wasteful.
          </p>
        </div>

        <div className="rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,rgba(19,27,46,0.96),rgba(9,16,31,0.96))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
          <img
            alt="A modern office interior with strong natural light"
            className="h-[360px] w-full rounded-[24px] object-cover"
            src={officeImageSrc}
          />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <MarketingStatCard label="Home base" value="Charlevoix, Michigan" />
            <MarketingStatCard label="Working style" value="Direct and detail-minded" />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-[1220px] px-4 sm:px-6 lg:px-12">
        <div className="grid gap-4 lg:grid-cols-3">
          {aboutHighlights.map((highlight, index) => (
            <Card
              key={highlight.title}
              className={cn(
                "rounded-[28px] border border-white/8 bg-[rgba(19,27,46,0.82)] py-0 text-[var(--marketing-heading)] ring-0",
                index === 1 && "bg-[rgba(34,42,61,0.95)]",
              )}
            >
              <CardHeader className="px-6 pt-6">
                <CardTitle className="text-xl">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 text-sm leading-7 text-[var(--marketing-copy)]">
                {highlight.body}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-[1220px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
        <div className="overflow-hidden rounded-[32px] border border-white/8 bg-[var(--marketing-panel)]">
          <img
            alt="Glowing technical data visualization"
            className="h-full min-h-[420px] w-full object-cover"
            src={dataVisualizationImageSrc}
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <MarketingEyebrow>Why work with an specialist?</MarketingEyebrow>
          <h2 className="font-heading text-3xl tracking-[-0.05em] sm:text-4xl">
            Technical depth without the distance.
          </h2>
          <p className="text-base leading-8 text-[var(--marketing-copy)]">
            I like systems that are both convincing and calm. That usually means less noise, better
            structure, and a stronger relationship between design decisions and business outcomes.
          </p>
          <div className="grid gap-4">
            <MarketingChecklistItem>
              Thoughtful execution across interface, infrastructure, and room experience.
            </MarketingChecklistItem>
            <MarketingChecklistItem>
              A local point of contact who understands context as well as craft.
            </MarketingChecklistItem>
            <MarketingChecklistItem>
              Deliverables that feel polished without becoming hard to maintain.
            </MarketingChecklistItem>
          </div>
        </div>
      </section>

      <MarketingCtaSection />
    </MarketingPageMain>
  );
}

export function MarketingBlogPage() {
  const [featuredPost, ...supportingPosts] = blogPosts;

  return (
    <MarketingPageMain>
      <MarketingPageHero
        eyebrow="Journal"
        title="Latest insights and technical deep dives."
        body="A few notes on modern websites, calmer systems, and how to make new technology feel less chaotic inside real businesses."
      />

      <section className="mx-auto mt-16 grid max-w-[1220px] gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:px-12">
        <article className="overflow-hidden rounded-[34px] border border-white/8 bg-[rgba(19,27,46,0.85)] shadow-[0_26px_70px_rgba(0,0,0,0.3)]">
          <img
            alt={featuredPost.imageAlt}
            className="h-[320px] w-full object-cover"
            src={featuredPost.imageSrc}
          />
          <div className="p-8">
            <p className="text-sm tracking-[0.28em] text-[var(--marketing-sky)] uppercase">
              {featuredPost.category}
            </p>
            <h2 className="mt-3 max-w-2xl font-heading text-4xl tracking-[-0.06em]">
              {featuredPost.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--marketing-copy)]">
              {featuredPost.description}
            </p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-sm text-[var(--marketing-copy-soft)]">{featuredPost.readTime}</p>
              <MarketingInlineLink href="#top">Read article</MarketingInlineLink>
            </div>
          </div>
        </article>

        <div className="grid gap-6">
          {supportingPosts.map((post) => (
            <article
              key={post.title}
              className="grid gap-4 rounded-[28px] border border-white/8 bg-[rgba(19,27,46,0.85)] p-5 md:grid-cols-[140px_minmax(0,1fr)]"
            >
              <img
                alt={post.imageAlt}
                className="h-32 w-full rounded-[20px] object-cover"
                src={post.imageSrc}
              />
              <div>
                <p className="text-xs tracking-[0.28em] text-[var(--marketing-gold)] uppercase">
                  {post.category}
                </p>
                <h3 className="mt-3 font-heading text-2xl tracking-[-0.04em]">{post.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--marketing-copy)]">
                  {post.description}
                </p>
                <p className="mt-4 text-sm text-[var(--marketing-copy-soft)]">{post.readTime}</p>
              </div>
            </article>
          ))}

          <div className="rounded-[28px] border border-[var(--marketing-gold)]/30 bg-[var(--marketing-gold)] px-6 py-7 text-[var(--marketing-gold-foreground)]">
            <p className="text-sm tracking-[0.28em] uppercase opacity-70">Newsletter</p>
            <h3 className="mt-3 font-heading text-2xl tracking-[-0.04em]">
              Keep up with new notes and process writeups.
            </h3>
            <p className="mt-3 text-sm leading-7 opacity-80">
              A lightweight field for now, styled from the Figma layout and ready for a real
              newsletter integration later.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Input
                aria-label="Email address"
                className="h-12 rounded-full border-[rgba(60,47,0,0.16)] bg-white/50 px-4 text-[var(--marketing-gold-foreground)] placeholder:text-[rgba(60,47,0,0.55)]"
                placeholder="hello@company.com"
              />
              <Button className="h-12 rounded-full bg-[var(--marketing-ink)] px-5 text-[var(--marketing-gold)] hover:bg-[var(--marketing-ink)]/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 flex max-w-[1220px] items-center justify-center gap-3 px-4 sm:px-6 lg:px-12">
        <PaginationChip label="Prev" />
        <PaginationChip label="1" active />
        <PaginationChip label="2" />
        <PaginationChip label="3" />
        <PaginationChip label="Next" />
      </section>
    </MarketingPageMain>
  );
}

export function MarketingContactPage() {
  return (
    <MarketingPageMain>
      <section className="mx-auto max-w-[1220px] px-4 pt-6 sm:px-6 lg:px-12">
        <MarketingEyebrow>Get in Touch</MarketingEyebrow>
        <h1 className="mt-3 max-w-4xl font-heading text-5xl leading-[0.94] tracking-[-0.07em] sm:text-6xl">
          Let&apos;s chart your next technical breakthrough.
        </h1>
      </section>

      <section className="mx-auto mt-16 grid max-w-[1220px] gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(320px,0.82fr)_minmax(0,1.18fr)] lg:px-12">
        <div className="flex flex-col gap-8">
          <div className="rounded-[32px] border border-white/8 bg-[rgba(19,27,46,0.85)] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
            <h2 className="font-heading text-3xl tracking-[-0.05em]">Our Studio</h2>
            <div className="mt-6 flex flex-col gap-5 text-sm leading-7 text-[var(--marketing-copy)]">
              <ContactInfoItem
                label="Location"
                value="Charlevoix, Michigan"
                detail="Northern Michigan"
                icon={<IconMapPin className="size-5" />}
              />
              <ContactInfoItem
                label="Email"
                value="hello@mikecebul.com"
                detail="Placeholder contact address"
                icon={<IconNotebook className="size-5" />}
              />
              <ContactInfoItem
                label="Focus"
                value="Websites, AV, automation"
                detail="Practical systems for growing teams"
                icon={<IconCpu className="size-5" />}
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/8 bg-[rgba(19,27,46,0.85)]">
            <img
              alt="Charlevoix harbor at dusk"
              className="h-[280px] w-full object-cover"
              src={heroImageSrc}
            />
            <div className="border-t border-white/8 px-6 py-5">
              <p className="text-sm tracking-[0.28em] text-[var(--marketing-gold)] uppercase">
                Location
              </p>
              <p className="mt-2 text-base text-[var(--marketing-copy)]">Charlevoix, MI</p>
            </div>
          </div>
        </div>

        <div className="rounded-[36px] border border-white/8 bg-[linear-gradient(180deg,rgba(19,27,46,0.98),rgba(12,18,33,0.98))] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.34)] sm:p-10">
          <ContactForm />
          <div className="mt-10 border-t border-white/8 pt-8">
            <p className="font-heading text-xl tracking-[-0.04em]">
              Thoughtful replies, grounded recommendations.
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--marketing-copy)]">
              This first pass uses a validated placeholder handler, so the form is production-shaped
              even before final lead delivery is connected.
            </p>
          </div>
        </div>
      </section>
    </MarketingPageMain>
  );
}

export function MarketingHybridMeetingSolutionsCaseStudyPage() {
  return <MarketingCaseStudyPage caseStudy={caseStudies[0]} />;
}

export function MarketingWebsitesCaseStudyPage() {
  return <MarketingCaseStudyPage caseStudy={caseStudies[1]} />;
}

function MarketingCaseStudyPage({ caseStudy }: { readonly caseStudy: CaseStudyData }) {
  return (
    <MarketingPageMain>
      <section className="mx-auto max-w-[1220px] px-4 pt-6 sm:px-6 lg:px-12">
        <MarketingEyebrow>{caseStudy.eyebrow}</MarketingEyebrow>
        <h1 className="mt-3 max-w-5xl font-heading text-5xl leading-[0.94] tracking-[-0.07em] sm:text-6xl">
          {caseStudy.title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--marketing-copy)] sm:text-lg">
          {caseStudy.intro}
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-[1220px] gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:px-12">
        <div className="overflow-hidden rounded-[36px] border border-white/8 bg-[rgba(19,27,46,0.85)] shadow-[0_28px_80px_rgba(0,0,0,0.3)]">
          <img
            alt={caseStudy.gallery[0].imageAlt}
            className="h-[420px] w-full object-cover"
            src={caseStudy.gallery[0].imageSrc}
          />
        </div>
        <div className="grid gap-4">
          {caseStudy.metrics.map((metric) => (
            <MarketingStatCard key={metric.label} label={metric.label} value={metric.value} />
          ))}
          <div className="rounded-[28px] border border-white/8 bg-[rgba(19,27,46,0.8)] p-6">
            <p className="text-sm tracking-[0.28em] text-[var(--marketing-copy-soft)] uppercase">
              Role
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--marketing-copy)]">{caseStudy.role}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-[1220px] gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-12">
        {caseStudy.summary.map((item) => (
          <Card
            key={item.title}
            className="rounded-[28px] border border-white/8 bg-[rgba(19,27,46,0.84)] py-0 text-[var(--marketing-heading)] ring-0"
          >
            <CardHeader className="px-6 pt-6">
              <CardTitle className="text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 text-sm leading-7 text-[var(--marketing-copy)]">
              {item.body}
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mx-auto mt-20 grid max-w-[1220px] gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-12">
        <div className="space-y-6">
          <div className="rounded-[32px] border border-white/8 bg-[rgba(19,27,46,0.82)] p-8">
            <MarketingEyebrow>Challenge</MarketingEyebrow>
            <p className="mt-4 text-base leading-8 text-[var(--marketing-copy)]">
              {caseStudy.challenge}
            </p>
          </div>
          <div className="rounded-[32px] border border-white/8 bg-[rgba(34,42,61,0.92)] p-8">
            <MarketingEyebrow>Solution</MarketingEyebrow>
            <p className="mt-4 text-base leading-8 text-[var(--marketing-copy)]">
              {caseStudy.solution}
            </p>
          </div>
        </div>
        <div className="rounded-[32px] border border-white/8 bg-[rgba(19,27,46,0.82)] p-8">
          <MarketingEyebrow>Results</MarketingEyebrow>
          <div className="mt-6 grid gap-4">
            {caseStudy.results.map((result) => (
              <MarketingChecklistItem key={result}>{result}</MarketingChecklistItem>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[1220px] px-4 sm:px-6 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudy.gallery.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[30px] border border-white/8 bg-[rgba(19,27,46,0.84)]"
            >
              <img alt={item.imageAlt} className="h-56 w-full object-cover" src={item.imageSrc} />
              <div className="p-6">
                <h3 className="font-heading text-2xl tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--marketing-copy)]">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[1024px] px-4 sm:px-6 lg:px-12">
        <div className="rounded-[34px] border border-white/8 bg-[linear-gradient(155deg,rgba(34,42,61,1),rgba(19,27,46,1))] px-8 py-12 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:px-12">
          <MarketingEyebrow>Next step</MarketingEyebrow>
          <h2 className="mt-3 font-heading text-3xl tracking-[-0.05em] sm:text-4xl">
            {caseStudy.ctaHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--marketing-copy)]">
            {caseStudy.ctaBody}
          </p>
          <div className="mt-8">
            <MarketingButtonLink to="/contact">Start a Conversation</MarketingButtonLink>
          </div>
        </div>
      </section>
    </MarketingPageMain>
  );
}

function MarketingPageMain({ children }: { readonly children: ReactNode }) {
  return <main className="pt-8 pb-24 sm:pt-10 lg:pt-14 lg:pb-32">{children}</main>;
}

function MarketingServicesOverview() {
  return (
    <section className="mx-auto mt-20 max-w-[1220px] px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <MarketingEyebrow>Core Services</MarketingEyebrow>
          <h2 className="max-w-4xl font-heading text-3xl tracking-[-0.05em] sm:text-4xl">
            Services designed for real business needs.
          </h2>
        </div>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
        {marketingServices.map((service) => {
          const Icon = getServiceIcon(service.headline);

          return (
            <article
              key={service.headline}
              className={cn(
                "relative flex min-h-[640px] flex-col overflow-visible rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(21,29,48,0.96),rgba(18,25,42,0.98))] px-8 py-7 shadow-[0_24px_70px_rgba(0,0,0,0.28)]",
                service.featured &&
                  "border-[var(--marketing-gold)]/80 bg-[linear-gradient(180deg,rgba(43,52,75,0.98),rgba(24,31,49,0.98))] shadow-[0_28px_90px_rgba(0,0,0,0.34)] lg:-my-3",
              )}
            >
              {service.featured ? (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(60,47,0,0.12)] bg-[var(--marketing-gold)] px-6 py-2 text-[11px] font-semibold tracking-[0.22em] text-[var(--marketing-gold-foreground)] uppercase shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                  Most Popular
                </div>
              ) : null}

              <div
                className={cn(
                  "grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5",
                  service.featured && "pt-8",
                )}
              >
                <div className="flex size-20 items-center justify-center rounded-[24px] bg-[rgba(53,61,86,0.7)] text-[var(--marketing-gold)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <Icon className="size-6" />
                </div>
                <div className="min-w-0 pt-1 text-right">
                  <p className="text-sm tracking-[0.18em] text-[var(--marketing-sky)] uppercase sm:text-base">
                    {service.eyebrow}
                  </p>
                  <div className="mt-3 flex items-end justify-end gap-2">
                    <span className="font-heading text-4xl leading-none tracking-[-0.06em] text-[var(--marketing-gold)] sm:text-5xl">
                      {service.price}
                    </span>
                    <span className="pb-1 text-base text-[var(--marketing-copy)]">
                      {service.priceSuffix}
                    </span>
                  </div>
                  {service.priceDetail ? (
                    <div className="mt-1.5 inline-flex self-end rounded-[14px] px-1 text-right">
                      <div className="flex flex-col items-end gap-0.5">
                        <span className="text-[0.95rem] leading-none whitespace-nowrap text-[var(--marketing-copy)]">
                          {service.priceDetail.amount}
                        </span>
                        <span className="text-[0.82rem] leading-none tracking-[0.01em] whitespace-nowrap text-[var(--marketing-copy)]/82">
                          {service.priceDetail.label}
                        </span>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mt-14 flex flex-1 flex-col">
                <h3 className="max-w-[13.5ch] font-heading text-[2.1rem] leading-[1.06] tracking-[-0.06em] text-balance sm:text-[2.45rem]">
                  {service.headline}
                </h3>
                <p className="mt-6 text-lg leading-8 text-[var(--marketing-copy)]">
                  {service.title}
                </p>
                <p className="mt-4 text-base leading-8 text-[var(--marketing-copy)]/92">
                  {service.description}
                </p>

                <ul className="mt-10 flex flex-1 flex-col gap-5 text-[1.02rem] text-[var(--marketing-heading)]">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-4">
                      <span className="flex size-6 items-center justify-center rounded-full bg-[#ffcd1f] text-[#1b2340] shadow-[0_0_0_3px_rgba(255,205,31,0.12)]">
                        <IconCheck className="size-3.5 stroke-[3]" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <MarketingButtonLink
                className="mt-10 h-16 w-full justify-center rounded-[22px] border-transparent bg-[rgba(53,61,86,0.92)] px-6 text-base font-semibold text-[var(--marketing-gold)] shadow-none hover:bg-[rgba(64,73,102,0.98)]"
                tone="secondary"
                showIcon={false}
                to={
                  service.headline === "Hybrid meeting solutions"
                    ? "/case-studies/hybrid-meeting-solutions"
                    : service.headline === "Business websites"
                      ? "/case-studies/websites"
                      : "/contact"
                }
              >
                {service.ctaLabel}
              </MarketingButtonLink>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function MarketingLocalRootsSection() {
  return (
    <section className="mx-auto mt-20 grid max-w-[1220px] gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:px-12">
      <div className="overflow-hidden rounded-[32px] border border-white/8 bg-[var(--marketing-panel)]">
        <img
          alt="Charlevoix harbor view"
          className="h-[320px] w-full object-cover"
          src={heroImageSrc}
        />
      </div>
      <div className="space-y-5">
        <MarketingEyebrow>Community</MarketingEyebrow>
        <h2 className="font-heading text-3xl tracking-[-0.05em] sm:text-4xl">
          Local Roots, Global Impact.
        </h2>
        <p className="max-w-2xl text-base leading-8 text-[var(--marketing-copy)]">
          Being based in Charlevoix isn&apos;t just about the scenery. It&apos;s about the values of
          a tight-knit community: accountability, personal follow-through, and work that still
          matters after the presentation is over.
        </p>
        <div className="rounded-[20px] border border-white/8 bg-[rgba(19,27,46,0.82)] px-5 py-4">
          <p className="font-heading text-xl">Charlevoix, MI</p>
          <p className="mt-1 text-sm text-[var(--marketing-copy)]">45.3181° N, 85.2584° W</p>
        </div>
      </div>
    </section>
  );
}

function MarketingPageHero({
  body,
  eyebrow,
  title,
}: {
  readonly body: string;
  readonly eyebrow: string;
  readonly title: string;
}) {
  return (
    <section className="mx-auto max-w-[1220px] px-4 pt-6 sm:px-6 lg:px-12">
      <MarketingEyebrow>{eyebrow}</MarketingEyebrow>
      <h1 className="mt-3 max-w-5xl font-heading text-5xl leading-[0.94] tracking-[-0.07em] sm:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--marketing-copy)] sm:text-lg">
        {body}
      </p>
    </section>
  );
}

function MarketingCtaSection() {
  return (
    <section className="mx-auto mt-20 max-w-[1024px] px-4 sm:px-6 lg:px-12">
      <div className="rounded-[34px] border border-white/8 bg-[linear-gradient(155deg,rgba(34,42,61,1),rgba(19,27,46,1))] px-8 py-12 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:px-12">
        <MarketingEyebrow>Next step</MarketingEyebrow>
        <h2 className="mt-3 font-heading text-3xl tracking-[-0.05em] sm:text-4xl">
          Ready to solve your next challenge?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--marketing-copy)]">
          Let&apos;s discuss how customized technical solutions can streamline your operations and
          drive growth.
        </p>
        <div className="mt-8 flex justify-center">
          <MarketingButtonLink to="/contact">Book a Free Consultation</MarketingButtonLink>
        </div>
      </div>
    </section>
  );
}

function MarketingNav({ pathname }: { readonly pathname: string }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const isCaseStudyRoute = pathname.startsWith("/case-studies");

  return (
    <header className="sticky top-0 z-20 border-b border-white/6 bg-[rgba(11,19,38,0.76)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-12">
        <Link
          className="font-heading text-xl tracking-[-0.06em] text-[var(--marketing-gold)]"
          to="/"
        >
          Mike Cebulski
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-2 text-sm text-[var(--marketing-copy)]">
          <MarketingRouteLink active={pathname === "/"} label="Home" to="/" />
          <MarketingRouteLink active={pathname === "/services"} label="Services" to="/services" />
          <MarketingRouteLink active={pathname === "/about"} label="About" to="/about" />
          <MarketingRouteLink active={pathname === "/contact"} label="Contact" to="/contact" />
          <NavigationMenu
            align="center"
            className="flex-none"
            key={pathname}
            onValueChange={(value, eventDetails) => {
              if (eventDetails.reason === "trigger-press") {
                return;
              }

              setOpenMenu(value ?? null);
            }}
            value={openMenu}
          >
            <NavigationMenuList>
              <NavigationMenuItem value="case-studies">
                <NavigationMenuTrigger
                  className={cn(
                    "relative overflow-hidden rounded-full border-none bg-transparent px-3 py-2 text-[var(--marketing-copy)] shadow-none hover:bg-transparent hover:text-[var(--marketing-heading)] focus:bg-transparent focus:text-[var(--marketing-heading)] focus-visible:ring-0 data-popup-open:bg-transparent data-popup-open:text-[var(--marketing-heading)] data-popup-open:hover:bg-transparent data-popup-open:hover:text-[var(--marketing-heading)] data-open:bg-transparent data-open:text-[var(--marketing-heading)] data-open:hover:bg-transparent data-open:hover:text-[var(--marketing-heading)]",
                    isCaseStudyRoute &&
                      "text-[var(--marketing-gold)] hover:text-[var(--marketing-gold)] data-popup-open:text-[var(--marketing-gold)] data-popup-open:hover:text-[var(--marketing-gold)] data-open:text-[var(--marketing-gold)] data-open:hover:text-[var(--marketing-gold)]",
                  )}
                >
                  {isCaseStudyRoute ? <MarketingNavHighlight /> : null}
                  <span className="relative z-10">Case Studies</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-[360px] p-0">
                  <div className="grid gap-1 rounded-[24px] border border-white/10 bg-[var(--marketing-panel)] p-2 text-[var(--marketing-heading)] shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
                    {caseStudies.map((caseStudy) => {
                      const isActiveCaseStudy = pathname === caseStudy.path;
                      const isWebsiteCaseStudy = caseStudy.path.endsWith("websites");
                      const CaseStudyIcon = isWebsiteCaseStudy ? IconWorldWww : IconBrandZoom;

                      return (
                        <Link
                          key={caseStudy.path}
                          className={cn(
                            "group rounded-[18px] border border-transparent px-4 py-3 transition-all hover:border-white/10 hover:bg-white/3",
                            isActiveCaseStudy &&
                              "border-[var(--marketing-gold)]/35 bg-[linear-gradient(180deg,rgba(255,236,185,0.08),rgba(255,236,185,0.03))] shadow-[inset_0_1px_0_rgba(255,236,185,0.08)]",
                          )}
                          onClick={() => setOpenMenu(null)}
                          to={caseStudy.path}
                        >
                          <div className="flex items-start gap-3">
                            <span
                              className={cn(
                                "mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[rgba(53,61,86,0.7)] text-[var(--marketing-gold)]",
                                isActiveCaseStudy &&
                                  "bg-[rgba(255,236,185,0.1)] ring-1 ring-[var(--marketing-gold)]/20",
                              )}
                            >
                              <CaseStudyIcon className="size-5" />
                            </span>
                            <div className="min-w-0">
                              <p className="text-[11px] tracking-[0.2em] text-[var(--marketing-sky)] uppercase">
                                {caseStudy.eyebrow}
                              </p>
                              <p
                                className={cn(
                                  "mt-1 text-sm font-medium text-[var(--marketing-heading)]",
                                  isActiveCaseStudy && "text-[var(--marketing-gold)]",
                                )}
                              >
                                {isWebsiteCaseStudy
                                  ? "Business websites"
                                  : "Hybrid meeting solutions"}
                              </p>
                              <p className="mt-1 text-xs leading-5 text-[var(--marketing-copy)]">
                                {isWebsiteCaseStudy
                                  ? "Strategy, design, and maintainable site systems."
                                  : "AV planning, Zoom Rooms, and practical room integration."}
                              </p>
                            </div>
                            <IconArrowRight
                              className={cn(
                                "mt-1 size-4 shrink-0 text-[var(--marketing-gold)] opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100",
                                isActiveCaseStudy && "opacity-100",
                              )}
                            />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <MarketingButtonLink className="hidden sm:inline-flex" to="/contact">
          Book Consultation
        </MarketingButtonLink>
      </div>
    </header>
  );
}

function MarketingRouteLink({
  active,
  label,
  to,
}: {
  readonly active: boolean;
  readonly label: string;
  readonly to: MarketingPath;
}) {
  return (
    <Link
      className={cn(
        "relative overflow-hidden rounded-full px-3 py-2 transition-colors hover:text-[var(--marketing-heading)]",
        active && "text-[var(--marketing-gold)]",
      )}
      to={to}
    >
      {active ? <MarketingNavHighlight /> : null}
      <span className="relative z-10">{label}</span>
    </Link>
  );
}

function MarketingNavHighlight() {
  return (
    <motion.span
      layoutId="marketing-nav-highlight"
      className="absolute inset-0 rounded-full border border-[var(--marketing-gold)]/20 bg-white/6 shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
      initial={false}
      transition={navHighlightTransition}
    />
  );
}

type MarketingButtonLinkProps = {
  readonly children: ReactNode;
  readonly className?: string;
  readonly href?: string;
  readonly showIcon?: boolean;
  readonly to?: MarketingPath;
  readonly tone?: "primary" | "secondary";
};

function MarketingButtonLink({
  children,
  className,
  href,
  showIcon = true,
  to,
  tone = "primary",
}: MarketingButtonLinkProps) {
  const variant = tone === "primary" ? "default" : "secondary";
  const themeClassName =
    tone === "primary"
      ? "[--primary:var(--marketing-gold)] [--primary-foreground:var(--marketing-gold-foreground)]"
      : "[--secondary:var(--marketing-panel-strong)] [--secondary-foreground:var(--marketing-gold)]";
  const buttonClassName = cn(
    buttonVariants({ size: "lg", variant }),
    "h-12 rounded-full border border-white/8 px-5 text-sm font-semibold shadow-[0_12px_32px_rgba(0,0,0,0.2)]",
    className,
  );

  return (
    <div className={themeClassName}>
      {to ? (
        <Link className={buttonClassName} to={to}>
          {children}
          {showIcon ? <IconArrowRight data-icon="inline-end" /> : null}
        </Link>
      ) : (
        <a className={buttonClassName} href={href}>
          {children}
          {showIcon ? <IconArrowRight data-icon="inline-end" /> : null}
        </a>
      )}
    </div>
  );
}

function MarketingInlineLink({
  children,
  href,
  to,
}: {
  readonly children: ReactNode;
  readonly href?: string;
  readonly to?: MarketingPath;
}) {
  const className =
    "inline-flex items-center gap-2 text-sm font-semibold text-[var(--marketing-gold)] transition-transform hover:translate-x-1";

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
        <IconArrowRight className="size-4" />
      </Link>
    );
  }

  return (
    <a className={className} href={href}>
      {children}
      <IconArrowRight className="size-4" />
    </a>
  );
}

function MarketingEyebrow({ children }: { readonly children: ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-[0.32em] text-[var(--marketing-sky)] uppercase">
      {children}
    </p>
  );
}

function MarketingStatCard({ label, value }: { readonly label: string; readonly value: string }) {
  return (
    <div className="rounded-[20px] border border-white/8 bg-[rgba(19,27,46,0.82)] px-5 py-4">
      <p className="text-xs tracking-[0.28em] text-[var(--marketing-copy-soft)] uppercase">
        {label}
      </p>
      <p className="mt-2 font-heading text-lg tracking-[-0.03em] text-[var(--marketing-heading)]">
        {value}
      </p>
    </div>
  );
}

function MarketingChecklistItem({ children }: { readonly children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-[22px] border border-white/8 bg-[rgba(19,27,46,0.76)] px-4 py-4">
      <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--marketing-gold)]/12 text-[var(--marketing-gold)]">
        <IconBolt className="size-4" />
      </span>
      <p className="text-sm leading-7 text-[var(--marketing-copy)]">{children}</p>
    </div>
  );
}

function ContactInfoItem({
  detail,
  icon,
  label,
  value,
}: {
  readonly detail: string;
  readonly icon: ReactNode;
  readonly label: string;
  readonly value: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--marketing-panel-strong)] text-[var(--marketing-gold)]">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-[var(--marketing-heading)]">{label}</p>
        <p className="mt-1 text-base text-[var(--marketing-copy)]">{value}</p>
        <p className="text-sm text-[var(--marketing-copy-soft)]">{detail}</p>
      </div>
    </div>
  );
}

function PaginationChip({
  active = false,
  label,
}: {
  readonly active?: boolean;
  readonly label: string;
}) {
  return (
    <div
      className={cn(
        "flex h-10 min-w-10 items-center justify-center rounded-full border border-white/8 px-4 text-sm text-[var(--marketing-copy)]",
        active && "border-[var(--marketing-gold)]/40 bg-white/6 text-[var(--marketing-gold)]",
      )}
    >
      {label}
    </div>
  );
}

function MarketingFooter() {
  return (
    <footer className="border-t border-white/6 bg-[rgba(7,16,31,0.96)]">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_220px_220px] lg:px-12">
        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <p className="font-heading text-2xl tracking-[-0.05em] text-[var(--marketing-heading)]">
              Mike Cebulski
            </p>
            <p className="max-w-sm text-sm leading-7 text-[var(--marketing-copy)]">
              Independent technical consulting for business websites, hybrid meeting systems, and
              automation in Northern Michigan.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              aria-label="Mike Cebulski on X"
              className="flex size-11 items-center justify-center rounded-2xl border border-white/8 bg-white/3 text-[var(--marketing-copy)] transition-colors hover:border-[var(--marketing-gold)]/25 hover:text-[var(--marketing-gold)]"
              href="https://x.com/MikeCebul"
              rel="noreferrer"
              target="_blank"
            >
              <IconBrandX className="size-5" />
            </a>
            <a
              aria-label="Mike Cebulski on LinkedIn"
              className="flex size-11 items-center justify-center rounded-2xl border border-white/8 bg-white/3 text-[var(--marketing-copy)] transition-colors hover:border-[var(--marketing-gold)]/25 hover:text-[var(--marketing-gold)]"
              href="https://www.linkedin.com/in/mikecebul/"
              rel="noreferrer"
              target="_blank"
            >
              <IconBrandLinkedin className="size-5" />
            </a>
          </div>

          <p className="text-sm text-[var(--marketing-copy-soft)]">
            © {new Date().getFullYear()} MIKECEBUL LLC. All rights reserved.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-medium text-[var(--marketing-heading)]">Services</p>
          <div className="flex flex-col gap-3 text-sm text-[var(--marketing-copy)]">
            <Link
              className="transition-colors hover:text-[var(--marketing-heading)]"
              to="/services"
            >
              Overview
            </Link>
            <Link
              className="transition-colors hover:text-[var(--marketing-heading)]"
              to="/case-studies/websites"
            >
              Business Websites
            </Link>
            <Link
              className="transition-colors hover:text-[var(--marketing-heading)]"
              to="/case-studies/hybrid-meeting-solutions"
            >
              Hybrid Meeting Solutions
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-medium text-[var(--marketing-heading)]">Company</p>
          <div className="flex flex-col gap-3 text-sm text-[var(--marketing-copy)]">
            <Link className="transition-colors hover:text-[var(--marketing-heading)]" to="/">
              Home
            </Link>
            <Link className="transition-colors hover:text-[var(--marketing-heading)]" to="/about">
              About
            </Link>
            <Link className="transition-colors hover:text-[var(--marketing-heading)]" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function getServiceIcon(headline: string) {
  switch (headline) {
    case "AI & automation consulting":
      return serviceIconMap["AI & automation consulting"];
    case "Hybrid meeting solutions":
      return serviceIconMap["Hybrid meeting solutions"];
    default:
      return serviceIconMap["Business websites"];
  }
}
