"use client";
import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
export default function Graphsection() {
  interface DataPoint {
    "0": string;
    "1": number;
    "2": number;
    "3": number;
  }

  const [data, setData] = useState<DataPoint[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://viaje.ai/mainvia_api/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const options: Highcharts.Options = {
    title: {
      text: "Data Chart",
    },
    xAxis: {
      categories: data.map((point) => point["0"]),
    },
    yAxis: {
      title: {
        text: "Values",
      },
    },

    series: [
      {
        name: "Via1",
        data: data.map((point) => point["1"]),
        type: "column",
      },
      {
        name: "Via2",
        data: data.map((point) => point["2"]),
        type: "column",
      },
      {
        name: "Total",
        data: data.map((point) => point["3"]),
        type: "column",
      },
    ],
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-3 md:gap-5 lg:gap-7 xl:gap-8   mt-20 mb-28">
      <div className="lg:w-[40%] w-[80%] flex flex-col gap-5">
        <p className="text-left font-[500] text-[20px]">
          Enter your post title and keyword
        </p>
        <p className="text-left">
          simply provide our ai writer with Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Officiis similique pariatur impedit
          quasi unde dolores explicabo. Consequuntur atque hic dolorum.
        </p>
      </div>
      <div className="lg:w-[40%] w-[80%]">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}
