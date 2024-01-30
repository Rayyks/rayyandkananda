import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import { projectsData } from "@/lib/data";

type ProjectProps = {
  title: string;
  completed: boolean;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  codeUrl?: string;
};

const Project: React.FC<ProjectProps> = ({
  title,
  completed,
  description,
  tags,
  imageUrl,
  demoUrl,
  codeUrl,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-8 last:mb-0 transition duration-300 ease-in-out transform hover:scale-105"
    >
      <section
        className="bg-gray-800 text-white max-w-[42rem] border border-gray-700 rounded-lg overflow-hidden relative sm:h-[20rem] hover:bg-gray-700"
        onClick={handleModalOpen}
      >
        <div className="p-8 sm:p-10 h-full flex flex-col justify-between">
          <div>
            <span
              className={`inline-block px-3 py-1 rounded-full ${
                completed ? "bg-green-600" : "bg-orange-600"
              }`}
            >
              {completed ? "Completed" : "On Progress"}
            </span>
            <h3 className="text-2xl font-semibold mt-4">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-300">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2">
              {tags.map((tag: string, index: number) => (
                <li
                  className="bg-gray-700 px-3 py-1 text-sm uppercase tracking-wider text-white rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="w-full h-auto mt-6 rounded-lg shadow-lg"
          />

          <div className="mt-6 flex justify-between">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-demo"
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </a>
            )}
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-code"
              >
                <FaGithubSquare className="mr-2" />
                Code
              </a>
            )}
          </div>
        </div>
      </section>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={title}
        description={description}
        demoUrl={demoUrl}
        codeUrl={codeUrl}
      />
    </motion.div>
  );
};

export default Project;
