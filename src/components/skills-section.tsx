"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./language-provider";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { 
        name: "React", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "bg-blue-500" 
      },
      { 
        name: "Next.js", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        color: "bg-black dark:bg-white" 
      },
      { 
        name: "JavaScript", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "bg-yellow-400" 
      },
      { 
        name: "TypeScript", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        color: "bg-blue-600" 
      },
      { 
        name: "Tailwind CSS", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        color: "bg-cyan-500" 
      },
      { 
        name: "HTML/CSS", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        color: "bg-orange-500" 
      },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { 
        name: "Node.js", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "bg-green-600" 
      },
      { 
        name: "Express.js", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        color: "bg-gray-600" 
      },
      { 
        name: "Java", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        color: "bg-red-600" 
      },
      { 
        name: "Kotlin", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        color: "bg-purple-600" 
      },
      { 
        name: "Spring Boot", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        color: "bg-green-500" 
      },
      { 
        name: "Python", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        color: "bg-yellow-500" 
      },
      { 
        name: "PostgreSQL", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        color: "bg-blue-700" 
      },
      { 
        name: "MySQL", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        color: "bg-blue-600" 
      },
      { 
        name: "MongoDB", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "bg-green-500" 
      },
    ],
  },
  {
    category: "Mobile Development",
    technologies: [
      { 
        name: "Android", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
        color: "bg-green-500" 
      },
      { 
        name: "Flutter", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        color: "bg-blue-500" 
      },
      { 
        name: "Jetpack Compose", 
        logo: "https://developer.android.com/static/images/jetpack/compose/logo/compose-logo.svg",
        color: "bg-blue-600" 
      },
    ],
  },
  {
    category: "Tools & Others",
    technologies: [
      { 
        name: "Git", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "bg-orange-600" 
      },
      { 
        name: "Docker", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        color: "bg-blue-500" 
      },
      { 
        name: "CI/CD", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        color: "bg-red-500" 
      },
      { 
        name: "AWS", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        color: "bg-yellow-600" 
      },
      { 
        name: "Figma", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        color: "bg-purple-500" 
      },
      { 
        name: "Jest", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        color: "bg-red-600" 
      },
    ],
  },
];

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-12">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
                {skillCategory.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={tech.logo}
                          alt={`${tech.name} logo`}
                          width={40}
                          height={40}
                          className="w-10 h-10"
                        />
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            {t("skills.additional")}
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "skill.restful", "skill.graphql", "skill.redux", "skill.context", "skill.webpack", 
              "skill.vite", "skill.cicd", "skill.agile", "skill.problem", "skill.team",
              "skill.review", "skill.testing", "skill.performance", "skill.seo", "skill.accessibility",
              "skill.hilt", "skill.automated"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {t(skill)}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 