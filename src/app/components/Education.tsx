import { motion } from "motion/react";
import { GraduationCap, School, Award, Calendar, BookOpen } from "lucide-react";

const educationData = [
  {
    title: "Bachelor of Information Technology (Honours)",
    specialization: "Networking and Mobile Computing",
    institution: "Horizon Campus, Malabe",
    period: "2022 – Present",
    description:
      "Currently pursuing an Honours degree with a focus on full-stack development, mobile computing, and network systems. Building a strong foundation in modern software engineering practices.",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Collaborative Filtering using SVD for Movie Recommendations",
    specialization: "Research Publication",
    institution: "Horizon Interdisciplinary Research Symposium (HIRS) 2025",
    period: "Nov 2025",
    description:
      "Co-authored and presented a peer-reviewed research paper on an SVD-based movie recommendation system. Trained on MovieLens 100K dataset achieving RMSE of 0.91 using Python and Surprise library.",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "G.C.E. Advanced Level",
    specialization: "Engineering Technology Stream",
    institution: "Hindu National College, Pussellawa",
    period: "2019",
    description:
      "Successfully completed Advanced Level studies in Engineering Technology, developing analytical and problem-solving skills fundamental to engineering disciplines.",
    icon: School,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Certificate in Web Design for Beginners",
    specialization: "Web Technologies",
    institution: "University of Moratuwa",
    period: "Issued Dec 2024",
    description:
      "Completed a specialized certification course covering the fundamentals of web design, responsive layouts, and modern frontend technologies.",
    icon: Award,
    color: "from-orange-500 to-yellow-500",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-5xl font-bold text-gradient">Education, Research & Qualifications</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My academic journey, research contributions, and professional certifications
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="glass-effect p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`}
                ></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl md:text-2xl text-white font-semibold">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-slate-400 text-sm mt-1 md:mt-0">
                        <Calendar className="w-4 h-4 mr-1.5" />
                        {item.period}
                      </div>
                    </div>

                    <div className="text-cyan-400 font-medium mb-1">
                      {item.specialization}
                    </div>

                    <div className="text-slate-300 text-sm mb-4">
                      {item.institution}
                    </div>

                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
