"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitBranch } from "lucide-react";
import { useLanguage } from "./language-provider";

const projects = [
  {
    titleKey: "projects.discoverApp.title",
    descriptionKey: "projects.discoverApp.description",
    technologies: ["Spring Boot", "PostgreSQL", "React", "TypeScript"],
    githubUrl: "https://github.com/AyoubHisoka14/discoverApp",
    liveUrl: "https://discover-app.vercel.app",
    image: "/api/placeholder/400/250",
  },
  {
    titleKey: "projects.pizzaservice.title",
    descriptionKey: "projects.pizzaservice.description",
    technologies: ["PHP", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/AyoubHisoka14/pizzaservice",
    liveUrl: "https://pizzaservice.vercel.app",
    image: "/api/placeholder/400/250",
  },
  {
    titleKey: "projects.groupUp.title",
    descriptionKey: "projects.groupUp.description",
    technologies: ["Java", "Android", "Firebase"],
    githubUrl: "https://github.com/AyoubHisoka14/GroupUp",
    liveUrl: "https://play.google.com/store/apps/details?id=com.groupup.app",
    image: "/api/placeholder/400/250",
  },
  {
    titleKey: "projects.travelAgency.title",
    descriptionKey: "projects.travelAgency.description",
    technologies: ["C++", "Qt", "SQLite"],
    githubUrl: "https://github.com/AyoubHisoka14/travelAgency",
    liveUrl: "#",
    image: "/api/placeholder/400/250",
  },
];

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("projects.featured")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("projects.showcase")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="text-white text-lg font-medium">{t(project.titleKey)}</span>
              </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t(project.titleKey)}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {t(project.descriptionKey)}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                  >
                    <Github className="h-4 w-4" />
                    {t("projects.code")}
                  </a>
                  {/*<a*/}
                  {/*  href={project.liveUrl}*/}
                  {/*  target="_blank"*/}
                  {/*  rel="noopener noreferrer"*/}
                  {/*  className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"*/}
                  {/*>*/}
                  {/*  <ExternalLink className="h-4 w-4" />*/}
                  {/*  {t("projects.liveDemo")}*/}
                  {/*</a>*/}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/AyoubHisoka14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Github className="h-5 w-5" />
            {t("projects.viewMore")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
