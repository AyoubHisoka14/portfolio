"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap, BookOpen } from "lucide-react";
import { useLanguage } from "./language-provider";

const education = [
  {
    degree: "Bachelor of Computer Science",
    university: "German University Name",
    location: "Germany",
    period: "2021 - 2024",
    description: "Completed my bachelor's degree in Computer Science with a focus on software development and modern technologies.",
    coursework: [
      "Data Structures & Algorithms",
      "Web Development",
      "Database Systems",
      "Software Engineering",
      "Machine Learning",
      "Computer Networks",
      "Mobile Development",
      "Software Testing"
    ],
    language: "German",
    gpa: "2.0", // German grading system (1.0 is best, 4.0 is passing)
  },
];

export function EducationSection() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("education.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("education.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.university}-${edu.degree}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{edu.university}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>Language: {edu.language}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {edu.description}
              </p>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Coursework */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {t("education.relevantCoursework")}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {edu.coursework.map((course, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <span className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full flex-shrink-0" />
                        <span className="text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {t("education.additionalInfo")}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{t("education.language")}:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{edu.language}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{t("education.gpa")}:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{edu.gpa}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{t("education.duration")}:</span>
                      <span className="font-medium text-gray-900 dark:text-white">3 {t("education.years")}</span>
                    </div>
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
