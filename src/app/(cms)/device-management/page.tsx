"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { RiEdit2Line } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DeviceManagement() {
  const router = useRouter();
  const [position, setPosition] = useState("bottom");
  const [openDropdownRowId, setOpenDropdownRowId] = useState<string | null>(
    null
  );

  const handleView = (id: string) => {
    router.push(`/device-management/view-device/${id}`);
  };

  const handleEdit = (id: string) => {
    router.push(`/device-management/edit-device/${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(id);
  };

  const handleOpenDropdown = (rowId: string) => {
    // Toggle the dropdown for the clicked row
    setOpenDropdownRowId(openDropdownRowId === rowId ? null : rowId);
  };

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "name",
      header: () => <h1 className="text-xs text-white">Name</h1>,
      cell: ({ row }) => (
        <span
          onClick={() => handleOpenDropdown(row.original.id)}
          className="cursor-pointer"
        >
          {row.original.name}
        </span>
      ),
    },
    {
      accessorKey: "date",
      header: () => <h1 className="text-xs text-white">Date</h1>,
      cell: ({ row }) => (
        <span
          onClick={() => handleOpenDropdown(row.original.id)}
          className="cursor-pointer"
        >
          {row.original.date}
        </span>
      ),
    },
    {
      accessorKey: "timeIn",
      header: () => <h1 className="text-xs text-white">Time In</h1>,
      cell: ({ row }) => (
        <span
          onClick={() => handleOpenDropdown(row.original.id)}
          className="cursor-pointer"
        >
          {row.original.timeIn}
        </span>
      ),
    },
    {
      accessorKey: "timeOut",
      header: () => <h1 className="text-xs text-white">Time Out</h1>,
      cell: ({ row }) => (
        <span
          onClick={() => handleOpenDropdown(row.original.id)}
          className="cursor-pointer"
        >
          {row.original.timeOut}
        </span>
      ),
    },
    {
      accessorKey: "lockerNo",
      header: () => <h1 className="text-xs text-white">Locker #</h1>,
      cell: ({ row }) => (
        <div>
          <DropdownMenu
            open={openDropdownRowId === row.original.id}
            onOpenChange={() => handleOpenDropdown(row.original.id)}
          >
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-xs">
                {row.original.lockerNo}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-28">
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem
                  onClick={() => handleView(row.original.id)}
                  value="view"
                  className="flex items-center  gap-2 text-xs "
                >
                  <HiOutlineEye size={18} />
                  View
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  onClick={() => handleEdit(row.original.id)}
                  value="edit"
                  className="flex items-center  gap-2 text-xs"
                >
                  <RiEdit2Line size={18} />
                  Edit
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  onClick={() => handleDelete(row.original.id)}
                  value="delete"
                  className="flex items-center  gap-2 text-xs"
                >
                  <RiDeleteBinLine size={18} />
                  Delete
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: "1",
      name: "Laurence",
      date: "14 Aug 2024",
      timeIn: "9:30 AM",
      timeOut: "5:00 PM",
      lockerNo: "01",
    },
    {
      id: "2",
      name: "Samantha",
      date: "15 Aug 2024",
      timeIn: "10:00 AM",
      timeOut: "6:00 PM",
      lockerNo: "02",
    },
    {
      id: "3",
      name: "Michael",
      date: "16 Aug 2024",
      timeIn: "8:45 AM",
      timeOut: "",
      lockerNo: "03",
    },
    {
      id: "4",
      name: "Jessica",
      date: "17 Aug 2024",
      timeIn: "9:15 AM",
      timeOut: "5:30 PM",
      lockerNo: "04",
    },
    {
      id: "5",
      name: "David",
      date: "18 Aug 2024",
      timeIn: "10:30 AM",
      timeOut: "",
      lockerNo: "05",
    },
  ];

  const handleNavigate = () => {
    router.push("/device-management/add-device");
  };

  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-full min-h-screen border border-l-1 px-6 pt-14">
          <DataTable
            columns={columns}
            data={data}
            displayPagination
            headerClassName="bg-[#E30613]"
            rowClassName="text-xs"
            headerTitle="Device Management"
            buttonIshow={true}
            firstButtonName="Add device"
            firstButtonFunction={handleNavigate}
            secondButtonName="Filter by"
            thirdButtonName="Export"
          />
        </div>
      </div>
    </>
  );
}
