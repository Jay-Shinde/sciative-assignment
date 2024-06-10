import SeatTable from "../cards/SeatTable";
import Image from "next/image";
export default function Tablesection() {
  return (
    <div className="w-full flex flex-col items-center gap-3 md:gap-5 lg:gap-7 xl:gap-8 justify-center overflow-hidden mt-10">
      <p className="text-2xl md:text-3xl lg:text-5xl font-[500] text-center w-[90%] sm:w-[85%] md:w-[80%] max-w-[600px] lg:leading-[60px] xl:leading-[70px]">
        How it works
      </p>

      {/* <div className="w-full flex-row items-center lg:justify-evenly p-2 xl:p-10 flex-wrap lg:flex-nowrap">
        <div className="lg:w-[40%] w-[80%] flex flex-col items-center lg:items-start gap-3">
          <p className="text-left font-[500] text-[16px]">
            Enter your post title and keyword
          </p>
          <p className="text-left">
            simply provide our ai writer with Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Officiis similique pariatur impedit
            quasi unde dolores explicabo. Consequuntur atque hic dolorum.
          </p>
          <Image height={200} width={250} src="/table.png" alt="table" />
        </div>
        <div className="lg:w-[40%] w-[80%] max-w-[400px]">
          <SeatTable />
        </div>
      </div> */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-3 md:gap-5 lg:gap-7 xl:gap-8   mt-20 mb-28">
        <div className="lg:w-[40%] w-[80%] flex flex-col gap-5 items-center relative z-20">
          <p className="text-left font-[500] text-[20px] z-10">
            Enter your post title and keyword
          </p>
          <p className="text-left z-10">
            simply provide our ai writer with Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Officiis similique pariatur impedit
            quasi unde dolores explicabo. Consequuntur atque hic dolorum.
          </p>
          <Image
            height={300}
            width={350}
            src="/table.png"
            alt="table"
            className="z-20"
          />
          <Image
            height={200}
            width={200}
            src="/circle.png"
            alt="table"
            className=" hidden lg:flex z-0 absolute bottom-0 right-[-80px]"
          />
        </div>

        <div className="lg:w-[40%] w-[80%] relative z-20">
          <SeatTable />
        </div>
      </div>
    </div>
  );
}
