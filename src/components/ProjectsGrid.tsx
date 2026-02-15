"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/links";
import ProjectCard from "./ProjectCard";
import FadeIn from "./ui/FadeIn";

export default function ProjectsGrid() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <FadeIn>
          <div className="mb-10">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white inline-block relative"
            >
              Projects
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-teal-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </motion.h2>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 * index}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
