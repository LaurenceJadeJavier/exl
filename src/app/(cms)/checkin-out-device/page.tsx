"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { useState } from "react";
import avail from "@assets/images/occupied.png";
import occu from "@assets/images/avail2.png";
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
} from "@/components/ui/responsive-modal";
import { Scanner } from "@yudiel/react-qr-scanner";

interface TableProps {
  deviceName: string;
  deviceModel: string;
  employeeId: string;
  employeeName: string;
  dateAdded: string;
}

export default function CheckInOutDevice() {
  const [isOpen, setIsOpen] = useState(false);
  const [dataWeb, setDataWeb] = useState<string | null>(null); // State for scanned data
  const [isScanning, setIsScanning] = useState(true); // State to toggle scanning
  const column: ColumnDef<TableProps>[] = [
    {
      accessorKey: "deviceName",
      header: () => {
        return <h1 className="text-xs text-white">Device Name</h1>;
      },
    },
    {
      accessorKey: "deviceModel",
      header: () => {
        return <h1 className="text-xs text-white">Device Model</h1>;
      },
    },
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
      accessorKey: "dateAdded",
      header: () => {
        return <h1 className="text-xs text-white">Date Added</h1>;
      },
    },
  ];
  const data = [
    {
      deviceName: "Laurence",
      deviceModel: "14 Aug 2024",
      employeeId: "9:30 AM",
      employeeName: "5:00 PM",
      dateAdded: "10 Aug 2024",
    },
    {
      deviceName: "Sophia",
      deviceModel: "Galaxy S21",
      employeeId: "1234",
      employeeName: "John Doe",
      dateAdded: "15 Aug 2024",
    },
    {
      deviceName: "Elliot",
      deviceModel: "iPhone 13",
      employeeId: "5678",
      employeeName: "Alice Smith",
      dateAdded: "12 Aug 2024",
    },
    {
      deviceName: "Mason",
      deviceModel: "Pixel 6",
      employeeId: "9876",
      employeeName: "Robert Brown",
      dateAdded: "10 Aug 2024",
    },
    {
      deviceName: "Olivia",
      deviceModel: "OnePlus 9",
      employeeId: "4321",
      employeeName: "Emma Davis",
      dateAdded: "20 Aug 2024",
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
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const scannerStyles = {
    container: {
      width: "50%",
      height: "80%",
    },
  };
  return (
    <>
      <div className="flex flex-row  min h-screen   ">
        <div className="w-[60%] min h-screen border border-l-1 px-6 pt-14">
          <div className="flex justify-between items-center text-sm">
            <div>
              <div className="text-sm">
                <h1 className="py-1">
                  Facility: <span className="font-bold">Facility 1</span>
                </h1>
              </div>
              <h1 className="py-1">
                Date: <span className="font-bold">July 16, 2024</span>
              </h1>
            </div>

            <div className="flex space-x-2 ">
              <Button
                className="bg-[#E30613] text-white rounded-lg px-4 py-2"
                onClick={handleOpenModal}
              >
                Scan Device
              </Button>
              <Button
                className="border border-[#E30613] rounded-lg px-4 py-2"
                variant="outline"
              >
                Filter Date
              </Button>
              <Button
                className="border border-[#E30613] rounded-lg px-4 py-2"
                variant="outline"
              >
                Export
              </Button>
            </div>
          </div>

          <DataTable
            columns={column}
            data={data}
            displayPagination
            headerClassName="bg-[#E30613]"
            rowClassName="text-xs"
          />
        </div>
        <div className="w-[40%] px-6 pt-14  ">
          <div>
            <div className=" flex flex-row justify-between pb-5 pr-12">
              <h1 className="font-bold">LOCKERS</h1>
              <div className="flex flex-row gap-4 text-xs">
                <h1 className="flex flex-row items-center gap-2">
                  <span className="w-2 h-2 bg-[#C0C0C0] rounded-full"></span>
                  Occupied
                </h1>
                <h1 className="flex flex-row items-center gap-2">
                  <span className="w-2 h-2 bg-[#E30613] rounded-full"></span>
                  Available
                </h1>
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
      <ResponsiveModal open={isOpen}>
        <ResponsiveModalContent className="max-w-md p-6 mx-auto">
          <ResponsiveModalHeader className="text-center">
            <ResponsiveModalDescription>
              <div className="flex flex-col items-center gap-4">
                <div className="w-full flex flex-col justify-center items-center gap-5 mt-10 ">
                  <Scanner
                    styles={scannerStyles}
                    scanDelay={300}
                    paused={!isScanning}
                    onError={(err) => console.error("Scanner Error:", err)}
                    onScan={(data: any) => {
                      if (data) {
                        setDataWeb(data);
                        alert(`Scanned Data: ${JSON.stringify(data)}`);
                      }
                    }}
                  />
                  {/* <div>
                    {dataWeb
                      ? JSON.stringify(dataWeb, null, 2)
                      : "No data scanned yet"}
                  </div> */}
                  <Button className="w-[50%]" onClick={handleCloseModal}>
                    close camera
                  </Button>
                </div>
              </div>
            </ResponsiveModalDescription>
          </ResponsiveModalHeader>
        </ResponsiveModalContent>
      </ResponsiveModal>
    </>
  );
}
