"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
      title: "ISTE KISCE Jt.Committee Head",
      company: "K.J. Somaiya College of Engineering",
      date: "Current",
      description: "Official technical council of K.J. Somaiya College of Engineering"
    },
    {
      title: "Full Stack Developer",
      company: "ProCompiler",
      date: "Dec 2023 to Current",
      description: "As a Full Stack Developer, I lead the frontend development of a comprehensive compiler capable of compiling Python and C/C++ programs while providing detailed error analysis and output display. This robust tool, utilized by over 500 students, not only enhances programming education but also estimates execution time, ensuring efficiency in code development and learning. My role in this project showcases my expertise in full stack development and my commitment to advancing programming education."
    },
    {
      title: "Software Developer",
      company: "Persistent",
      date: "Dec 2023 to Current",
      description: "As a Software Developer at Persistent, I work on developing and maintaining web applications, providing detailed error analysis and status display. This role has utilized by core skill sets, and my advanced programming education."
    },
    {
      title: "Frontend Developer",
      company: "CodSoft",
      date: "Feb 2024 to Feb 2024",
      description: "As a Frontend Developer Intern at CodSoft, I engaged in a virtual environment where I undertook diverse tasks, demonstrating my proficiency in frontend development technologies. Through problem-solving and collaboration, I successfully delivered solutions for various projects, honing my skills in HTML, CSS, and JavaScript. This internship experience at CodSoft enhanced my expertise and prepared me for real-world challenges in web development."
    },
    {
      title: "C++ Programmer",
      company: "CodSoft",
      date: "Oct 2023 to Nov 2023",
      description: "As a C++ Programmer Intern at Code Soft, I tackled diverse tasks requiring problem-solving skills and a strong grasp of C++ programming principles. Through virtual collaboration, I successfully executed tasks, demonstrating adaptability and proficiency in addressing complex challenges. My internship at Code Soft honed my programming abilities and enriched my experience in software development."
    },
    {
      title: "Digital Literacy Instructor",
      company: "Vacha NGO",
      date: "2023",
      description: "Contributed to the Vacha NGO by managing student records within a digital portal and teaching essential English and computer skills to students. Played a key role in enhancing students' digital literacy and communication abilities, fostering a supportive learning environment, and ensuring efficient record-keeping for streamlined access to student information."
    },
    {
      title: "Data Analyst",
      company: "CoderOne",
      date: "Sept 2024 to Oct 2024",
      description: "Completed an internship at CoderOne, where I gained hands-on experience in data analysis and visualization. Developed insights by processing and interpreting large datasets to support informed decision-making"
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
        Professional Experience
      </motion.h1>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-2">{exp.title}</h2>
              <h3 className="text-lg text-muted-foreground mb-2">{exp.company}</h3>
              <p className="text-sm text-muted-foreground mb-4">{exp.date}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}