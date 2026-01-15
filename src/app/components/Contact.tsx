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

    const mailtoLink = `mailto:michaelclerans03@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Kurunegala, Sri Lanka",
    },
    {
      icon: Mail,
      label: "Email",
      value: "michaelclerans03@gmail.com",
      href: "mailto:michaelclerans03@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 77 245 1682",
      href: "tel:+94772451682",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Clerans",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/michael-clerans",
    },
    {
      icon: ({ className }: { className?: string }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M12 11c0 4.97-4.03 9-9 9l-3-9 3-9c4.97 0 9 4.03 9 9Z" />
          <path d="M19 11c0 4.42-3.13 8-7 8l-2-8 2-8c3.87 0 7 3.58 7 8Z" />
          <path d="M22 11c0 3.31-1.34 6-3 6l-1-6 1-6c1.66 0 3 2.69 3 6Z" />
        </svg>
      ),
      label: "Medium",
      href: "https://medium.com/@michaelclerans01",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:michaelclerans03@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 px-4 bg-slate-950 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-5xl font-bold text-gradient">Get In Touch</h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Feel free to contact me for projects, collaborations, or opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Info & Follow Me */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm"
            >
              <h3 className="text-xl text-white font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 text-cyan-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-slate-500 text-sm mb-1">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white hover:text-cyan-400 transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-white font-medium">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Follow Me */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm"
            >
              <h3 className="text-xl text-white font-semibold mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all border border-slate-700/50 hover:border-slate-600 group"
                    >
                      <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                      <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                        {link.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm h-full rounded-3xl p-2">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-slate-400">
                  I respond promptly to messages and opportunities!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm mb-2 text-slate-300"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-950/50 border-slate-700 text-white h-12"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 text-slate-300"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-950/50 border-slate-700 text-white h-12"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm mb-2 text-slate-300"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Message subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-slate-950/50 border-slate-700 text-white h-12"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm mb-2 text-slate-300"
                    >
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
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 glow-blue h-12 text-base font-medium"
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
