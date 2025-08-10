"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building, ExternalLink } from "lucide-react";
import { useLanguage } from "./language-provider";

const experiences = [
  {
    title: "Android Developer (Werkstudent)",
    company: "Tech Company GmbH",
    location: "Germany",
    period: "April 2024 - Present",
    description: "Working as a part-time Android developer while pursuing my studies. Contributing to mobile app development with focus on both frontend and backend aspects of the application.",
    responsibilities: [
      "Develop and maintain Android applications using Kotlin",
      "Work on both frontend (UI/UX) and backend components of the app",
      "Implement unit testing and ensure code quality",
      "Collaborate with cross-functional teams in an agile environment",
      "Participate in code reviews and contribute to improving development processes",
      "Learn and implement new Android development technologies and best practices",
    ],
    technologies: ["Kotlin", "Android SDK", "Android Studio", "Unit Testing", "Git", "Agile/Scrum"],
    companyUrl: "https://techcompany.com",
  },
];

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-blue-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("experience.workExp")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("experience.professional")}
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{experience.company}</span>
                      {experience.companyUrl && (
                        <a
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {experience.description}
              </p>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Responsibilities */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {t("experience.keyResponsibilities")}
                  </h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {t("experience.technologiesUsed")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
