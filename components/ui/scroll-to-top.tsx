"use client";

import { useEffect, useState } from "react";
import { CircleChevronUp } from "lucide-react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 bg-black text-white rounded-full shadow-lg hover:bg-neutral-700 transition-all duration-300 dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-700 dark:hover:text-white group ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <CircleChevronUp size={24} />
      <span className="absolute right-full mr-2 px-2 py-1 bg-neutral-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none dark:bg-neutral-700 top-1/2 -translate-y-1/2">
        go up
      </span>
    </button>
  );
}

export { ScrollToTop };
