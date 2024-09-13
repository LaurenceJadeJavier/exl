"use client";

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

export default function AccountManagement() {
  const router = useRouter();
  const column: ColumnDef<any>[] = [
    {
      accessorKey: "deviceName",
      header: () => {
        return <h1 className="text-xs text-white">Device Name</h1>;
      },
    },
    {
      accessorKey: "dataCreated",
      header: () => {
        return <h1 className="text-xs text-white">Date Created</h1>;
      },
    },
  ];
  const data = [
    {
      deviceName: "Security",
      dataCreated: "12, Aug 2024",
    },
    {
      deviceName: "Security",
      dataCreated: "12, Aug 2024",
    },
    {
      deviceName: "Security",
      dataCreated: "12, Aug 2024",
    },
    {
      deviceName: "Security",
      dataCreated: "12, Aug 2024",
    },
    {
      deviceName: "Security",
      dataCreated: "12, Aug 2024",
    },
  ];
  const handleNavigate = () => {
    router.push("/account-management/add-account");
  };
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
            headerTitle="Account Management"
            buttonIshow={true}
            firstButtonName="Add Account"
            firstButtonFunction={handleNavigate}
            secondButtonName="Filter by"
            thirdButtonName="Export"
          />
        </div>
      </div>
    </>
  );
}
