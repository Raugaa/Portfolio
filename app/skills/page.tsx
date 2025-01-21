"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["HTML", "CSS", "JavaScript", "Python", "Java", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "VS Code", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Leadership", "Communication", "Time Management"]
    }
  ];

  return (
    <div className="container px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Expertise
      </motion.h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}