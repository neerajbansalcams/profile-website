import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import profilePic from "@/assets/Neeraj_Profile_pic_1770165592876.jpeg";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-600 rounded-2xl opacity-30 blur-xl transform rotate-6"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 glass shadow-2xl">
                <img 
                  src={profilePic} 
                  alt="Neeraj Bansal" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Senior AML SME & Financial Crime Transformation Lead
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                {portfolioData.personalInfo.summary}
              </p>
              <p>
                I have consistently demonstrated my ability to bridge the gap between regulatory expectations, business strategy, and scalable technology solutions. My deep subject matter expertise spans AML, PEP & sanctions screening, transaction monitoring, CDD/EDD, and financial crime technology.
              </p>
              <p>
                Throughout my career at leading institutions like OCBC Bank, Citi, and Crédit Agricole, I've led high-impact transformation initiatives and regulatory remediation programs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {portfolioData.skills[3].items.map((lang, idx) => ( // Languages
                 <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-white font-medium">{lang}</span>
                 </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
