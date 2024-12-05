import { FaHome } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { GiCook } from "react-icons/gi";
import { CiMenuFries } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

const Topmenu = () => {
  let [menu, submenu] = useState(false);

  return (
    <>
      <div className="container mx-auto bg-red-400 py-2 px-5 shadow-md shadow-red-400 ">
        <div className="flex justify-center mb-16">
          <div className="flex gap-8 items-center">
            <div className="border-l-2 border-r-2 px-2 hover:text-white ">
              <Link>
                {" "}
                <FaHome className="text-2xl text-white hover:text-green-800" />
              </Link>
            </div>
            <div className="border-l-2 border-r-2 px-2 hover:text-white ">
              <Link to="/registration" className="font-bold text-white hover:text-green-800">
                Opinion
              </Link>
            </div>
            <div className="border-l-2 border-r-2 px-2 hover:text-white ">
              <Link to="/registration" className="font-bold text-white hover:text-green-800">
                Comple{" "}
              </Link>
            </div>
          </div>
          <div className="ml-48">
            <ul className="flex gap-8">
              <li className="py-3 px-5 border-2 hover:bg-red-300 rounded-md hover:text-white">
                <Link to="/registration" className="font-bold text-white hover:text-green-800">
                  Registration
                </Link>
              </li>
              <li className="py-3 px-5 border-2 hover:bg-red-300 rounded-md hover:text-white">
                <Link to="/registration" className="font-bold text-white hover:text-green-800">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-40 px-4 py-3 bg-white rounded-md hover:bg-red-200">
            <button
              className="flex font-semibold gap-4  items-center"
              onClick={() => submenu(!menu)}
            >
              {" "}
              <CiMenuFries className="text-green-600" />
              <h4 className="text-red-400 hover:text-green-800">Categories</h4>{" "}
              <IoMdArrowDropdown className="mx-[48px] end-0" />{" "}
            </button>
          </div>
          <div className="flex gap-5 items-center ">
            <button className="flex gap-2 items-center hover:bg-red-200 font-semibold py-3 px-10 bg-white rounded-tl-lg rounded-br-lg hover:text-red-400">
              <GrAnnounce className="hover:text-red-400 text-green-600" />{" "}
              <h4 className="text-red-400 hover:text-green-800"> OFFER</h4>
            </button>
            <input
              className="py-3 px-32 rounded-lg text-gray-800"
              type="text"
              placeholder="Search Your Choice"
            />
            <button className=" flex items-center hover:bg-red-200 gap-2 py-3 px-12 font-semibold bg-white rounded-md hover:text-red-400">
              {" "}
              <GiCook className="hover:text-red-400 text-green-600" />
              <h4 className="text-red-400 hover:text-green-800"> House Wife </h4>
            </button>
            <button className="py-2 px-4 bg-red-400">
              <FaCartPlus className="text-white text-2xl font-bold" />
            </button>
          </div>
        </div>
      </div>
      {!menu && (
        <div className=" w-[300px]  bg-red-300 absolute translate-x-[300px] z-10">
          <div className="flex justify-between items-center border-b-2 hover:bg-red-400 ">
            <button className="px-20 py-6 relative text-md font-semibold hover:text-white">
              <Link to="/Foods">Foods</Link>
            </button>
          </div>
          <div className="absolute translate-y-[-60px]  px-3 py-[20px] rounded-r-full bg-red-300 shadow-lg shadow-red-800"></div>

          <div className="flex justify-between items-center border-b-2 hover:bg-red-400 ">
            <button className="px-20 py-6 relative text-md font-semibold hover:text-white">
              <Link to="/fish">Fish</Link>
            </button>
          </div>
          <div className="absolute translate-y-[-60px]  px-3 py-[20px] rounded-r-full bg-red-300 shadow-lg shadow-red-800"></div>

          <div className="flex justify-between items-center border-b-2 hover:bg-red-400 ">
            <button className="px-20 py-6 relative text-md font-semibold hover:text-white">
              <Link to="/meat">Meat</Link>
            </button>
          </div>
          <div className="absolute translate-y-[-60px]  px-3 py-[20px] rounded-r-full bg-red-300 shadow-lg shadow-red-800"></div>

          <div className="flex justify-between items-center border-b-2 hover:bg-red-400 ">
            <button className="px-20 py-6 relative text-md font-semibold hover:text-white">
              <Link to="/personalcare">Personal Care</Link>
            </button>
          </div>
          <div className="absolute translate-y-[-60px]  px-3 py-[20px] rounded-r-full bg-red-300 shadow-lg shadow-red-800"></div>

          <div className="flex justify-between items-center border-b-2 hover:bg-red-400 ">
            <button className="px-20 py-6 relative text-md font-semibold hover:text-white">
              <Link to="/stationery">Stationary</Link>
            </button>
          </div>
          <div className="absolute translate-y-[-60px]  px-3 py-[20px] rounded-r-full bg-red-300 shadow-lg shadow-red-800"></div>

          <div className="flex justify-between items-center border-b-2 hover:bg-red-400 ">
            <button className="px-20 py-6 relative text-md font-semibold hover:text-white">
              <Link to="/vegetables">Vegetables</Link>
            </button>
          </div>
          <div className="absolute translate-y-[-60px]  px-3 py-[20px] rounded-r-full bg-red-300 shadow-lg shadow-red-800"></div>

          <div className="flex justify-between items-center border-b-2 hover:bg-red-400 ">
            <button className="px-20 py-6 relative text-md font-semibold hover:text-white">
              <Link to="/fruits">Fruits</Link>
            </button>
          </div>
          <div className="absolute translate-y-[-60px]  px-3 py-[20px] rounded-r-full bg-red-300 shadow-lg shadow-red-800"></div>

          <div className="flex justify-between items-center border-b-2 hover:bg-red-400 ">
            <button className="px-20 py-6 relative text-md font-semibold hover:text-white">
              <Link to="/frozen">Frozen</Link>
            </button>
          </div>
          <div className="absolute translate-y-[-60px]  px-3 py-[20px] rounded-r-full bg-red-300 shadow-lg shadow-red-800"></div>

          <div className="flex justify-between items-center border-b-2 hover:bg-red-400 ">
            <button className="px-20 py-6 relative text-md font-semibold hover:text-white">
              <Link to="/dairy">Dairy</Link>
            </button>
          </div>
          <div className="absolute translate-y-[-60px]  px-3 py-[20px] rounded-r-full bg-red-300 shadow-lg shadow-red-800"></div>
        </div>
      )}
    </>
  );
};

export default Topmenu;
