"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
import { motion } from "framer-motion";

const Header = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    setIsLoading(true);
    router.push("/sign-in");
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, ease: "easeOut"}}
      className="sticky top-0 z-10 bg-[#0A0A0A] lg:mt-8"
    >
      {isLoading && <Loading />}
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full border border-muted-foreground/20 p-2">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src="/Logo.png"
              width={30}
              height={30}
              alt="logo-image"
              className="w-[35px] h-[35px]"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center justify-center flex-grow space-x-12 text-sm font-medium">
          <a href="#" className="text-white/70 hover:text-white transition">
            Features
          </a>
          <a href="#" className="text-white/70 hover:text-white transition">
            Models
          </a>
          <a href="#" className="text-white/70 hover:text-white transition">
            Guide
          </a>
          <a href="#" className="text-white/70 hover:text-white transition">
            FAQ
          </a>
          <a href="#" className="text-white/70 hover:text-white transition">
            About
          </a>
        </nav>
        <div className="flex items-center space-x-3">
          <Button
            className="bg-white text-black text-sm font-medium rounded-none px-3 py-1 cursor-pointer"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;