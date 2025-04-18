"use client";

import * as React from "react";
import { Code, Command, Github, Instagram, Link, Linkedin } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "./ui/button";

export function MyCommandDialog() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="ghost"
        aria-label="Open command dialog"
        size="icon"
        onClick={() => setOpen((open) => !open)}
      >
        <Command className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="General">
            <CommandItem onSelect={handleCopyLink}>
              <Link className="mr-2 h-4 w-4" />
              <span>Copy link</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                window.open(
                  "https://github.com/Rayyks/rayyandkananda",
                  "_ blank"
                )
              }
            >
              <Code className="mr-2 h-4 w-4" />
              <span>Source code (give it a star please 🤟 )</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Social">
            <CommandItem
              onSelect={() =>
                window.open("https://github.com/Rayyks", "_ blank")
              }
            >
              <Github className="mr-2 h-4 w-4" />
              <span>Github</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                window.open("https://instagram.com/rayy__dna", "_ blank")
              }
            >
              <Instagram className="mr-2 h-4 w-4" />
              <span>Instagram</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                window.open("https://www.linkedin.com/in/rayyand/", "_ blank")
              }
            >
              <Linkedin className="mr-2 h-4 w-4" />
              <span>Linkedin</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
