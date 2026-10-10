import type { FaqData } from "./types";

/*
 * EN counterpart of faqs.ts (seo-plan 3.13) — same questions and the same
 * commitments Mariano approved for the ES version on 3/10/2026 (no prices, no
 * promised figures; the free first step is an initial discovery meeting, the
 * full diagnosis is part of the engagement). Keywords from the EN
 * section of documentation/seo/mapa-keywords.md. Rendered by FaqSection.
 */

export const homeFaqEn: FaqData = {
  path: "/en",
  title: "Frequently asked questions about Base Core's commercial consulting",
  items: [
    {
      question: "What is commercial consulting, and what does Base Core do for a small business?",
      answer:
        "Commercial consulting organizes and improves the way a company wins, closes and keeps customers. Base Core works with small and mid-sized B2B companies, meaning businesses that sell to other businesses, with no minimum number of employees or salespeople. It covers the four phases of the sales process (marketing, presales, sales and post-sales) with diagnosis, a roadmap, hands-on implementation and continuous improvement.",
    },
    {
      question: "What does the working process look like?",
      answer:
        "The work moves through four steps: Free Diagnostic, Roadmap, Strategy & Sprints, and Continuous Improvement. In the strategy step we run the full diagnosis and adjust the plan. A Base Core consultant leads the plan, and your company appoints a project owner as their direct counterpart for implementation. The work is organized in sprints of weekly meetings. Throughout the project you can see the status of every task in BaseHub, Base Core's tracking platform, included in the service.",
    },
    {
      question: "What is the free diagnostic, and what happens next?",
      answer:
        "The free diagnostic is a first discovery meeting, at no cost and with no obligation to hire. In it we assess whether the project is viable and present our value proposition; afterwards Base Core sends you a commercial proposal. If you decide to move forward, the full diagnosis (commercial, technology, team or marketing, depending on what the project needs) is part of the engagement and included in the service.",
    },
    {
      question: "How is the consulting priced, and what determines the budget?",
      answer:
        "The budget is set in the commercial proposal we send after the initial discovery meeting, because it depends on the scope of the project. Scope changes, for example, depending on whether it covers marketing, sales and technology or just one of those areas. Specific timelines are set in the work plan, also based on scope.",
    },
    {
      question: "Does it replace my sales manager or complement my team?",
      answer:
        "It complements your sales leadership; it doesn't replace it. Base Core covers the full sales process in a single service, instead of a single piece like an agency or a software tool, and adds the tools, team recruiting and tracking in BaseHub. When the project ends, the processes, tools and tracking stay with your team, which can also sign up for an ongoing continuous improvement plan.",
    },
    {
      question: "Which countries do you work in, and is the service remote?",
      answer:
        "Base Core works remotely with companies in Spain and Latin America, with bases in Buenos Aires and Barcelona. You can reach us through the contact form or either of the two phone numbers on the site.",
    },
  ],
};

export const preventaFaqEn: FaqData = {
  path: "/en/presales",
  title: "Frequently asked questions about B2B lead generation",
  items: [
    {
      question: "What does the B2B lead generation service include?",
      answer:
        "Base Core designs the presales model and your team runs it. The model covers building the target company database, lead qualification, outreach models (personalized emails, sales collateral, cold calls) and appointment setting with your account executive. Everything is organized in a CRM, with minimum fields defined per company and per prospect.",
    },
    {
      question: "How are leads qualified before they reach the sales team?",
      answer:
        "The model first enriches the data (decision-makers, website, social profiles, email verification) and then applies BANT: budget, authority, need and timing. Only prospects who pass that filter get a meeting with the account executive and enter the sales funnel. If you want to compare methods, see our guide on [how to qualify B2B leads](/en/blog/how-to-qualify-b2b-leads).",
    },
    {
      question: "What do I get from presales if my team runs it?",
      answer:
        "You get a presales system ready to operate and a team prepared to run it: the outreach model, the qualification criteria, the prospecting database in the CRM, and the presales team recruited and trained. Base Core doesn't promise a number of meetings; meetings with potential customers are the result of your team running the model.",
    },
    {
      question: "Does Base Core do the prospecting, or does my own team?",
      answer:
        "Your own team does. Base Core designs the outreach model, builds the presales team and trains it. To build it, Base Core defines the job descriptions, recruiting sources, interview guidance and candidate shortlists.",
    },
    {
      question: "What is the difference between inbound and outbound prospecting?",
      answer:
        "Inbound prospecting handles and develops the leads that come to your company; outbound actively goes after the companies that match your ideal customer. Base Core structures both setups: for inbound, the Inbound Sales Representative, Lead Development Representative and Lead Response Representative roles; for outbound, Sales Development Representative, Business Development Representative and Account Development Representative.",
    },
    {
      question: "How do I get started, and how is presales priced?",
      answer:
        "You start with the free diagnostic: a first discovery meeting, at no cost or obligation, where we assess viability and present our value proposition. You then receive a commercial proposal, with a budget based on the scope of the project. Specific timelines are set in the work plan. [Request your free diagnostic](#contacto).",
    },
  ],
};

