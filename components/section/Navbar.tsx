import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <nav className="w-full h-20 flex justify-between items-center md:px-4 px-1">
      <Image
        height={100}
        width={200}
        src="./logo.svg"
        alt="logo"
        className="w-[130px] sm:w-[140px] md:w-[145px] lg:w-[150px] xl:w-[160px]"
      />
      <div className="hidden md:flex md:gap-4 lg:gap-5 xl:gap-10 gap-3 text-black font-[500] text-[14px] xl:text-[18px]">
        <Link href="/">About</Link>
        <Link href="/">Work</Link>
        <Link href="/">Research</Link>
      </div>

      <div className="flex md:gap-4 lg:gap-5 xl:gap-6 gap-3 items-center">
        <Button
          variant="outline"
          className="rounded-full bg-transparent text-[#7440f7] px-5 xl:px-7 text-[12px] md:text-[14px] xl:text-[16px] h-8 xl:h-10 border-[#7440f7] hover:bg-[#7440f74a] hover:text-white"
        >
          Login
        </Button>
        <MobileNav />
      </div>
    </nav>
  );
}
