import React, { useEffect, useRef } from 'react';
import { Award } from 'lucide-react';

interface AchievementsProps {
  scrollY: number;
}

const Achievements: React.FC<AchievementsProps> = ({ scrollY }) => {
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

  const achievements = [
    "Completed Generative AI Bootcamp",
    "Participated in Women in Technology Program",
    "Successfully led and organized events as Deputy Secretary-General",
    "Contributed to the development of a 3D printer project",
    "Completed various online courses in programming and web development",
  ];

  return (
    <section id="achievements" className="py-16 section-enter" ref={sectionRef}>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Achievements</h2>
      <div className="card p-6">
        <ul className="space-y-4">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <Award className="mr-2 mt-1 text-brown-500" size={20} />
              <span className="text-gray-700">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;