"use client";
import { Button } from "@/components/ui/button";
import exlLogo from "@assets/images/exlLogo.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-[34rem] h-[14rem] bg-[#FFFFFF] rounded-3xl">
        <div className="flex flex-col items-center text-center justify-center pt-6 space-y-4">
          <Image src={exlLogo} alt="logo" width={80} />
          <div>
            <h1 className="flex flex-col text-2xl font-bold">
              Welcome To Facilities <span>Service Request Page</span>
            </h1>
          </div>
          <div className="w-full px-auto">
            <Link href={"/register-employee"}>
              <Button className="w-[50%] text-[#E30613]" variant={"outline"}>
                Register Device
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
