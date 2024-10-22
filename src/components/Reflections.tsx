import React, { useEffect, useRef } from 'react';
import { BookOpen } from 'lucide-react';

interface ReflectionsProps {
  scrollY: number;
}

const Reflections: React.FC<ReflectionsProps> = ({ scrollY }) => {
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

  const reflections = [
    {
      title: "Learning from Failure",
      content: "Through my journey at 42 Abu Dhabi, I've learned that failure is not just inevitable but essential for growth. Each challenge I face, whether in coding or problem-solving, teaches me resilience and pushes me to think creatively.",
    },
    {
      title: "The Power of Feedback",
      content: "Giving and receiving feedback has been crucial in my development. It's helped me identify blind spots, improve my work, and collaborate more effectively with peers.",
    },
    {
      title: "Time Management",
      content: "Balancing multiple projects and deadlines has honed my time management skills. I've learned to prioritize tasks, set realistic goals, and maintain a healthy work-life balance.",
    },
    {
      title: "Continuous Learning",
      content: "The fast-paced tech industry requires constant learning. I've embraced this by regularly updating my skills, exploring new technologies, and seeking out learning opportunities beyond my comfort zone.",
    },
  ];

  return (
    <section id="reflections" className="py-16 section-enter" ref={sectionRef}>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Reflections</h2>
      <div className="space-y-6">
        {reflections.map((reflection, index) => (
          <div key={index} className="card p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{reflection.title}</h3>
            <p className="text-gray-600">{reflection.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reflections;