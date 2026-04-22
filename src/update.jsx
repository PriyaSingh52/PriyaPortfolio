import React, { useState, useEffect } from "react";
import "./style.css";
import profileImg from "./assets/profile.jpg";

// Import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  // const [theme, setTheme] = useState("dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [theme, setTheme] = useState(() => {
  return localStorage.getItem("portfolio-theme") || "dark";
});

useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
}, [theme]);

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  //   setTheme(savedTheme);
  //   document.documentElement.setAttribute("data-theme", savedTheme);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  const skills = [
    { 
      category: "Frontend", 
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS"],
      icon: "🎨"
    },
    { 
      category: "Backend", 
      items: ["Node.js", "Express.js", "RESTful APIs"],
      icon: "⚙️"
    },
    { 
      category: "Database", 
      items: ["MySQL", "MongoDB"],
      icon: "💾"
    },
    { 
      category: "Tools & Platforms", 
      items: ["Git", "GitHub", "Postman", "VS Code"],
      icon: "🛠️"
    },
    { 
      category: "Others", 
      items: ["UI/UX Principles", "Python", "Deployment (Netlify / Render)"],
      icon: "🚀"
    },
    { 
      category: "Soft Skills", 
      items: ["Problem Solving", "Teamwork", "Communication"],
      icon: "💡"
    }
  ];

  const projects = [
    {
      title: "Movie Search App",
      description: "A responsive React.js application that fetches real-time movie data using APIs. Includes search functionality, ratings, and modern UI.",
      demo: "https://movie-search-app-mu-plum.vercel.app/",
      github: "https://github.com/PriyaSingh52/Movie-search-app",
      tags: ["React", "API", "Responsive"]
    },
    {
      title: "MI Store Clone",
      description: "Created a functional clone of the Mi Store mobile application, which is an e-commerce platform and best user experience and key features like original Website.",
      demo: "https://mi-store-clone-omega.vercel.app/",
      github: "https://github.com/PriyaSingh52/mi-store-clone",
      tags: ["React","react-bootstrap"]
    },
    {
      title: "Everyday Chef – Recipe Finder App",
      description: "A React-based recipe finder application that allows users to search recipes using ingredients or dish names. Integrated with external recipe APIs and designed with a clean, responsive UI.",
      demo: "https://recipe-finder-react-tau.vercel.app/",
      github: "https://github.com/PriyaSingh52/recipe-finder-react",
      tags: ["React", "REST API", "UI/UX"]
    },
    {
      title: "Task Manager Application",
      description: "Developed a full-stack task manager application with secure authentication, role-based access, and efficient CRUD operations for managing and tracking tasks.",
      demo: "https://taskfyer.vercel.app/",
      github: "https://github.com/PriyaSingh52/Taskfyer",
      tags: ["MERN", "NextJs", "Dashboard"]
    },
    {
      title: "Clinic Website CMS",
      description: "A complete MERN-based Content Management System for clinics that allows admins to manage doctors, services, appointments, gallery, and patient inquiries through a secure dashboard.",
      demo: "https://clinic-website-cms-seven.vercel.app/",
      github: "https://github.com/PriyaSingh52/clinic-website-cms",
      tags: ["MERN", "CMS", "Dashboard"]
    },
    {
      title: "Dice Game ",
      description: "An interactive dice game built with React where users can roll dice, track scores, and experience dynamic UI updates.",
      demo: "https://dice-game-three-jet.vercel.app/",
      github: "https://github.com/PriyaSingh52/Project3_Dice_Game",
      tags: ["React", "JavaScript", "UI/UX"]
    },
    {
      title: "Car Rental Website",
      description: "React-based car rental platform with search, filters, and booking functionality.",
      demo: "https://car-rental-website-seven-gray.vercel.app/",
      github: "https://github.com/PriyaSingh52/car_rental_website",
      tags: ["React", "UI/UX", "Booking"]
    },
    {
      title: "MERN Authentication App",
      description: "A secure MERN stack authentication system featuring JWT-based login, email OTP verification, and password reset functionality with encrypted credentials.",
      demo: "https://mern-authentication-react.vercel.app/login",
      github: "https://github.com/PriyaSingh52/mern-authentication-react",
      tags: ["MERN", "JWT", "Auth"]
    },
    {
      title: "Food Delivery Website",
      description: "Responsive food ordering UI with restaurant listings, cart flow, and smooth user experience.",
      demo: "https://restaurant-website-two-orcin.vercel.app/",
      github: "https://github.com/PriyaSingh52/Restaurant-Website",
      tags: ["React", "UI/UX", "E-commerce"]
    }
  ];

  const experience = [
    {
      role: "Frontend Developer Intern",
      company: "Tech Solutions",
      period: "Jan 2024 - Present",
      description: "Building responsive web applications using React.js and modern JavaScript frameworks.",
      achievements: [
        "Developed 5+ production-ready components",
        "Improved page load time by 40%",
        "Collaborated with cross-functional teams"
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      description: "Creating custom websites and web applications for clients across various industries.",
      achievements: [
        "Delivered 10+ successful projects",
        "Maintained 100% client satisfaction",
        "Specialized in React and responsive design"
      ]
    }
  ];

  const navItems = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="portfolio">
      <Navbar
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
        toggleMobileMenu={toggleMobileMenu}
        handleNavClick={handleNavClick}
        navItems={navItems}
      />

      <Hero profileImg={profileImg} />

      <Skills skills={skills} />

      <Projects projects={projects} />

      <Experience experience={experience} />

      <Contact />

      <Footer />
    </div>
  );
}