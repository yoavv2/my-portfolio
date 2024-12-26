import React from 'react';

interface BioSectionProps {
  children: React.ReactNode;
}

const BioSection: React.FC<BioSectionProps> = ({ children }) => (
  <p className='mt-20 font-mono text-xl lg:text-xl'>{children}</p>
);

const Bio = () => {
  return (
    <BioSection>
      As a Full Stack Developer, I specialize in building modern web applications 
      with a focus on clean code and exceptional user experiences. My expertise 
      spans the entire development stack, from crafting responsive frontends with 
      React and Next.js to designing robust backend systems.
      <br />
      <br />
      I'm particularly passionate about:
      • Building scalable web applications with Next.js and TypeScript
      • Creating intuitive user interfaces with modern design principles
      • Implementing efficient state management solutions
      • Writing clean, maintainable, and well-tested code
      <br />
      <br />
      Currently, I'm exploring new technologies and methodologies in web development,
      with a particular interest in performance optimization and modern architectural patterns.
      I believe in continuous learning and staying current with the latest industry developments
      to deliver the best possible solutions.
      <br />
      <br />
      I'm always open to discussing new projects and opportunities where I can 
      contribute my expertise in building exceptional digital experiences.
    </BioSection>
  );
};

export default Bio;
