"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "./language-provider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "de" : "en")}
      className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle language"
    >
      <div className="flex items-center space-x-1">
        <Languages className="h-4 w-4" />
        <span className="text-sm font-medium">
          {language === "en" ? "DE" : "EN"}
        </span>
      </div>
      <span className="sr-only">Toggle language</span>
    </button>
  );
} 