import type {
  PartnershipPillar,
  ImpactCategory,
  PartnershipTier,
} from "@/types/content";

/**
 * Partnership content: 4 pillars, 8 impact categories, 5 tier cards + 1 direct engagement card.
 * Source: Stitch HTML confirmed content.
 *
 * RULE: Do NOT invent sponsorship claims or benefit details not present in the design.
 * All text below is taken verbatim or paraphrased from the approved Stitch HTML.
 *
 * Icon names use Lucide React conventions (PascalCase → kebab-case at render time).
 */

// ─── 4 Why-Partner Pillars ────────────────────────────────────────────────

export const partnershipPillars: PartnershipPillar[] = [
  {
    id: "skills",
    label: "SKILLS",
    description:
      "Fund rigorous vocational bootcamps benchmarked to WorldSkills standards, creating globally recognized expertise.",
    icon: "zap",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    id: "opportunity",
    label: "OPPORTUNITY",
    description:
      "Open doors to international competition, global peer networks, and prestigious vocational credentials.",
    icon: "plane-takeoff",
    iconBg: "bg-sky-500/20",
    iconColor: "text-sky-400",
  },
  {
    id: "inclusion",
    label: "INCLUSION",
    description:
      "Drive meaningful corporate DEI practices, dismantling misconceptions around hiring professionals with disabilities.",
    icon: "users",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    id: "representation",
    label: "REPRESENTATION",
    description:
      "Unfurl Bangladesh's national flag on the premier stage in Helsinki, Finland, inspiring millions across the nation.",
    icon: "flag",
    iconBg: "bg-rose-500/20",
    iconColor: "text-rose-400",
  },
];

// ─── 8 Impact Categories ──────────────────────────────────────────────────

export const impactCategories: ImpactCategory[] = [
  {
    number: 1,
    label: "Participant Preparation",
    icon: "user-check",
    iconColor: "text-emerald-400",
  },
  {
    number: 2,
    label: "Training & Skills",
    icon: "graduation-cap",
    iconColor: "text-sky-400",
  },
  {
    number: 3,
    label: "Travel & Accommodation",
    icon: "hotel",
    iconColor: "text-amber-400",
  },
  {
    number: 4,
    label: "Equipment & Tools",
    icon: "monitor",
    iconColor: "text-purple-400",
  },
  {
    number: 5,
    label: "Accessibility Support",
    icon: "accessibility",
    iconColor: "text-emerald-400",
  },
  {
    number: 6,
    label: "Int'l Representation",
    icon: "globe",
    iconColor: "text-rose-400",
  },
  {
    number: 7,
    label: "Media & Comms",
    icon: "megaphone",
    iconColor: "text-sky-400",
  },
  {
    number: 8,
    label: "Global Logistics",
    icon: "truck",
    iconColor: "text-amber-400",
  },
];

// ─── 5 Partnership Tiers + 1 Direct Engagement Card ──────────────────────

export const partnershipTiers: PartnershipTier[] = [
  {
    id: "official",
    name: "OFFICIAL PARTNER",
    description:
      "Engagement with relevant government, vocational education, disability inclusion, and industry stakeholders.",
    benefits: [
      "Primary logo on all delegation apparel",
      "Keynote address at national send-off",
      "Comprehensive ESG compliance report",
    ],
    ctaLabel: "Become a Partner",
    ctaHref: "https://partners.epyra.agency",
    isHighlighted: true,
    hoverBorder: undefined,
  },
  {
    id: "corporate",
    name: "CORPORATE PARTNER",
    description:
      "Ideal for corporations committing CSR funding toward vocational excellence and workplace disability transformation.",
    benefits: [
      "Delegation uniform sleeve branding",
      "Dedicated corporate press release feature",
      "Corporate diversity training facilitation",
    ],
    ctaLabel: "Become a Partner",
    ctaHref: "https://partners.epyra.agency",
    isHighlighted: false,
    hoverBorder: "hover:border-emerald-400",
  },
  {
    id: "technology",
    name: "TECHNOLOGY PARTNER",
    description:
      "Equip bootcamps with modern PC workstations, accessibility software, monitors, and specialized testing rigs.",
    benefits: [
      "Bootcamp training lab co-branding",
      "Showcase tech during broadcast webinars",
      "Fast-track candidate recruitment channel",
    ],
    ctaLabel: "Become a Partner",
    ctaHref: "https://partners.epyra.agency",
    isHighlighted: false,
    hoverBorder: "hover:border-sky-400",
  },
  {
    id: "media",
    name: "MEDIA PARTNER",
    description:
      "Television channels, radio networks, and digital portals amplifying human triumphs to 170+ million citizens.",
    benefits: [
      "Priority athlete and coach interview access",
      "Official co-branded documentary assets",
      "Prominent media back-wall presence",
    ],
    ctaLabel: "Become a Partner",
    ctaHref: "https://partners.epyra.agency",
    isHighlighted: false,
    hoverBorder: "hover:border-rose-400",
  },
  {
    id: "supporting",
    name: "SUPPORTING PARTNER",
    description:
      "Foundations, non-profits, academic bodies, and patrons funding travel bursaries and contestant accessibility gear.",
    benefits: [
      "Official website and collateral banner listing",
      "Certificate of Honorary Patronage",
      "Delegation send-off ceremony invitations",
    ],
    ctaLabel: "Become a Partner",
    ctaHref: "https://partners.epyra.agency",
    isHighlighted: false,
    hoverBorder: "hover:border-amber-400",
  },
  {
    id: "direct",
    name: "Direct Engagement",
    description:
      "Ready to create a custom CSR tier tailored to your enterprise's social values?",
    benefits: [],
    ctaLabel: "Become a Partner",
    ctaHref: "https://partners.epyra.agency",
    isHighlighted: false,
  },
];
