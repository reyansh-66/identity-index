
import { Card } from './ui/card';

export const About = () => {
  return (
    <section id="about" className="relative bg-secondary/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading text-3xl md:text-4xl text-center mb-12 animate-fade-down bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70">About Me</h2>
          <Card className="glass-card p-8 transform hover:scale-[1.02] transition-all duration-300 animate-fade-up bg-white/5 backdrop-blur-lg border-white/10">
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
