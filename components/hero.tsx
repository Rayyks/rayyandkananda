"use client";

import MaxWidthWrapper from "./max-width-wrapper";
import { ContactForm } from "./contact-form";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Hero() {
  return (
    <MaxWidthWrapper className="mb-16 mt-16 sm:mt-32 flex flex-col items-center justify-center text-center z-50 pointer-events-none">
      <ContactForm>
        <div className="inline-flex items-center rounded-lg border px-3 py-1 text-sm font-medium mb-4">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
          </span>
          <span className="sm:hidden">Available for hire</span>
          <span className="hidden sm:inline font-mono">
            Available for work!{" "}
          </span>
        </div>
      </ContactForm>
      <h1
        className={cn(
          "max-w-4xl text-4xl font-extrabold md:text-5xl lg:text-6xl",
          font.className,
        )}
      >
        Hi I&apos;m a{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">
          Web Developer & Tech Enthusiast
        </span>{" "}
        that loves to build things.
      </h1>
      <p className="mt-5 max-w-prose text-muted-foreground sm:text-lg">
        A web dev who's always learning, building, and crafting things that
        solve real-world problems—now or in the future. I’m also a tech head who
        loves messing with both software and hardware until I crack how it all
        works..
      </p>

      <Button
        type="button"
        variant="outline"
        className="mt-8 px-4 py-2 rounded-full flex items-center justify-center gap-1.5 text-primary-foreground bg-popover-foreground hover:bg-secondary hover:text-primary transition-colors ease-linear duration-400 pointer-events-auto"
        onClick={() => {
          window.open("/resume.pdf", "_blank");
        }}
      >
        Get Resume
      </Button>
    </MaxWidthWrapper>
  );
}
