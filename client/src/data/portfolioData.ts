import { Briefcase, GraduationCap, Award, Globe, Code, Cpu, Database, ShieldCheck, Users } from "lucide-react";

export const portfolioData = {
  personalInfo: {
    name: "Neeraj Bansal",
    title: "Business Architect | AML | KYC | Anti-Fraud | RegTech",
    tagline: "Enabling businesses to find the perfect blend of technology solutions and processes to combat financial crime.",
    email: "contact@neeraj-bansal.com",
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
      "Digital Identity",
      "Data Security",
      "Fraud Prevention",
      "Fintech Regulation",
      "AI Enthusiast"
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
        title: "The $43B “Phantom Bitcoin” Incident is a Wake-up Call for Compliance",
        excerpt: "South Korean exchange Bithumb mistakenly credited hundreds of users with massive Bitcoin balances—totaling 620,000 BTC—instead of a small promotional reward",
        content: "Full article content here",
        category: "DigitalAssets",
        publishedDate: "2026-02-18",
        readTime: 5,
        link: "https://www.linkedin.com/pulse/why-43b-phantom-bitcoin-incident-wake-up-call-neeraj-bansal-ac8kc/",
        author: "Neeraj Bansal"
      },
      {
        id: 4,
        title: "Identity Is Becoming Control Architecture — Not Just Login",
        excerpt: "Sharing a perspective on how EU’s wallet model and Singapore’s Myinfo approach represent two different control architectures for Digital Trust.",
        content: "Full article content here",
        category: "Digital Identity",
        publishedDate: "2026-02-24",
        readTime: 4,
        link: "https://www.linkedin.com/pulse/identity-becoming-control-architecture-just-login-neeraj-bansal-memic",
        author: "Neeraj Bansal"
      },
      {
        id: 5,
        title: " 1 Billion Records Exposed... or was it? Lessons from the Adverse Media Screening",
        excerpt: "The IDMERIT case study proves that in 2026, adverse media screening is no longer just about finding news—it’s about verifying it.",
        content: "Full article content here",
        category: "Data Security",
        publishedDate: "2026-03-04",
        readTime: 7,
        link: "https://www.linkedin.com/pulse/when-data-breach-both-true-fake-lesson-adverse-media-screening-f3r3c/?trackingId=tyMazRMWTca6qFak1qIhgQ%3D%3D",
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
      },
      {
        id: 8,
        title: "The Claude Agent Tsunami: Why My Usual Way of Using AI Stopped Working",
        excerpt: "I thought I was good at using AI. Then I started hitting a ceiling—more rework, more loops, more frustration. Here's what actually changed when I stopped prompting and started orchestrating.",
        category: "AI Enthusiast",
        publishedDate: "2026-04-21",
        readTime: 4,
        author: "Neeraj Bansal",
        link: "/blog/claude-agent-tsunami",
        content: `
          <p class="lead">Over the past few weeks, I've been spending a lot more time with AI models—specifically Claude. At first, it felt straightforward: ask something, get an answer, move on.</p>

          <p>But after a while, something started to feel off. I found myself reworking outputs more often than I used to. Missing small but critical edge cases. Going back and forth in loops that didn't seem to lead anywhere productive.</p>

          <p>The frustrating part? It wasn't that the tool lacked capability. It felt more like <strong>I wasn't using it the right way.</strong></p>

          <h2>The Slow Creep of "Good Enough"</h2>
          <p>There's a comfortable trap with AI tools. You get results fast. The outputs look reasonable. And so you keep going—ask, get, move on—without pausing to question whether the approach itself could be better.</p>
          <p>I had fallen into exactly that trap. My prompts were fine. My questions were clear. But I was treating a sophisticated system like a slightly smarter search engine.</p>

          <h2>The Shift to Orchestration</h2>
          <p>What changed things for me wasn't a new technique. It was a shift in posture. Instead of jumping straight into execution, I started:</p>
          <ul>
            <li><strong>Thinking</strong> through the problem from multiple angles before typing anything.</li>
            <li><strong>Structuring</strong> what I actually wanted as an outcome—not just what I wanted to ask.</li>
            <li><strong>Breaking</strong> complex tasks into distinct, sequential steps rather than one large request.</li>
          </ul>
          <p>The results were noticeably different. Fewer surprises. More consistency. A lot less rework.</p>

          <h2>Where Claude Agents Entered the Picture</h2>
          <p>As I explored this shift, I realized that what I was doing had a name: <strong>orchestration</strong>. I stopped seeing Claude as a single chatbot and started seeing it as a suite of specialized capabilities—each suited to a different kind of thinking.</p>

          <p>Whether it's brainstorming trade-offs, reviewing code, or checking security implications, each task calls for a fundamentally different mode of engagement. There are specific "Agentic" roles that are better suited for each phase of work:</p>

          <div class="blog-grid">
            <div class="blog-card">
              <span class="blog-card-label">🧠 The Thinker</span>
              <p>Explores the problem space before any commitment to a path.</p>
            </div>
            <div class="blog-card">
              <span class="blog-card-label">📋 The Planner</span>
              <p>Structures the approach and maps out the steps.</p>
            </div>
            <div class="blog-card">
              <span class="blog-card-label">🛠️ The Builder</span>
              <p>Executes with precision once the path is clear.</p>
            </div>
          </div>

          <p>I started organizing these modes for myself—mapping out what kinds of specialized skills exist within Claude, when to deploy each one, and how to transition between them without losing momentum.</p>

          <h2>If You've Hit the Same Ceiling</h2>
          <p>If your AI outputs feel "good but not great," you may not need better prompts. You may need a better framework for thinking about <em>what kind of thinking</em> you're asking the AI to do.</p>

          <p>That distinction—between prompting and orchestrating—is what I've been mapping out. And the depth of what's available is more than I initially expected.</p>

          <div class="blog-cta">
            <h2>What's Next</h2>
            <p>I've spent the last few weeks documenting the full landscape: 65+ specialized Claude skills across 9 distinct categories. In my next post, I break down the framework—and why the concept of "slash commands" changes everything.</p>
            <a href="/blog/stop-prompting-start-orchestrating" class="cta-link">
              Read Part 2: Stop Prompting, Start Orchestrating →
            </a>
          </div>
        `
      },
      {
        id: 9,
        title: "Stop Prompting, Start Orchestrating: The Claude Agent Shift",
        excerpt: "Prompting is a conversation. Orchestration is a system. After mapping 65+ specialized Claude skills across 9 categories, here's the framework I use to get consistently high-quality outputs.",
        category: "AI Enthusiast",
        publishedDate: "2026-04-23",
        readTime: 5,
        author: "Neeraj Bansal",
        link: "/blog/stop-prompting-start-orchestrating",
        content: `
          <p class="lead">Prompting is a conversation. Orchestration is a system.</p>

          <p>That single distinction took me longer to internalize than I'd like to admit. Once it clicked, my entire approach to working with AI changed—from reactive to deliberate, from "let's see what comes out" to "I know exactly what I need from this interaction."</p>

          <h2>Building the Map</h2>
          <p>After writing about hitting the ceiling with standard prompting (<a href="/blog/claude-agent-tsunami">read Part 1 here</a>), I decided to go deeper. I spent several weeks systematically mapping out the Claude agent ecosystem.</p>

          <p>What I found was more structured than I expected: <strong>65+ specialized skills</strong> organized across <strong>9 distinct categories</strong>, each designed for a specific phase of work. This isn't just a list of commands—it's an entire operating model for how complex tasks should be approached.</p>

          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>What It Handles</th>
                <th>Example Skills</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Superpowers</strong></td>
                <td>Core cognitive workflows</td>
                <td>Brainstorming, TDD, Debugging, Planning</td>
              </tr>
              <tr>
                <td><strong>Frontend Design</strong></td>
                <td>UI/UX implementation</td>
                <td>Design systems, component generation</td>
              </tr>
              <tr>
                <td><strong>Security</strong></td>
                <td>Vulnerability &amp; risk review</td>
                <td>CSO mode, security review, guard</td>
              </tr>
              <tr>
                <td><strong>Quality Assurance</strong></td>
                <td>Testing &amp; validation</td>
                <td>QA, health checks, canary</td>
              </tr>
              <tr>
                <td><strong>Code Review</strong></td>
                <td>Pre-ship analysis</td>
                <td>PR review, receiving feedback, simplify</td>
              </tr>
            </tbody>
          </table>

          <h2>The Framework in Practice</h2>
          <p>The core idea is deceptively simple: <strong>you don't just "talk" to the AI—you assign it a specific role based on the phase of work you are in.</strong></p>

          <h3>Phase 1: The Brainstormer</h3>
          <p>Before writing a single line of code or committing to a direction, you engage the brainstorming skill. It forces a structured exploration of trade-offs, risks, and alternative approaches. I've caught more architectural problems in a five-minute brainstorm than I ever caught in code review.</p>

          <h3>Phase 2: The Architect</h3>
          <p>Once direction is clear, the planning skills take over. This is where implementation plans are structured, phased, and validated against constraints before any execution begins. No more "figure it out as I go."</p>

          <h3>Phase 3: The Builder + Reviewer</h3>
          <p>Execution follows a structured path—and critically, review happens before shipping, not after. The code-review and verification skills are specifically designed to catch what gets missed in the heat of building.</p>

          <h2>What Changed in April 2026</h2>
          <p>The reference I've built covers the full landscape as of April 2026, including <strong>16 new skills</strong> added in the latest update. What's notable about this generation of skills is how precisely they're scoped—each one has a defined trigger, a specific purpose, and a clear handoff to the next phase.</p>

          <p>If you can identify which mode you're in at any moment, you stop fighting the tool and start leading it. The harder question—which took me longer to figure out—is how to actually <em>embed</em> these modes into a real working day without breaking flow. That's what I cover in <a href="/blog/claude-agents-in-my-workflow">the next piece</a>: the specific slash commands I reach for most, and a downloadable offline copy of the full reference.</p>

          <div class="blog-cta">
            <h2>The Full Reference</h2>
            <p>I've hosted the complete interactive reference—all 65+ skills with descriptions, access methods, and category breakdowns—on this site. It's designed to be used as a side-by-side guide while you work.</p>
            <p><em>Pro tip: bookmark it now. It's the kind of resource that's most useful when you need it mid-session, not when you're searching for it.</em></p>
            <a href="/agents-reference-v2.html" target="_blank" rel="noopener noreferrer" class="cta-link">
              Explore the Full Claude Agents Reference →
            </a>
          </div>
        `
      },
      {
        id: 10,
        title: "How I'm Starting to Use Claude Agents in My Workflow",
        excerpt: "Moving from 'Ask and Adjust' to slash commands changed how I work with AI. Here's the practical breakdown—plus a downloadable version of the reference guide to keep offline.",
        category: "AI Enthusiast",
        publishedDate: "2026-04-25",
        readTime: 4,
        author: "Neeraj Bansal",
        link: "/blog/claude-agents-in-my-workflow",
        content: `
          <p class="lead">One thing I've been focused on lately isn't just using AI—it's using it <em>efficiently</em>. There's a meaningful difference.</p>

          <p>My earlier approach was what I'd call "Ask and Adjust." Ask something broad, see what comes back, adjust based on what's off. It worked. But it was slow, reactive, and left a lot of quality on the table.</p>

          <p>Over the past few weeks—as I documented in <a href="/blog/claude-agent-tsunami">Part 1</a> and <a href="/blog/stop-prompting-start-orchestrating">Part 2</a> of this series—I've been mapping out a more deliberate approach. This is where it gets practical.</p>

          <h2>The Slash Command Breakthrough</h2>
          <p>The single biggest change to my workflow was moving toward <strong>slash commands</strong>—specific triggers that activate a particular skill or mode within Claude.</p>

          <p>Instead of writing a long, context-heavy paragraph hoping the AI infers what I need, I now use precise entry points:</p>

          <div class="blog-grid">
            <div class="blog-card">
              <span class="blog-card-label"><code>/brainstorm</code></span>
              <p>Use before writing a single line. Forces structured exploration of trade-offs and edge cases first.</p>
            </div>
            <div class="blog-card">
              <span class="blog-card-label"><code>/write-plan</code></span>
              <p>Creates a phased implementation plan before execution begins. Kills "figure it out as I go."</p>
            </div>
            <div class="blog-card">
              <span class="blog-card-label"><code>/code-review</code></span>
              <p>Pre-ship review that catches what the builder mindset misses.</p>
            </div>
            <div class="blog-card">
              <span class="blog-card-label"><code>/investigate</code></span>
              <p>Systematic debugging with root cause analysis—not just symptom patching.</p>
            </div>
          </div>

          <p>In the full reference I've built, I've documented <strong>9 slash commands</strong> that cover the most high-value tasks across the development and thinking workflow.</p>

          <h2>How I Actually Use It Day-to-Day</h2>

          <h3>1. Keep it open as a side panel</h3>
          <p>I keep the reference open in a browser tab or as a split window while working. When I'm about to start a new task, I take 10 seconds to identify which phase I'm in (brainstorming? building? reviewing?) and pick the right skill accordingly.</p>

          <h3>2. Match the skill to the phase</h3>
          <p>This sounds obvious, but it's easy to skip. The difference between using a "builder" skill when you're still in the thinking phase—versus using a "brainstormer" to pre-empt problems before they happen—is enormous in terms of output quality.</p>

          <h3>3. Use one-click copy for commands</h3>
          <p>The reference has copy buttons for each command. One click, paste into Claude, and you're in the right mode immediately. No typing, no guessing at syntax.</p>

          <h2>What This Changed</h2>
          <p>The shift from "Ask and Adjust" to orchestrated slash commands reduced my rework significantly. More importantly, it changed the <em>quality floor</em>—even my average outputs improved, because the worst outputs were the ones that came from using the wrong mode for the task.</p>

          <p>If you've been treating Claude as a faster autocomplete, it's worth spending 30 minutes with the full reference. The categories alone will reframe how you think about what's possible.</p>

          <div class="blog-cta">
            <h2>📥 Take the Reference Offline</h2>
            <p>The complete interactive reference—65+ skills, 9 categories, 9 slash commands—is available on this site. You can also download a standalone HTML version to keep locally in your dev environment. Open it in any browser alongside your work. No internet required once downloaded.</p>
            <a href="/agents-reference-v2.html" target="_blank" rel="noopener noreferrer" class="cta-link">View the Reference →</a>
            <br>
            <a href="/agents-reference-v2.html" download="claude-agents-reference-v2.html" class="cta-btn">↓ Download Standalone HTML</a>
          </div>
        `
      }
    ]
  }
};