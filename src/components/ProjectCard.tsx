"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/links";
import LinkButton from "./ui/LinkButton";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-white/5 shadow-md dark:shadow-none border border-gray-100 dark:border-white/10 dark:backdrop-blur-md rounded-2xl p-6 flex flex-col gap-4"
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {/* Period & Award */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <span className="text-xs font-medium text-teal-600 dark:text-teal-400">
          {project.period}
        </span>
        {project.award && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2.5 py-0.5 rounded-full">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {project.award}
          </span>
        )}
      </div>

      {/* Title & Subtitle */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          {project.subtitle}
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.links.map((link) => (
          <LinkButton
            key={link.type}
            type={link.type}
            url={link.url}
            label={link.label}
          />
        ))}
      </div>
    </motion.div>
  );
}
