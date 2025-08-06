"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.greeting": "Hi, I'm",
    "hero.title": "Full Stack Developer",
    "hero.subtitle": "I build modern web applications and mobile apps",
    "hero.description": "Passionate about creating innovative solutions and turning ideas into reality through code.",
    "hero.cta": "Get In Touch",
    "hero.scroll": "Scroll Down",
    
    // About Section
    "about.title": "About Me",
    "about.subtitle": "Get to know me better",
    "about.description": "I'm a passionate full-stack developer with expertise in modern web technologies and mobile development. I love solving complex problems and creating user-friendly applications that make a difference.",
    "about.experience": "Years of Experience",
    "about.projects": "Projects Completed",
    "about.clients": "Happy Clients",
    "about.personalInfo": "Personal Information",
    "about.name": "Name",
    "about.location": "Location",
    "about.birthday": "Birthday",
    "about.degree": "Degree",
    "about.story": "My Story",
    "about.story1": "I'm a passionate full-stack developer with a strong foundation in modern web technologies. My journey in software development began with curiosity and has evolved into a deep passion for creating innovative solutions.",
    "about.story2": "Currently working as a Werkstudent (Working Student) in software development, I've gained valuable experience in building scalable applications, collaborating with cross-functional teams, and delivering high-quality software solutions.",
    "about.story3": "I believe in continuous learning and staying up-to-date with the latest technologies and best practices. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
    "about.yearsExp": "Years Experience",
    "about.projectsComp": "Projects Completed",
    
    // Skills Section
    "skills.title": "Skills & Technologies",
    "skills.subtitle": "Technologies I work with",
    "skills.additional": "Additional Skills",
    
    // Projects Section
    "projects.title": "My Projects",
    "projects.subtitle": "Some of my recent work",
    "projects.featured": "Featured Projects",
    "projects.showcase": "A showcase of my recent work and contributions to open source",
    "projects.view": "View Project",
    "projects.github": "View Code",
    "projects.code": "Code",
    "projects.liveDemo": "Live Demo",
    "projects.viewMore": "View More on GitHub",
    
    // Experience Section
    "experience.title": "Experience",
    "experience.subtitle": "My professional journey",
    "experience.workExp": "Work Experience",
    "experience.professional": "My professional journey and contributions to various organizations",
    "experience.present": "Present",
    "experience.keyResponsibilities": "Key Responsibilities",
    "experience.technologiesUsed": "Technologies Used",
    "experience.education": "Education",
    "experience.relevantCoursework": "Relevant Coursework",
    "experience.dataStructures": "Data Structures & Algorithms",
    "experience.webDev": "Web Development",
    "experience.database": "Database Systems",
    "experience.softwareEng": "Software Engineering",
    "experience.machineLearning": "Machine Learning",
    "experience.networks": "Computer Networks",
    
    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle": "Let's work together",
    "contact.description": "I'm always interested in new opportunities and exciting projects. Feel free to reach out!",
    "contact.alwaysOpen": "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.subject": "Subject",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent successfully!",
    "contact.error": "Failed to send message. Please try again.",
    "contact.contactInfo": "Contact Information",
    "contact.followMe": "Follow Me",
    "contact.availability": "Availability",
    "contact.available": "I'm currently available for freelance work and open to new opportunities.",
    "contact.availableForProjects": "Available for new projects",
    "contact.sendMessage": "Send Me a Message",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "your.email@example.com",
    "contact.subjectPlaceholder": "What's this about?",
    "contact.messagePlaceholder": "Tell me about your project or opportunity...",
    
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.passionate": "Full-Stack Developer passionate about creating amazing web experiences",
    "footer.madeWith": "Made with",
    "footer.using": "using Next.js & Tailwind CSS",
    
    // Additional Skills
    "skill.restful": "RESTful APIs",
    "skill.graphql": "GraphQL",
    "skill.redux": "Redux",
    "skill.context": "Context API",
    "skill.webpack": "Webpack",
    "skill.vite": "Vite",
    "skill.cicd": "CI/CD",
    "skill.agile": "Agile/Scrum",
    "skill.problem": "Problem Solving",
    "skill.team": "Team Collaboration",
    "skill.review": "Code Review",
    "skill.testing": "Testing",
    "skill.performance": "Performance Optimization",
    "skill.seo": "SEO",
    "skill.accessibility": "Accessibility",
    "skill.hilt": "Hilt Dependency Injection",
    "skill.automated": "Automated Testing",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.skills": "Fähigkeiten",
    "nav.projects": "Projekte",
    "nav.experience": "Erfahrung",
    "nav.contact": "Kontakt",
    
    // Hero Section
    "hero.greeting": "Hallo, ich bin",
    "hero.title": "Full Stack Entwickler",
    "hero.subtitle": "Ich entwickle moderne Webanwendungen und mobile Apps",
    "hero.description": "Leidenschaftlich für innovative Lösungen und die Umsetzung von Ideen in die Realität durch Code.",
    "hero.cta": "Kontakt aufnehmen",
    "hero.scroll": "Nach unten scrollen",
    
    // About Section
    "about.title": "Über mich",
    "about.subtitle": "Lernen Sie mich besser kennen",
    "about.description": "Ich bin ein leidenschaftlicher Full-Stack-Entwickler mit Expertise in modernen Webtechnologien und mobiler Entwicklung. Ich liebe es, komplexe Probleme zu lösen und benutzerfreundliche Anwendungen zu erstellen, die einen Unterschied machen.",
    "about.experience": "Jahre Erfahrung",
    "about.projects": "Abgeschlossene Projekte",
    "about.clients": "Zufriedene Kunden",
    "about.personalInfo": "Persönliche Informationen",
    "about.name": "Name",
    "about.location": "Standort",
    "about.birthday": "Geburtstag",
    "about.degree": "Abschluss",
    "about.story": "Meine Geschichte",
    "about.story1": "Ich bin ein leidenschaftlicher Full-Stack-Entwickler mit einer soliden Grundlage in modernen Webtechnologien. Meine Reise in der Softwareentwicklung begann mit Neugier und hat sich zu einer tiefen Leidenschaft für die Entwicklung innovativer Lösungen entwickelt.",
    "about.story2": "Derzeit arbeite ich als Werkstudent in der Softwareentwicklung und habe wertvolle Erfahrungen im Aufbau skalierbarer Anwendungen, in der Zusammenarbeit mit funktionsübergreifenden Teams und in der Bereitstellung hochwertiger Softwarelösungen gesammelt.",
    "about.story3": "Ich glaube an kontinuierliches Lernen und daran, mit den neuesten Technologien und Best Practices auf dem Laufenden zu bleiben. Wenn ich nicht programmiere, finden Sie mich beim Erkunden neuer Technologien, beim Beitrag zu Open-Source-Projekten oder beim Teilen von Wissen mit der Entwicklergemeinschaft.",
    "about.yearsExp": "Jahre Erfahrung",
    "about.projectsComp": "Abgeschlossene Projekte",
    
    // Skills Section
    "skills.title": "Fähigkeiten & Technologien",
    "skills.subtitle": "Technologien, mit denen ich arbeite",
    "skills.additional": "Weitere Fähigkeiten",
    
    // Projects Section
    "projects.title": "Meine Projekte",
    "projects.subtitle": "Einige meiner aktuellen Arbeiten",
    "projects.featured": "Ausgewählte Projekte",
    "projects.showcase": "Eine Auswahl meiner aktuellen Arbeiten und Beiträge zu Open Source",
    "projects.view": "Projekt ansehen",
    "projects.github": "Code ansehen",
    "projects.code": "Code",
    "projects.liveDemo": "Live Demo",
    "projects.viewMore": "Mehr auf GitHub ansehen",
    
    // Experience Section
    "experience.title": "Erfahrung",
    "experience.subtitle": "Mein beruflicher Werdegang",
    "experience.workExp": "Berufserfahrung",
    "experience.professional": "Mein beruflicher Werdegang und Beiträge zu verschiedenen Organisationen",
    "experience.present": "Aktuell",
    "experience.keyResponsibilities": "Hauptverantwortlichkeiten",
    "experience.technologiesUsed": "Verwendete Technologien",
    "experience.education": "Ausbildung",
    "experience.relevantCoursework": "Relevante Kurse",
    "experience.dataStructures": "Datenstrukturen & Algorithmen",
    "experience.webDev": "Webentwicklung",
    "experience.database": "Datenbanksysteme",
    "experience.softwareEng": "Software Engineering",
    "experience.machineLearning": "Maschinelles Lernen",
    "experience.networks": "Computernetzwerke",
    
    // Contact Section
    "contact.title": "Kontakt aufnehmen",
    "contact.subtitle": "Lassen Sie uns zusammenarbeiten",
    "contact.description": "Ich bin immer an neuen Möglichkeiten und spannenden Projekten interessiert. Zögern Sie nicht, sich zu melden!",
    "contact.alwaysOpen": "Ich bin immer offen für Diskussionen über neue Möglichkeiten, interessante Projekte oder einfach nur für ein Gespräch über Technologie.",
    "contact.name": "Name",
    "contact.email": "E-Mail",
    "contact.message": "Nachricht",
    "contact.subject": "Betreff",
    "contact.send": "Nachricht senden",
    "contact.sending": "Wird gesendet...",
    "contact.success": "Nachricht erfolgreich gesendet!",
    "contact.error": "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
    "contact.contactInfo": "Kontaktinformationen",
    "contact.followMe": "Folgen Sie mir",
    "contact.availability": "Verfügbarkeit",
    "contact.available": "Ich bin derzeit für Freelance-Arbeit verfügbar und offen für neue Möglichkeiten.",
    "contact.availableForProjects": "Verfügbar für neue Projekte",
    "contact.sendMessage": "Senden Sie mir eine Nachricht",
    "contact.namePlaceholder": "Ihr Name",
    "contact.emailPlaceholder": "ihre.email@beispiel.com",
    "contact.subjectPlaceholder": "Worum geht es?",
    "contact.messagePlaceholder": "Erzählen Sie mir von Ihrem Projekt oder Ihrer Gelegenheit...",
    
    // Footer
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.passionate": "Full-Stack-Entwickler mit Leidenschaft für erstaunliche Web-Erlebnisse",
    "footer.madeWith": "Erstellt mit",
    "footer.using": "Next.js & Tailwind CSS",
    
    // Additional Skills
    "skill.restful": "RESTful APIs",
    "skill.graphql": "GraphQL",
    "skill.redux": "Redux",
    "skill.context": "Context API",
    "skill.webpack": "Webpack",
    "skill.vite": "Vite",
    "skill.cicd": "CI/CD",
    "skill.agile": "Agile/Scrum",
    "skill.problem": "Problemlösung",
    "skill.team": "Teamarbeit",
    "skill.review": "Code Review",
    "skill.testing": "Testing",
    "skill.performance": "Performance-Optimierung",
    "skill.seo": "SEO",
    "skill.accessibility": "Barrierefreiheit",
    "skill.hilt": "Hilt Dependency Injection",
    "skill.automated": "Automatisiertes Testing",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
} 