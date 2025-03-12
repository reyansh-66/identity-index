
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="section-container text-center relative z-10">
        <p className="text-sm md:text-base font-medium text-muted-foreground animate-fade-down">
          Hello, I'm
        </p>
        <h1 className="heading text-4xl md:text-6xl lg:text-7xl mt-4 animate-fade-down" style={{ animationDelay: '200ms' }}>
          Your Name
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mt-6 max-w-2xl mx-auto animate-fade-down" style={{ animationDelay: '400ms' }}>
          A passionate developer crafting beautiful digital experiences with modern technologies
        </p>
        <div className="flex items-center justify-center gap-4 mt-8 animate-fade-up" style={{ animationDelay: '600ms' }}>
          <Button variant="default" size="lg" className="rounded-full">
            View Projects
          </Button>
          <Button variant="outline" size="lg" className="rounded-full">
            Contact Me
          </Button>
        </div>
        <div className="flex items-center justify-center gap-6 mt-12 animate-fade-up" style={{ animationDelay: '800ms' }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <GithubIcon size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <LinkedinIcon size={24} />
          </a>
          <a href="mailto:your@email.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <MailIcon size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
