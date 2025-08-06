"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building, ExternalLink } from "lucide-react";
import { useLanguage } from "./language-provider";

const experiences = [
  {
    title: "Software Developer (Werkstudent)",
    company: "Tech Company GmbH",
    location: "Berlin, Germany",
    period: "January 2023 - Present",
    description: "Working as a part-time software developer while pursuing my studies. Contributing to various projects and gaining hands-on experience in modern web development.",
    responsibilities: [
      "Develop and maintain web applications using React, Next.js, and TypeScript",
      "Collaborate with cross-functional teams to deliver high-quality software solutions",
      "Participate in code reviews and contribute to improving development processes",
      "Work on both frontend and backend development tasks",
      "Learn and implement new technologies and best practices",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Git"],
    companyUrl: "https://techcompany.com",
  },
  {
    title: "Frontend Developer Intern",
    company: "StartupXYZ",
    location: "Munich, Germany",
    period: "June 2022 - December 2022",
    description: "Internship focused on frontend development and user experience design. Worked on improving the company's main product interface.",
    responsibilities: [
      "Developed responsive user interfaces using React and Tailwind CSS",
      "Implemented new features and improved existing functionality",
      "Conducted user testing and gathered feedback for improvements",
      "Collaborated with designers to implement UI/UX improvements",
      "Optimized application performance and accessibility",
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Figma", "Jest"],
    companyUrl: "https://startupxyz.com",
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "March 2022 - Present",
    description: "Working with clients to build custom web solutions and provide technical consulting services.",
    responsibilities: [
      "Develop custom websites and web applications for clients",
      "Provide technical consulting and project planning",
      "Maintain and update existing client websites",
      "Ensure projects meet client requirements and deadlines",
      "Stay updated with latest web development trends and technologies",
    ],
    technologies: ["React", "Next.js", "WordPress", "PHP", "MySQL", "AWS"],
    companyUrl: null,
  },
];

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
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

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-600"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {t("experience.education")}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Bachelor of Computer Science
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                University Name
              </p>
              <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                <Calendar className="h-4 w-4" />
                <span>2021 - 2024</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t("experience.relevantCoursework")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  t("experience.dataStructures"),
                  t("experience.webDev"),
                  t("experience.database"),
                  t("experience.softwareEng"),
                  t("experience.machineLearning"),
                  t("experience.networks")
                ].map((course) => (
                  <span
                    key={course}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 