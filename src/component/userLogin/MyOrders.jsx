import { FaUserTie } from "react-icons/fa6";

const MyOrders = () => {
  return (
    <>
      <div className="w-[1100px] ml-12 ">
        <div className="flex items-center px-5 py-6 mt-10 bg-gray-300">
          <div className="w-[50px] h-[50px] bg-red-300 rounded-full mr-3">
            <FaUserTie className="text-green-800 text-xl ml-[15px] mt-[10px]" />
          </div>
          <div>
            <h2 className="font-bold text-xl ">My Orders</h2>
            <p className="text-[12px]">Manage all your personal information</p>
          </div>
        </div>
        <div className=" w-[1100px] grid grid-cols-10 p-4">
          <div className="mr-1">
            <div className="bg-gray-100 py-2  mb-2 text-center font-semibold ">
              <h3>Invoice No</h3>
            </div>
            <p className="text-center">No</p>
          </div>
          <div className="mr-1">
            <div className="bg-gray-100 py-2 mb-2 text-center font-semibold">
              <h3>Items</h3>
            </div>
            <p className="text-center">No</p>
          </div>
          <div className="mr-1">
            <div className="bg-gray-100 py-2 mb-2 text-center font-semibold">
              <h3>Outlet</h3>
            </div>
            <p className="text-center">No</p>
          </div>
          <div className="mr-1">
            <div className="bg-gray-100 py-2 mb-2 text-center font-semibold">
              <h3>Status</h3>
            </div>
            <p className="text-center">No</p>
          </div>
          <div className="mr-1">
            <div className="bg-gray-100 py-2 mb-2 text-center font-semibold">
              <h3>Payment Status</h3>
            </div>
            <p className="text-center">No</p>
          </div>
          <div className="mr-1">
            <div className="bg-gray-100 py-2 mb-2 text-center font-semibold">
              <h3>Service Charge</h3>
            </div>
            <p className="text-center">No</p>
          </div>
          <div className="mr-1">
            <div className="bg-gray-100 py-2 mb-2 text-center font-semibold">
              <h3>Total</h3>
            </div>
            <p className="text-center">No</p>
          </div>
          <div className="mr-1">
            <div className="bg-gray-100 py-2 mb-2 text-center font-semibold">
              <h3>Sut</h3>
            </div>
            <p className="text-center">No</p>
          </div>
          <div className="mr-1">
            <div className="bg-gray-100 py-2 mb-2 text-center font-semibold">
              <h3>Action</h3>
            </div>
            <p className="text-center">No</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
