import React, { useEffect, useRef } from 'react';
import { FolderGit2 } from 'lucide-react';

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
      title: "Multi-Level Business Performance Monitoring Dashboard for Startups",
      description: "Graduation project focused on creating a comprehensive dashboard for startup performance monitoring.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "3D Printer Project",
      description: "Contributed to the development of a 3D printer that builds 3-dimensional objects.",
      technologies: ["3D Modeling", "Electronics", "Mechanical Engineering"],
    },
  ];

  return (
    <section id="projects" className="py-16 section-enter" ref={sectionRef}>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
            <p className="mb-4 text-gray-600">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
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