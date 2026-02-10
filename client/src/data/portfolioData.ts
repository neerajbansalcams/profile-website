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
        title: "Navigating MiCA for ASEAN-based Fintechs: A Comparative Playbook with Singapore's Project Guardian",
        excerpt: "Understanding the regulatory differences between Singapore's Project Guardian and EU's MiCA frameworks: A strategic guide for ASEAN fintech leadership teams.",
        content: `As the Markets in Crypto-Assets (MiCA) regulation reaches full operational status in 2026, the European Union has effectively set a global benchmark for digital asset oversight. For fintechs based in the ASEAN region—particularly those regulated by the Monetary Authority of Singapore (MAS)—this represents both a significant barrier and a strategic opportunity.

The challenge for leadership teams today is understanding where Singapore's "Playbook" approach through Project Guardian aligns with the EU's rigid legislative framework.

## The Core Shift: "Playbooks" vs. "Hard Law"

The most critical difference lies in the regulatory philosophy:

**Singapore (Project Guardian):** MAS takes a collaborative, "learning-by-doing" approach. Project Guardian focuses on open, interoperable networks and uses pilots to develop industry standards for tokenized funds and fixed income. It is a proportional risk-based model where regulation adapts to the specific use case.

**EU (MiCA):** Unlike the pilot-driven nature of Singapore, MiCA is a comprehensive, uniform law. It provides a single "passportable" license across 27 countries but at the cost of high entry barriers and strict, non-negotiable standards for stablecoins and market abuse.

## Key Comparison: Digital Assets and Stablecoins

| Feature | MAS (Singapore) | EU MiCA |
|---------|-----------------|---------|
| **Stablecoin Stance** | Focus on Single-Currency Stablecoins (SCS) with individual risk assessments. | Strict ban on algorithmic stablecoins; rigorous reserve requirements for ARTs/EMTs. |
| **Retail Access** | Strict: Includes knowledge tests for retail traders and a ban on credit card crypto purchases. | Accessible: Focuses on standardized "White Papers" to ensure investors are "better informed". |
| **Interoperability** | Core Objective: Developing "Global Layer One" (GL1) infrastructure for cross-border institutional trading. | Secondary: Focused on internal market integrity and preventing fragmentation within the Eurozone. |

## Strategic Insights for ASEAN Fintechs

### 1. Leverage the "Trust Anchor" Advantage

Under Project Guardian, MAS explores the role of regulated financial institutions as "Trust Anchors" to verify identities and credentials. If your firm is already operating under an MAS Major Payment Institution (MPI) license, you are already meeting the world's most rigorous KYC/AML standards. Use this "Singapore Brand" as a trust signal when applying for a CASP license in the EU.

### 2. Prepare for "Travel Rule" Convergence

Both jurisdictions have now fully enforced the FATF Travel Rule. In 2026, your tech stack must be able to transmit originator and beneficiary data for transactions as low as $0 (Singapore) and €1,000 (EU). Interoperability between your AML tools (like Actimize or NetReveal) and these regulatory rails is no longer optional—it is a license requirement.

### 3. The Tokenization Opportunity

While MiCA provides the rules for trading, Singapore is providing the rules for building. Project Guardian's playbooks for tokenized funds and asset-referenced tokens provide a technical blueprint that can help your firm satisfy MiCA's operational resilience requirements (DORA) more efficiently.

## The Bottom Line

For ASEAN fintechs, the path to 2026 is clear: Singapore is your innovation hub; MiCA is your scale-up destination. By aligning your internal governance with the "institutional-grade rails" promoted by MAS, you are already halfway to satisfying the EU's requirements.`,
        category: "Fintech Regulation",
        publishedDate: "2026-02-01",
        readTime: 5,
        link: "/blog/navigating-mica-for-asean-fintechs",
        author: "Neeraj Bansal"
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
