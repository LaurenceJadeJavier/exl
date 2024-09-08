// "use client";
// import Image from "next/image";
// // import avail from "../../../../assets/images/occupied.png";
// // import occu from "../../../../assets/images/avail2.png";
// import avail from "@assets/images/occupied.png";
// import occu from "@assets/images/avail2.png";
// import { useState } from "react";

// export default function Home() {
//   let lockerNumber = 48;

//   const numbers = Array.from({ length: lockerNumber }, (_, i) => i + 1);

//   const [availability, setAvailability] = useState(
//     numbers.map(() => "not available")
//   );

//   const toggleAvailability = (index: number) => {
//     setAvailability((prev) =>
//       prev.map((status, i) =>
//         i === index
//           ? status === "available"
//             ? "not available"
//             : "available"
//           : status
//       )
//     );
//   };

//   return (
//     <>
//       <div>
//         <div className=" flex flex-row gap-5 pb-4">
//           <text>Avaiable</text>
//           <text>Not Availeble</text>
//         </div>
//         <div className="grid grid-cols-8 gap-4">
//           {numbers.map((num, index) => (
//             <div
//               key={num}
//               className="flex flex-col relative w-9 cursor-pointer"
//               onClick={() => toggleAvailability(index)}
//             >
//               <Image
//                 src={availability[index] === "available" ? occu : avail}
//                 alt={`Image ${num}`}
//               />
//               <div className="flex flex-col justify-center font-bold text-xs items-center absolute inset-0 px-3.5 py-4">
//                 {num}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
