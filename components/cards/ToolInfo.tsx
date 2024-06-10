import { Building2 } from "lucide-react";

export default function ToolInfo(props: { index: string; desc: string }) {
  return (
    <div className="w-[80%] sm:w-[400px] bg-white flex flex-col items-start py-4 px-6 rounded-md">
      <Building2 className="text-[#7440f7] h-10" />
      <p className="text-black font-[600] text-[20px]">{props.index}</p>
      <p>{props.desc}</p>
    </div>
  );
}
