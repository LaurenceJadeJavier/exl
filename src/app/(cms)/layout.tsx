"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "@assets/images/exlLogo.png";
import Image from "next/image";

type CMSLayoutProps = {
  children: React.ReactNode;
};

interface MenuItem {
  label: string;
  key: string;

  isActive?: boolean;
}
export default function CMSLayout({ children }: CMSLayoutProps) {
  const pathname = usePathname();
  const sidebarItems: MenuItem[] = [
    { label: "Check In / Check Out Device", key: "/checkin-out-device" },
    { label: "Device Management", key: "/device-management" },
    { label: "Account Management", key: "/account-management" },
    { label: "Employees Management", key: "/employee-management" },
    { label: "Facility Management", key: "/facility-management" },
  ];
  return (
    <div className="flex h-screen">
      <aside className="w-auto bg-white text-[#212A3E] p-4 shadow-slate-500 border border-l-1 h-full ">
        <div className="flex justify-center py-2 mb-10">
          <Image src={logo} alt="Logo" width={70} />
        </div>
        <ul>
          {sidebarItems.map((item: MenuItem) => (
            <li key={item.key} className="mb-2 text-xs">
              <Link href={item.key}>
                <h1
                  className={`block p-2 ${
                    pathname.startsWith(item.key)
                      ? "font-bold text-[#E30613]"
                      : "hover:text-gray-500"
                  }`}
                >
                  {item.label}
                </h1>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 items-center  bg-gray-100 overflow-auto">
        {children}
      </main>
    </div>
  );
}
