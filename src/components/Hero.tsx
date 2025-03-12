
import { GithubIcon, MailIcon, InstagramIcon, FacebookIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { ParticlesBackground } from './ParticlesBackground';

export const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      <ParticlesBackground />
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-left">
            <p className="text-sm md:text-base font-medium text-primary/80 animate-fade-down">
              Hello, I'm
            </p>
            <h1 className="heading text-4xl md:text-6xl lg:text-7xl mt-4 animate-fade-down bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70" style={{ animationDelay: '200ms' }}>
              Reyansh Gautam
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-6 max-w-2xl animate-fade-down" style={{ animationDelay: '400ms' }}>
              A passionate student, developer, graphic designer & editor crafting beautiful digital experiences
            </p>
            <div className="flex items-center gap-4 mt-8 animate-fade-up" style={{ animationDelay: '600ms' }}>
              <Button 
                variant="default" 
                size="lg" 
                className="rounded-full hover:scale-105 transition-transform duration-300 glass-card bg-primary/10 hover:bg-primary/20"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8 animate-fade-up" style={{ animationDelay: '800ms' }}>
              <a href="https://instagram.com/reyansh.66" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300">
                <InstagramIcon size={24} />
              </a>
              <a href="https://www.facebook.com/reyans.gautam.39/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300">
                <FacebookIcon size={24} />
              </a>
              <a href="mailto:reyanshgautam99@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300">
                <MailIcon size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-left" style={{ animationDelay: '1000ms' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
              <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-primary/20 shadow-xl hover:scale-105 transition-transform duration-500">
                <AvatarImage src="/lovable-uploads/848c8c3b-24fb-4a7a-a36d-1ec6b7c4fc40.png" alt="Reyansh Gautam" />
                <AvatarFallback>RG</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
