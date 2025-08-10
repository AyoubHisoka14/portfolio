# Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, and a modern design.

## ✨ Features

- **Modern Design**: Clean and professional design with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Scrolling**: Smooth navigation between sections
- **Contact Form**: Functional contact form (ready for backend integration)
- **SEO Optimized**: Meta tags and structured data for better SEO
- **Performance**: Optimized for fast loading and smooth performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information

Update your personal information in the following files:

#### 1. Layout (`src/app/layout.tsx`)
```typescript
export const metadata: Metadata = {
  title: "Portfolio | Your Name", // Update your name
  description: "Full-stack developer portfolio showcasing projects, skills, and experience",
  keywords: ["portfolio", "developer", "full-stack", "react", "next.js", "typescript"],
  authors: [{ name: "Your Name" }], // Update your name
  // ...
};
```

#### 2. Navigation (`src/components/navigation.tsx`)
```typescript
<h1 className="text-xl font-bold text-gray-900 dark:text-white">
  Your Name // Update your name
</h1>
```

#### 3. Hero Section (`src/components/hero-section.tsx`)
```typescript
<motion.h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
  Your Name // Update your name
</motion.h1>

<motion.h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
  Full-Stack Developer // Update your title
</motion.h2>
```

#### 4. About Section (`src/components/about-section.tsx`)
```typescript
const personalInfo = [
  { icon: User, label: "Name", value: "Your Name" }, // Update
  { icon: MapPin, label: "Location", value: "Your City, Country" }, // Update
  { icon: Calendar, label: "Birthday", value: "January 1, 2000" }, // Update
  { icon: GraduationCap, label: "Degree", value: "Computer Science" }, // Update
];
```

#### 5. Contact Section (`src/components/contact-section.tsx`)
```typescript
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com", // Update your email
    href: "mailto:your.email@example.com", // Update your email
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+49 123 456 789", // Update your phone
    href: "tel:+49123456789", // Update your phone
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Berlin, Germany", // Update your location
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername", // Update your LinkedIn
    color: "hover:bg-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/yourusername", // Update your GitHub
    color: "hover:bg-gray-800",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/yourusername", // Update your Twitter
    color: "hover:bg-blue-400",
  },
];
```

### Skills & Technologies

Update your skills in `src/components/skills-section.tsx`:

```typescript
const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 90, color: "bg-blue-500" }, // Update levels and add/remove skills
      { name: "Next.js", level: 85, color: "bg-black dark:bg-white" },
      // Add more skills...
    ],
  },
  // Add more categories...
];
```

### Projects

Update your projects in `src/components/projects-section.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Name", // Update project details
    description: "Your project description...",
    technologies: ["React", "Next.js", "TypeScript"], // Update technologies
    githubUrl: "https://github.com/yourusername/your-project", // Update GitHub URL
    liveUrl: "https://your-project.vercel.app", // Update live URL
    stars: 45, // Update GitHub stats
    forks: 12,
  },
  // Add more projects...
];
```

### Work Experience

Update your experience in `src/components/experience-section.tsx`:

```typescript
const experiences = [
  {
    title: "Your Job Title", // Update job details
    company: "Your Company",
    location: "Your Location",
    period: "Your Period",
    description: "Your job description...",
    responsibilities: [
      "Your responsibility 1",
      "Your responsibility 2",
      // Add more responsibilities...
    ],
    technologies: ["React", "Next.js", "TypeScript"], // Update technologies
    companyUrl: "https://yourcompany.com", // Update company URL
  },
  // Add more experiences...
];
```

### Resume

1. Add your resume PDF to the `public` folder
2. Update the download link in `src/components/hero-section.tsx`:

```typescript
<a
  href="/your-resume.pdf" // Update filename
  download
  className="..."
>
  Download Resume
</a>
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `out` folder to Netlify

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js static exports.

## 📧 Contact Form Integration

The contact form is currently set up to log form data to the console. To make it functional, you can integrate with:

- **EmailJS**: For client-side email sending
- **Formspree**: For form handling without backend
- **Your own API**: Create an API route in Next.js
- **Netlify Forms**: If deploying to Netlify

Example with EmailJS:

```typescript
// Install: npm install @emailjs/browser
import emailjs from '@emailjs/browser';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  emailjs.sendForm(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    e.target as HTMLFormElement,
    'YOUR_PUBLIC_KEY'
  )
  .then((result) => {
    console.log('Email sent successfully:', result.text);
  })
  .catch((error) => {
    console.log('Email failed:', error.text);
  });
};
```

## 🎨 Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.ts`
- Global styles in `src/app/globals.css`
- Component-specific styles in each component file

## 📱 Responsive Design

The portfolio is fully responsive and includes:

- Mobile-first design approach
- Responsive navigation with hamburger menu
- Adaptive layouts for different screen sizes
- Touch-friendly interactions

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or contact me.

---

Made with ❤️ using Next.js, TypeScript, and Tailwind CSS
