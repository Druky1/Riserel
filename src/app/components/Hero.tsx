"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Loading from "./Loading";

const Hero = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    setIsLoading(true);
    router.push("/sign-in");
  };

  let animationCounter = 0;
  const getNewAnimationDelay = () => {
    animationCounter += 1;
    return animationCounter * 0.15;
  };

  const getTitleAnimation = () => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: getNewAnimationDelay(),
    },
  });

  const titleText = "Turn Your Data Into Stories You Understand.";
  const titleWords = titleText.split(" ");

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {isLoading && <Loading />}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col items-center justify-center text-center">
        <h1 className="font-gelica text-5xl md:text-7xl leading-tight px-12 md:px-0 mb-6">
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              {...getTitleAnimation()}
              className={word === "Stories" ? "border border-white p-2" : ""}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
              {index === 2 && <br className="hidden md:block" />}{" "}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="px-12 md:px-0 max-w-lg md:max-w-2xl mx-auto text-sm lg:text-lg text-white/70 
          leading-relaxed"
          {...getTitleAnimation()}
        >
          Whisper your database questions to our AI and get instant,
          easy-to-understand answers, perfect for students and curious minds
          ready to explore.
        </motion.p>
        <div className="mt-6 flex w-2/3 flex-col gap-3 sm:gap-6 md:w-fit md:flex-row">
          <motion.span {...getTitleAnimation()}>
            <Button
              className="w-full text-sm font-medium rounded-none !py-5 !px-6 cursor-pointer"
              onClick={handleGetStarted}
            >
              Get Started!
              <ArrowRight className="size-4" />
            </Button>
          </motion.span>
          <motion.span {...getTitleAnimation()}>
            <Button
              className="w-full text-sm font-medium rounded-none !py-5 !px-6 cursor-pointer"
              variant={"outline"}
              asChild
            >
              <Link href={"#features"}>Explore Riserel</Link>
            </Button>
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
