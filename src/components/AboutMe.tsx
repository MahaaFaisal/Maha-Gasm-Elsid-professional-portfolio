import React, { useEffect, useRef } from 'react';
import { User, MapPin, Phone, Mail, Linkedin, Github, FileText } from 'lucide-react';
import profileImage from '../resources/profile.jpg';
import resume from '../resources/Maha-Gasm-Elsid-resume.pdf';

interface AboutMeProps {
  scrollY: number;
}

const AboutMe: React.FC<AboutMeProps> = ({ scrollY }) => {
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
    <section id="about" className="py-16 section-enter" ref={sectionRef}>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          <img
            src={profileImage}
            alt="Maha Gasm Elsid"
            className="w-64 h-64 rounded-full object-cover shadow-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
          <p className="mb-4 text-gray-600">
            Dedicated Information Technology graduate with a proven track record in precision, problem-solving, and organization. Eager to build a link between theory and practice, especially in Software Development Life-Cycle (SDLC), and software development methodologies and tools.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <MapPin className="mr-2 text-gray-500" />
              <span>Abu Dhabi, UAE</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 text-gray-500" />
              <span>+971568775083</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 text-gray-500" />
              <span>Mahafaisalmubarak@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="mr-2 text-gray-500" />
              <a href="https://www.linkedin.com/in/mahagasmelsid/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn Profile</a>
            </div>
            <div className="flex items-center">
              <Github className="mr-2 text-gray-500" />
              <a href="https://github.com/MahaaFaisal" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">GitHub Profile</a>
            </div>
            <div className="flex items-center">
              <FileText className="mr-2 text-gray-500" />
              <a href={resume} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;