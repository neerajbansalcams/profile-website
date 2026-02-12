import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    if (!name || !email || !subject || !message) {
      toast.toast({ title: "Please fill out all fields.", variant: "destructive" });
      return false;
    }
    // simple email regex
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      toast.toast({ title: "Please enter a valid email address.", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      toast.toast({ title: "Message sent successfully!", variant: "default" });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.toast({ title: "Failed to send message.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Name</label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email</label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Subject</label>
                <Input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Regarding..."
                  className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello Neeraj, I'd like to discuss..."
                  className="min-h-[120px] bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-primary/50"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-background hover:bg-primary/90 font-semibold py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
