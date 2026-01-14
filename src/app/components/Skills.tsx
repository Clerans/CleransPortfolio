import { Code, Smartphone, Database, Cloud, Terminal } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { motion } from "motion/react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Designing responsive and user-friendly web interfaces",
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Backend & API Development",
    description: "Building server-side logic and integrating RESTful services",
    skills: ["Node.js", "RESTful APIs", "Firebase Authentication"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description: "Developing cross-platform and native mobile applications",
    skills: ["React Native", "Expo", "Android (Java, Kotlin)"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Designing and managing relational and NoSQL databases",
    skills: ["MySQL", "PostgreSQL", "Oracle 19c", "MongoDB"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description: "Working with basic cloud services and application deployment",
    skills: ["AWS"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Terminal,
    title: "Tools & Technologies",
    description: "Development tools and collaboration platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
    color: "from-orange-500 to-yellow-500",
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rounded-lg"
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 border border-purple-500/20"
          animate={{ rotate: [360, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-gradient">Skills & Expertise</h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Technologies and tools I use to build modern web and mobile applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm h-full hover:shadow-lg hover:shadow-blue-500/20">
                  <CardHeader>
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <CardTitle className="text-white group-hover:text-gradient transition-all">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      {category.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-3 py-1.5 glass-effect text-slate-300 rounded-lg text-sm border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
