import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolioData";
import heroBg from "@/assets/hero-bg.png"; // We'll use this generated image

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase border border-primary/20 rounded-full bg-primary/10 backdrop-blur-sm">
            Available for Opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-400">
              {portfolioData.personalInfo.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            {portfolioData.personalInfo.title}
          </p>
          <p className="text-gray-500 mb-10 max-w-md">
            {portfolioData.personalInfo.tagline}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary text-background hover:bg-primary/90 font-semibold" asChild>
              <a href="#contact">
                Contact Me <ArrowRight className="ml-2 w-4 h-4" />
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
          {/* Abstract geometric decoration representing structure/network */}
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
            
            {/* Floating cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-xl border border-white/10 z-20"
            >
              <span className="text-primary font-bold text-xl">18+ Years</span>
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
