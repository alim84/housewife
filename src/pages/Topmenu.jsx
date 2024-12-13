// import { FaHome } from "react-icons/fa";
// import { GrAnnounce } from "react-icons/gr";
// import { GiCook } from "react-icons/gi";
// import { CiMenuFries } from "react-icons/ci";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { FaCartPlus } from "react-icons/fa6";
// import DailyFood from "./DailyFood";
// import Cake from "./Cake";
// import Foods from "./Foods";
// import { useState } from "react";
// import Footer from "./Footer";
// import { FaAngleRight } from "react-icons/fa";

// const Topmenu = () => {
//   let [menu, submenu] = useState(false);

//   return (
//     <>
//       <div className="container mx-auto bg-red-400 py-2 px-5 shadow-md shadow-red-400 ">
//         <div className="flex justify-center mb-16">
//           <div className="flex gap-8 items-center">
//             <div className="border-l-2 border-r-2 px-2 hover:text-white ">
//               <FaHome className="text-2xl" />
//             </div>
//             <div className="border-l-2 border-r-2 px-2 hover:text-white ">
//               মতামত
//             </div>
//             <div className="border-l-2 border-r-2 px-2 hover:text-white ">
//               অভিযোগ
//             </div>
//           </div>
//           <div className="ml-48">
//             <ul className="flex gap-8">
//               <li className="py-3 px-5 border-2 hover:bg-red-300 rounded-md hover:text-white">
//                 রেজিস্ট্রেশন
//               </li>
//               <li className="py-3 px-5 border-2 hover:bg-red-300 rounded-md hover:text-white">
//                 প্রবেশ
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-40 px-4 py-3 bg-white rounded-md">
//             <button
//               className="flex font-semibold gap-4  items-center"
//               onClick={() => submenu(!menu)}
//             >
//               {" "}
//               <CiMenuFries />
//               সকল খাবার <IoMdArrowDropdown className="mx-[48px] end-0" />{" "}
//             </button>
//           </div>
//           <div className="flex gap-5 items-center">
//             <button className="flex gap-2 items-center font-semibold py-3 px-10 bg-white rounded-tl-lg rounded-br-lg hover:text-red-400">
//               <GrAnnounce className="hover:text-red-400" /> অফার
//             </button>
//             <input
//               className="py-3 px-32 rounded-lg"
//               type="text"
//               placeholder="Search Your Choice"
//             />
//             <button className=" flex items-center gap-2 py-3 px-12 font-semibold bg-white rounded-md hover:text-red-400">
//               {" "}
//               <GiCook className="hover:text-red-400" />
//               গৃহিনী
//             </button>
//             <button className="py-2 px-4 bg-red-400">
//               <FaCartPlus className="text-white text-2xl font-bold" />
//             </button>
//           </div>
//         </div>
//       </div>
//       {menu && (
//         <div className=" w-[300px]  bg-red-300 absolute translate-x-[300px] z-10">
//           <div className="flex justify-between items-center border-b-2 hover:bg-red-400">
//             <button className="px-28 py-6 relative text-md font-semibold hover:text-white">
//               GEE 
//             </button>
//             <FaAngleRight />
//             </div>
//             <div className="absolute translate-y-[-74px]  px-10 py-[36px] rounded-r-full bg-red-500 shadow-lg shadow-red-800"></div>
//             <ul className="flex justify-between items-center border-b-2 hover:bg-red-400">
//             <li className="px-6 py-6  text-md font-semibold hover:text-white">
//               MUSSTARD OIL 
//             </li>
//             <FaAngleRight />
//             </ul>
//            <ul className="flex justify-between items-center border-b-2 hover:bg-red-400">

//             <li className="px-6 py-6   text-md font-semibold hover:text-white">
//               FIELD 
//             </li>
//             <FaAngleRight />
//            </ul>
//            <ul className="flex justify-between items-center hover:bg-red-400 border-b-2">
//            <li className="px-6 py-6  text-md font-semibold hover:text-white">
//               OIL 
//             </li>
//             <FaAngleRight />
//            </ul>
//             <ul className="flex justify-between items-center border-b-2 hover:bg-red-400">
//             <li className="px-6 py-6    text-md font-semibold hover:text-white">
//               RICE & PULSE 
//             </li>
//             <FaAngleRight />
//           </ul>
//         </div>
//       )}

//       <DailyFood />
//       <Cake />
//       <Foods />
//       <Footer />
//     </>
//   );
// };

// export default Topmenu;
