import type { FAQItem } from "@/types/content";

/**
 * FAQ accordion items.
 *
 * SOURCE: Stitch HTML — desktop has 8 questions, mobile has 6 questions.
 * Using the 8-question desktop set as the canonical source.
 * All answers are verbatim from the approved Stitch HTML.
 *
 * RULE: Do not modify or invent FAQ answers. These are approved content.
 */
export const faqItems: FAQItem[] = [
  {
    id: "faq-what-is-abilympics",
    question: "What is the International Abilympics?",
    answer:
      "Abilympics is the world's largest international vocational skills competition for persons with disabilities, promoting professional excellence, inclusion, and equal opportunity. The concept originated in Japan in 1972, drawing inspiration from both the WorldSkills competitions and the Paralympic Games — a contraction of “abilities” and “olympics.”",
  },
  {
    id: "faq-what-is-helsinki-2027",
    question: "What is Abilympics Helsinki 2027?",
    answer:
      "Helsinki 2027 will host the 11th International Abilympics from 10 to 13 May 2027 in Messukeskus, Helsinki, Finland. It brings together over 1,000 top competitors representing more than 35 member countries.",
  },
  {
    id: "faq-metz-2023-performance",
    question: "What was Bangladesh's performance in Metz 2023?",
    answer:
      "Bangladesh sent a dedicated 10-member delegation with 7 competitors in Word Processing and ICT skills, making its historic debut and winning 2 international bronze medals for the nation.",
  },
  {
    id: "faq-selection-training",
    question: "How are Bangladeshi participants selected and trained?",
    answer:
      "Candidates undergo fair nationwide screening in collaboration with CSID and vocational institutes. Qualified competitors enter intensive multi-month bootcamps under certified trade trainers to replicate international competition conditions.",
  },
  {
    id: "faq-corporate-partnership",
    question: "How can corporations partner with Team Bangladesh?",
    answer:
      "Corporate organizations can join as Official, Corporate, Technology, or Media Partners via our designated platform at partners.epyra.agency, supporting athlete scholarships, lab equipment, flight travel, and accessible tech setup.",
  },
  {
    id: "faq-esg-dei",
    question: "How does partnership support ESG and DEI objectives?",
    answer:
      "Sponsorship directly meets UN Sustainable Development Goals (SDG 8: Decent Work & Economic Growth; SDG 10: Reduced Inequalities) and supplies corporations with verifiable social impact reporting metrics and certified DEI achievements.",
  },
  {
    id: "faq-what-is-csid",
    question: "Who is CSID and what role do they play?",
    answer:
      "The Centre for Services and Information on Disability (CSID) has pioneered disability inclusion and vocational rights since 1997. CSID coordinates candidate trials, technical bootcamps, international protocol accreditation, and corporate career transitions for participating youth across Bangladesh.",
  },
  {
    id: "faq-contact",
    question: "How do I contact the Abilympics Bangladesh secretariat?",
    answer:
      "For partnership, sponsorship, media, or institutional inquiries, you can submit the partnership inquiry form on this page. Your message will be sent directly to the Abilympics Bangladesh secretariat at abilympicsbd@gmail.com, and you will receive an email confirmation after submitting the form. You can also contact the secretariat directly at abilympicsbd@gmail.com if you prefer to email us.",
  },
];
