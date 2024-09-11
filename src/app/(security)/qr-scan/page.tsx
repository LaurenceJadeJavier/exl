"use client";
import exlLogo from "@assets/images/exlLogo.png";
import Image from "next/image";
import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { Button } from "@/components/ui/button";
import avail from "@assets/images/occupied.png";
import occu from "@assets/images/avail2.png";
export default function QRScanner() {
  const [dataWeb, setDataWeb] = useState<string | null>(null); // State for scanned data
  const [isScanning, setIsScanning] = useState(true); // State to toggle scanning
  // State to toggle between cameras

  const scannerStyles = {
    container: {
      width: "50%",
      height: "80%",
    },
  };

  ///locker
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
      <div className="flex flex-col bg-white ">
        <div className="h-10 shadow-md flex items-center justify-center ">
          <Image src={exlLogo} alt="" width={60} />
        </div>
        <div className="flex flex-row  ">
          <div className="w-full flex flex-col justify-center items-center gap-5 mt-10 ">
            <Scanner
              styles={scannerStyles}
              scanDelay={300}
              paused={!isScanning}
              onError={(err) => console.error("Scanner Error:", err)}
              onScan={(data: any) => {
                if (data) {
                  setDataWeb(data);
                  alert(`Scanned Data: ${JSON.stringify(data)}`); // Convert data to a string
                }
              }}
            />
            <div>
              {dataWeb
                ? JSON.stringify(dataWeb, null, 2)
                : "No data scanned yet"}
            </div>
            <Button
              className="w-[50%]"
              onClick={() => {
                setIsScanning(isScanning);
              }}
            >
              switch camera
            </Button>
          </div>
          <div className="w-full px-2 mt-4  ">
            <div>
              <div className=" flex flex-row gap-5 pb-4"></div>
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
      </div>
    </>
  );
}
