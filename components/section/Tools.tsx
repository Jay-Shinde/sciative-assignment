import ToolInfo from "../cards/ToolInfo";

export default function Tools() {
  const tools = [
    {
      index: "Article Generator",
      desc: "Generate high-quality articles with ease.",
    },
    {
      index: "Article Generator",
      desc: "Generate high-quality articles with ease.",
    },
    {
      index: "Article Generator",
      desc: "Generate high-quality articles with ease.",
    },
    {
      index: "Article Generator",
      desc: "Generate high-quality articles with ease.",
    },
    {
      index: "Article Generator",
      desc: "Generate high-quality articles with ease.",
    },
    {
      index: "Article Generator",
      desc: "Generate high-quality articles with ease.",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center gap-3 md:gap-5 lg:gap-7 xl:gap-8 justify-center overflow-hidden min-h-[100vh]">
      <p className="text-2xl md:text-3xl lg:text-5xl font-[500] text-center w-[90%] sm:w-[85%] md:w-[80%] max-w-[600px] lg:leading-[60px] xl:leading-[70px]">
        Most Popular Tools
      </p>
      <p className="text-center w-[90%] sm:w-[85%] md:w-[80%] max-w-[700px]">
        These are the most popular tools a good place to start. <br />
        Give them a try.
      </p>
      <div className="flex flex-row flex-wrap gap-5 sm:gap-8 md:gap-10 justify-center lg:px-9 xl:px-10">
        {tools.map((item) => {
          return <ToolInfo index={item.index} desc={item.desc} />;
        })}
      </div>
    </div>
  );
}
