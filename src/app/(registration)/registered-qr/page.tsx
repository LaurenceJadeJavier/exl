"use client";
import Image from "next/image";
import exlLogo from "@assets/images/exlLogo.png";
import qrRegister from "@assets/images/qrRegister.png";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";
import useFormStore from "@/utils/zustand/registration/useRegistrationStore";
import { useRouter } from "next/navigation";
export default function RegisteredQR() {
  const router = useRouter();
  const { formdataItems } = useFormStore();
  console.log(formdataItems, "items qr");
  return (
    <>
      <div className="  bg-[#FFFFFF] rounded-3xl w-[60rem] min-h-[30rem]">
        <div className="flex flex-col items-center text-center justify-center pt-6 space-y-2 h-auto">
          <Image src={exlLogo} alt="logo" width={80} />
          <div className=" flex flex-row gap-6 w-full">
            <div className=" flex flex-col  w-full text-left px-4 py-4">
              <div className="flex flex-col items-center">
                <h1 className="text-center font-semibold py-2 text-lg">
                  Here Is Your QR Code
                </h1>
                <div className="flex flex-col items-center justify-center shadow-md   py-4 px-4 bg-white rounded-md space-y-4 w-64 h-72 mt-4">
                  <QRCodeSVG
                    value={`${JSON.stringify(formdataItems, null, 2)}`}
                    fgColor="#E30613"
                  />
                  <p className="text-xs">
                    Device Name:{" "}
                    <span className="font-semibold">iPhone 14 pro max</span>
                  </p>
                  <p className=" text-xs">
                    Device Details:{" "}
                    <span className="font-semibold">Lorem Ipsum</span>
                  </p>
                </div>
                <div className="text-center text-xs py-2">
                  <p>The QR code will be sent to your email for easy access</p>
                </div>
                <div className=" flex flex-col gap-2 px-5 mx-auto">
                  <Button
                    className="w-72 rounded-md text-white"
                    onClick={() => router.push("/home-page")}
                  >
                    Back to main menu
                  </Button>
                  <Button
                    className="w-72 rounded-md text-[#E30613]"
                    variant={"ghost"}
                    onClick={() => router.push("/register-device")}
                  >
                    Register another Device
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full m-auto ">
              <Image src={qrRegister} alt="registerEmployees" width={350} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
