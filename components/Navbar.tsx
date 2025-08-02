// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import LiveStatus from "./liveStatus";
// import {
//   ChevronDown,
//   FileText,
//   GraduationCap,
//   LayoutDashboard,
//   PenBox,
//   StarsIcon,
// } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
// import { checkUser } from "@/lib/CheckUser";

async function Navbar() {
//   await checkUser()
  return (
    <div className="w-full fixed top-0 border-b dark:bg-black bg-white backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex justify-between w-full p-2 items-center">
        <Link href="/">
          <div className="rounded-md h-10 w-10 flex justify-center items-center dark:bg-white bg-black">
            <Image src={'./ipsum.svg'} alt="logo" height={32} width={32}/>
          </div>
        </Link>
        <div className="flex  gap-3">
          {/* <SignedIn>
            <Link href={"/dashboard"}>
              <Button>
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block">Industry Insights</span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"outline"}>
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href={"/resume"} className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span className=" md:block">Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href={"/ai-cover-letter"}
                    className="flex items-center gap-2"
                  >
                    <PenBox className="h-4 w-4" />
                    <span className=" md:block">Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/interview"} className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span className=" md:block">Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn> */}
          {/* <SignedOut> */}
            {/* <SignInButton> */}
            <LiveStatus/>
              {/* <Button variant={"outline"}>Sign In</Button> */}
            {/* </SignInButton> */}
          {/* </SignedOut> */}
          {/* <SignedIn>
            <UserButton />
          </SignedIn> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;