export const ventaFaqEn: FaqData = {
  path: "/en/sales",
  title: "Frequently asked questions about commercial management",
  items: [
    {
      question: "What does commercial management consulting include?",
      answer:
        "It includes a diagnosis of your current situation, included in the service, and the definition of nine work areas: sales model, pipeline and funnel, targets and objectives, KPIs, forecast, onboarding and supervision models, compensation plans and CRM implementation. The goal is for your team to know, at any moment, what stage each opportunity is in and what drives the close.",
    },
    {
      question: "How is a sales process defined for my company?",
      answer:
        "It starts with interviews and an assessment with your teams to define the sales model: operating approach, priorities, type of sale and methodology. Then the sales process is built, with the pipeline stages, their timeframes, the mandatory requirements to move from one stage to the next and the funnel conversion rates.",
    },
    {
      question: "Which targets, KPIs and forecasts are defined?",
      answer:
        "The overall target, outcome and activity objectives, and the target per salesperson are defined, separating new business, upsell and cross-sell, and recurring revenue. KPIs are chosen to measure what actually informs strategic decisions, and the forecast is built from historical sales data, average customer spend, trends and market data.",
    },
    {
      question: "Can you work with my current sales team?",
      answer:
        "Yes, the work starts from your current team. It includes a training model for salespeople, call audits, sprint-style coaching, a supervision model and meeting and follow-up agendas. Compensation plans are also designed (fixed and variable pay, commissions, bonuses and accelerators) and, if you need to grow, Base Core runs the search for new profiles.",
    },
    {
      question: "Do you also implement the CRM?",
      answer:
        "Yes, CRM implementation is one of the processes we implement in sales consulting: prospecting database, presales and sales processes, activities, tasks and follow-up, quotes, and reports and dashboards. Details on platforms and custom development are on [CRM and AI for businesses](/en/tecnologia).",
    },
    {
      question: "How is commercial management priced, and where do I start?",
      answer:
        "You start with the free diagnostic, a first discovery meeting at no cost or obligation. The budget is set in the commercial proposal we send after that meeting, because it depends on the scope of the project, and specific timelines are set in the work plan. If you move forward, the full commercial diagnosis is included in the service. Request your [free diagnostic](#contacto).",
    },
  ],
};

export const posventaFaqEn: FaqData = {
  path: "/en/post-sales",
  title: "Frequently asked questions about customer success and retention",
  items: [
    {
      question: "What does the customer retention service include?",
      answer:
        "It includes three lines of work: account development (ABC revenue analysis, product mix, ticket size, seasonality and commercial potential), historical measurement of new and lost customers (churn) and portfolio segmentation. On top of that, cross-selling, upselling, win-back, retention and loyalty actions are built.",
    },
    {
      question: "What is customer success, and how is it different from customer loyalty?",
      answer:
        "Customer success is the function dedicated to making sure each customer uses and keeps seeing value in what they bought; loyalty is the goal that function pursues. In the post-sales structure Base Core builds, the retention team includes roles such as Customer Success Manager, Customer Success Rep and Customer Support Executive, and the growth team includes Account Manager and KAM.",
    },
    {
      question: "How do you measure how many customers are lost, and why?",
      answer:
        "Through a historical measurement of new and lost customers (churn): its impact on the target, segmented by type of sale, channel and customer, with provisioning for expected losses. That measurement drives the win-back and retention actions. To go deeper, see our guide on [how to prevent churn](/en/blog/how-to-prevent-churn).",
    },
    {
      question: "How do you grow a customer who is already buying?",
      answer:
        "We analyze how much each customer bills, which products they buy, their ticket size, seasonality and commercial potential, and use that to find room for cross-selling and upselling. The portfolio is segmented with an \"analyze, develop, sustain\" logic, so account management effort goes where it pays off most.",
    },
    {
      question: "Can you build or train my post-sales team?",
      answer:
        "Yes, the post-sales team can be added to the project depending on what the diagnosis shows. Base Core defines the job descriptions, recruiting sources, interview guidance and candidate shortlists for the post-sales team, with two possible structures: retention (customer success and support) and growth (key accounts and channels).",
    },
    {
      question: "How do I get started, and what determines the scope of the post-sales service?",
      answer:
        "You start with the free diagnostic: a first discovery meeting, at no cost or obligation. The budget is set in the commercial proposal we send after that meeting, because it depends on the scope of the project. If you move forward, the corresponding diagnosis is part of the project and included in the service, and timelines are set in the work plan.",
    },
  ],
};

