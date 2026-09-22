import type { EventConfig, StatItem } from "@/types/content";

/**
 * Event configuration for Helsinki 2027 and Metz 2023 retrospective.
 * Source: docs/private/PROJECT-CONTEXT.md, Stitch HTML confirmed values.
 *
 * RULE: Do not invent event data. Every field here is confirmed.
 */
export const event: EventConfig = {
  name: "International Abilympics",
  edition: 11,
  year: 2027,

  /** Opening Ceremony: 10 May 2027 09:00 EET (Helsinki time, UTC+3) */
  startDateTime: "2027-05-10T09:00:00+03:00",

  /** Closing: 13 May 2027 (exact time not confirmed — date only) */
  endDateTime: "2027-05-13T23:59:00+03:00",

  venue: "Messukeskus Exhibition and Convention Centre",
  location: "Helsinki, Finland",
  country: "Finland",

  metz2023: {
    edition: 10,
    year: 2023,
    location: "Metz, France",
    country: "France",
    delegationSize: 10,
    participantCount: 7,
    medalCount: 2,
    medalType: "International Medals",
    disciplines: ["Word Processing", "ICT"],
  },
};

/**
 * Key statistics used in the Hero ribbon, QuickStats strip, and media callouts.
 * Source: PROJECT-CONTEXT.md + Stitch HTML confirmed values.
 */
export const heroStats: StatItem[] = [
  {
    id: "contestants",
    value: "7",
    label: "Contestants in Metz",
    sublabel: "Metz 2023 Historic Cohort",
    color: "text-emerald-400",
  },
  {
    id: "medals",
    value: "2",
    label: "International Medals",
    sublabel: "Bronze in Global Finals",
    color: "text-amber-400",
  },
  {
    id: "skills",
    value: "43+",
    label: "Skills at Helsinki",
    sublabel: "Competitions at Helsinki",
    color: "text-white",
  },
  {
    id: "inclusion",
    value: "100%",
    label: "Inclusion Driven",
    sublabel: "Global Standards Tested",
    color: "text-emerald-400",
  },
];

/**
 * Ticker items for the announcement marquee strip.
 * Source: Stitch HTML (confirmed real content).
 */
export const tickerItems: string[] = [
  "Bangladesh to Helsinki 2027: Quadrennial Vocational Championship",
  "10–13 May 2027 • Messukeskus Convention Centre, Helsinki, Finland",
  "Metz 2023 Milestone: 7 Contestants, 2 International Medals Won",
  "Corporate CSR & Strategic Sponsorship Windows Now Open",
  "Inquiries: secretariat@abilympicsbd.org • Direct Desk Open",
];
