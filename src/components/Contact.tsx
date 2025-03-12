
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { useToast } from './ui/use-toast';
import { MailIcon, SendIcon } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-secondary/50">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="heading text-3xl md:text-4xl mb-6 animate-fade-down">Get in Touch</h2>
          <Card className="glass-card p-8 animate-fade-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-white/50 border-white/20 focus:border-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-white/50 border-white/20 focus:border-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-white/50 border-white/20 focus:border-primary min-h-[150px]"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full group hover:scale-105 transition-all duration-300"
                size="lg"
              >
                Send Message
                <SendIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
          <div className="mt-8 text-muted-foreground">
            <p>Or reach me directly at:</p>
            <a 
              href="mailto:reyanshgautam99@gmail.com" 
              className="inline-flex items-center gap-2 mt-2 hover:text-foreground transition-colors"
            >
              <MailIcon size={20} />
              reyanshgautam99@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
