"use client";
import { Button } from "@/components/ui/button";
import exlLogo from "@assets/images/exlLogo.png";
import Image from "next/image";
import Link from "next/link";
import landing from "@assets/images/landing2.png";

export default function SecurityPage() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-full"
        style={{ backgroundImage: `url(${landing.src})` }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="w-[34rem] h-[16rem] bg-[#FFFFFF] rounded-3xl">
            <div className="flex flex-col items-center text-center justify-center pt-6 space-y-4">
              <Image src={exlLogo} alt="logo" width={80} />
              <div>
                <h1 className="flex flex-col text-2xl font-bold">
                  Welcome To Facilities <span>Service Request Page</span>
                </h1>
              </div>
              <div className="w-full px-auto flex flex-col gap-2">
                <Link href={"/qr-scan"}>
                  <Button
                    className="w-[50%] text-[#FFFFFF]"
                    variant={"default"}
                  >
                    Scan QR Code
                  </Button>
                </Link>
                <Link href={"/register-employee"}>
                  <Button
                    className="w-[50%] text-[#E30613]"
                    variant={"outline"}
                  >
                    View Logs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
