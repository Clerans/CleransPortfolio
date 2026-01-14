import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // Construct the mailto URL
    const mailtoLink = `mailto:michaelclerans03@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open default email client
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "michaelclerans03@gmail.com",
      href: "mailto:michaelclerans03@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Clerans",
      href: "https://github.com/Clerans",
      color: "from-slate-500 to-slate-700",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/michael-clerans",
      href: "https://www.linkedin.com/in/michael-clerans",
      color: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-slate-900 via-blue-950/30 to-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Animated gradient orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-gradient">Get In Touch</h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Feel free to contact me for projects, collaborations, or opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-2xl text-white">Let's Connect</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              I’m always open to discussing new projects, academic collaborations,
              internships, and learning opportunities. Don’t hesitate to reach out.
            </p>

            <div className="space-y-4 mb-8">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:border-cyan-500/50 transition-all group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">{link.label}</div>
                      <div className="text-slate-300 group-hover:text-cyan-400 transition-colors">
                        {link.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Location & Phone */}
            <div className="space-y-3">
              <motion.div
                className="flex items-center gap-3 text-slate-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Sri Lanka</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-slate-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+94 77 245 1682</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-slate-400">
                  This form is for demonstration purposes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-slate-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-950/50 border-slate-700 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-slate-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-950/50 border-slate-700 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm mb-2 text-slate-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Message subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-slate-950/50 border-slate-700 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2 text-slate-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Write your message here..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-slate-950/50 border-slate-700 text-white resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 glow-blue"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
