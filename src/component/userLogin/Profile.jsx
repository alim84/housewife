import { Link } from "react-router-dom";
// import { FaCartShopping } from "react-icons/fa6";
import { Outlet } from "react-router-dom";




const Profile = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-4 justify-between mt-10 ">
        <div>
          <div className="  ">
            <h2 className="font-bold text-2xl text-center mt-5">
              Profile Name
            </h2>
            <div className="flex justify-center ">
              <img
                className="w-[120px] h-[150px] rounded-full mt-5 "
                src="/public/Cake-1.jpg"
              ></img>
            </div>
          </div>
          <div>
            <div className="py-3 bg-red-400 pl-2 shadow-md shadow-gray-200 mt-5">
              {" "}
              <h2 className="text-xl font-semibold text-white">Dashboard</h2>
            </div>
            <div className="flex  items-center mt-5 ">
              <div className="w-[20px] h-[20px] bg-red-400 rounded-r-full"></div>
              <div>
                <Link
                  to="/profile/personalinfo"
                  className="block text-md font-semibold pl-4 p-2 hover:font-bold hover:text-red-300"
                >
                  {" "}
                  Personal Info
                </Link>
              </div>
            </div>
            <div className="flex  items-center mt-5 ">
              <div className="w-[20px] h-[20px] bg-red-400 rounded-r-full"></div>
              <div>
                <Link
                  to="/profile/myorders"
                  className="block text-md font-semibold pl-4 p-2 hover:font-bold hover:text-red-300"
                >
                  {" "}
                  Order
                </Link>
              </div>
            </div>
            <div className="flex  items-center mt-5 ">
              <div className="w-[20px] h-[20px] bg-red-400 rounded-r-full"></div>
              <div>
                <Link
                  to
                  className="block text-md font-semibold pl-4 p-2 hover:font-bold hover:text-red-300"
                >
                  {" "}
                  Address
                </Link>
              </div>
            </div>
            <div className="flex  items-center mt-5 ">
              <div className="w-[20px] h-[20px] bg-red-400 rounded-r-full"></div>
              <div>
                <Link
                  to
                  className="block text-md font-semibold pl-4 p-2 hover:font-bold hover:text-red-300"
                >
                  {" "}
                  Wishlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      <div>
      
        <Outlet/>
      </div>
      </div>
    </>
  );
};

export default Profile;
