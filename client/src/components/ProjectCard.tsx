import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowRight, X, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  techStack: string[];
  githubLinks: { label: string; url: string }[];
  highlight?: string;
}

export function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-[400px] perspective-1000"
    >
      <div
        className={`relative w-full h-full transition-all duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <Card 
          className={`absolute inset-0 glass-card border-none flex flex-col group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 backface-hidden ${isFlipped ? 'invisible' : ''}`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <CardHeader>
            <div className="flex justify-between items-start mb-2">
              <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                <Github className="w-6 h-6" />
              </div>
              {project.highlight && (
                <Badge className="bg-accent text-accent-foreground text-xs">{project.highlight}</Badge>
              )}
            </div>
            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="pt-2">
            <button 
              onClick={() => setIsFlipped(true)}
              className="text-sm font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all duration-300"
              data-testid={`button-view-details-${index}`}
            >
              View Details <ArrowRight className="w-4 h-4" />
            </button>
          </CardFooter>
        </Card>

        <Card 
          className={`absolute inset-0 glass-card border-none flex flex-col rotate-y-180 overflow-hidden ${!isFlipped ? 'invisible' : ''}`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg font-bold text-primary">{project.title}</CardTitle>
              <button 
                onClick={() => setIsFlipped(false)}
                className="p-1 rounded-full hover:bg-white/10 transition-colors"
                data-testid={`button-close-details-${index}`}
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </CardHeader>
          <CardContent className="flex-grow overflow-y-auto">
            <h4 className="text-sm font-semibold text-accent mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.techStack.map(tech => (
                <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-foreground">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <h4 className="text-sm font-semibold text-accent mb-3">GitHub Repositories</h4>
            <div className="space-y-2">
              {project.githubLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors text-sm group/link"
                  data-testid={`link-github-${project.title.replace(/\s+/g, '-').toLowerCase()}-${idx}`}
                >
                  <Github className="w-4 h-4 text-primary" />
                  <span className="truncate flex-1 text-muted-foreground group-hover/link:text-foreground transition-colors">{link.label}</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

export function OtherProjectCard({ project, index }: { project: { title: string; description: string; github?: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-colors group">
        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">{project.title}</h4>
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                data-testid={`link-github-other-${index}`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
