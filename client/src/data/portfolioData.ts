import { Briefcase, GraduationCap, Award, Globe, Code, Cpu, Database, ShieldCheck, Users } from "lucide-react";

export const portfolioData = {
  personalInfo: {
    name: "Neeraj Bansal",
    title: "Business Architect | AML | KYC | Anti-Fraud | RegTech",
    tagline: "Enabling businesses to find the perfect blend of technology solutions and processes to combat financial crime.",
    email: "neerajbansal.mba@gmail.com",
    phone: "+65 8620 4414",
    location: "Singapore",
    linkedin: "https://www.linkedin.com/in/neeraj-bansal-sg",
    summary: "My name is Neeraj Bansal, and I am a business graduate with an Anti-Money Laundering (AML) certification. With over a decade of experience in the AML domain, I am passionate about enabling businesses to find the perfect blend of technology solutions and processes to combat financial crime. Currently, I am working at OCBC Bank, focusing on technology solutions within the Financial Crime Compliance (FCC) space.",
  },
  experience: [
    {
      company: "OCBC Bank",
      role: "Assistant Vice President",
      period: "August 2018 - Present",
      location: "Singapore",
      description: "Senior AML SME & Financial Crime Transformation Lead. Trusted AML advisor to senior stakeholders on enterprise-wide AML and sanctions risk assessments. Leading regulatory-driven remediation programs and advising on AML operating model optimization.",
      skills: ["Digital Transformation", "RegTech", "Fintech", "AML FCC", "Leadership"]
    },
    {
      company: "Citi (Alten Calsoft)",
      role: "Senior AML Mantas Consultant",
      period: "May 2017 - August 2018",
      location: "Singapore",
      description: "Conducted independent assessments of transaction monitoring models, customer segmentation logic, and alert risk scoring. Advised Compliance leadership on model validation outcomes.",
      skills: ["Model Validation", "Mantas", "AML Advisory", "Team Leadership"]
    },
    {
      company: "Groupe Crédit Agricole (Comtel)",
      role: "Senior Business Analyst in Compliance",
      period: "December 2015 - December 2016",
      location: "Singapore",
      description: "Advised Global Financial Crime Compliance teams on transaction monitoring risk rating and alert optimization using Actimize SAM. Achieved 40% reduction in non-risk-relevant alerts.",
      skills: ["Actimize SAM", "Alert Optimization", "Compliance"]
    },
    {
      company: "Wipro Technologies",
      role: "Project Management Consultant",
      period: "August 2011 - November 2015",
      location: "Singapore",
      description: "Led client-facing consulting engagements for fraud monitoring and AML-related initiatives. Managed offshore and onshore teams delivering regulatory initiatives.",
      skills: ["Fraud Risk", "Consulting", "Project Management"]
    },
    {
      company: "Bank of America",
      role: "Analyst",
      period: "June 2010 - July 2011",
      location: "India",
      description: "Supported large-scale credit card platform migration for Merrill Lynch card portfolios. Gained deep exposure to payments and card lifecycle.",
      skills: ["Cards & Payments", "Platform Migration"]
    },
    {
      company: "UHG",
      role: "Sr. Software Engineer",
      period: "July 2007 - July 2010",
      location: "India",
      description: "Delivered complex enterprise solutions in regulated environments.",
      skills: ["Software Engineering", "Enterprise Solutions"]
    },
    {
      company: "Capgemini",
      role: "Associate Consultant",
      period: "January 2006 - June 2007",
      location: "India",
      description: "Worked on Chip & PIN card programs, contributing to design, testing, and production support.",
      skills: ["Cards Domain", "Consulting"]
    }
  ],
  education: [
    {
      institution: "SP Jain School of Global Management",
      degree: "Master's degree, Business Administration and Management",
      location: "Dubai, Mumbai, Singapore & Sydney",
      year: "2011" 
    },
    {
      institution: "Staffordshire University",
      degree: "Bachelor of Engineering - BE (Hons)",
      location: "UK"
    },
    {
      institution: "Birla Institute of Technology, Mesra",
      degree: "Bachelor's degree, Computer Science",
      location: "India"
    }
  ],
  certifications: [
    "Certified Anti-Money Laundering Specialist (CAMS)",
    "SAFe Scrum Master (SSM)",
    "Certified Scrum Product Owner (CSPO)",
    "Human Centered Design for Finance Professionals",
    "AML V2 Foundation",
    "Interactive Machine Learning in SAS Viya",
    "Payments in Digital Finance"
  ],
  skills: [
    { category: "Domain Expertise", items: ["AML/KYC", "Financial Crime Compliance", "Sanctions Screening", "Transaction Monitoring", "Fraud Risk", "Regulatory Remediation"] },
    { category: "Technology", items: ["SAS Viya", "Machine Learning", "Oracle Mantas", "Actimize", "NetReveal", "Digital Transformation", "RegTech"] },
    { category: "Leadership", items: ["Stakeholder Management", "Team Leadership", "Strategic Advisory", "Program Governance", "Vendor Management"] },
    { category: "Languages", items: ["English", "Hindi"] }
  ],
  awards: [
    "OCBC Group CEO Quality Award",
    "Excellent Service Award (Silver)",
    "Excellent Service Award (Star)"
  ],
  blog: {
    categories: [
      "AML/KYC",
      "RegTech",
      "Digital Transformation",
      "Compliance",
      "Fraud Prevention",
      "Fintech Regulation"
    ],
    articles: [
      {
        id: 1,
        title: "Navigating MiCA for ASEAN Fintechs: Bridging the 2026 Regulatory Divide",
        excerpt: "As MiCA reaches full operational status in 2026, learn how ASEAN fintechs can leverage Singapore's Project Guardian as a strategic blueprint for EU expansion.",
        category: "Fintech Regulation",
        publishedDate: "2026-02-11",
        readTime: 6,
        author: "Neeraj Bansal",
        link: "/blog/navigating-mica-asean-fintechs",
        content: `
          <p class="lead">As we enter 2026, the global digital asset landscape has reached a historic inflection point. With the <strong>Markets in Crypto-Assets (MiCA)</strong> regulation now fully operational across the European Union, the "wild west" era is over. For ASEAN fintechs—especially those operating under the watchful eye of the <strong>Monetary Authority of Singapore (MAS)</strong>—this is a pivotal moment.</p>

          <p>The challenge for leadership teams today is understanding where Singapore's "Playbook" approach through Project Guardian aligns with the EU's rigid legislative framework.</p>

          <h2 class="text-2xl font-bold mt-8 mb-4 text-primary">The Core Shift: "Playbooks" vs. "Hard Law"</h2>
          <p>The most critical difference lies in the regulatory philosophy:</p>
          <ul>
            <li><strong>Singapore (The Laboratory):</strong> Through <strong>Project Guardian</strong>, MAS has championed a "learning-by-doing" philosophy. It is an iterative, risk-based model that prioritizes interoperability and institutional-grade tokenization.</li>
            <li><strong>EU (The Fortress):</strong> MiCA is a comprehensive, uniform law. While it offers a "passportable" license across 27 countries, it demands high entry barriers and strict, non-negotiable standards for stablecoins.</li>
          </ul>

          <h2 class="text-2xl font-bold mt-8 mb-4 text-primary">Strategic Comparison</h2>
          <div class="overflow-x-auto my-6">
            <table class="min-w-full border border-white/10 text-sm">
              <thead>
                <tr class="bg-white/5">
                  <th class="border border-white/10 p-2">Feature</th>
                  <th class="border border-white/10 p-2">MAS (Singapore)</th>
                  <th class="border border-white/10 p-2">EU MiCA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-white/10 p-2 font-bold">Stablecoins</td>
                  <td class="border border-white/10 p-2">Individual risk assessments for Single-Currency Stablecoins (SCS).</td>
                  <td class="border border-white/10 p-2">Strict ban on algorithmic models; rigorous reserve requirements.</td>
                </tr>
                <tr>
                  <td class="border border-white/10 p-2 font-bold">Retail Access</td>
                  <td class="border border-white/10 p-2">Strict friction: Knowledge tests and credit card crypto bans.</td>
                  <td class="border border-white/10 p-2">Accessible: Standardized "White Papers" for informed investors.</td>
                </tr>
                <tr>
                  <td class="border border-white/10 p-2 font-bold">Interoperability</td>
                  <td class="border border-white/10 p-2">Core Objective: Developing "Global Layer One" infrastructure.</td>
                  <td class="border border-white/10 p-2">Secondary: Focused on preventing market fragmentation.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 class="text-2xl font-bold mt-8 mb-4 text-primary">Strategic Insights for ASEAN Fintechs</h2>

          <h3 class="text-xl font-semibold mt-6 mb-2">1. Leverage the "Trust Anchor" Advantage</h3>
          <p>Under Project Guardian, your firm acts as a <strong>"Trust Anchor."</strong> If you hold an MAS Major Payment Institution (MPI) license, you are already meeting the world's most rigorous KYC/AML standards. Use this "Singapore Brand" as a premium trust signal when applying for a CASP license in the EU.</p>

          <h3 class="text-xl font-semibold mt-6 mb-2">2. Prepare for "Travel Rule" Convergence</h3>
          <p>In 2026, your tech stack must transmit data for transactions as low as $0 (Singapore) and €1,000 (EU). Interoperability between your AML tools (like Actimize or NetReveal) and these regulatory rails is no longer optional—it is a license requirement.</p>

          <h3 class="text-xl font-semibold mt-6 mb-2">3. The Tokenization Opportunity</h3>
          <p>While MiCA provides the rules for trading, Singapore provides the rules for building. Project Guardian's playbooks for tokenized funds offer a technical blueprint that can help satisfy the EU's <strong>Digital Operational Resilience Act (DORA)</strong> requirements efficiently.</p>

          <div class="bg-primary/10 p-6 rounded-lg mt-10 border border-primary/20">
            <h2 class="text-xl font-bold mb-2">The Bottom Line</h2>
            <p class="mb-0">For ASEAN fintechs, the path to 2026 is clear: <strong>Singapore is your innovation hub; MiCA is your scale-up destination.</strong> By aligning your internal governance with MAS's institutional rails, you are already halfway to satisfying the EU's requirements.</p>
          </div>
        `
      },
      {
        id: 2,
        title: "The Evolution of AML/KYC in the Digital Age",
        excerpt: "Unlocking the Potential: Approaching Digital eKYC Transformation",
        content: "Full article content here",
        category: "AML/KYC",
        publishedDate: "2024-12-15",
        readTime: 6,
        link: "https://grcoutlook.com/unlocking-the-potential-approaching-digital-ekyc-transformation/",
        author: "Neeraj Bansal"
      },
      {
        id: 3,
        title: "Why RegTech Solutions are Critical for Financial Crime Prevention",
        excerpt: "Understanding how regulatory technology solutions help financial institutions combat money laundering, fraud, and other financial crimes more effectively.",
        content: "Full article content here",
        category: "RegTech",
        publishedDate: "2024-12-08",
        readTime: 5,
        link: "https://linkedin.com/feed",
        author: "Neeraj Bansal"
      },
      {
        id: 4,
        title: "Digital Transformation in Financial Crime Compliance",
        excerpt: "A comprehensive guide on implementing digital transformation initiatives within compliance departments to enhance efficiency and reduce operational risk.",
        content: "Full article content here",
        category: "Digital Transformation",
        publishedDate: "2024-11-30",
        readTime: 8,
        link: "https://linkedin.com/feed",
        author: "Neeraj Bansal"
      },
      {
        id: 5,
        title: "Machine Learning in Transaction Monitoring: Benefits and Challenges",
        excerpt: "Discover how machine learning models are improving transaction monitoring systems and the challenges organizations face in deployment.",
        content: "Full article content here",
        category: "RegTech",
        publishedDate: "2024-11-22",
        readTime: 7,
        link: "https://linkedin.com/feed",
        author: "Neeraj Bansal"
      },
      {
        id: 6,
        title: "Navigating Sanctions Screening: Best Practices for 2024",
        excerpt: "Essential strategies for implementing effective sanctions screening programs while maintaining operational efficiency in compliance teams.",
        content: "Full article content here",
        category: "Compliance",
        publishedDate: "2024-11-15",
        readTime: 6,
        link: "https://linkedin.com/feed",
        author: "Neeraj Bansal"
      },
      {
        id: 7,
        title: "Emerging Fraud Patterns: What Financial Institutions Need to Know",
        excerpt: "An analysis of emerging fraud patterns in 2024 and recommendations for financial institutions to strengthen their fraud prevention strategies.",
        content: "Full article content here",
        category: "Fraud Prevention",
        publishedDate: "2024-11-08",
        readTime: 5,
        link: "https://linkedin.com/feed",
        author: "Neeraj Bansal"
      }
    ]
  }
};