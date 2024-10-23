import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

interface ProjectsProps {
  scrollY: number;
}

const Projects: React.FC<ProjectsProps> = ({ scrollY }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (sectionElement) {
      const sectionTop = sectionElement.offsetTop;
      const sectionHeight = sectionElement.offsetHeight;
      if (scrollY > sectionTop - window.innerHeight / 2 && scrollY < sectionTop + sectionHeight) {
        sectionElement.classList.add('section-enter-active');
      } else {
        sectionElement.classList.remove('section-enter-active');
      }
    }
  }, [scrollY]);

  const projects = [
    {
      title: "Personal e-Portfolio",
      description: "Developed a responsive personal portfolio using React, TypeScript, and Tailwind CSS. This project showcases my skills, projects, and professional experiences, providing a platform for potential employers and collaborators to learn more about my work and expertise.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/MahaaFaisal/Maha-Gasm-Elsid-professional-portfolio",
    }, 
    {
      title: "Cub3d",
      description: "The Cub3D group project is an integral part of the 42 school curriculum, where I am tasked with developing a 3D game engine that renders a virtual environment using raycasting techniques. This project involves implementing complex algorithms to simulate the behavior of light and create a visually immersive experience.",
      technologies: ["C language", "Makefile", "Valgrind", "MiniLibx", "System calls", "Git"],
      link: "https://github.com/suhana66/cub3d",
    },
    {
      title: "Philosophers",
      description: "The Philosophers project is a key part of the 42 school curriculum, where I simulate the Dining Philosophers problem in C. This project delves into concurrency and synchronization, requiring the management of multiple threads representing philosophers who alternate between thinking and eating.",
      technologies: ["C language", "Makefile", "Valgrind", "bash", "System calls", "Git"],
      link: "https://github.com/MahaaFaisal/minishell42",
    },
    {
      title: "minishell",
      description: "Minishell is a challenging group project in the 42 school curriculum, where I am building a Unix-like shell in C that mimics the functionality of Bash. The shell must handle complex tasks such as parsing and executing commands, managing processes and signals, handling pipes, redirections, environment variables, and more.",
      technologies: ["C language", "Makefile", "Valgrind", "bash", "System calls", "Git"],
      link: "https://github.com/MahaaFaisal/philo",
    },
    {
      title: "libft",
      description: "Libft is the first project in the 42 school curriculum, where I am tasked with creating my own C library. The project involves implementing a variety of functions from the standard C library, building a solid foundation in understanding how these functions work internally.",
      technologies: ["C language", "Makefile", "Valgrind"],
      link: "https://github.com/MahaaFaisal/libft",
    },
    {
      title: "Multi-Level Business Performance Monitoring Dashboard for Startups",
      description: "My graduation project involves developing a multi-level business performance monitoring dashboard specifically designed for startups. This comprehensive dashboard utilizes Power BI to visualize key performance indicators (KPIs), allowing stakeholders to track and analyze essential metrics related to growth, financial health, and operational efficiency.",
      technologies: ["Data Visualization", "PowerBI", "DAX"],
      link: "",
    },
    {
      title: "3D Printer Project",
      description: "I contributed to the development of a 3D printer capable of producing three-dimensional objects. This project involved a multidisciplinary approach, integrating 3D modeling, electronics, and mechanical engineering principles.",
      technologies: ["3D Modeling", "Electronics", "Mechanical Engineering"],
      link: "",
    },
  ];

  return (
    <section id="projects" className="py-16 section-enter" ref={sectionRef}>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {project.title}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ml-2 text-blue-600"
                >
                  <FontAwesomeIcon icon={faLink} className="inline text-gray-400" />
                </a>
              )}
            </h3>
            <p className="mb-4 text-gray-600">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="bg-gray-200 text-brown-800 px-3 py-1 rounded-lg text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