export const marketingFaqEn: FaqData = {
  path: "/en/marketing",
  title: "Frequently asked questions about marketing consulting for small businesses",
  items: [
    {
      question: "What does the marketing service for small businesses include?",
      answer:
        "It includes eight pillars: work plan, creative strategy, AI and software, SEO and AI search, websites, social media, paid media, and graphic design and content. Each pillar starts from defined objectives and metrics, with the Base Core team and your company's project owner.",
    },
    {
      question: "Is Base Core a consultancy or a marketing agency that executes?",
      answer:
        "Base Core executes: besides designing the strategy, it produces the websites, SEO, social media, paid campaigns and design pieces, supported by AI tools. It is a marketing agency with a consulting approach: first the communication concept and target audience are defined, then the campaigns to attract leads are built.",
    },
    {
      question: "How is the work organized, and how are results measured?",
      answer:
        "Everything starts with a work plan: objectives, actions per pillar, a Gantt chart with the schedule, the Base Core team and your company's project owner. Measurement is weekly, with analytics and reporting, and project tracking is visible in BaseHub, Base Core's platform, included in the service.",
    },
    {
      question: "Who pays for paid media?",
      answer:
        "You pay the media spend directly to each platform; Base Core charges for strategy and management. There is no minimum spend required. Base Core builds the campaign strategy and creates and manages the ads on Google, Instagram, Facebook and LinkedIn Ads, with retargeting, A/B testing and ROAS, CPA and cost-per-lead analysis.",
    },
    {
      question: "Do you build websites and do SEO, including for AI search engines?",
      answer:
        "Yes. We build websites and landing pages, multilingual and responsive, with forms, CTAs and a WhatsApp button. SEO includes ranking audits on Google and AI search engines, keywords, technical optimization, schema markup to get cited, and tracking tags and pixels.",
    },
    {
      question: "How is the marketing service priced, and where do I start?",
      answer:
        "You start with the free diagnostic, a first discovery meeting at no cost or obligation. The budget is set in the commercial proposal we send after that meeting, because it depends on the scope of the project, and timelines are set in the work plan. If you move forward, the marketing diagnosis is included in the service. Request your [free diagnostic](#contacto).",
    },
  ],
};

export const tecnologiaFaqEn: FaqData = {
  path: "/en/tecnologia",
  title: "Frequently asked questions about CRM and AI for businesses",
  items: [
    {
      question: "What does a CRM implementation for businesses include?",
      answer:
        "It includes implementing HubSpot, Pipedrive, Zoho or other platforms: setting up the pipeline, stages and exit criteria, automating assignments, follow-ups and alerts, data migration and team adoption. The work builds on prior CRM consulting: the sales process is defined before the tool is installed.",
    },
    {
      question: "Which CRM do you recommend, and who holds the license?",
      answer:
        "There is no ideal CRM for everyone: the choice depends on your sales process, not the brand. You hold the license, in your company's name, and Base Core implements and configures the platform. A CRM reflects a process; it doesn't organize it, which is why the process is defined first. To compare options, see our guide on [which CRM to choose for a small business](/en/blog/which-crm-to-choose-for-a-small-business).",
    },
    {
      question: "What is an AI agent for businesses, and what can it do for my sales team?",
      answer:
        "An AI agent is a system that carries out tasks in a process with some autonomy, following criteria you define. Base Core implements agents to qualify and enrich leads, chatbots and smart first-filter forms, analysis of your database to spot opportunities, and sales content generation. First your team's criteria are made explicit, then they're automated.",
    },
    {
      question: "Which processes should be automated first?",
      answer:
        "The ones that take the most manual time and require the least judgment, and that's decided in a technology diagnosis: tool inventory, mapping of your processes, gaps and priorities by impact and effort. Common automations include lead capture and assignment, follow-up sequences and syncing between CRM, marketing and operations. More on [what to automate with AI in a sales team](/en/blog/what-to-automate-with-ai-in-a-sales-team).",
    },
    {
      question: "Do you build custom management software?",
      answer:
        "Yes. We build commercial, operations or project management systems, client portals, internal apps and dashboards with the KPIs leadership actually uses (pipeline, forecast, stage-to-stage conversion), which can integrate with your CRM, ERP and campaign platforms. The software belongs to your company when the project ends.",
    },
    {
      question: "Where do I start, and how is a technology project priced?",
      answer:
        "You start with the free diagnostic, a first discovery meeting at no cost or obligation. The budget is set in the commercial proposal we send after that meeting, because it depends on the scope of the project. If you move forward, the technology diagnosis (tool inventory, processes and priorities) is part of the project and included in the service. Get in touch through the [contact form](#contacto).",
    },
  ],
};
