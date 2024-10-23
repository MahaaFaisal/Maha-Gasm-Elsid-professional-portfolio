import React, { useEffect, useRef } from 'react';
// import { GraduationCap } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import certificate from '/workspaces/Maha-Gasm-Elsid-professional-portfolio/src/resources/Certificate.pdf';
import transcript42 from '/workspaces/Maha-Gasm-Elsid-professional-portfolio/src/resources/transcript42.pdf';
interface QualificationsProps {
  scrollY: number;
}

const Qualifications: React.FC<QualificationsProps> = ({ scrollY }) => {
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

  return (
    <section id="qualifications" className="py-16 section-enter" ref={sectionRef}>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Qualifications</h2>

      <div className="space-y-6">

        <div className="card p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          Diploma in Software Development
          <a href={transcript42} target="_blank" rel="noopener noreferrer" className="ml-2">
            <FontAwesomeIcon icon={faLink} className="text-gray-400" />
          </a>
        </h3>
        <p className="text-gray-600">42 Abu Dhabi, UAE</p>
        <p className="text-sm text-gray-500">OCTOBER 2023 - PRESENT</p>
      </div>

        <div className="card p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          Bachelor of Science in Information Technology
          <a href={certificate} target="_blank" rel="noopener noreferrer" className="ml-2">
            <FontAwesomeIcon icon={faLink} className="text-gray-400" />
          </a>
        </h3>
        <p className="text-gray-600">University of Khartoum, Sudan</p>
        <p className="text-sm text-gray-500">JANUARY 2023</p>
        <p className="mt-2">GPA: 3.67/4.00</p>
        <p className="mt-2 text-gray-700">Graduation Project: "Multi-Level Business Performance Monitoring Dashboard for Startups."</p>
      </div>
      </div>
    </section>
  );
};

export default Qualifications;
