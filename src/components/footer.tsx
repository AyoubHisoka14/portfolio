"use client";

import { Heart, Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "./language-provider";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Ayoub Bahammou</h3>
            <p className="text-gray-400 text-sm">
              {t("footer.passionate")}
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com/AyoubHisoka14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/ayoub-bahammou-0b8ba9289"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Ayoub Bahammou. {t("footer.rights")}
            </p>

            <div className="flex items-center gap-2 text-gray-400 text-sm mt-4 md:mt-0">
              <span>{t("footer.madeWith")}</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>{t("footer.using")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
