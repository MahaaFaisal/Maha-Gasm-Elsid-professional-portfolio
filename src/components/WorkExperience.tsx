import React, { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';

interface WorkExperienceProps {
  scrollY: number;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ scrollY }) => {
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

  const experiences = [
    {
      title: 'Generative AI Bootcamp Instructor',
      company: 'ADEK',
      date: 'JULY 2024 - AUGUST 2024',
      description: '',
    },
    {
      title: 'Women in Technology Program Mentee',
      company: 'Zain Sudan',
      date: 'JANUARY 2023 – MARCH 2023',
      description: '',
    },
    {
      title: 'Deputy Secretary-General',
      company: 'Faculty of Mathematical Sciences Student Association, Sudan',
      date: 'OCTOBER 2021 – NOVEMBER 2022',
      description: [
        'Maintaining accurate and organized records of meetings, decisions, and activities.',
        'Scheduling and coordinating meetings.',
        'Membership Management and Conflict Resolution.',
        'Planning and supervising the execution of events, workshops, and activities organized by the association.',
        'Handling incoming and outgoing communications, on behalf of the association',
        'Representing the student\'s interests and concerns to relevant parties.',
      ],
    },
    {
      title: 'Program Team Volunteer',
      company: 'IEEE University of Khartoum Branch, Sudan',
      date: 'JUNE 2021 – JULY 2022',
      description: 'Planning and writing proposals for events.',
    },
    {
      title: 'IT Trainee',
      company: 'Albaraka Bank, Sudan',
      date: 'OCTOBER 2020 – NOVEMBER 2020',
      description: [
        'Application Development with Visual Studio using C#.',
        'Database Creation and Configuration (Sybase).',
        'Database Manipulation and Querying (SQL Server).',
        'Business Intelligence Basics (PowerBI).',
        'Support and Operations.',
        'Networks and Infrastructure Basics.',
      ],
    },
    {
      title: 'Project Member',
      company: 'EEESE - University of Khartoum',
      date: 'MARCH 2018 – MAY 2018',
      description: 'A 3D printer that builds 3-dimensions objects.',
    },
  ];

  return (
    <section id="experience" className="py-16 section-enter" ref={sectionRef}>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="card p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{exp.title}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-4">{exp.date}</p>
            {Array.isArray(exp.description) ? (
              <ul className="list-disc list-inside text-gray-700">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">{exp.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;