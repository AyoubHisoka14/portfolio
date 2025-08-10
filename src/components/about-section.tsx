"use client";

import { motion } from "framer-motion";
import { User, MapPin, Calendar, GraduationCap } from "lucide-react";
import { useLanguage } from "./language-provider";

export function AboutSection() {
  const { t } = useLanguage();

  const personalInfo = [
    { icon: User, label: t("about.name"), value: t("about.nameValue") },
    { icon: MapPin, label: t("about.location"), value: t("about.locationValue") },
    { icon: Calendar, label: t("about.birthday"), value: t("about.birthdayValue") },
    { icon: GraduationCap, label: t("about.degree"), value: t("about.degreeValue") },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("about.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {t("about.personalInfo")}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <info.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                    <p className="font-medium text-gray-900 dark:text-white">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {t("about.story")}
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                {t("about.story1")}
              </p>

              <p>
                {t("about.story2")}
              </p>

              <p>
                {t("about.story3")}
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t("about.yearsExp")}</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t("about.projectsComp")}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
