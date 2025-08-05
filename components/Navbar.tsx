import Image from "next/image";
import Link from "next/link";
import React from "react";
import LiveStatus from "./liveStatus";

async function Navbar() {

  return (
    <div className="w-full fixed top-0 dark:bg-black bg-white backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex justify-between w-full p-2 items-center">
        <div
                    className="absolute inset-0 dark:-z-10 z-0 bg-[repeating-linear-gradient(45deg,transparent_0_2px,theme(colors.slate.100)_2px_4px)] dark:bg-[repeating-linear-gradient(45deg,transparent_0_2px,theme(colors.black)_2px_4px)]"
                />
        <Link href="/">
          <div className="rounded-md h-10 w-10 flex justify-center z-10 relative items-center dark:bg-black bg-white">
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