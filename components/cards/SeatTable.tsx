"use client";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function Tablesection() {
  interface SeatInfo {
    seat_no: string;
    price: number;
    status: string;
  }
  const [data, setData] = useState<SeatInfo[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://viaje.ai/seatinfo_api/");
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

  const columns = [
    {
      name: "Seat No",
      selector: (row: SeatInfo) => row.seat_no,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row: SeatInfo) => row.price,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row: SeatInfo) => row.status,
      sortable: true,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        // override the row height
      },
    },
    headCells: {
      style: {
        background: "#8b8ee2",
      },
    },
    cells: {
      style: {
        border: "solid 1px #8b8ee1",
      },
    },
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <DataTable columns={columns} data={data} customStyles={customStyles} />
  );
}
