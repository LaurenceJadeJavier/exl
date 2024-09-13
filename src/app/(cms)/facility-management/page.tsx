"use client";

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
interface tableProps {
  facilityName: string;
  address: string;
  dateCreated: string;
}
export default function FacilityManagement() {
  const column: ColumnDef<tableProps>[] = [
    {
      accessorKey: "facilityName",
      header: () => {
        return <h1 className="text-xs text-white">Facility Name</h1>;
      },
    },
    {
      accessorKey: "address",
      header: () => {
        return <h1 className="text-xs text-white">Address</h1>;
      },
    },
    {
      accessorKey: "dateCreated",
      header: () => {
        return <h1 className="text-xs text-white">Date Created</h1>;
      },
    },
  ];
  const data = [
    {
      facilityName: "Main Office",
      address: "1234 Elm Street, Springfield, IL",
      dateCreated: "01 Sep 2023",
    },
    {
      facilityName: "Tech Hub",
      address: "5678 Oak Avenue, San Francisco, CA",
      dateCreated: "15 Aug 2023",
    },
    {
      facilityName: "Remote Station",
      address: "9101 Pine Road, Austin, TX",
      dateCreated: "23 Jul 2023",
    },
    {
      facilityName: "Headquarters",
      address: "2468 Maple Drive, New York, NY",
      dateCreated: "10 Aug 2023",
    },
    {
      facilityName: "Satellite Office",
      address: "1357 Birch Boulevard, Miami, FL",
      dateCreated: "05 Sep 2023",
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
            headerTitle="Location Management"
            buttonIshow={true}
            firstButtonName="Add Location"
            secondButtonName="Filter by"
            thirdButtonName="Export"
          />
        </div>
      </div>
    </>
  );
}
