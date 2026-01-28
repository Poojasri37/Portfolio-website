import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

export function ProjectCard({ project, index }: { project: ProjectProps; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full glass-card border-none flex flex-col group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
              <Github className="w-6 h-6" />
            </div>
            <div className="flex gap-2">
              {project.links?.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.links?.demo && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
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
          <button className="text-sm font-medium text-primary flex items-center gap-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            View Details <ArrowRight className="w-4 h-4" />
          </button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
