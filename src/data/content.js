export const company = {
  name: 'ROHAMA Ventures (Pvt) Ltd',
  tagline: 'The Right Place to Grow Your Business',
  descriptor: 'Business & Financial Advisory',
  email: 'info@rohamaventures.com',
  phoneDisplay: '071 89 44 725',
  phoneHref: '+94718944725',
  whatsapp: '94718944725',
  addressLines: ['No. 9/12, Wijithapura,', 'Jayanthi Mawatha, Pelawatta,', 'Sri Lanka'],
  registration: 'PV 00366134',
}

// Replace null values with your official profile URLs when they are available.
export const socialLinks = [
  { label: 'LinkedIn', href: null },
  { label: 'Facebook', href: null },
  { label: 'Instagram', href: null },
]

export const services = [
  {
    slug: 'transaction-advisory', number: '01', title: 'Transaction Advisory',
    short: 'M&A, due diligence and business valuation', accent: 'Transactions',
    intro: 'Independent transaction support that helps buyers, sellers and investors understand risk, value and the decisions required at every stage.',
    details: [
      { title: 'M&A Advisory', description: 'We guide you through the full process of buying, selling, or bringing in a new investor, from finding the right opportunity to closing the deal. Our support helps you understand the risks and value involved at every step, so you can move forward with confidence, not uncertainty.' },
      { title: 'Financial Due Diligence', description: "Before you commit to a deal, we check the target company’s financial records to confirm the numbers are accurate and free of hidden risks. This protects your investment and helps you negotiate from a position of strength." },
      { title: 'Business Valuation', description: 'We assess your company’s finances, assets and market position to determine what your business is really worth. This gives you a clear, reliable figure to support a sale, investment or succession plan.' },
    ],
  },
  {
    slug: 'restructuring-turnaround', number: '02', title: 'Restructuring & Turnaround',
    short: 'Debt restructuring and performance turnaround', accent: 'Recovery',
    intro: 'Practical restructuring and performance improvement support for businesses navigating financial, operational or strategic pressure.',
    details: [
      { title: 'Debt Restructuring', description: 'When loan repayments or supplier obligations are putting pressure on your business, we help you renegotiate terms and rebuild a manageable repayment plan. The aim is to ease immediate pressure while protecting the business long-term.' },
      { title: 'Turnaround Planning', description: 'If your business is underperforming, we identify what is really going wrong — whether it is cash flow, costs or operations — and build a practical plan to stabilise first, then rebuild sustainable performance.' },
      { title: 'Performance Improvement', description: 'We review how your business runs, its costs, processes and overall performance to find where value is being lost. From there, we help you make practical changes that improve margins and efficiency.' },
    ],
  },
  {
    slug: 'financial-management-reporting', number: '03', title: 'Financial & Management Reporting',
    short: 'Reporting systems, analysis and finance function advisory', accent: 'Clarity',
    intro: 'Management-focused reporting and analysis that turns financial information into clear, decision-useful business insight.',
    details: [
      { title: 'Management Reporting', description: 'We set up clear, regular financial reports — weekly, monthly or at the frequency you need — so you always know where your business stands. Reports focus on the numbers that actually matter for your decisions.' },
      { title: 'Financial Analysis', description: 'We look beyond the numbers to explain what is actually driving your results: what is improving, what is slipping and why. This gives you practical insight you can act on.' },
      { title: 'Finance Function Advisory', description: 'As your business grows, we review your finance team, systems and processes to identify gaps and recommend practical improvements, helping the finance function keep pace with the organisation.' },
    ],
  },
  {
    slug: 'corporate-finance-planning', number: '04', title: 'Corporate Financial Planning',
    short: 'Modelling, budgeting and capital allocation', accent: 'Planning',
    intro: 'Structured planning, modelling and capital allocation support to strengthen financial decision-making and resource deployment.',
    details: [
      { title: 'Financial Modelling (Project Appraisal)', description: 'Before you commit money to a new project or investment, we build a clear financial model showing likely costs, returns and risks. Every model is built around your actual business.' },
      { title: 'Budgeting & Planning', description: 'We help you build a realistic budget based on your business’s actual performance and goals, giving you a clear benchmark to track progress and spot problems early.' },
      { title: 'Capital Allocation', description: 'We help you compare investment options, business units or growth opportunities to see where your money can generate the strongest return, using a deliberate and evidence-based approach.' },
    ],
  },
  {
    slug: 'strategic-business-advisory', number: '05', title: 'Strategic Business Advisory',
    short: 'Growth, market entry and business model evaluation', accent: 'Growth',
    intro: 'Commercially grounded strategic advice for businesses evaluating growth, market entry and business model decisions.',
    details: [
      { title: 'Growth Strategy', description: 'We help you identify realistic growth opportunities — new markets, new offerings or scaling up — based on your actual capabilities and resources, weighing risk alongside the upside.' },
      { title: 'Market Entry', description: 'Before you enter a new market or launch a new product, we assess demand, competition and the investment required so you can decide whether and how to move forward with confidence.' },
      { title: 'Business Model Evaluation', description: 'We review how your business generates revenue, your offering, pricing and operations to identify what is working and where adjustments could strengthen the business for where you are heading.' },
    ],
  },
]

export const values = [
  ['01', 'Integrity', 'The highest standards of professional integrity, confidentiality and ethical conduct.'],
  ['02', 'Independence', 'Objective recommendations based on facts, analysis and the client’s best interests.'],
  ['03', 'Professional Excellence', 'Experienced professionals with strong technical knowledge and practical exposure.'],
  ['04', 'Commercial Thinking', 'Focus on commercial realities, not only accounting and financial information.'],
  ['05', 'Confidentiality', 'Sensitive financial, commercial and strategic information handled with discretion.'],
  ['06', 'Practicality', 'Advice designed to be practical, understandable and implementable.'],
  ['07', 'Value Creation', 'Helping clients protect, improve and create sustainable business value.']
]

