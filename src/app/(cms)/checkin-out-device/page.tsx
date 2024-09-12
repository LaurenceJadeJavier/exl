"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { useState } from "react";
import avail from "@assets/images/occupied.png";
import occu from "@assets/images/avail2.png";

export default function CheckInOutDevice() {
  const column: ColumnDef<any>[] = [
    {
      accessorKey: "name",
      header: () => {
        return <h1 className="text-xs text-white">Name</h1>;
      },
    },
    {
      accessorKey: "date",
      header: () => {
        return <h1 className="text-xs text-white">Date</h1>;
      },
    },
    {
      accessorKey: "timeIn",
      header: () => {
        return <h1 className="text-xs text-white">Time in</h1>;
      },
    },
    {
      accessorKey: "timeOut",
      header: () => {
        return <h1 className="text-xs text-white">Time out</h1>;
      },
    },
    {
      accessorKey: "lockerNo",
      header: () => {
        return <h1 className="text-xs text-white">Locker #</h1>;
      },
    },
  ];
  const data = [
    {
      name: "Laurence",
      date: "14 Aug 2024",
      timeIn: "9:30 AM",
      timeOut: "5:00 PM",
      lockerNo: "01",
    },
    {
      name: "Samantha",
      date: "15 Aug 2024",
      timeIn: "10:00 AM",
      timeOut: "6:00 PM",
      lockerNo: "02",
    },
    {
      name: "Michael",
      date: "16 Aug 2024",
      timeIn: "8:45 AM",
      timeOut: "",
      lockerNo: "03",
    },
    {
      name: "Jessica",
      date: "17 Aug 2024",
      timeIn: "9:15 AM",
      timeOut: "5:30 PM",
      lockerNo: "04",
    },
    {
      name: "David",
      date: "18 Aug 2024",
      timeIn: "10:30 AM",
      timeOut: "",
      lockerNo: "05",
    },
  ];
  //lockers
  let lockerNumber = 48;

  const numbers = Array.from({ length: lockerNumber }, (_, i) => i + 1);

  const [availability, setAvailability] = useState(
    numbers.map(() => "not available")
  );

  const toggleAvailability = (index: number) => {
    setAvailability((prev) =>
      prev.map((status, i) =>
        i === index
          ? status === "available"
            ? "not available"
            : "available"
          : status
      )
    );
  };
  return (
    <>
      <div className="grid grid-cols-2  min h-screen   ">
        <div className="w-full  min h-screen border border-l-1 px-6 pt-14">
          <DataTable
            columns={column}
            data={data}
            displayPagination
            headerClassName="bg-[#E30613]"
            rowClassName="text-xs  "
          />
        </div>
        <div className="w-full px-6 pt-14 ">
          <div>
            <div className=" flex flex-row justify-between pb-5">
              <h1 className="font-bold">LOCKERS</h1>
              <div className="flex flex-row gap-4 text-xs">
                <h1>Occupied</h1>
                <h1>Available</h1>
              </div>
            </div>
            <div className="grid grid-cols-8 gap-4">
              {numbers.map((num, index) => (
                <div
                  key={num}
                  className="flex flex-col relative w-9 cursor-pointer"
                  onClick={() => toggleAvailability(index)}
                >
                  <Image
                    src={availability[index] === "available" ? occu : avail}
                    alt={`Image ${num}`}
                  />
                  <div className="flex flex-col justify-center font-bold text-xs items-center absolute inset-0 px-3.5 py-4">
                    {num}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
