import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Building2, Cpu, ShieldCheck, Workflow, Globe, BookOpen, Mic2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolioData";
import heroBg from "@/assets/hero-bg.png";

const whoIWorkWith = [
  "Global Banks & Financial Institutions",
  "RegTech Vendors & Solution Providers",
  "Compliance, Risk & Operational Leaders",
];

const expertise = [
  {
    icon: ShieldCheck,
    title: "AML & Financial Crime Transformation",
    desc: "Leading initiatives across AML, KYC, sanctions, and fraud risk.",
  },
  {
    icon: Cpu,
    title: "Compliance Technology & RegTech",
    desc: "Designing and implementing AI- and data-driven compliance frameworks.",
  },
  {
    icon: Building2,
    title: "KYC & Sanctions Controls",
    desc: "Enhancing enterprise monitoring, screening, and client due diligence processes.",
  },
  {
    icon: Workflow,
    title: "Operational & Risk Efficiency",
    desc: "Streamlining workflows and reducing response times through technology.",
  },
  {
    icon: Globe,
    title: "Regulatory Engagement & Thought Leadership",
    desc: "Guiding banks on global and local compliance regulations, including MAS, DFSA, and international frameworks.",
  },
];

const recognition = [
  {
    icon: BookOpen,
    label: "Publications",
    detail: "Featured in GRC Outlook on digital eKYC transformation",
  },
  {
    icon: Mic2,
    label: "Speaker",
    detail: "Singapore Fintech Association · Asia Risk Congress · FinCrime & Cybersecurity Summit · Transform Finance · MoneyLive",
  },
  {
    icon: Trophy,
    label: "Awards",
    detail: "OCBC Group CEO Quality Award for process & technology transformation initiatives",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
      </div>

      {/* ── Above the fold ── */}
      <div className="container relative z-10 px-6 mx-auto grid md:grid-cols-2 gap-12 items-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase border border-primary/20 rounded-full bg-primary/10 backdrop-blur-sm">
            Available for Opportunities
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Financial Crime & AML Transformation Leader |{" "}
            <span className="text-primary">Compliance Technology & RegTech Strategist</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            Helping global banks and financial institutions combat financial crime through AI-enabled compliance, technology transformation, and risk-driven innovation.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary text-background hover:bg-primary/90 font-semibold" asChild>
              <a href="mailto:neerajbansal.mba@gmail.com">
                Connect with Me <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" asChild>
              <a href="/cv.pdf" download>
                Download CV
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" asChild>
              <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative z-10 glass-card rounded-2xl p-1 border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-card/50 rounded-xl overflow-hidden h-full flex items-center justify-center border border-white/5">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏦</div>
                  <h3 className="text-2xl font-bold text-white mb-2">AML & KYC Expert</h3>
                  <p className="text-gray-400">Safeguarding Financial Systems</p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-xl border border-white/10 z-20"
            >
              <span className="text-primary font-bold text-xl">20+ Years</span>
              <p className="text-xs text-gray-400">Global Experience</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-6 glass p-4 rounded-xl border border-white/10 z-20"
            >
              <span className="text-emerald-400 font-bold text-xl">CAMS</span>
              <p className="text-xs text-gray-400">Certified Specialist</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Who I Work With ── */}
      <div className="container relative z-10 px-6 mx-auto mt-8">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-bold text-white mb-5">Who I Work With</h2>
          <div className="flex flex-wrap gap-3">
            {whoIWorkWith.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── What I Do / Expertise ── */}
      <div className="container relative z-10 px-6 mx-auto mt-14">
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-bold text-white mb-6">What I Do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
                className="glass-card rounded-xl p-5 border border-white/10 hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-white leading-snug">{title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Proof / Recognition / Thought Leadership ── */}
      <div className="container relative z-10 px-6 mx-auto mt-14 mb-20">
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Recognition & Thought Leadership</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {recognition.map(({ icon: Icon, label, detail }, i) => (
              <motion.div
                key={label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
                className="glass-card rounded-xl p-5 border border-white/10 hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide">{label}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
