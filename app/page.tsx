"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function Home() {
  const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Data Analyst"
  ];
  
  const displayText = useTypewriter(roles);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/50 relative">
      <div className="container px-4 py-16 md:py-24 relative z-10">
        <motion.section 
          className="grid gap-8 md:grid-cols-2 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 text-white">
              <span>{displayText}</span>
              <span className="inline-block w-1 h-8 bg-white ml-1 animate-blink" />
            </h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              {...fadeInUp}
            >
              Full-stack developer with expertise in HTML, CSS, JavaScript, React.js, and Node.js. 
              Passionate about creating efficient and scalable solutions.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              {...fadeInUp}
            >
              <Button asChild className="bg-white text-black hover:bg-gray-200">
                <Link href="/projects">View Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" asChild className="text-white border-white hover:bg-white/10">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className="grid gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20">
              <h2 className="text-lg font-semibold mb-2 text-white">Quick Links</h2>
              <div className="grid gap-2">
                <a
                  href="https://www.linkedin.com/in/garv-vyas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
                <a
                  href="mailto:vyasgarv1@gmail.com"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="mr-2 h-4 w-4" /> vyasgarv1@gmail.com
                </a>
              </div>
            </Card>
          </motion.div>
        </motion.section>

        <motion.section 
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-white">Featured Skills</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "HTML/CSS/JavaScript",
              "React.js",
              "Node.js",
              "Python",
              "SQL",
              "MongoDB"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-md border-white/20">
                  <p className="font-medium text-white">{skill}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}