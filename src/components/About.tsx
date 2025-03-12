
import { Card } from './ui/card';

export const About = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading text-3xl md:text-4xl text-center mb-12 animate-fade-down">About Me</h2>
          <Card className="glass-card p-8 transform hover:scale-[1.02] transition-all duration-300 animate-fade-up">
            <p className="text-lg leading-relaxed text-muted-foreground">
              As a student passionate about technology and design, I bring together the worlds of development and creativity. With expertise in graphic design and editing, I create visually stunning and functional digital experiences.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              My unique combination of skills allows me to approach projects from multiple angles, ensuring both aesthetic appeal and technical excellence in everything I create.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
