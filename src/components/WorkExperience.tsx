import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Import arrow icons

interface WorkExperienceProps {
  scrollY: number;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ scrollY }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // Track which card is expanded

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
      description: 'Instructed a Generative AI bootcamp for participants aged 13 to 18, guiding them through the practical applications of various AI tools. Engaged students in hands-on projects to enhance their understanding of generative AI concepts.',
    },
    {
      title: 'Women in Technology Program Mentee',
      company: 'Zain Sudan',
      date: 'JANUARY 2023 – MARCH 2023',
      description: 'Participated as a mentee in the Women in Technology program, receiving guidance and support from the software development department. Collaborated with mentors on software development projects to develop technical skills and industry knowledge.',
    },
    {
      title: 'Deputy Secretary-General',
      company: 'Faculty of Mathematical Sciences Student Association, Sudan',
      date: 'OCTOBER 2021 – NOVEMBER 2022',
      description: "In my role as secretary, I maintain organized records of meetings and decisions, coordinate schedules, manage membership and conflict resolution, and oversee events and communications on behalf of the association while representing students' interests to relevant parties.",
    },
    {
      title: 'Program Team Volunteer',
      company: 'IEEE University of Khartoum Branch, Sudan',
      date: 'JUNE 2021 – JULY 2022',
      description: 'Assisted in planning and executing technical events, contributing to proposal writing and event logistics. Supported outreach efforts to increase participation and awareness of IEEE initiatives among students.',
    },
    {
      title: 'IT Trainee',
      company: 'Albaraka Bank, Sudan',
      date: 'OCTOBER 2020 – NOVEMBER 2020',
      description: "Gained practical experience in application development using Visual Studio and C#. Assisted with database creation and configuration, as well as querying and manipulation using SQL Server.",
    },
    {
      title: 'Project Member',
      company: 'EEESE - University of Khartoum',
      date: 'MARCH 2018 – MAY 2018',
      description: 'Collaborated on a team to design and build a 3D printer. Involved in 3D modeling, electronics assembly, and testing to ensure functionality and reliability of the prototype.',
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle expand/collapse
  };

  return (
    <section id="experience" className="py-16 section-enter" ref={sectionRef}>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Work Experience</h2>
      {/* Flexbox container with minimum width for each card */}
      <div className="flex flex-wrap -mx-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="w-full sm:w-auto flex-grow px-4 mb-8"
            style={{ minWidth: '300px', flexBasis: '45%' }}
          >
            <div className="card p-6 border border-gray-300 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-4">{exp.date}</p>
                </div>
                <button onClick={() => toggleExpand(index)} className="focus:outline-none">
                  {expandedIndex === index ? (
                    <ChevronUp className="text-gray-700 w-6 h-6" />
                  ) : (
                    <ChevronDown className="text-gray-700 w-6 h-6" />
                  )}
                </button>
              </div>
              {/* Render the description only if the card is expanded */}
              {expandedIndex === index && (
                <div className="mt-4 text-gray-700">
                  {Array.isArray(exp.description) ? (
                    <ul className="list-disc list-inside">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
