import { FaHome } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { GiCook } from "react-icons/gi";
import { CiMenuFries } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import DailyFood from "./DailyFood";

const Topmenu = () => {
  return (
    <>
      <div className="container mx-auto bg-red-400 py-2 px-5 shadow-md shadow-red-400 ">
        <div className="flex justify-center mb-16">
          <div className="flex gap-8 items-center">
            <div className="border-l-2 border-r-2 px-2 hover:text-white ">
              <FaHome className="text-2xl" />
            </div>
            <div className="border-l-2 border-r-2 px-2 hover:text-white ">
              মতামত
            </div>
            <div className="border-l-2 border-r-2 px-2 hover:text-white ">
              অভিযোগ
            </div>
          </div>
          <div className="ml-48">
            <ul className="flex gap-8">
              <li className="py-3 px-5 border-2 hover:bg-red-300 rounded-md">রেজিস্ট্রেশন</li>
              <li className="py-3 px-5 border-2 hover:bg-red-300 rounded-md">প্রবেশ</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-40 px-4 py-3 bg-white rounded-md">
            <div className=" flex items-center gap-2">
              <CiMenuFries />
              <a href="">Browse Menu</a>
            </div>
            <div>
              <IoMdArrowDropdown className="" />
            </div>
          </div>
          <div className="flex gap-5">
            <button className="flex gap-2 items-center py-3 px-10 bg-white rounded-tl-lg rounded-br-lg hover:text-red-400">
              <GrAnnounce className="hover:text-red-400" /> অফার
            </button>
            <input
              className="py-3 px-32 rounded-lg"
              type="text"
              placeholder="Search Your Choice"
            />
            <button className=" flex items-center gap-2 py-3 px-12 bg-white rounded-md hover:text-red-400">
              {" "}
              <GiCook className="hover:text-red-400" />
              গৃহিনী
            </button>
          </div>
        </div>
      </div>
      <DailyFood/>
    </>
  );
};

export default Topmenu;
