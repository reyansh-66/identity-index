
import { Card } from './ui/card';
import { ExternalLinkIcon } from 'lucide-react';

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and TypeScript",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Project Two",
    description: "Responsive design with modern animations",
    tech: ["Next.js", "Framer Motion", "Supabase"],
    link: "#"
  },
  {
    title: "Project Three",
    description: "Full-stack application with real-time features",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="bg-background">
      <div className="section-container">
        <h2 className="heading text-3xl md:text-4xl text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card p-6 hover:scale-[1.02] transition-transform">
              <h3 className="text-xl font-heading font-bold">{project.title}</h3>
              <p className="text-muted-foreground mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-secondary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project <ExternalLinkIcon size={16} />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
