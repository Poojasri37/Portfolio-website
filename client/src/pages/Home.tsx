import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { useCreateMessage } from '@/hooks/use-messages';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertMessageSchema, type InsertMessage } from '@shared/schema';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin, Download, CheckCircle2, Trophy, Award, ExternalLink } from 'lucide-react';
import profileImg from '@assets/Poojasri_M_1769625952854.jpg';

export default function Home() {
  const createMessage = useCreateMessage();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertMessage) => {
    createMessage.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  const skills = [
    { category: "Languages", items: ["Python", "Java", "SQL", "HTML/CSS"] },
    { category: "AI & ML", items: ["TensorFlow", "Keras", "OpenCV", "LangChain", "RAG", "LLMs", "Transformers"] },
    { category: "Cloud & DevOps", items: ["AWS", "GCP", "Docker", "Jenkins", "Git", "PostgreSQL", "Snowflake"] },
    { category: "Tools", items: ["Power BI", "Tableau", "Apache Kafka", "Hadoop", "Hive"] },
  ];

  const projects = [
    {
      title: "Virtual Interview Assistant",
      description: "GenAI interview automation system leveraging LLMs, RAG, and LangGraph with speech-to-text/text-to-speech capabilities.",
      tags: ["GenAI", "RAG", "React", "Python"],
      links: { github: "https://github.com/Poojasri37" }
    },
    {
      title: "AI Contract Assistant",
      description: "Award-winning legal AI system featuring a custom vector database for analyzing and drafting legal contracts efficiently.",
      tags: ["Vector DB", "Legal Tech", "NLP"],
      links: { github: "https://github.com/Poojasri37" }
    },
    {
      title: "AquaSentry Vision",
      description: "AI-powered water quality monitoring system with computer vision analysis and geo-location tagging for real-time alerts.",
      tags: ["Computer Vision", "IoT", "AI for Good"],
      links: { github: "https://github.com/Poojasri37" }
    },
    {
      title: "Multi-Agent AI System",
      description: "Autonomous collaboration framework built with CrewAI, demonstrating agent orchestration and shared memory context.",
      tags: ["CrewAI", "Multi-Agent", "Automation"],
      links: { github: "https://github.com/Poojasri37" }
    },
    {
      title: "AgriTwin AI",
      description: "Precision agriculture intelligence system providing actionable insights for farmers. Smart India Hackathon finalist project.",
      tags: ["AgriTech", "ML", "Analytics"],
      links: { github: "https://github.com/Poojasri37" }
    },
    {
      title: "ResiliCode",
      description: "Autonomous CI/CD resilience AI agent designed to self-heal pipelines and improve deployment reliability.",
      tags: ["DevOps", "AI Agent", "CI/CD"],
      links: { github: "https://github.com/Poojasri37" }
    }
  ];

  const achievements = [
    {
      title: "Code 0 Clock Hackathon Winner",
      org: "1st Prize",
      icon: <Trophy className="w-5 h-5 text-yellow-500" />
    },
    {
      title: "AI By Her Impact Summit",
      org: "Finalist",
      icon: <Award className="w-5 h-5 text-primary" />
    },
    {
      title: "Smart India Hackathon",
      org: "Internal Finalist",
      icon: <Award className="w-5 h-5 text-primary" />
    },
    {
      title: "Problem Solving",
      org: "200+ LeetCode & HackerRank",
      icon: <CheckCircle2 className="w-5 h-5 text-green-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Opportunities
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-display mb-6 leading-tight">
              Hello, I'm <br />
              <span className="text-gradient">Poojasri M</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              AI & Data Science Enthusiast specializing in <span className="text-foreground font-semibold">Generative AI</span>, <span className="text-foreground font-semibold">MLOps</span>, and <span className="text-foreground font-semibold">Cloud</span> technologies. Building intelligent systems for the future.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg" 
                className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12 shadow-lg shadow-primary/25"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => window.open('https://github.com/Poojasri37', '_blank')}
                variant="outline" 
                size="lg" 
                className="rounded-full border-primary/20 hover:bg-primary/5 hover:text-primary px-8 h-12"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </div>

            <div className="flex gap-6 items-center text-muted-foreground">
              <a href="https://www.linkedin.com/in/poojasri-nirmalamanickam-413269215/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:poojasrinirmalamanickam@gmail.com" className="hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>India</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border-2 border-accent/30 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img 
                  src={profileImg} 
                  alt="Poojasri M" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-10 bg-card/90 backdrop-blur border border-white/10 p-3 rounded-xl shadow-xl"
              >
                <div className="text-xs text-muted-foreground">Specialization</div>
                <div className="font-bold text-primary">Generative AI</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-20 bg-card/90 backdrop-blur border border-white/10 p-3 rounded-xl shadow-xl"
              >
                <div className="text-xs text-muted-foreground">Focus</div>
                <div className="font-bold text-accent">Multi-Agent Systems</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Who Am I" title="About Me" center />
          
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-8">
              I am a passionate AI & Data Science professional focused on solving real-world problems through intelligent systems. My expertise lies in <span className="text-primary font-semibold">Generative AI</span>, <span className="text-primary font-semibold">RAG architectures</span>, and <span className="text-primary font-semibold">Multi-Agent Systems</span> like CrewAI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-2xl bg-background/50 border border-white/5">
                <div className="font-bold text-3xl text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Hackathons & Challenges</div>
              </div>
              <div className="p-4 rounded-2xl bg-background/50 border border-white/5">
                <div className="font-bold text-3xl text-accent mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Technical Projects</div>
              </div>
              <div className="p-4 rounded-2xl bg-background/50 border border-white/5">
                <div className="font-bold text-3xl text-primary mb-2">6+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="My Arsenal" title="Technical Skills" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Portfolio" title="Featured Projects" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://github.com/Poojasri37" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              See more on GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS & CERTIFICATIONS */}
      <section id="achievements" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Achievements */}
            <div>
              <SectionHeading subtitle="Recognition" title="Achievements" className="mb-8" />
              <div className="space-y-6">
                {achievements.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="mt-1 p-2 rounded-lg bg-background border border-border">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <p className="text-muted-foreground">{item.org}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <SectionHeading subtitle="Learning" title="Certifications" className="mb-8" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "NPTEL Elite Silver – IoT",
                  "NPTEL Elite Silver – Python",
                  "GenAI with LLMs (DeepLearning.AI)",
                  "AWS Cloud Practitioner",
                  "Salesforce Innovator",
                  "Qlik Business Analyst"
                ].map((cert, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-xl border border-border bg-card/50 hover:border-accent/50 transition-colors flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Get In Touch" title="Contact Me" center />

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground">
                I'm currently looking for opportunities in AI, Data Science, and MLOps. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <a href="mailto:poojasrinirmalamanickam@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium truncate">poojasrinirmalamanickam@gmail.com</div>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/poojasri-nirmalamanickam-413269215/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                    <div className="font-medium">Connect with me</div>
                  </div>
                </a>
              </div>

              <div className="pt-8">
                 <Button variant="outline" className="w-full gap-2 h-12 rounded-xl text-md">
                   <Download className="w-4 h-4" /> Download Resume
                 </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-3xl border border-border shadow-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="bg-background border-input h-12 rounded-xl" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} className="bg-background border-input h-12 rounded-xl" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="What's on your mind?" {...field} className="bg-background border-input min-h-[150px] rounded-xl resize-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-12 rounded-xl text-md font-semibold bg-primary hover:bg-primary/90"
                    disabled={createMessage.isPending}
                  >
                    {createMessage.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-background border-t border-border text-center text-muted-foreground text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Poojasri M. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/Poojasri37" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/poojasri-nirmalamanickam-413269215/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
