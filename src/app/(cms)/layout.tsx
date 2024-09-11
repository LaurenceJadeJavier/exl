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
    <div className="flex min-h-screen">
      <aside className="w-30 bg-white text-[#212A3E] p-4 shadow-slate-500 border border-l-1">
        <div className="flex justify-center py-2">
          <Image src={logo} alt="Logo" width={70} />
        </div>
        <ul>
          {sidebarItems.map((item: MenuItem) => (
            <li key={item.key} className="mb-4 text-xs">
              <Link href={item.key}>
                <h1
                  className={`block p-2 ${
                    pathname === item.key
                      ? "font-bold text-blue-500"
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
      <main className="flex-1 p-8 bg-gray-100">{children}</main>
    </div>
  );
}
