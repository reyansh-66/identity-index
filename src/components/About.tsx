
import { Card } from './ui/card';

export const About = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading text-3xl md:text-4xl text-center mb-12 animate-fade-down">About Me</h2>
          <Card className="glass-card p-8 transform hover:scale-[1.02] transition-all duration-300 animate-fade-up">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies, I transform ideas into elegant, functional solutions.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              My journey in technology has equipped me with a deep understanding of both frontend and backend development, allowing me to build comprehensive solutions that meet real-world needs.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
