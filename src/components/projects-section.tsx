"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitBranch, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "./language-provider";
import { useState } from "react";

const projects = [
  {
    titleKey: "projects.pizzaservice.title",
    descriptionKey: "projects.pizzaservice.description",
    technologies: ["PHP", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/AyoubHisoka14/pizzaservice",
    liveUrl: "https://pizzaservice.vercel.app",
    images: [
      "/images/pizzaservice/homepage.png",
      "/images/pizzaservice/menu.png",
      "/images/pizzaservice/order.png",
      "/images/pizzaservice/checkout.png"
    ],
    image: "/api/placeholder/400/250",
  },
  {
    titleKey: "projects.groupUp.title",
    descriptionKey: "projects.groupUp.description",
    technologies: ["Java", "Android", "Firebase"],
    githubUrl: "https://github.com/AyoubHisoka14/GroupUp",
    liveUrl: "https://play.google.com/store/apps/details?id=com.groupup.app",
    images: [
      "/images/groupup/login.png",
      "/images/groupup/dashboard.png",
      "/images/groupup/group-creation.png",
      "/images/groupup/chat.png"
    ],
    image: "/api/placeholder/400/250",
  },
  {
    titleKey: "projects.travelAgency.title",
    descriptionKey: "projects.travelAgency.description",
    technologies: ["C++", "Qt", "SQLite"],
    githubUrl: "https://github.com/AyoubHisoka14/travelAgency",
    liveUrl: "#",
    images: [
      "/images/travel-agency/main-window.png",
      "/images/travel-agency/booking.png",
      "/images/travel-agency/itinerary.png",
      "/images/travel-agency/admin-panel.png"
    ],
    image: "/api/placeholder/400/250",
  },
  {
    titleKey: "projects.discoverApp.title",
    descriptionKey: "projects.discoverApp.description",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "React", "TypeScript"],
    githubUrl: "https://github.com/AyoubHisoka14/discoverApp",
    liveUrl: "https://discover-app.vercel.app",
    images: [
      "/images/discover-app/1.png",
      "/images/discover-app/2.png",
      "/images/discover-app/3.png",
      "/images/discover-app/4.png",
      "/images/discover-app/5.png",
      "/images/discover-app/6.png",
      "/images/discover-app/7.png",
      "/images/discover-app/8.png",
      "/images/discover-app/9.png",
      "/images/discover-app/10.png",
      "/images/discover-app/11.png",
      "/images/discover-app/12.png",
      "/images/discover-app/13.png",
      "/images/discover-app/14.png",
      "/images/discover-app/15.png",
      "/images/discover-app/16.png",
      "/images/discover-app/17.png",
      "/images/discover-app/18.png",
      "/images/discover-app/19.png"
    ],
    image: "/api/placeholder/400/250",
  },
  {
    titleKey: "projects.rideShare.title",
    descriptionKey: "projects.rideShare.description",
    technologies: ["Node.js","PostgreSQL","MikroORM", "Docker", "React", "TypeScript", "PayPal APIs"],
    githubUrl: "https://github.com/AyoubHisoka14/RideShare",
    liveUrl: "https://discover-app.vercel.app",
    images: [],
    image: "/api/placeholder/400/250",
  },
  {
    titleKey: "projects.travelApp.title",
    descriptionKey: "projects.travelApp.description",
    technologies: ["Node.js","PostgreSQL", "MikroORM", "Docker", "React", "TypeScript"],
    githubUrl: "https://github.com/AyoubHisoka14/travelApp",
    liveUrl: "https://discover-app.vercel.app",
    images: [],
    image: "/api/placeholder/400/250",
  },
];

// Image Carousel Modal Component
function ImageCarouselModal({ isOpen, onClose, images, title }: {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-5xl mx-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title} - {currentImageIndex + 1} of {images.length}
            </h3>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-video bg-gray-100 dark:bg-gray-900">
              <img
                src={images[currentImageIndex]}
                alt={`${title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>

          {/* Image Dots */}
          {images.length > 1 && (
            <div className="flex justify-center items-center gap-2 p-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex
                      ? "bg-blue-600 dark:bg-blue-400"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const { t } = useLanguage();
  const [selectedImages, setSelectedImages] = useState<{ images: string[]; title: string } | null>(null);

  const openImageModal = (images: string[], title: string) => {
    setSelectedImages({ images, title });
  };

  const closeImageModal = () => {
    setSelectedImages(null);
  };

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
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col min-h-[420px] max-h-[420px]"
            >
              {/* Project Image */}
              <div className="h-40 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="text-white text-lg font-medium">{t(project.titleKey)}</span>
              </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t(project.titleKey)}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-5">
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
                <div className="mt-auto flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                  >
                    <Github className="h-4 w-4" />
                    {t("projects.code")}
                  </a>
                  {project.titleKey === "projects.discoverApp.title" && (
                     <button
                         onClick={() =>
                             openImageModal(project.images, String(t(project.titleKey)))
                         }
                         className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                     >
                       <Play className="h-4 w-4" />
                       {t("projects.liveDemo")}
                     </button>
                  )}
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

      {/* Image Carousel Modal */}
      <ImageCarouselModal
        isOpen={selectedImages !== null}
        onClose={closeImageModal}
        images={selectedImages?.images || []}
        title={selectedImages?.title || ""}
      />
    </section>
  );
}
