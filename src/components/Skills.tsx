import React, { useEffect, useRef } from 'react';
import { Code, Database, Monitor, Network, BarChart, FileSpreadsheet, Users, Brain, Clock, Presentation, Award } from 'lucide-react';

interface SkillsProps {
  scrollY: number;
}

const Skills: React.FC<SkillsProps> = ({ scrollY }) => {
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

  const technicalSkills = [
    { name: 'UX/UI Design', icon: <Monitor className="mr-2" /> },
    { name: 'Application Development', icon: <Code className="mr-2" /> },
    { name: 'Database Management', icon: <Database className="mr-2" /> },
    { name: 'Technical Support', icon: <Monitor className="mr-2" /> },
    { name: 'Networks Configuration', icon: <Network className="mr-2" /> },
    { name: 'Data Visualization', icon: <BarChart className="mr-2" /> },
    { name: 'Proficiency in Microsoft Office', icon: <FileSpreadsheet className="mr-2" /> },
  ];

  const softSkills = [
    { name: 'Communication Skills', icon: <Users className="mr-2" /> },
    { name: 'Teamwork and Collaboration', icon: <Users className="mr-2" /> },
    { name: 'Problem Solving and Logical Reasoning', icon: <Brain className="mr-2" /> },
    { name: 'Time Management and Planning', icon: <Clock className="mr-2" /> },
    { name: 'Presentation Skills', icon: <Presentation className="mr-2" /> },
    { name: 'Leadership Skills', icon: <Award className="mr-2" /> },
  ];

  return (
    <section id="skills" className="py-16 section-enter" ref={sectionRef}>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Technical Skills</h3>
          <ul className="space-y-2">
            {technicalSkills.map((skill, index) => (
              <li key={index} className="flex items-center bg-white p-3 rounded-lg shadow">
                {skill.icon}
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Soft Skills</h3>
          <ul className="space-y-2">
            {softSkills.map((skill, index) => (
              <li key={index} className="flex items-center bg-white p-3 rounded-lg shadow">
                {skill.icon}
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;