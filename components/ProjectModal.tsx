import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  demoUrl?: string | null;
  codeUrl?: string | null;
};

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  demoUrl,
  codeUrl,
}: ProjectModalProps) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };
  return isOpen ? (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalVariants}
        className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center backdrop-blur-lg"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {description}
              </p>
              {/* Include your dynamic content here */}
              {demoUrl && (
                <a
                  href={demoUrl || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-56"
                  role="button"
                >
                  Live Demo
                </a>
              )}
              {codeUrl && (
                <a
                  href={codeUrl || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-56"
                  role="button"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  ) : null;
};

export default ProjectModal;
