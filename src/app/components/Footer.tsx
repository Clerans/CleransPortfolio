import { Heart, Code2, Github, Linkedin, Mail, Instagram, Facebook, ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Scroll to Top */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 w-12 h-12 rounded-full glass-effect flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all group"
          whileHover={{ y: -5 }}
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </motion.button>

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h3 className="text-4xl font-bold mb-3 text-gradient">&lt;Michael Clerans /&gt;</h3>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed text-lg">
            Turning ideas into reliable web and mobile applications.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 mb-12 flex-wrap justify-center"
        >
          <motion.a
            href="https://github.com/Clerans"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-900/50 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700"
            whileHover={{ scale: 1.1, y: -2 }}
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/michael-clerans"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-900/50 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700"
            whileHover={{ scale: 1.1, y: -2 }}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="mailto:michaelclerans03@gmail.com"
            className="w-10 h-10 bg-slate-900/50 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700"
            whileHover={{ scale: 1.1, y: -2 }}
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="https://medium.com/@michaelclerans01"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-900/50 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700"
            whileHover={{ scale: 1.1, y: -2 }}
            aria-label="Medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M12 11c0 4.97-4.03 9-9 9l-3-9 3-9c4.97 0 9 4.03 9 9Z" />
              <path d="M19 11c0 4.42-3.13 8-7 8l-2-8 2-8c3.87 0 7 3.58 7 8Z" />
              <path d="M22 11c0 3.31-1.34 6-3 6l-1-6 1-6c1.66 0 3 2.69 3 6Z" />
            </svg>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/mr.__clerans__.z/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-900/50 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700"
            whileHover={{ scale: 1.1, y: -2 }}
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="https://web.facebook.com/michael.clerans.1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-900/50 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700"
            whileHover={{ scale: 1.1, y: -2 }}
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Divider & Copyright */}
        <motion.div
          className="w-full relative flex items-center justify-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800/50"></div>
          </div>
          <div className="relative bg-slate-950 px-4">
            <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
          </div>
        </motion.div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-slate-500 text-sm">
            © {currentYear} Michael Clerans. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center justify-center gap-1">
            Built with React & <Code2 className="w-3 h-3" /> · Designed for excellence
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
