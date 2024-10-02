"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiOutlineEye } from "react-icons/hi";
import { RiEdit2Line } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";

export default function AccountManagement() {
  const router = useRouter();
  const [position, setPosition] = useState("bottom");
  const [openDropdownRowId, setOpenDropdownRowId] = useState<string | null>(
    null
  );

  const handleView = (id: string) => {
    router.push(`/account-management/view-account/${id}`);
  };

  const handleEdit = (id: string) => {
    router.push(`/account-management/edit-account/${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(id);
  };

  const handleOpenDropdown = (rowId: string) => {
    setOpenDropdownRowId(openDropdownRowId === rowId ? null : rowId);
  };

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "deviceName",
      header: () => <h1 className="text-xs text-white">Name</h1>,
      cell: ({ row }) => (
        <span
          className="cursor-pointer"
          onClick={() => handleOpenDropdown(row.original.id)}
        >
          {row.original.deviceName}
        </span>
      ),
    },
    {
      accessorKey: "dataCreated",
      header: () => <h1 className="text-xs text-white">Date Created</h1>,
      cell: ({ row }) => (
        <div>
          <DropdownMenu
            open={openDropdownRowId === row.original.id}
            onOpenChange={() => handleOpenDropdown(row.original.id)}
          >
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-xs">
                {row.original.dataCreated}
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
                  className="flex items-center gap-2 text-xs"
                >
                  <HiOutlineEye size={18} />
                  View
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  onClick={() => handleEdit(row.original.id)}
                  value="edit"
                  className="flex items-center gap-2 text-xs"
                >
                  <RiEdit2Line size={18} />
                  Edit
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  onClick={() => handleDelete(row.original.id)}
                  value="delete"
                  className="flex items-center gap-2 text-xs"
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
      deviceName: "Security",
      dataCreated: "12, Aug 2024",
    },
    {
      id: "2",
      deviceName: "Locker A",
      dataCreated: "13, Aug 2024",
    },
    {
      id: "3",
      deviceName: "Locker B",
      dataCreated: "14, Aug 2024",
    },
  ];

  const handleNavigate = () => {
    router.push("/account-management/add-account");
  };

  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-full min-h-screen border px-6 pt-14">
          <DataTable
            columns={columns}
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
