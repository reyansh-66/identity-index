
import { Card } from './ui/card';
import { Button } from './ui/button';
import { MailIcon, MessageSquareIcon, InstagramIcon, FacebookIcon } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="bg-secondary/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading text-3xl md:text-4xl mb-6 animate-fade-down">Get in Touch</h2>
          <Card className="glass-card p-8 animate-fade-up">
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to new opportunities and interesting projects. Feel free to reach out through any platform!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300" size="lg">
                <MailIcon size={20} />
                Email Me
              </Button>
              <Button variant="outline" className="inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300" size="lg">
                <MessageSquareIcon size={20} />
                Send Message
              </Button>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://instagram.com/reyansh.66" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-300">
                <InstagramIcon size={24} />
              </a>
              <a href="https://www.facebook.com/reyans.gautam.39/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-300">
                <FacebookIcon size={24} />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
