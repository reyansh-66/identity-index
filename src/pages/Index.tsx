
import { useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Contact />
    </main>
  );
};

export default Index;
