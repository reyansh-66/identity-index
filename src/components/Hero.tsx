
import { GithubIcon, LinkedinIcon, MailIcon, InstagramIcon, FacebookIcon } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/50 to-background">
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern opacity-20" />
      <div className="section-container text-center relative z-10">
        <p className="text-sm md:text-base font-medium text-muted-foreground animate-fade-down">
          Hello, I'm
        </p>
        <h1 className="heading text-4xl md:text-6xl lg:text-7xl mt-4 animate-fade-down bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70" style={{ animationDelay: '200ms' }}>
          Reyansh Gautam
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mt-6 max-w-2xl mx-auto animate-fade-down" style={{ animationDelay: '400ms' }}>
          A passionate developer crafting beautiful digital experiences with modern technologies
        </p>
        <div className="flex items-center justify-center gap-4 mt-8 animate-fade-up" style={{ animationDelay: '600ms' }}>
          <Button 
            variant="default" 
            size="lg" 
            className="rounded-full hover:scale-105 transition-transform duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full hover:scale-105 transition-transform duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </div>
        <div className="flex items-center justify-center gap-6 mt-12 animate-fade-up" style={{ animationDelay: '800ms' }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-300">
            <GithubIcon size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-300">
            <LinkedinIcon size={24} />
          </a>
          <a href="https://instagram.com/reyansh.66" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-300">
            <InstagramIcon size={24} />
          </a>
          <a href="https://www.facebook.com/reyans.gautam.39/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-300">
            <FacebookIcon size={24} />
          </a>
          <a href="mailto:your@email.com" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-300">
            <MailIcon size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
