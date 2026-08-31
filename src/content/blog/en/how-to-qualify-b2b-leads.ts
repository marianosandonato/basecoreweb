import type { BlogPost } from "../types";

export const howToQualifyB2bLeads: BlogPost = {
  title: "How to Qualify B2B Leads: BANT, MEDDIC, and Other Frameworks",
  description:
    "BANT, MEDDIC, CHAMP, and GPCTBA/C&I explained and compared: which lead qualification framework fits your team size and sales cycle.",
  publishedAt: "2026-09-20",
  readingMinutes: 8,
  image: "/images/Deteccion-de-oportunidad-comercial.jpg",
  imageAlt: "Two sales professionals reviewing lead data on a tablet",
  body: [
    {
      type: "p",
      text: "Chasing a lead that was never going to buy costs more than losing that lead — it costs the time a rep didn't spend on someone who actually was ready. Lead qualification exists to answer one question before that time gets spent: does this person, at this company, have real reason, authority, and timing to move forward? BANT and MEDDIC are the two most common ways to answer it, but they're not the only options, and picking the wrong one for your process creates as much noise as not qualifying at all.",
    },
    {
      type: "h2",
      text: "Why qualify a lead before investing time in it",
    },
    {
      type: "p",
      text: "A sales team with no qualification criteria treats every lead the same way: the same number of calls, the same fully built proposal, the same follow-up cadence. The cost doesn't show up in the lead that gets dropped quickly — it shows up in the one that drags on for six weeks until someone finally admits it never had the budget or the authority to decide. Qualifying early isn't about distrusting the lead, it's about treating it as a hypothesis you can confirm or rule out with specific questions, instead of an unknown.",
    },
    {
      type: "h2",
      text: "BANT: the four classic criteria",
    },
    {
      type: "p",
      text: "BANT came out of IBM more than five decades ago and is still the simplest starting point: Budget (is there real budget, or is this still an idea being explored?), Authority (does the person you're talking to decide, or do they need to convince someone else?), Need (is the problem you solve a real priority, or a nice-to-have that can wait?), and Timeline (is there a concrete deadline to solve it, or is it \"at some point\"?). Its strength is speed: four questions are enough to rule out most leads that were never going to move forward. Its limit is that it assumes a linear buying process, and in complex B2B sales with several people influencing the decision, that's rarely the case.",
    },
    {
      type: "h2",
      text: "MEDDIC: when a more granular framework earns its keep",
    },
    {
      type: "p",
      text: "MEDDIC adds three layers BANT doesn't cover: Metrics (what measurable impact is the customer actually expecting, in numbers?), Decision criteria and Decision process (how do they evaluate options, and what approval steps do they go through?), Identify pain (what's the real pain behind the request, beyond what gets said in the first meeting?), plus Economic buyer (who signs off on the spend, which isn't always the same person who has Authority in the BANT sense) and Champion (who inside the account pushes the deal forward when the rep isn't in the room). It earns its keep when the sales cycle is long, several stakeholders are involved, and the average deal size justifies spending more time per qualified lead. For a short, transactional cycle, MEDDIC is usually more process than the deal needs.",
    },
    {
      type: "h2",
      text: "Other variants: CHAMP and GPCTBA/C&I",
    },
    {
      type: "p",
      text: "CHAMP flips BANT's order: it starts with Challenges (the customer's actual problem) and only then looks at Authority, Money, and Prioritization, on the premise that the real pain matters more than confirming who signs the check first. GPCTBA/C&I (Goals, Plans, Challenges, Timeline, Budget, Authority, Negative consequences, Positive implications) is the most extensive version, built for consultative selling where it's worth understanding the cost of not solving the problem and the upside of solving it, not just the hard facts. Neither replaces BANT or MEDDIC for most small businesses — they're variants worth knowing, not a third framework to stack on top.",
    },
    {
      type: "h2",
      text: "Choosing a framework based on your team and your sales cycle",
    },
    {
      type: "p",
      text: "The decision comes down to two variables, not which framework sounds the most professional. First, team size: a one- or two-person team needs something fast to apply on the first call, not a ten-field checklist. Second, how long and complex the sales cycle is: if a single person decides within a few weeks, BANT is enough; if several departments are involved and the process stretches over months, MEDDIC starts to justify the extra effort of filling it out.",
    },
    {
      type: "ul",
      items: [
        "Small team, short cycle, single decision-maker → BANT",
        "Team with multiple reps, long cycle, multiple stakeholders → MEDDIC",
        "Consultative sale where the customer's problem isn't fully clear yet → CHAMP as an initial filter",
      ],
    },
    {
      type: "h2",
      text: "Common mistakes when qualifying leads",
    },
    {
      type: "ul",
      items: [
        "Qualifying once, upfront, and never checking whether the answers changed over time",
        "Treating the framework as a script to read on the first call instead of filling it in as information surfaces across several conversations",
        "Dropping a lead for lacking budget today without recording that the need is real, so it can be revisited later",
        "Over-qualifying: holding a small lead to the same level of detail as a major account, and losing speed where it isn't needed",
      ],
    },
    {
      type: "h2",
      text: "How to keep this from turning into bureaucracy",
    },
    {
      type: "p",
      text: "A qualification framework fails in practice when it turns into a long form nobody ever finishes filling out. It works when the criteria live as simple fields in the CRM (a section with the four or six points of whichever framework you picked), get filled in as the information comes up in real conversations, and serve one concrete purpose: deciding who to call first this week. If the framework isn't helping make that call every week, it's poorly implemented, no matter how complete it looks on paper.",
    },
  ],
  cta: {
    label: "SEE HOW WE STRUCTURE YOUR B2B PROSPECTING",
    href: "/en/presales",
  },
};
