import { motion } from 'framer-motion';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  className?: string;
  center?: boolean;
}

export function SectionHeading({ subtitle, title, className = "", center = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-primary font-mono font-medium tracking-wider uppercase text-sm mb-2 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold font-display"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`h-1 w-24 bg-gradient-to-r from-primary to-accent mt-4 rounded-full ${center ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
