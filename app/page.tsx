import Image from "next/image";
import Navbar from "../components/section/Navbar";
import Herosection from "@/components/section/Herosection";
import Tools from "@/components/section/Tools";
import Tablesection from "@/components/section/Tablesection";
import Graphsection from "@/components/section/Graphsection";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Herosection />
      <Tools />
      <Tablesection />
      <Graphsection />
    </main>
  );
}
