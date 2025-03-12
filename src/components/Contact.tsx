
import { Card } from './ui/card';
import { Button } from './ui/button';
import { MailIcon, MessageSquareIcon } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="bg-secondary/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading text-3xl md:text-4xl mb-6">Get in Touch</h2>
          <Card className="glass-card p-8">
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to new opportunities and interesting projects. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="inline-flex items-center gap-2" size="lg">
                <MailIcon size={20} />
                Email Me
              </Button>
              <Button variant="outline" className="inline-flex items-center gap-2" size="lg">
                <MessageSquareIcon size={20} />
                Send Message
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
