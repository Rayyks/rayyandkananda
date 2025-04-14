import { Highlight } from "@/components/highlights";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <MaxWidthWrapper className="py-10 md:py-20">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full space-y-3">
          <div>
            <h2 className="text-4xl font-bold">About</h2>
            <p className="text-muted-foreground mt-1 mb-4">
              Some information about me. NOTE : don't take this too seriously.
              <br />I am not a professional writer that stole people hearth
              using fake kind word.
            </p>
          </div>
          <p>
            The name’s
            <Highlight className="dark:text-primary-foreground dark:bg-white bg-black text-white font-bold">
              Rayyand Kananda Syahputra
            </Highlight>
            —but most people just call me Rayy. I’m not here to impress anyone
            with cute little buzzwords or overly friendly tech talk.
            <Highlight className="dark:text-primary-foreground dark:bg-white bg-black text-white font-bold">
              I’m a full-stack web developer, IT fixer, and digital chaos
              engineer
            </Highlight>
            with a tendency to break things just to see if I can make them
            better.
          </p>
          <p>
            Frontend? Easy. Backend? Cake. I don’t just code apps—I build
            digital ecosystems that could probably run on Mars (if you give me
            some spare parts and a 3D printer). I’ve got a toolbelt loaded with
            Next.js, React, Tailwind, Node, databases, and dark coffee. I don’t
            just write code—I weaponize it.
          </p>
          <p>
            Outside the browser,
            <Highlight className="dark:text-primary-foreground dark:bg-white bg-black text-white font-bold">
              I get surgical with hardware
            </Highlight>
            . Laptop won’t boot? I’ll tear it down and bring it back from the
            dead. PC thermals melting? I’ll rewire it into a custom-cooled
            beast. BIOS updates, undervolting, voltmods, registry tweaks—you
            name it, I’ve probably already bricked it once and brought it back
            stronger.
          </p>
          <p>
            Every day I’m learning, not because some course told me to, but
            because{" "}
            <Highlight className="dark:text-primary-foreground dark:bg-white bg-black text-white font-bold">
              I’m *obsessed* with figuring out how stuff works
            </Highlight>
            . If there’s a mystery in the codebase or some legacy stack nobody
            wants to touch, I’m already knee-deep in it with a debugger and a
            plan. I reverse-engineer software for fun. Like… who does that? I
            do.
          </p>
          <p>
            I’m not some corporate cog who needs a team meeting to change a
            button color. I move fast, I break <s>shit</s> (strategically), and
            I ship projects that actually solve problems. Today it’s a web app.
            Tomorrow? Might be a self-hosted AI bot that rewrites its own code.
            Or a GPU cluster made from e-waste. Or yeah, a damn spaceship.
            Depends how I’m feeling.
          </p>
          <p>
            You want a developer who follows the rules? Keep scrolling. You want
            someone who rewrites the rules, bends time, and builds fire projects
            with zero hand-holding? That’s me. No filter. No fluff. Just brains,
            wires, and raw ambition.
          </p>
          <p>
            Oh, and when I’m not out here doing mad scientist <s>shit</s>, I’m
            either bingeing post-apocalyptic series, modding my gear, or
            thinking up another side project that’ll keep me up till 4 AM. I
            don’t just “live tech”—I *am* tech.
          </p>
        </div>
        <div className="w-full flex justify-center ">
          <div className="flex p-4 border w-fit rounded-lg bg-gradient-to-b from-primary/10 from-60% justify-center items-center">
            <Image
              src="/me2.webp"
              alt="Rayyand Kananda Syahputra"
              priority
              className="rounded-lg "
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
