import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const OpinionForm = () => {
  return (
    <>
      <div className="container mx-auto bg-red-400 shadow-lg shadow-gray-500">
        <div className="bg-black">
          {" "}
          <Link to="/">
            {" "}
            <RiArrowGoBackLine className="absolate w-[25px] h-[25px] bg-white rounded-r-full text-red-500 text-2xl translate-x-[-5px]  translate-y-10" />{" "}
          </Link>
        </div>
        <h2 className="text-2xl text-white font-bold text-center py-12">
          Opinion
          <hr />
        </h2>
        <div className="text-justify ">
          <div className=" text-lg  grid grid-cols-4 ml-20">
            <level className="mr-6 font-bold text-white">Full Name :</level>
            <input
              className="my-4 py-2 px-2 rounded-md focus:outline-none focus:ring focus:border-green-800"
              type="text"
            ></input>
          </div>
          <div className=" text-lg  grid grid-cols-4 ml-20">
            <level className="mr-6 font-bold text-white">Mobile No. :</level>
            <input
              className="my-4 py-2 px-2 rounded-md focus:outline-none focus:ring focus:border-green-800"
              type="text"
            ></input>
          </div>
          <div className=" text-lg  grid grid-cols-4 ml-20">
            <level className="mr-6 font-bold text-white">Product Name :</level>
            <input
              className="my-4 py-2 px-2 rounded-md focus:outline-none focus:ring focus:border-green-800"
              type="text"
            ></input>
          </div>
          <div className=" text-lg grid grid-cols-4 ml-20">
            <level className="my-4 font-bold text-white mr-4">
              Opinion/Problem/Solution :
            </level>
            <textarea
              className=" py-4 px-2  rounded-md focus:outline-none focus:ring focus:border-green-800"
              type="text"
            ></textarea>
          </div>
        </div>

        <div className="pb-20 mt-20">
          <button
            className="flex mx-auto py-3 px-32  bg-white rounded-md text-red-500 font-bold hover:bg-green-800 "
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default OpinionForm;
