"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Online Compiler",
      date: "Feb 2023 to Current",
      description: "Developed a scalable coding platform tailored for educational institutions and competitions, offering features such as automated evaluation, competition management, and real-time performance analytics. Successfully deployed in multiple institutions, the platform fosters coding proficiency, innovation, and access to quality education, aligning with Sustainable Development Goals.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Docker"]
    },
    {
      title: "Workflow",
      date: "June 2023 to Aug 2023",
      description: "I developed and implemented a comprehensive web platform called Workflow utilizing HTML, CSS, JavaScript, Bootstrap, and PHP. This dynamic website showcases profiles of proficient web developers available for freelance opportunities. Leveraging a combination of front-end and back-end technologies, Workflow streamlines the hiring process, offering a seamless experience for both employers and freelancers.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"]
    },
    {
      title: "Social Book",
      date: "Nov 2023 to Dec 2023",
      description: "Social Book is a meticulously crafted replica of the renowned social media platform, Facebook. Developed using HTML, CSS, and JavaScript, this creative frontend project showcases my expertise in web development. With a keen attention to detail and a focus on user experience, Social Book epitomizes my commitment to delivering professional and elegant solutions in the digital realm.",
      technologies: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      title: "Spotify Clone",
      date: "Jan 2024 to Jan 2024",
      description: "Developed with HTML, CSS, and JavaScript, my project mirrors the user-friendly interface and functionality of Spotify. This fully responsive application demonstrates my expertise in frontend development, showcasing my ability to create elegant and professional digital solutions that enhance user experience and engagement.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      title: "E-Mandi",
      date: "Aug 2024 to Sept 2024",
      description: "The E-Mandi project is a web application developed using the MERN stack (MongoDB, Express.js, React, Node.js) that facilitates an online marketplace for agricultural products. It allows farmers to directly connect with buyers, ensuring transparency, convenience, and efficient transactions in the agricultural sector.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"]
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
        Featured Projects
      </motion.h1>
      
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-full"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}