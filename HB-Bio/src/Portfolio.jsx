import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, ChartNetwork, Briefcase, GraduationCap, Award } from 'lucide-react';

import profileImage from './assets/profile.jpg';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Track scroll position to update active section
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for nav bar

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of fixed nav bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  {/* FIX the URL for the Network Modeling Project. Add correct files to it*/}
  const projects = [
    {
      title: "Network Modeling Visualization",
      description: "Full stack React application with Node.js backend, "+
                   "featuring real time network modeling animations processed through a javascript graphical library. "+
                   "Earlier versions use an in browser REPL to design and animate the network model, "+
                   "and later versions use a Common Lisp REPL for better data handling.",
      tech: ["React", "UX Design", "Node.js", "D3.js", "Express.js", "JSON", "Common Lisp", "SLIME REPL"],
      link: "https://github.com/brickstate"
    },
    {
      title: "Generic Card Game API",
      description: "Developed a Generic Card Game REST API that modeled core entities such as decks, hands, players, "+
                   "and game states, with endpoints for shuffling, dealing, drawing, and updating game state. "+
                   "Designed a modular architecture with clean schemas and predictable request/response patterns for "+
                   "easy client integration. Implemented validation, rule enforcement, and error handling to ensure "+
                   "data integrity and consistent gameplay behavior.",
      tech: ["RESTful API", "MySQL", "Database Schema Design", "JSON", "Postman", "JavaScript", "Google Cloud Platform VM's"],
      link: "https://github.com/brickstate/UNO-API"
    },
    {
      title: "Text-Based Adventure Game",
      description: "BooneBauchery is a text based adventure game where the player navigates a narrative about a computer "+
                   "science student deciding how to spend the evening, with branching choices and story progression. "+
                   "The game combines interactive storytelling with artistically edited scenes "+
                   "to enhance the experience. It was developed as a final project for a Software Engineering course, "+
                   "written in Java and run via Maven and JavaFX.",
      tech: ["Java", "Maven", "JavaFX", "Photo Editing", "UI Development"],
      link: "https://github.com/brickstate/BooneBauchery"
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "D3.js"],
    "Backend": ["Node.js", "Express", "Python", "RESTful APIs"],
    "Database": ["MySQL", "Database Schema Design"],
    "Tools": ["Git", "Google Cloud Platform", "Docker", "CI/CD", "Websockets"]
  };

  const experience = [
    {
      role: "Web & Technology Specialist Intern",
      company: "SEC Marketing Group",
      period: "February 2023",
      description: [
        "Developed and maintained client websites with custom front-end components using JavaScript, HTML, and CSS",
        "Implemented technical SEO optimizations",
        "Improved site performance through page speed optimization and responsive design adjustments",
        "Configured analytics and tracking systems (Google Analytics, Tag Manager, conversion tracking)",
        "Identified and resolved technical SEO issues impacting search rankings",
        "Assisted in internal automation and software development initiatives to streamline workflows"
      ]
    },
    {
      role: "Clinic IT Intern",
      company: "Interprofessional Clinic, Appalachian Institute for Health and Wellness",
      period: "Summer 2023",
      description: [
        "Resolved network connectivity issues in a timely manner",
        "Utilized electronic health record platforms to help aid healthcare providers delivering service to patients",
        "Installed software updates and patches to machines in accordance to HIPAA legislation",
        "Configured a machine which would help aid healthcare providers in diagnosing autism early in young children",
        "Participated in new technology and emerging developmental programs utilized by the clinic",
        "Resolved hardware issues when helping to setup a PA system",
        "Documented the program and the technical assessment which the machine conducted"
      ]
    },
    {
      role: "Server & Bartender",
      company: "Macado's",
      period: "2023 - 2025",
      description: [
        "Balanced multiple parallel tasks under pressure, prioritizing orders and workflow to minimize wait times and errors",
        "Delivered customer focused problem resolution, quickly addressing issues and adapting to changing conditions",
        "Tasked with effectively serving and making point of sale interactions with about 30 individuals at any given time through busy hours"
      ]
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Animated background elements */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" style={{ zIndex: -1 }}>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      </div>

      <div className="relative" style={{ zIndex: 1 }}>
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-cyan-500/20 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Hunter B.
              </div>
              <div className="flex gap-6">
                {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-all hover:text-cyan-400 ${activeSection === section ? 'text-cyan-400 font-semibold' : 'text-slate-400'
                      }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className={`pt-32 pb-20 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-cyan-400 text-lg mb-4 font-mono" style={{ animationDelay: '0.2s' }}>
                  Hello, I'm
                </div>
                <h1 className="text-6xl font-bold mb-6 leading-tight" style={{ animationDelay: '0.4s' }}>
                  <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Hunter A. Brickers
                  </span>
                </h1>
                <h2 className="text-3xl text-slate-300 mb-6" style={{ animationDelay: '0.6s' }}>
                  Full Stack Software Developer
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8" style={{ animationDelay: '0.8s' }}>
                  Passionate about creating elegant solutions to complex problems.
                  Specializing in building scalable web applications with modern technologies
                  and best practices.
                </p>
                <div className="flex gap-4" style={{ animationDelay: '1s' }}>
                  <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                    Contact
                  </a>
                  <a href="#projects" className="px-6 py-3 border border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all">
                    View Projects
                  </a>
                </div>
                <div className="flex gap-6 mt-8">
                  <a href="https://github.com/brickstate" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/hunterbrickers/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:brickersan@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 backdrop-blur-sm border border-cyan-500/30 overflow-hidden flex items-center justify-center">
                  <img
                    src={profileImage}
                    // If using import method, change above line to: src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400 opacity-50"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
              <span className="text-cyan-400">01.</span>
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I'm a software developer with a passion for building exceptional digital experiences.
                  My journey into development started during college when I built my first web application,
                  and I've been hooked ever since.
                </p>
                <p>
                  I specialize in full stack development with a focus on creating intuitive, user friendly
                  interfaces backed by robust, scalable systems. I love solving complex problems and
                  continuously learning new technologies.

                  Recently I have been mainly occupied with working on a web application algorithm to
                  model membership tracking. This has only been possible by making the best use of
                  community React documentation, Common Lisp textbooks, and graphing javascript libraries.
                </p>
                {/* 
                <p>
                Extra space
                </p>
                */ }
                <p>
                  When I'm not coding, you can find me working on my home gym, reading my favorite thrillers,
                  or exploring new frameworks and tools.
                </p>
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                  <GraduationCap className="text-cyan-400 mb-3" size={32} />
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  
                  <p className="text-slate-400">B.S. in Computer Science, cum laude</p>
                  <p className="text-slate-500">Appalachian State University, December 2025</p>
                  <br/>
                  <p className="text-slate-400">Associate of Arts </p>
                  <p className="text-slate-500">Central Piedmont Community College, Decemebr 2022</p>
                </div>

                {/* Fix this section when you get more certifications. either cyber security or web dev or database */}
                { /* 
                <div className="p-6 rounded-xl bg-slate-800/50 border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                  <Award className="text-emerald-400 mb-3" size={32} />
                  <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                  <p className="text-slate-400">AWS Certified Developer</p>
                  <p className="text-slate-400">React Professional Certificate</p>
                </div>  */}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
              <span className="text-cyan-400">02.</span>
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-slate-300 text-lg">{exp.company}</p>
                    </div>
                    <div className="text-slate-400 font-mono mt-2 md:mt-0">{exp.period}</div>
                  </div>
                  {Array.isArray(exp.description) ? (
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate-400 leading-relaxed flex items-start gap-3">
                          <span className="text-cyan-400 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
              <span className="text-cyan-400">03.</span>
              Featured Projects
            </h2>
            {/*FIX THE ICONS FOR THE PROJECTS.
               Right now it is one icon shared on all project cards.*/}
            {/*Pay attention to the <ChartNetwork/> tag and how it is used here.
               We need to be able to set what icon is for what card in a better to have custom icons for each card*/}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105">
                  <div className="flex items-start justify-between mb-4">
                    <ChartNetwork className="text-cyan-400 group-hover:text-emerald-400 transition-colors" size={32} />
                    <a href={project.link} className="text-slate-400 hover:text-cyan-400 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-100">{project.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
              <span className="text-cyan-400">04.</span>
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, items], index) => (
                <div key={index} className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">{category}</h3>
                  <ul className="space-y-2">
                    {items.map((skill, i) => (
                      <li key={i} className="text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-slate-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <span className="text-cyan-400">05.</span>
              Contact
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              I'm currently open to new opportunities and interesting projects.
              <br/>
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=brickersan@gmail.com" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2">
                <Mail size={20} />
                Send Email
              </a>
              <a href={`${import.meta.env.BASE_URL}resumeHunterBrickers.pdf`} download className="px-8 py-4 border border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all">
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-slate-800">
          <div className="max-w-6xl mx-auto text-center text-slate-400">
            <p>Built with React & Tailwind CSS</p>
            <p className="text-sm mt-2">© 2026 Hunter Brickers</p>
          </div>
        </footer>
      </div>
    </div>
  );
}