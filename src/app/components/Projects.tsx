import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const projects = [
  {
    title: "Global Country Insights Dashboard",
    description:
      "An interactive web dashboard providing country information, real-time weather data, and COVID-19 statistics using multiple public REST APIs with dynamic data visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1080&q=80",
    tags: ["HTML", "CSS", "JavaScript", "REST APIs", "Chart.js"],
    githubUrl: "https://github.com/Clerans/global-country-dashboard-group",
    liveUrl: "#",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "MC Mobiles App",
    description:
      "A React Native mobile application for browsing and purchasing mobile devices, featuring a clean UI, product management, and backend integration.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1080&q=80",
    tags: ["React Native", "Expo", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Clerans/MC-MOBILE-APP",
    liveUrl: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Weather Web Application",
    description:
      "A responsive web application that displays real-time weather information, including temperature, humidity, and wind speed using a public weather API.",
    image:
      "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1080&q=80",
    tags: ["HTML", "CSS", "JavaScript", "Weather API"],
    githubUrl: "https://github.com/Clerans/Weather-Web-Application",
    liveUrl: "#",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Library Management System",
    description:
      "A Java-based desktop application designed to manage library operations such as book inventory, issuing, and returns using a modular architecture.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1080&q=80",
    tags: ["Java", "JavaFX", "MySQL"],
    githubUrl: "https://github.com/Clerans/OOP-mini-project",
    liveUrl: "#",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Student Grading System",
    description:
      "A C-based console application for managing student grades, including data input, grade calculation, and result generation using core programming concepts.",
    image:
      "https://images.unsplash.com/photo-1584697964190-fd6d97e6b84b?auto=format&fit=crop&w=1080&q=80",
    tags: ["C", "File Handling", "Data Structures"],
    githubUrl: "https://github.com/Clerans/Student-Grading-System",
    liveUrl: "#",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "MC Mobile Website",
    description:
      "A responsive e-commerce website for browsing mobile devices, featuring product listings, filtering, and mobile-first UI design principles.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1080&q=80",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/Clerans/Mobileshop-Website",
    liveUrl: "#",
    color: "from-pink-500 to-rose-500",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-slate-900 via-blue-950/20 to-slate-900"
    >
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-gradient">Projects</h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Academic, personal, and freelance projects demonstrating practical
            software development skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden backdrop-blur-sm h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                  ></div>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                </div>

                <CardHeader>
                  <CardTitle className="text-white group-hover:text-gradient transition-all">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 glass-effect text-cyan-400 rounded-full text-xs border border-cyan-500/30"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3 pt-4 border-t border-slate-800">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glass-effect border-blue-500/30 text-slate-300 hover:bg-blue-500/10 hover:text-white"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>

                  {project.liveUrl !== "#" && (
                    <Button
                      size="sm"
                      className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-0`}
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
