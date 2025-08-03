import Image from "next/image";
import Link from "next/link";
import React from "react";
import LiveStatus from "./liveStatus";

async function Navbar() {

  return (
    <div className="w-full fixed top-0 dark:bg-black bg-white backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex justify-between w-full p-2 items-center">
        <Link href="/">
          <div className="rounded-md h-10 w-10 flex justify-center items-center dark:bg-black bg-white">
            <Image src={'./ipsum.svg'} alt="logo" height={32} width={32}/>
          </div>
        </Link>
        <div className="flex  gap-3">
            <LiveStatus/>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;