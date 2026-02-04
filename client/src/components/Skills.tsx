import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { CheckCircle2, Award } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Skills Column */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Core Competencies</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </motion.div>

            <div className="space-y-8">
              {portfolioData.skills.map((category, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-primary mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((skill, i) => (
                      <div key={i} className="flex items-center bg-white/5 border border-white/5 rounded-lg px-4 py-2 hover:border-primary/30 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                        <span className="text-gray-200 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Awards Column */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Certifications & Awards</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </motion.div>

            <div className="space-y-6">
              {portfolioData.certifications.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-4 rounded-lg flex items-center space-x-4"
                >
                  <div className="p-2 bg-primary/10 rounded-full text-primary">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-gray-200 font-medium">{cert}</span>
                </motion.div>
              ))}
              
              {/* Separator for Awards */}
              <div className="my-8 border-t border-white/10"></div>
              
              <h3 className="text-xl font-semibold text-white mb-4">Honors & Awards</h3>
              {portfolioData.awards.map((award, idx) => (
                <div key={idx} className="flex items-start mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3"></div>
                  <span className="text-gray-300">{award}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
