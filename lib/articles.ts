export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  editorsPick?: boolean;
  body: string; // markdown-ish HTML content
  image?: string;
}

export const articles: Article[] = [
  {
    slug: "malaysia-national-ai-roadmap-2030",
    title: "Malaysia's National AI Roadmap 2030 — What It Means for You",
    category: "Malaysia AI",
    excerpt: "The government has unveiled an ambitious AI roadmap. Here's a plain-English breakdown of what's changing and how it affects businesses and professionals across the region.",
    date: "Jan 2026",
    author: "AISIA Editorial",
    readTime: "6 min read",
    editorsPick: true,
    body: `
<p>The Malaysian government has launched an ambitious National AI Roadmap targeting 2030, outlining how artificial intelligence will reshape the nation's economy, workforce, and public services.</p>

<h2>What's in the Roadmap?</h2>
<p>The roadmap focuses on five key pillars:</p>
<ul>
<li><strong>Talent Development</strong> — Training 50,000 AI-skilled workers by 2028 through university programs and industry partnerships.</li>
<li><strong>Infrastructure</strong> — Building sovereign AI compute capacity with new data centres in Johor and Selangor.</li>
<li><strong>Industry Adoption</strong> — Incentives for SMEs to integrate AI into operations, targeting 30% adoption by 2028.</li>
<li><strong>Governance</strong> — A new AI regulatory framework balancing innovation with ethical standards.</li>
<li><strong>Research & Innovation</strong> — RM500 million allocated to AI research grants and startup incubation.</li>
</ul>

<h2>What It Means for Businesses</h2>
<p>For Malaysian businesses, this roadmap signals significant opportunity — and urgency. Companies that adopt AI early stand to benefit from government incentives, while laggards risk falling behind as competitors automate.</p>

<h2>The Bottom Line</h2>
<p>Malaysia is making its most serious AI push yet. Whether you're a founder, corporate leader, or professional, now is the time to understand how AI fits into your strategy.</p>
`,
  },
  {
    slug: "top-5-ai-tools-malaysian-smes",
    title: "Top 5 AI Tools Malaysian SMEs Are Actually Using",
    category: "Tools & Reviews",
    excerpt: "From automated customer service to financial forecasting — we surveyed 50 local SME owners.",
    date: "Jan 2026",
    author: "AISIA Editorial",
    readTime: "4 min read",
    body: `
<p>We surveyed 50 Malaysian SME owners to find out which AI tools are actually making a difference in their daily operations. Here's what they told us.</p>

<h2>1. ChatGPT / Claude for Customer Support</h2>
<p>Over 60% of respondents use some form of AI chatbot for customer inquiries. The most popular setup: ChatGPT integrated with WhatsApp Business.</p>

<h2>2. Xero + AI for Accounting</h2>
<p>Automated invoice processing and financial forecasting are saving SMEs an average of 8 hours per week.</p>

<h2>3. Canva AI for Marketing</h2>
<p>Malaysian SMEs love Canva's AI features for generating social media content quickly and affordably.</p>

<h2>4. Notion AI for Operations</h2>
<p>Team documentation, SOPs, and meeting summaries — Notion AI is becoming the operational backbone for lean teams.</p>

<h2>5. Google Sheets + AI Add-ons</h2>
<p>Simple but effective. Many SMEs use AI-powered Google Sheets extensions for data analysis and reporting.</p>
`,
  },
  {
    slug: "sea-ai-startup-scene-founders",
    title: "SEA's AI Startup Scene: The Founders Leading the Charge",
    category: "SEA Spotlight",
    excerpt: "Meet the Southeast Asian founders building the next generation of AI-native companies.",
    date: "Jan 2026",
    author: "AISIA Editorial",
    readTime: "5 min read",
    body: `
<p>Southeast Asia's AI startup ecosystem is heating up. From Singapore's deep-tech labs to KL's scrappy bootstrappers, a new generation of founders is building AI-native companies designed for the region.</p>

<h2>The Landscape</h2>
<p>AI startup funding in SEA reached $1.2B in 2025, up 40% from 2024. Singapore leads, but Malaysia, Indonesia, and Vietnam are emerging fast.</p>

<h2>Founders to Watch</h2>
<p>We profiled 10 founders across the region who are building companies that solve uniquely Southeast Asian problems with AI — from multilingual NLP to tropical agriculture optimization.</p>

<h2>What's Different About SEA AI</h2>
<p>Unlike Silicon Valley's focus on frontier models, SEA founders are pragmatic. They build for real constraints: multilingual markets, mobile-first users, and price-sensitive customers.</p>
`,
  },
  {
    slug: "chatgpt-vs-gemini-vs-claude-malaysia",
    title: "ChatGPT vs Gemini vs Claude — Which One for Malaysian Business?",
    category: "Deep Dives",
    excerpt: "A practical, no-nonsense comparison tested against real Malaysian business use cases.",
    date: "Jan 2026",
    author: "AISIA Editorial",
    readTime: "8 min read",
    body: `
<p>We put the three leading AI assistants through their paces on real Malaysian business tasks. Here's what we found.</p>

<h2>The Test</h2>
<p>We tested ChatGPT (GPT-4), Google Gemini, and Anthropic Claude on five tasks: Bahasa Malaysia translation, financial analysis, legal document review, customer email drafting, and code generation.</p>

<h2>Results Summary</h2>
<p><strong>ChatGPT</strong> excels at general-purpose tasks and has the best Bahasa Malaysia support. <strong>Claude</strong> wins on long-form analysis and nuanced reasoning. <strong>Gemini</strong> shines when integrated with Google Workspace.</p>

<h2>Our Recommendation</h2>
<p>There's no single winner. The best choice depends on your primary use case. For most Malaysian businesses, ChatGPT is the safest starting point, but Claude is worth exploring for complex analytical work.</p>
`,
  },
  {
    slug: "grab-airasia-petronas-deploying-ai",
    title: "How Grab, AirAsia, and Petronas Are Deploying AI",
    category: "Interviews",
    excerpt: "We spoke with AI leads at three of Malaysia's biggest corporations about what's working, what failed, and what's next.",
    date: "Jan 2026",
    author: "AISIA Editorial",
    readTime: "7 min read",
    body: `
<p>Malaysia's largest companies are investing heavily in AI. We sat down with the AI leaders at Grab, AirAsia, and Petronas to understand their strategies.</p>

<h2>Grab: AI-First from Day One</h2>
<p>Grab's AI team focuses on demand prediction, fraud detection, and route optimization. Their key insight: AI works best when embedded into existing workflows, not bolted on.</p>

<h2>AirAsia: Customer Experience Revolution</h2>
<p>AirAsia's chatbot handles 80% of customer inquiries. They're now exploring AI for dynamic pricing and predictive maintenance.</p>

<h2>Petronas: AI in Energy</h2>
<p>Petronas uses AI for predictive maintenance across its refineries, claiming a 15% reduction in unplanned downtime since 2024.</p>
`,
  },
  {
    slug: "will-ai-replace-jobs-malaysia",
    title: "Will AI Replace Jobs in Malaysia? The Honest Answer",
    category: "Opinion",
    excerpt: "The fear is real but the picture is nuanced. Here's an evidence-based look at which roles are at risk and which are safe.",
    date: "Jan 2026",
    author: "AISIA Editorial",
    readTime: "5 min read",
    body: `
<p>Every week, another headline screams about AI taking jobs. But what does the evidence actually say for Malaysia's workforce?</p>

<h2>The Nuanced Reality</h2>
<p>Based on our analysis of Malaysia's labor market data, approximately 25% of current tasks (not jobs) are highly automatable. But task automation doesn't equal job elimination — it means job transformation.</p>

<h2>Roles Most at Risk</h2>
<p>Data entry, basic accounting, routine customer service, and simple content creation face the highest automation pressure.</p>

<h2>Roles That Are Safe (For Now)</h2>
<p>Creative strategy, complex negotiation, physical skilled trades, healthcare, and roles requiring deep cultural understanding remain firmly human territory.</p>

<h2>What to Do About It</h2>
<p>The best defense is offense: learn to work with AI tools now. The divide won't be human vs. AI — it will be humans-with-AI vs. humans-without.</p>
`,
  },
  {
    slug: "mdec-ai-accelerator-homegrown-talent",
    title: "Inside MDEC's AI Accelerator: Malaysia's Bet on Homegrown Talent",
    category: "Malaysia AI",
    excerpt: "The Digital Economy Corporation is betting big on nurturing local AI talent. We got an inside look at the latest cohort.",
    date: "Jan 2026",
    author: "AISIA Editorial",
    readTime: "4 min read",
    body: `
<p>MDEC's AI Accelerator program is now in its third cohort, and the results are starting to show. We visited their KL headquarters to meet the latest batch of AI startups.</p>

<h2>The Program</h2>
<p>12 startups selected from 200+ applicants. Six months of mentorship, cloud credits, and investor access. The focus: AI solutions for Southeast Asian markets.</p>

<h2>Standout Startups</h2>
<p>From a Bahasa Malaysia NLP startup to an AI-powered palm oil quality checker, this cohort is solving real problems with local relevance.</p>
`,
  },
  {
    slug: "state-of-ai-adoption-malaysian-enterprises-2026",
    title: "The State of AI Adoption in Malaysian Enterprises 2026",
    category: "Deep Dives",
    excerpt: "Our inaugural survey of 100+ Malaysian companies reveals the gap between AI hype and actual enterprise deployment.",
    date: "Jan 2026",
    author: "AISIA Research",
    readTime: "10 min read",
    body: `
<p>AISIA Club surveyed 112 Malaysian enterprises across 8 industries to understand the real state of AI adoption in the country.</p>

<h2>Key Findings</h2>
<ul>
<li>72% of companies say AI is a "strategic priority" — but only 18% have deployed AI in production.</li>
<li>The #1 barrier is talent, not budget.</li>
<li>Financial services lead adoption; manufacturing lags despite high potential.</li>
<li>Most deployments are in customer service and data analytics.</li>
</ul>

<h2>The Gap</h2>
<p>There's a massive gap between AI ambition and execution. Most companies are stuck in the "proof of concept" phase, unable to scale pilots into production systems.</p>
`,
  },
  {
    slug: "nus-ntu-um-sea-university-ai-race",
    title: "NUS, NTU, and UM: Which SEA University is Winning the AI Race?",
    category: "SEA Spotlight",
    excerpt: "A comparative look at AI research output, talent pipelines, and industry partnerships at top regional universities.",
    date: "Jan 2026",
    author: "AISIA Editorial",
    readTime: "5 min read",
    body: `
<p>We compared the AI programs at the National University of Singapore (NUS), Nanyang Technological University (NTU), and Universiti Malaya (UM) across research output, industry partnerships, and graduate outcomes.</p>

<h2>Research Output</h2>
<p>NUS leads with 450+ AI papers published in 2025. NTU follows closely. UM is growing fast with a 60% increase year-over-year.</p>

<h2>Industry Partnerships</h2>
<p>All three have strong corporate ties, but NUS's proximity to Singapore's tech ecosystem gives it an edge in translating research into startups.</p>

<h2>The Malaysian Angle</h2>
<p>UM's AI program has improved dramatically, and Malaysia's lower cost of living makes it an increasingly attractive option for regional AI talent.</p>
`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
