import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-effect border-b border-blue-500/20" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <motion.button
            onClick={() => scrollToSection("home")}
            className="text-lg md:text-xl text-gradient font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Michael Clerans
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <ul className="flex gap-1 glass-effect rounded-full px-2 py-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    className="px-5 py-2 rounded-full text-slate-300 hover:text-white transition-colors relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.button>
                </li>
              ))}
            </ul>

            {/* Resume Button */}
            <Button
              asChild
              size="sm"
              className="glass-effect border-cyan-500/50 text-slate-200 hover:bg-cyan-500/10"
              variant="outline"
            >
              <a href="/Michael_Clerans_CV.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-300 hover:text-white hover:bg-blue-500/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="mt-4 space-y-2 pb-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-4 py-3 text-slate-300 hover:text-white glass-effect rounded-lg transition-colors"
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}

                {/* Mobile Resume */}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <a
                    href="/Michael_Clerans_CV.pdf"
                    download
                    className="block w-full text-left px-4 py-3 text-slate-300 hover:text-white glass-effect rounded-lg transition-colors"
                  >
                    Download Resume
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
