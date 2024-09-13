"use client";

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

interface tableProps {
  employeeId: string;
  employeeName: string;
  facilityName: string;
  emailAddress: string;
}

export default function EmployeeManagement() {
  const router = useRouter();
  const column: ColumnDef<tableProps>[] = [
    {
      accessorKey: "employeeId",
      header: () => {
        return <h1 className="text-xs text-white">Employee ID</h1>;
      },
    },
    {
      accessorKey: "employeeName",
      header: () => {
        return <h1 className="text-xs text-white">Employee Name</h1>;
      },
    },
    {
      accessorKey: "facilityName",
      header: () => {
        return <h1 className="text-xs text-white">Facility Name</h1>;
      },
    },
    {
      accessorKey: "emailAddress",
      header: () => {
        return <h1 className="text-xs text-white">Email Address</h1>;
      },
    },
  ];
  const data = [
    {
      employeeId: "1234",
      employeeName: "John Doe",
      facilityName: "Main Office",
      emailAddress: "john.doe@example.com",
    },
    {
      employeeId: "5678",
      employeeName: "Alice Smith",
      facilityName: "Tech Hub",
      emailAddress: "alice.smith@example.com",
    },
    {
      employeeId: "9876",
      employeeName: "Robert Brown",
      facilityName: "Remote Station",
      emailAddress: "robert.brown@example.com",
    },
    {
      employeeId: "4321",
      employeeName: "Emma Davis",
      facilityName: "Headquarters",
      emailAddress: "emma.davis@example.com",
    },
    {
      employeeId: "2468",
      employeeName: "Sophia Johnson",
      facilityName: "Satellite Office",
      emailAddress: "sophia.johnson@example.com",
    },
  ];
  const handleNavigate = () => {
    router.push("/employee-management/add-employee");
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
            headerTitle="Employees Management"
            buttonIshow={true}
            firstButtonName="Add Employees"
            firstButtonFunction={handleNavigate}
            secondButtonName="Filter by"
            thirdButtonName="Export"
          />
        </div>
      </div>
    </>
  );
}
