"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const titles = ["Pest Guard", "Debugger"];
export default function HomePage() {
  const [idx, setIdx] = useState(0);
  const title = titles[idx];

  useEffect(() => {
    const id = setInterval(() => {
      console.log("tick");
      setIdx((val) => (val + 1) % titles.length);
    }, 2000);

    return () => clearInterval(id);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2eaa6d] to-[#452] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <p className="font-mono">this is a placeholder site for</p>
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="italic text-[hsl(50,100%,70%)]">{title}</span>
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Identify the enemy →</h3>
            <div className="text-lg">Wikipedia of common bugs</div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Contect Us →</h3>
            <div className="text-lg">
              We destory bugs like no one else&apos;s business
            </div>
          </Link>
        </div>
      </div>
      <div className="font-mono text-2xl italic">under construction...</div>
    </main>
  );
}
