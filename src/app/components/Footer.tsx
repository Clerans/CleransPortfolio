import { Heart, Code2, Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl mb-3 text-gradient">&lt;Michael Clerans /&gt;</h3>
            <p className="text-slate-400 text-sm">
              Full-Stack Developer | BIT (Hons) Undergraduate
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-3 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-3 text-white">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/Clerans"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/michael-clerans"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-slate-400 text-sm flex items-center gap-2">
            © {currentYear} Michael Clerans. Built with
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            and
            <Code2 className="w-4 h-4 text-cyan-400" />
          </p>

          <p className="text-slate-500 text-sm">
            Designed & developed for academic and professional use
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