export const process = [
  { number:'01', title:'Understand', summary:'Client’s business, objectives & expectations', description:'We start by getting to know your business, your goals and what you are hoping to achieve. Every recommendation we make later is built on this understanding.' },
  { number:'02', title:'Analyse', summary:'Financial, operational & commercial information', description:'We review your financial, operational and business information to see the full picture and understand how the business is really performing.' },
  { number:'03', title:'Identify', summary:'Key issues, risks, opportunities & value drivers', description:'Based on our analysis, we pinpoint the key issues, risks and opportunities, along with what is driving value and what may be holding it back.' },
  { number:'04', title:'Develop', summary:'Practical options & recommendations', description:'We turn findings into practical, realistic options tailored to your business, with clear choices to consider rather than vague advice.' },
  { number:'05', title:'Advise', summary:'Present findings to management & stakeholders', description:'We present our findings and recommendations clearly so everyone involved has a shared understanding of the situation and the way forward.' },
  { number:'06', title:'Implement', summary:'Support the client through execution', description:'We do not simply hand over a report. Where needed, we stay involved to help put the plan into action and provide guidance through execution.' },
  { number:'07', title:'Monitor', summary:'KPIs & mechanisms to track progress', description:'We help set up simple ways to track progress so you can see whether the plan is working and adjust quickly when needed.' },
]

export const clients = [
  ['Entrepreneurs & Business Owners', 'Growth, restructuring, valuation, succession & investment decisions.'],
  ['Corporate Organisations', 'Financial analysis, reporting, restructuring & strategic advisory support.'],
  ['Investors', 'Investment evaluation, due diligence, valuation & transaction decisions.'],
  ['Buyers & Sellers', 'Transaction and valuation support during acquisitions, disposals & mergers.'],
  ['Financial Institutions & Lenders', 'Financial assessment, restructuring analysis & viability assessments.'],
  ['Family-Owned Businesses', 'Professionalisation, financial governance, succession & strategic planning.'],
  ['SMEs', 'Access to experienced advisory expertise without an in-house team.']
]

export const engagementModels = [
  ['Project-Based Advisory', 'A defined assignment with agreed scope, deliverables and timeline.'],
  ['Retainer-Based Advisory', 'Ongoing advisory support on an agreed monthly or periodic basis.'],
  ['Transaction-Based Advisory', 'Support for specific acquisitions, mergers, disposals or fundraising.'],
  ['Interim / Fractional Finance', 'Management-level finance support without a full-time senior hire.'],
  ['Special Situations Advisory', 'Focused support for financial, operational or strategic challenges.']
]

export const faqs = [
  ['What does ROHAMA Ventures actually do?', 'ROHAMA Ventures is an independent business and financial advisory firm. We help business owners, investors and organisations understand their numbers, work through big decisions and plan their next steps with confidence. Our work covers financial reporting and planning, restructuring, valuations and growth strategy.'],
  ['Do you only work with large companies, or can smaller businesses use your services too?', 'We work with businesses of all sizes, including SMEs, family-owned businesses, entrepreneurs and investors. Our advice is shaped around your actual size, resources and situation.'],
  ['How is working with ROHAMA Ventures different from hiring a regular accountant or generic consultant?', 'We combine financial expertise and strategic thinking, so recommendations are grounded in your numbers as well as commercial reality. We are independent and, where needed, stay involved beyond the report to support implementation.'],
  ['What business problems do you actually help solve?', 'Common examples include unclear or late financial reporting, tight cash flow, mounting debt pressure, uncertainty about business value, and decisions around growth, investment or a possible sale. A free consultation can help determine whether and how we can assist.'],
  ['What happens when I first get in touch?', 'It starts with a free, no-obligation consultation. We listen to your situation, ask questions and explain whether we can genuinely help. If it is a good fit, we agree the scope of work and next steps before anything begins.'],
  ['How do you decide what my business actually needs?', 'We start by understanding your business, goals and current situation rather than applying a standard package. We then analyse relevant financial and operational information and build recommendations around your circumstances.'],
  ['How long does a typical engagement take?', 'It depends on the scope. A focused piece such as a valuation may take a few weeks, while ongoing reporting or advisory support can continue for months or longer. Timelines are agreed upfront.'],
  ['Is my financial information kept confidential?', 'Yes. Confidentiality is fundamental to how we work. Your information is used only for the purpose of the engagement you have asked us to carry out.'],
  ['Do you only advise, or do you also help implement the plan?', 'We go beyond delivering a report. Where needed, we support implementation and help set up simple ways to track progress afterward.'],
  ['How is your pricing structured?', 'Pricing depends on the scope and nature of the engagement. After your free consultation, we agree a clear upfront fee — such as a fixed project price, monthly retainer or interim assistance rate — with no hidden charges.'],
]

export const insights = [
  { category: 'Valuation', title: 'What Actually Drives Enterprise Value?', read: '6 min read', excerpt: 'A practical framework for thinking about earnings quality, risk, cash generation and strategic value drivers.' },
  { category: 'Transactions', title: 'Preparing for Financial Due Diligence', read: '7 min read', excerpt: 'The information, questions and management preparation that can make a transaction process more effective.' },
  { category: 'Performance', title: 'When Management Reporting Stops Being Useful', read: '5 min read', excerpt: 'How to move from historic reporting toward clear, decision-useful management insight.' }
]
