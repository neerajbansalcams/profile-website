import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-gradient-to-b from-background to-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-400 mb-10">
              I'm always open to discussing new opportunities, compliance strategies, or how technology can transform financial crime prevention.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center p-4 glass rounded-lg hover:bg-white/5 transition-colors group">
                <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary group-hover:scale-110 transition-transform">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Me</p>
                  <p className="text-lg text-white font-medium">{portfolioData.personalInfo.email}</p>
                </div>
              </a>
              
              <a href={`tel:${portfolioData.personalInfo.phone}`} className="flex items-center p-4 glass rounded-lg hover:bg-white/5 transition-colors group">
                <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary group-hover:scale-110 transition-transform">
                  <Phone />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Me</p>
                  <p className="text-lg text-white font-medium">{portfolioData.personalInfo.phone}</p>
                </div>
              </a>

              <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 glass rounded-lg hover:bg-white/5 transition-colors group">
                <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary group-hover:scale-110 transition-transform">
                  <Linkedin />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="text-lg text-white font-medium">Connect with me</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Name</label>
                  <Input placeholder="Your Name" className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email</label>
                  <Input placeholder="Your Email" className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Subject</label>
                <Input placeholder="Regarding..." className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <Textarea placeholder="Hello Neeraj, I'd like to discuss..." className="min-h-[120px] bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50" />
              </div>
              <Button type="submit" className="w-full bg-primary text-background hover:bg-primary/90 font-semibold py-6">
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
