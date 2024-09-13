"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";

export default function DeviceManagement() {
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
  return (
    <>
      <div className="flex  min h-screen">
        <div className="w-full min h-screen border border-l-1 px-6 pt-14">
          <DataTable
            columns={column}
            data={data}
            displayPagination
            headerClassName="bg-[#E30613]"
            rowClassName="text-xs"
            headerTitle="Device Management"
            buttonIshow={true}
            firstButtonName="Add device"
            secondButtonName="FilterBy"
            thirdButtonName="Export"
          />
        </div>
      </div>
    </>
  );
}
