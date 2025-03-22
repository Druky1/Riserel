import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-[#0A0A0A] mt-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full border border-muted-foreground/20 py-2 px-4">
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
        <nav className="hidden md:flex items-center justify-center flex-grow space-x-12 text-sm tracking-tight">
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
            <Button asChild className="bg-white text-black text-sm font-medium rounded-none px-3 py-1">
              <Link href={"/sign-in"}>
                Get Started
              </Link>
            </Button>
          </div>
      </div>
    </header>
  );
};

export default Header;
