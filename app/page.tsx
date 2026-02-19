'use client'
import { ExpandingButton } from "@/components/ui/expanding-button";
import { Typewriter } from "../components/typewriter";
import { HomeIcon, Images, Mail, UserRound } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden flex">
      {/* Filtered background image */}
      <div
        className="
          fixed inset-0
          bg-[url('/me-but-background.jpg')]
          bg-cover bg-center
          filter
          contrast-15
          -z-10
        "
      />
      
      <div className="flex w-screen">
        <div className="flex flex-row justify-center items-center absolute h-screen z-50 p-4">
          <div className="flex flex-col gap-2">
            <ExpandingButton label="Home" icon={HomeIcon} />
            <ExpandingButton label="About Me" icon={UserRound} />
            <ExpandingButton label="Portfolio" icon={Images} />
            <ExpandingButton label="Contact" icon={Mail} />
          </div>
        </div>
        {/* Content */}
        
        <section className="relative min-h-screen w-screen flex flex-col items-center  p-6">
          <div className="bg-red-600 w-screen h-[30vh]">
            hello
          </div>
          <div className=" text-white flex flex-row w-screen justify-start">
            <div className="px-20 sm:px-30 md:px-40">
              <h1 className="text-7xl font-bold">Ashim Parajuli</h1>
              <p className="mt-2 text-white/80 text-2xl">
                I&apos;m a <Typewriter/>
              </p>
            </div>
          </div>
        </section>
      </div>
      
    </main>
  )
}
