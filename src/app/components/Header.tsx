import { Button } from "@/components/ui/button";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-[#0A0A0A]">
      <nav className="w-full border-b mx-auto border-white/20 py-1.5 px-4">
        <div className="flex justify-between items-center w-full">
          <Link href={"/"}>
            <Image src="/Logo.png" width={30} height={30}  alt="logo-image" className="w-[30px] h-[30px]"/>
          </Link>
          <nav className="hidden md:flex items-center space-x-12 text-sm tracking-tight">
            <a href="#" className=" text-white/70 hover:text-white transition">FEATURES</a>
            <a href="#" className=" text-white/70 hover:text-white transition">MODELS</a>
            <a href="#" className=" text-white/70 hover:text-white transition">GUIDE</a>
            <a href="#" className=" text-white/70 hover:text-white transition">FAQ</a>
          </nav>
          <SignedOut>
            <Button asChild className="rounded-none p-2">
              <Link className="text-sm tracking-tight" href={"/sign-in"}>Get started</Link>
            </Button>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Header;
