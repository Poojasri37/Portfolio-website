import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard, OtherProjectCard, type ProjectData } from '@/components/ProjectCard';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, MapPin, Download, CheckCircle2, Trophy, Award, ExternalLink, Star, Code2, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import profileImg from '@assets/Poojasri_M_1769625952854.jpg';

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Home() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactForm) => {
    setIsSubmitting(true);
    const mailtoLink = `mailto:poojasrinirmalamanickam@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(data.name)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`;
    window.location.href = mailtoLink;
    setTimeout(() => {
      setIsSubmitting(false);
      form.reset();
      toast({
        title: "Email client opened!",
        description: "Please send the email from your mail application.",
      });
    }, 1000);
  };

  const skills = [
    { category: "Languages", items: ["Python", "Java", "SQL", "HTML", "CSS", "JavaScript"] },
    { category: "AI / ML", items: ["Scikit-learn", "TensorFlow", "Keras", "OpenCV", "Transformers", "LLMs", "Prompt Engineering", "LangChain", "LangGraph", "RAG", "FAISS", "Chroma"] },
    { category: "Multi-Agent Systems", items: ["CrewAI", "Autonomous Agents", "Agent Orchestration", "Shared Memory", "Context Retrieval", "Multimodal Agents"] },
    { category: "MLOps & Data Engineering", items: ["Apache Kafka", "Hadoop", "Hive", "PostgreSQL", "Snowflake", "Docker", "DVC", "Jenkins", "Git", "GitHub", "CI/CD Pipelines"] },
    { category: "Visualization & Analytics", items: ["Power BI", "Tableau"] },
    { category: "Cloud", items: ["AWS", "Google Cloud Platform"] },
  ];

  const keyProjects: ProjectData[] = [
    {
      title: "Virtual Interview Assistant",
      description: "GenAI interview automation system leveraging LLMs, RAG, and LangGraph with speech-to-text/text-to-speech capabilities for realistic interview practice.",
      tags: ["GenAI", "RAG", "LangGraph", "STT/TTS"],
      techStack: ["Python", "LangChain", "LangGraph", "RAG", "Speech Recognition", "Text-to-Speech", "LLMs", "Vector Database", "React"],
      githubLinks: [
        { label: "Virtual Interview Assistant", url: "https://github.com/Poojasri37/Virtual_interview_assistant" }
      ]
    },
    {
      title: "AI Contract Assistant",
      description: "Award-winning legal AI system featuring a custom vector database for analyzing and drafting legal contracts efficiently. Built for hackathon competition.",
      tags: ["Legal Tech", "Vector DB", "NLP"],
      techStack: ["Python", "LangChain", "Custom Vector Database", "NLP", "Document Processing", "Legal AI", "RAG Architecture"],
      githubLinks: [
        { label: "AI Contract Platform", url: "https://github.com/Poojasri37/ai-contract-platform" }
      ],
      highlight: "Hackathon Winner"
    },
    {
      title: "AquaSentry Vision",
      description: "AI-powered water quality monitoring system with computer vision analysis, geo-location tagging, and real-time alerts. AI By Her Impact Summit finalist.",
      tags: ["Computer Vision", "IoT", "AI for Good"],
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "IoT Data Processing", "Alerting & Monitoring Engine", "Geo-location Tagging", "AI-assisted Maintenance Logic", "Environmental Analytics"],
      githubLinks: [
        { label: "Portable Water Assistant", url: "https://github.com/Poojasri37/portable_water_assistant" },
        { label: "AI Portable Water Assistant", url: "https://github.com/Poojasri37/ai-portable-water-assistant" },
        { label: "Water Assistant Website", url: "https://github.com/Poojasri37/water_assistant_website" }
      ],
      highlight: "AI By Her Finalist"
    },
    {
      title: "AgriTwin AI",
      description: "Precision agriculture intelligence system using hyperspectral imaging and IoT integration for actionable farming insights. Smart India Hackathon project.",
      tags: ["AgriTech", "Hyperspectral", "IoT"],
      techStack: ["Python", "Hyperspectral Image Processing", "IoT Integration", "Machine Learning", "Precision Agriculture", "Data Analytics", "Sensor Fusion"],
      githubLinks: [
        { label: "AgriTwin AI - Hyperspectral + IoT System", url: "https://github.com/Poojasri37/Agri-Twin-AI---hyperspectral-image-processing-with-IOT-integrated-system" }
      ],
      highlight: "SIH Finalist"
    },
    {
      title: "Multi-Agent AI System",
      description: "Autonomous collaboration framework built with CrewAI and multimodal agents, demonstrating agent orchestration and shared memory context retrieval.",
      tags: ["CrewAI", "Multi-Agent", "Multimodal"],
      techStack: ["Python", "CrewAI", "Autonomous Agents", "Agent Orchestration", "Shared Memory", "Context Retrieval", "Multimodal Processing", "LLMs"],
      githubLinks: [
        { label: "Multimodal Agent", url: "https://github.com/Poojasri37/multimodal-agent" },
        { label: "Multimodal Agent Document", url: "https://github.com/Poojasri37/multimodal-agent-document-" }
      ]
    },
    {
      title: "ResiliCode",
      description: "Knowledge-driven autonomous software resilience agent designed to self-heal CI/CD pipelines and improve deployment reliability.",
      tags: ["DevOps", "AI Agent", "CI/CD"],
      techStack: ["Python", "Autonomous Agents", "CI/CD Integration", "Knowledge Base", "Self-Healing Systems", "Pipeline Monitoring", "DevOps Automation"],
      githubLinks: [
        { label: "ResiliCode - Autonomous Resilience Agent", url: "https://github.com/Poojasri37/ResiliCode--Knowledge-Driven-Autonomous-Software-Resilience-Agent" }
      ]
    },
    {
      title: "SentientStream",
      description: "Mood-aware AI content filtering system for digital well-being, analyzing user sentiment to curate personalized content experiences.",
      tags: ["Sentiment Analysis", "Content Filtering", "Well-being"],
      techStack: ["Python", "Sentiment Analysis", "NLP", "Content Filtering", "User Experience", "Machine Learning", "Real-time Processing"],
      githubLinks: [
        { label: "SentientStream - Mood-Aware Filtering", url: "https://github.com/Poojasri37/SentientStream-Mood-Aware-AI-Content-Filtering-for-Digital-Well-Being" }
      ]
    }
  ];

  const otherProjects = {
    dataEngineering: [
      { title: "Real-Time Weather Data Streaming", description: "Kafka-based pipeline for streaming weather data to PostgreSQL", github: "https://github.com/Poojasri37/Real-Time-Weather-Data-Streaming-Pipeline-using-Kafka-and-PostgreSQL" },
      { title: "GitHub API Streaming with Snowflake", description: "Real-time GitHub data streaming using Snowflake", github: "https://github.com/Poojasri37/Real-time-github-api-streaming-using-snowflake" },
    ],
    businessIntelligence: [
      { title: "Women Empowerment Insights", description: "Power BI dashboard for women empowerment analytics" },
      { title: "Business Analytics Dashboards", description: "Tableau dashboards for business intelligence" },
    ],
    aiMlSystems: [
      { title: "National Trust-Based Credit Intelligence", description: "AI platform for credit scoring and trust analysis", github: "https://github.com/Poojasri37/National-trust-based-credit-intelligence-platform" },
      { title: "Crop Price Prediction", description: "Firebase-integrated ML model for crop price forecasting", github: "https://github.com/Poojasri37/crop-price-prediction-firebase" },
    ],
    platforms: [
      { title: "FanSphere", description: "Women's sports fan engagement platform", github: "https://github.com/Poojasri37/FanSphere---Women-s-Sports-Fan-Engagement-Platform" },
    ]
  };

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
      title: "Hackceler8 SRM Hackathon",
      org: "Top 10",
      icon: <Star className="w-5 h-5 text-accent" />
    },
    {
      title: "Problem Solving",
      org: "200+ LeetCode & HackerRank",
      icon: <Code2 className="w-5 h-5 text-green-500" />
    },
    {
      title: "Hackathon Participation",
      org: "50+ National & Institutional",
      icon: <Zap className="w-5 h-5 text-orange-500" />
    },
    {
      title: "GitHub Achievement",
      org: "Pull Shark",
      icon: <Github className="w-5 h-5 text-purple-400" />
    }
  ];

  const certifications = [
    "NPTEL Elite Silver – Internet of Things",
    "NPTEL Elite Silver – Python for Data Science",
    "Generative AI with Large Language Models – DeepLearning.AI & AWS",
    "AWS Cloud Practitioner – GeeksforGeeks",
    "Salesforce Innovator Certification",
    "Qlik Business Analyst Certification"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
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
              AI & Data Science Enthusiast specializing in <span className="text-foreground font-semibold">Generative AI</span>, <span className="text-foreground font-semibold">MLOps</span>, and <span className="text-foreground font-semibold">Cloud</span> technologies. Building production-ready intelligent systems.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg" 
                className="rounded-full"
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => window.open('https://github.com/Poojasri37', '_blank')}
                variant="outline" 
                size="lg" 
                className="rounded-full"
                data-testid="button-github-hero"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </div>

            <div className="flex gap-6 items-center text-muted-foreground">
              <a href="https://www.linkedin.com/in/poojasri-nirmalamanickam-413269215/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" data-testid="link-linkedin-hero">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:poojasrinirmalamanickam@gmail.com" className="hover:text-primary transition-colors" data-testid="link-email-hero">
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

      <section id="about" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Who Am I" title="About Me" center />
          
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-8">
              I am a passionate AI & Data Science professional focused on building <span className="text-primary font-semibold">production-ready intelligent systems</span>. My expertise lies in <span className="text-primary font-semibold">Generative AI</span>, <span className="text-primary font-semibold">RAG architectures</span>, and <span className="text-primary font-semibold">Multi-Agent Systems</span> using CrewAI. I specialize in MLOps, data pipelines, and real-world AI deployment.
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
                <div className="font-bold text-3xl text-primary mb-2">6</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="My Arsenal" title="Technical Skills" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-bold mb-4 text-primary">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <Badge key={item} variant="secondary" className="bg-secondary/50 text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Portfolio" title="Key Projects" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="other-projects" className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="More Work" title="Other Technical Projects" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                Data Engineering & Streaming
              </h3>
              <div className="space-y-3">
                {otherProjects.dataEngineering.map((project, idx) => (
                  <OtherProjectCard key={idx} project={project} index={idx} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                Business Intelligence & Analytics
              </h3>
              <div className="space-y-3">
                {otherProjects.businessIntelligence.map((project, idx) => (
                  <OtherProjectCard key={idx} project={project} index={idx} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                AI & ML Systems
              </h3>
              <div className="space-y-3">
                {otherProjects.aiMlSystems.map((project, idx) => (
                  <OtherProjectCard key={idx} project={project} index={idx} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                Platforms & Applications
              </h3>
              <div className="space-y-3">
                {otherProjects.platforms.map((project, idx) => (
                  <OtherProjectCard key={idx} project={project} index={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <SectionHeading subtitle="Recognition" title="Achievements" className="mb-8" />
              <div className="space-y-4">
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

            <div>
              <SectionHeading subtitle="Learning" title="Certifications" className="mb-8" />
              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-xl border border-border bg-card/50 hover:border-accent/50 transition-colors flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Get In Touch" title="Contact Me" center />

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground">
                I'm currently looking for opportunities in AI, Data Science, and MLOps. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <a href="mailto:poojasrinirmalamanickam@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group" data-testid="link-email-contact">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium truncate">poojasrinirmalamanickam@gmail.com</div>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/poojasri-nirmalamanickam-413269215/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group" data-testid="link-linkedin-contact">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                    <div className="font-medium">Connect with me</div>
                  </div>
                </a>

                <a href="https://github.com/Poojasri37" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group" data-testid="link-github-contact">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">GitHub</div>
                    <div className="font-medium">View my repositories</div>
                  </div>
                </a>
              </div>
            </div>

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
                          <Input placeholder="Your Name" {...field} className="bg-background border-input h-12 rounded-xl" data-testid="input-name" />
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
                          <Input placeholder="your@email.com" {...field} className="bg-background border-input h-12 rounded-xl" data-testid="input-email" />
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
                          <Textarea placeholder="What's on your mind?" {...field} className="bg-background border-input min-h-[150px] rounded-xl resize-none" data-testid="input-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-12 rounded-xl text-md font-semibold"
                    disabled={isSubmitting}
                    data-testid="button-send-message"
                  >
                    {isSubmitting ? "Opening..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-background border-t border-border text-center text-muted-foreground text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Poojasri M. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/Poojasri37" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2" data-testid="link-github-footer">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/poojasri-nirmalamanickam-413269215/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2" data-testid="link-linkedin-footer">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
