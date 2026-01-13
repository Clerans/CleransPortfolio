import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Code2, Rocket, Users, Award } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { icon: Code2, label: "Academic & Personal Projects", value: "10+" },
  { icon: Users, label: "Team & Freelance Experience", value: "Yes" },
  { icon: Rocket, label: "Actively Learning & Building", value: "Ongoing" },
  { icon: Award, label: "Certifications Completed", value: "1+" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-gradient">About Me</h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Undergraduate developer with a strong focus on practical, scalable digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                  alt="Developer workspace"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-3xl text-white">
              Building Practical Solutions Through Technology
            </h3>

            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I am an undergraduate IT student currently pursuing a{" "}
                <span className="text-cyan-400">
                  BIT (Hons) in Networking and Mobile Computing
                </span>{" "}
                at <span className="text-blue-400">Horizon Campus, Malabe</span>. 
                I have a strong interest in full-stack web and mobile application development.
              </p>

              <p>
                Through academic projects and freelance experience, I have developed hands-on
                skills in creating{" "}
                <span className="text-purple-400">
                  responsive, user-focused, and scalable applications
                </span>{" "}
                using modern development tools and frameworks.
              </p>

              <p>
                I am particularly interested in cloud technologies, database-driven systems,
                and API integration. My long-term goal is to grow as a{" "}
                <span className="text-cyan-400">Full Stack Software Developer</span>{" "}
                while continuously improving my technical skills and gaining industry experience.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="glass-effect p-6 rounded-2xl text-center group hover:border-cyan-500/50 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl mb-2 text-gradient">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
