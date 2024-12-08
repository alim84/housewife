import { FaCartShopping } from "react-icons/fa6";

const UserDashboard = () => {
  return (
    <>
      <div className="w-[1300px] ml-12 grid grid-cols-4 justify-between mt-10 ">
        <div className="gap-5">
          <div className="flex gap-5 justify-between items-center w-[350px] m-4 h-[150px] bg-red-50 shadow-xl shadow-gray-100 border-2 border-blue-100 rounded-lg">
            <div className="py-5 px-5">
              <h3 className="text-xl font-bold m-2">Coun</h3>
              <h4 className="text-xl font-bold m-2 text-gray-400">
                Total Order
              </h4>
            </div>
            <div className="w-[50px] h-[50px] rounded-full mr-10 bg-red-500 border-4 border-white shadow-md shadow-gray-200">
              <FaCartShopping className="mt-2 ml-2  text-3xl text-white" />
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center w-[350px] m-4  h-[150px] bg-red-50 shadow-xl shadow-gray-100 border-2 border-blue-100 rounded-lg">
            <div className="py-5 px-5">
              <h3 className="text-xl font-bold m-2">Coun</h3>
              <h4 className="text-xl font-bold m-2 text-gray-400">
                Cancel Order
              </h4>
            </div>
            <div className="w-[50px] h-[50px] rounded-full mr-10 bg-red-500 border-4 border-white shadow-md shadow-gray-200">
              <FaCartShopping className="mt-2 ml-2  text-3xl text-white" />
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center w-[350px] m-4  h-[150px] bg-red-50 shadow-xl shadow-gray-100 border-2 border-blue-100 rounded-lg">
            <div className="py-5 px-5">
              <h3 className="text-xl font-bold m-2">Coun</h3>
              <h4 className="text-xl font-bold m-2 text-gray-400">
                Total Point
              </h4>
            </div>
            <div className="w-[50px] h-[50px] rounded-full mr-10 bg-red-500 border-4 border-white shadow-md shadow-gray-200">
              <FaCartShopping className="mt-2 ml-2  text-3xl text-white" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5 justify-between items-center w-[350px] m-4  h-[150px] bg-red-50 shadow-xl shadow-gray-100 border-2 border-blue-100 rounded-lg">
            <div className="py-5 px-5">
              <h3 className="text-xl font-bold m-2">Coun</h3>
              <h4 className="text-xl font-bold m-2 text-gray-400">
                Today Order
              </h4>
            </div>
            <div className="w-[50px] h-[50px] rounded-full mr-10 bg-red-500 border-4 border-white shadow-md shadow-gray-200">
              <FaCartShopping className="mt-2 ml-2  text-3xl text-white" />
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center w-[350px] m-4  h-[150px] bg-red-50 shadow-xl shadow-gray-100 border-2 border-blue-100 rounded-lg">
            <div className="py-5 px-5">
              <h3 className="text-xl font-bold m-2">Coun</h3>
              <h4 className="text-xl font-bold m-2 text-gray-400">
                Cancel Amount
              </h4>
            </div>
            <div className="w-[50px] h-[50px] rounded-full mr-10 bg-red-500 border-4 border-white shadow-md shadow-gray-200">
              <FaCartShopping className="mt-2 ml-2  text-3xl text-white" />
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center w-[350px] m-4  h-[150px] bg-red-50 shadow-xl shadow-gray-100 border-2 border-blue-100 rounded-lg">
            <div className="py-5 px-5">
              <h3 className="text-xl font-bold m-2">Coun</h3>
              <h4 className="text-xl font-bold m-2 text-gray-400">
                Total Review
              </h4>
            </div>
            <div className="w-[50px] h-[50px] rounded-full mr-10 bg-red-500 border-4 border-white shadow-md shadow-gray-200">
              <FaCartShopping className="mt-2 ml-2  text-3xl text-white" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5 justify-between items-center w-[350px] m-4  h-[150px] bg-red-50 shadow-xl shadow-gray-100 border-2 border-blue-100 rounded-lg">
            <div className="py-5 px-5">
              <h3 className="text-xl font-bold m-2">Coun</h3>
              <h4 className="text-xl font-bold m-2 text-gray-400">
                Total Spend
              </h4>
            </div>
            <div className="w-[50px] h-[50px] rounded-full mr-10 bg-red-500 border-4 border-white shadow-md shadow-gray-200">
              <FaCartShopping className="mt-2 ml-2  text-3xl text-white" />
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center w-[350px] m-4  h-[150px] bg-red-50 shadow-xl shadow-gray-100 border-2 border-blue-100 rounded-lg">
            <div className="py-5 px-5">
              <h3 className="text-xl font-bold m-2">Coun</h3>
              <h4 className="text-xl font-bold m-2 text-gray-400">
                Wishlisted
              </h4>
            </div>
            <div className="w-[50px] h-[50px] rounded-full mr-10 bg-red-500 border-4 border-white shadow-md shadow-gray-200">
              <FaCartShopping className="mt-2 ml-2  text-3xl text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
