import Link from "next/link";

export default function ViewDevice() {
  return (
    <>
      <div className="flex  w-full px-20 py-16  flex-col  ">
        <div className="flex items-start px-32">
          <Link
            href={"/device-management/"}
            className="underline text-[#E30613] text-sm mb-4"
          >
            Go back
          </Link>
        </div>
        <div className="border border-gray-300 w-full max-w-4xl m-auto rounded-3xl px-20 py-6 shadow-lg">
          <div className="p-10">
            <h1 className="text-xl font-bold text-[#212A3E]">
              Employee Information
            </h1>
            <div className="flex flex-row gap-11 pt-4">
              <div className="text-sm text-[#212A3E]">
                <h1>Employee ID:</h1>
                <h2>000100</h2>
              </div>
              <div className="text-sm text-[#212A3E]">
                <h1>Employee Name::</h1>
                <h2>Juan Cruz</h2>
              </div>
            </div>
          </div>
          <div className="p-10">
            <h1 className="text-xl font-bold text-[#212A3E]">
              Device Information
            </h1>
            <div className="flex flex-row gap-11 pt-4">
              <div className="text-sm text-[#212A3E]">
                <h1>Date:</h1>
                <h2>30 Jul 2024</h2>
              </div>
            </div>
            <div className="flex flex-row gap-11 pt-4">
              <div className="text-sm text-[#212A3E]">
                <h1>Device Name:</h1>
                <h2>iPhone</h2>
              </div>
              <div className="text-sm text-[#212A3E]">
                <h1>Device Model:</h1>
                <h2>iPhone 14 Pro Max</h2>
              </div>
              <div className="text-sm text-[#212A3E]">
                <h1>Device Type:</h1>
                <h2>Mobile Phone</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
