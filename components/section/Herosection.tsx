import { Button } from "../ui/button";
import Image from "next/image";
export default function Herosection() {
  return (
    <div className="w-full flex flex-col items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10  justify-center mt-[80px] overflow-hidden">
      <p className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-[600] text-center w-[95%] sm:w-[90%] md:w-[80%] max-w-[800px] lg:leading-[70px] xl:leading-[80px]">
        Effortlessly Create High-Quality Articles With Our AI Article Generator
      </p>
      <p className="text-center w-[90%] sm:w-[85%] md:w-[80%] max-w-[700px]">
        AI has the potential to revolutionize the way we live and work, from
        improving healthcare and transportation to enhancing the way.
      </p>
      <div className="flex flex-row flex-wrap gap-5 sm:gap-8 md:gap-10">
        <Button className="bg-[#7440f7] rounded-full px-5 hover:bg-[#7440f7ca]">
          Get Started
        </Button>

        <Button
          variant="outline"
          className="bg-transparent hover:bg-[#7440f7] text-[#7440f7] hover:text-white rounded-full border-[#7440f7] px-5"
        >
          Explore
        </Button>
      </div>

      <div className="relative flex items-start w-[90%] sm:w-[85%] md:w-[80%] max-w-[700px] mt-[50px] md:mt-[80px]">
        <Image
          width={100}
          height={100}
          src="/circle.png"
          alt="circle"
          className="z-0 absolute top-[-50px] left-[-50px] opacity-55 md:h-[100px] md:w-[100px] h-[80px] w-[80px]"
        />
        <Image
          width={700}
          height={400}
          src="/section1.png"
          alt="sectionImage"
          className=" relative z-10 border-solid border-2 rounded-lg p-2 border-white"
        />
        <Image
          width={100}
          height={100}
          src="/circle.png"
          alt="circle"
          className="z-0 absolute top-[40%] right-[-50px] md:h-[100px] md:w-[100px] h-[80px] w-[80px]"
        />
      </div>
    </div>
  );
}
