"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Education() {
  const { ref } = useSectionInView("Education");
  const { theme } = useTheme();

  const calculateSemester = (startDate: string) => {
    const startYear = parseInt(startDate.split(" - ")[0]);
    const startMonth = parseInt(startDate.split(" - ")[1]);

    const currentDate = new Date();
    const totalMonths =
      (currentDate.getFullYear() - startYear) * 12 +
      currentDate.getMonth() +
      1 -
      startMonth;

    // Adjust the start month to August (assuming academic year starts in August)
    const adjustedStartMonth = startMonth < 8 ? startMonth + 12 : startMonth;

    // Ensure the semester is not negative
    const semester = Math.max(Math.ceil(totalMonths / 6), 1);

    return semester;
  };

  // STATE
  const [currentSemesters, setCurrentSemesters] = useState<number[]>([]);

  // UPDATING THE SEMESTER EVERY 6 MONTH
  useEffect(() => {
    const semesters = educationsData.map((item) =>
      calculateSemester(item.date)
    );
    setCurrentSemesters(semesters);
  }, []);

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Education</SectionHeading>
      <VerticalTimeline lineColor="">
        {educationsData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
