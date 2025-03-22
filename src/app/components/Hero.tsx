import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col">
      <div className="container mx-auto text-center flex flex-col items-center justify-center flex-1 grid-background">
        <div className="container mx-auto md:max-w-4xl text-center flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl md:text-5xl tracking-tight font-semibold text-white leading-tight mb-6">
            Turn Your Data Into Stories You Understand.
          </h1>
          <p className="text-sm md:text-md text-muted-foreground mb-6 leading-relaxed text-center max-w-sm md:max-w-2xl">
            Whisper your database questions to our AI and get instant,
            easy-to-understand answers. Your guide to mastering data without the
            noise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
