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
    <section
      id="about"
      className="py-16 section-enter border-t-4 border-blue-600"
      ref={sectionRef}
    >
      <div className="flex justify-center">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img
                src={profileImage}
                alt="Maha Gasm Elsid"
                className="w-64 h-64 rounded-full object-cover shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-4xl font-extrabold mb-4 text-gray-800">Maha Gasm Elsid</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
              Dedicated Information Technology graduate with hands-on experience in software development, project management, and technical problem-solving. Skilled in applying theoretical knowledge to real-world scenarios, particularly within the Software Development Life Cycle (SDLC) and various development methodologies. Committed to continuous learning, I am currently expanding my knowledge in AI to leverage technology for driving effective solutions.
              </p>
              <br/>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <MapPin className="mr-2 text-gray-500" />
                  <span>Abu Dhabi, UAE</span>
                </div>
                <div className="flex items-center">
                  <Github className="mr-2 text-gray-500" />
                  <a 
                    href="https://github.com/MahaaFaisal" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:underline hover:text-gray-800 transition duration-200 cursor-pointer"
                  >
                    GitHub Profile
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 text-gray-500" />
                  <span>Mahafaisalmubarak@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="mr-2 text-gray-500" />
                  <a 
                    href="https://www.linkedin.com/in/mahagasmelsid/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:underline hover:text-gray-800 transition duration-200 cursor-pointer"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 text-gray-500" />
                  <span>+971568775083</span>
                </div>
                <div className="flex items-center">
                  <FileText className="mr-2 text-gray-500" />
                  <a 
                    href={resume} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:underline hover:text-gray-800 transition duration-200 cursor-pointer"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
