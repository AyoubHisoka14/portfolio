"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string | string[];
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
    "nav.education": "Education",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Hi, I'm",
    "hero.title": "Software Developer",
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
    "about.nameValue": "Ayoub Bahammou",
    "about.location": "Location",
    "about.locationValue": "Darmstadt, Germany",
    "about.birthday": "Birthday",
    "about.birthdayValue": "September 4, 2001",
    "about.degree": "Degree",
    "about.degreeValue": "Computer Science",
    "about.story": "My Story",
    "about.story1": "I'm a passionate software developer with a solid foundation in modern web, mobile and backend technologies. I hold a Bachelor's degree in Computer Science, and my journey in software development began with curiosity and has evolved into a deep commitment to building innovative and scalable solutions.",
    "about.story2": "Currently, I'm working as a Werkstudent (Working Student) in Android development, where I’ve gained valuable hands-on experience building mobile applications and collaborating within agile teams.",
    "about.story3": "I enjoy working across different tech stacks, writing clean and maintainable code and designing systems that solve real-world problems. " +
        "I strongly believe in continuous learning and staying up-to-date with the latest tools, frameworks, and best practices. Outside of work, I like to explore new technologies and engage with the developer community.",
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

    // Project Details
    "projects.discoverApp.title": "Discover App",
    "projects.discoverApp.description": "A comprehensive library of movies, series, and anime. Features user search and browsing capabilities with a modern, intuitive interface.",
    "projects.pizzaservice.title": "Pizzaservice",
    "projects.pizzaservice.description": "A pizza delivery service web application with online ordering, menu management, and order tracking functionality.",
    "projects.groupUp.title": "GroupUp",
    "projects.groupUp.description": "An Android application designed for university students to find partners for laboratory work and group projects.",
    "projects.travelAgency.title": "TravelAgency",
    "projects.travelAgency.description": "A desktop application for travel agency management with booking system, customer management, and itinerary planning features.",

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

    // Work Experience Details
    "experience.jobTitle": "Android Developer (Werkstudent)",
    "experience.location": "Germany",
    "experience.period": "April 2024 - Present",
    "experience.description": "Working as a part-time Android developer while pursuing my studies. Contributing to mobile app development with focus on both frontend and backend aspects of the application.",
    "experience.responsibilities": [
      "Develop and maintain Android applications using Kotlin",
      "Work on both frontend (UI/UX) and backend components of the app",
      "Implement unit testing and ensure code quality",
      "Collaborate with cross-functional teams in an agile environment",
      "Participate in code reviews and contribute to improving development processes",
      "Learn and implement new Android development technologies and best practices"
    ],

    // Education Section
    "education.title": "Education",
    "education.subtitle": "My academic background and qualifications",
    "education.relevantCoursework": "Relevant Coursework",
    "education.additionalInfo": "Additional Information",
    "education.language": "Language of Instruction",
    "education.gpa": "GPA",
    "education.duration": "Duration",
    "education.years": "Years",

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
    "contact.available": "I'm currently available for a full time job and open to new opportunities.",
    "contact.availableForProjects": "Available for new projects",
    "contact.sendMessage": "Send Me a Message",
    "contact.namePlaceholder": "Your Name",
    "contact.emailPlaceholder": "your.email@example.com",
    "contact.subjectPlaceholder": "What's this about?",
    "contact.messagePlaceholder": "Tell me about your project or opportunity...",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.passionate": "Software Developer passionate about creating amazing code solutions",
    "footer.madeWith": "Made with",
    "footer.using": "using Next.js & Tailwind CSS",

    // Additional Skills
    "skill.restful": "RESTful APIs",
    "skill.graphql": "GraphQL",
    "skill.context": "Context API",
    "skill.compose": "Jetpack Compose",
    "skill.vite": "Vite",
    "skill.reader": "PDF and EPUB Readers",
    "skill.performance": "Performance Optimization",
    "skill.accessibility": "Accessibility",
    "skill.hilt": "Hilt Dependency Injection",
    "skill.automated": "Automated Testing",
      "skill.agile": "Agile/Scrum",
      "skill.problem": "Problem Solving",
      "skill.team": "Team Collaboration",
      "skill.review": "Code Review",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.skills": "Fähigkeiten",
    "nav.projects": "Projekte",
    "nav.experience": "Erfahrung",
    "nav.education": "Ausbildung",
    "nav.contact": "Kontakt",

    // Hero Section
    "hero.greeting": "Hallo, ich bin",
    "hero.title": "Software Entwickler",
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
    "about.nameValue": "Ayoub Bahammou",
    "about.location": "Standort",
    "about.locationValue": "Darmstadt, Deutschland",
    "about.birthday": "Geburtstag",
    "about.birthdayValue": "4. September 2001",
    "about.degree": "Abschluss",
    "about.degreeValue": "Informatik",
    "about.story": "Meine Geschichte",
    "about.story1": "Ich bin ein leidenschaftlicher Softwareentwickler mit einem soliden Fundament in modernen Web-, Mobile- und Backend-Technologien. Ich habe einen Bachelorabschluss in Informatik und meine Reise in der Softwareentwicklung begann aus Neugier – heute ist sie eine echte Leidenschaft für die Entwicklung innovativer und skalierbarer Lösungen.",
    "about.story2": "Derzeit arbeite ich als Werkstudent im Bereich Android-Entwicklung, wo ich wertvolle praktische Erfahrungen in der Entwicklung mobiler Anwendungen und der Zusammenarbeit in agilen Teams sammle.",
    "about.story3": "Es macht mir Spaß, mit unterschiedlichen Technologien zu arbeiten, sauberen und wartbaren Code zu schreiben und Systeme zu entwickeln, die reale Probleme lösen. Ich bin überzeugt vom lebenslangen Lernen und halte mich stets über neue Tools, Frameworks und Best Practices auf dem Laufenden. In meiner Freizeit beschäftige ich mich gerne mit neuen Technologien und bin Teil der Entwickler-Community.",
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

    // Project Details
    "projects.discoverApp.title": "Discover App",
    "projects.discoverApp.description": "Eine umfassende Bibliothek für Filme, Serien und Anime. Bietet Benutzersuche und Browsen-Funktionen mit einer modernen, intuitiven Benutzeroberfläche.",
    "projects.pizzaservice.title": "Pizzaservice",
    "projects.pizzaservice.description": "Eine Pizza-Lieferservice-Webanwendung mit Online-Bestellung, Menüverwaltung und Bestellverfolgung.",
    "projects.groupUp.title": "GroupUp",
    "projects.groupUp.description": "Eine Android-Anwendung für Universitätsstudenten, um Partner für Laborarbeiten und Gruppenprojekte zu finden.",
    "projects.travelAgency.title": "TravelAgency",
    "projects.travelAgency.description": "Eine Desktop-Anwendung für Reisebüro-Management mit Buchungssystem, Kundenverwaltung und Reiseplanungsfunktionen.",

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

    // Work Experience Details
    "experience.jobTitle": "Android Entwickler (Werkstudent)",
    "experience.location": "Deutschland",
    "experience.period": "April 2024 - Aktuell",
    "experience.description": "Arbeite als Teilzeit-Android-Entwickler während meines Studiums. Beiträge zur mobilen App-Entwicklung mit Fokus auf Frontend- und Backend-Aspekte der Anwendung.",
    "experience.responsibilities": [
      "Entwicklung und Wartung von Android-Anwendungen mit Kotlin",
      "Arbeit an Frontend- (UI/UX) und Backend-Komponenten der App",
      "Implementierung von Unit-Tests und Sicherstellung der Code-Qualität",
      "Zusammenarbeit mit funktionsübergreifenden Teams in einer agilen Umgebung",
      "Teilnahme an Code-Reviews und Beitrag zur Verbesserung der Entwicklungsprozesse",
      "Lernen und Implementierung neuer Android-Entwicklungstechnologien und Best Practices"
    ],

    // Education Section
    "education.title": "Ausbildung",
    "education.subtitle": "Mein akademischer Hintergrund und Qualifikationen",
    "education.relevantCoursework": "Relevante Kurse",
    "education.additionalInfo": "Zusätzliche Informationen",
    "education.language": "Unterrichtssprache",
    "education.gpa": "Notendurchschnitt",
    "education.duration": "Dauer",
    "education.years": "Jahre",

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
    "contact.available": "Ich bin derzeit für eine Vollzeitstelle verfügbar und offen für neue Möglichkeiten.",
    "contact.availableForProjects": "Verfügbar für neue Projekte",
    "contact.sendMessage": "Senden Sie mir eine Nachricht",
    "contact.namePlaceholder": "Ihr Name",
    "contact.emailPlaceholder": "ihre.email@beispiel.com",
    "contact.subjectPlaceholder": "Worum geht es?",
    "contact.messagePlaceholder": "Erzählen Sie mir von Ihrem Projekt oder Ihrer Gelegenheit...",

    // Footer
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.passionate": "Software Entwickler mit Leidenschaft für erstaunliche Code-Lösungen",
    "footer.madeWith": "Erstellt mit",
    "footer.using": "Next.js & Tailwind CSS",

    // Additional Skills
      "skill.restful": "RESTful APIs",
      "skill.graphql": "GraphQL",
      "skill.context": "Context API",
      "skill.compose": "Jetpack Compose",
      "skill.vite": "Vite",
      "skill.reader": "PDF and EPUB Readers",
      "skill.performance": "Performance Optimization",
      "skill.accessibility": "Accessibility",
      "skill.hilt": "Hilt Dependency Injection",
      "skill.automated": "Automated Testing",
      "skill.agile": "Agile/Scrum",
      "skill.problem": "Problem Solving",
      "skill.team": "Team Collaboration",
      "skill.review": "Code Review",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string | string[] => {
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
