import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, GraduationCap, Award } from 'lucide-react';

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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack React application with Node.js backend, featuring real-time inventory management and payment processing.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "#"
    },
    {
      title: "Task Management Dashboard",
      description: "Collaborative project management tool with drag-and-drop functionality and real-time updates using WebSockets.",
      tech: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Weather Analytics App",
      description: "Mobile-responsive weather application with data visualization and location-based forecasting.",
      tech: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
      link: "#"
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Redux"],
    "Backend": ["Node.js", "Express", "Python", "RESTful APIs", "GraphQL"],
    "Database": ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    "Tools": ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"]
  };

  const experience = [
    {
      role: "Software Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Developed and maintained web applications serving 50K+ users. Improved application performance by 40% through code optimization and caching strategies."
    },
    {
      role: "Junior Developer",
      company: "StartUp Innovations",
      period: "2020 - 2022",
      description: "Built responsive user interfaces and collaborated with cross-functional teams. Implemented automated testing, reducing bugs by 30%."
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Animated background elements */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" style={{zIndex: -1}}>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}}></div>
      </div>

      <div className="relative" style={{zIndex: 1}}>
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
                    className={`capitalize transition-all hover:text-cyan-400 ${
                      activeSection === section ? 'text-cyan-400 font-semibold' : 'text-slate-400'
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
                <div className="text-cyan-400 text-lg mb-4 font-mono" style={{animationDelay: '0.2s'}}>
                  Hello, I'm
                </div>
                <h1 className="text-6xl font-bold mb-6 leading-tight" style={{animationDelay: '0.4s'}}>
                  <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Hunter A. Brickers
                  </span>
                </h1>
                <h2 className="text-3xl text-slate-300 mb-6" style={{animationDelay: '0.6s'}}>
                  Full Stack Software Developer
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8" style={{animationDelay: '0.8s'}}>
                  Passionate about creating elegant solutions to complex problems. 
                  Specializing in building scalable web applications with modern technologies 
                  and best practices.
                </p>
                <div className="flex gap-4" style={{animationDelay: '1s'}}>
                  <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                    Get In Touch
                  </a>
                  <a href="#projects" className="px-6 py-3 border border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all">
                    View Projects
                  </a>
                </div>
                <div className="flex gap-6 mt-8">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:your.email@example.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
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
                  I specialize in full-stack development with a focus on creating intuitive, user-friendly 
                  interfaces backed by robust, scalable systems. I love solving complex problems and 
                  continuously learning new technologies.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to open-source projects, writing 
                  technical blog posts, or exploring new frameworks and tools.
                </p>
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                  <GraduationCap className="text-cyan-400 mb-3" size={32} />
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-slate-400">B.S. in Computer Science</p>
                  <p className="text-slate-500">University Name, 2020</p>
                </div>
                <div className="p-6 rounded-xl bg-slate-800/50 border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                  <Award className="text-emerald-400 mb-3" size={32} />
                  <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                  <p className="text-slate-400">AWS Certified Developer</p>
                  <p className="text-slate-400">React Professional Certificate</p>
                </div>
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
                  <p className="text-slate-400 leading-relaxed">{exp.description}</p>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105">
                  <div className="flex items-start justify-between mb-4">
                    <Briefcase className="text-cyan-400 group-hover:text-emerald-400 transition-colors" size={32} />
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
              Get In Touch
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              I'm currently open to new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:your.email@example.com" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2">
                <Mail size={20} />
                Send Email
              </a>
              <a href="/resume.pdf" download className="px-8 py-4 border border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all">
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-slate-800">
          <div className="max-w-6xl mx-auto text-center text-slate-400">
            <p>Built with React & Tailwind CSS</p>
            <p className="text-sm mt-2">© 2024 Your Name. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}