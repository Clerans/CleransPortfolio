import { motion } from "motion/react";

export function Education() {
  return (
    <section
      id="education"
      className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="mb-4 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <motion.p
          className="text-slate-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Academic background that supports my technical and professional development
        </motion.p>

        {/* Education Card */}
        <motion.div
          className="glass-effect p-8 rounded-2xl text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl text-white mb-2">
            Bachelor of Information Technology (Honours)
          </h3>

          <p className="text-slate-400 mb-1">
            Networking and Mobile Computing
          </p>

          <p className="text-slate-400 mb-2">
            Horizon Campus, Malabe
          </p>

          <p className="text-slate-500 text-sm mb-4">
            2022 – Present
          </p>

          <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto">
            The program focuses on software development, networking fundamentals,
            mobile application development, database systems, and modern computing
            technologies, providing a strong foundation for a career in full stack
            and mobile application development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
