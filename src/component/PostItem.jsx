import divisionss from "../json/Division.json";
import districtss from "../json/Districts.json";
import upzilass from "../json/Upazias.json";
import { useEffect, useState } from "react";

const PostItem = () => {
  let [divisions, setDivisions] = useState([]);
  let [districts, setDistricts] = useState([]);
  let [upzilas, setUpzila] = useState([]);

  let handleDivision = (e) => {
    setDivisions(e.target.value);
  };

  let handleDistrict = (e) => {
    setDistricts(e.target.value);
  };
  let handleUpazila = (e) => {
    setUpzila(e.target.value);
  };
  useEffect(() => {
    setDivisions(divisionss);
  }, []);
  useEffect(() => {
    setDistricts(districtss);
  }, []);
  useEffect(() => {
    setUpzila(upzilass);
  }, []);

  return (
    <>
      <div className="container mx-auto bg-red-400 shadow-lg shadow-gray-500">
        <h2 className="text-2xl text-white font-bold text-center py-12">
          POST YOUR ITEMS
          <hr />
        </h2>
        <div className="text-justify ">
          <div className=" text-lg grid grid-cols-4 ml-20">
            <level className="font-bold text-white ">Poducts Name :</level>
            <input
              className="my-4 py-2 px-2 rounded-md focus:outline-none focus:ring focus:border-green-800"
              type="text"
            ></input>
          </div>
          <div className="text-lg grid grid-cols-4 ml-20 ">
            <level className="mr-6 font-bold text-white">Poducts Price :</level>
            <input
              className="my-4 py-2 px-2 rounded-md focus:outline-none focus:ring focus:border-green-800"
              type="text"
            ></input>
          </div>
          <div className=" text-lg grid grid-cols-4 ml-20 ">
            <level className="mr-6 font-bold text-white">Category :</level>
            <input
              className="my-4 py-2 px-2 rounded-md focus:outline-none focus:ring focus:border-green-800 "
              type="text"
            ></input>
          </div>
          <div className=" text-lg grid grid-cols-4 ml-20 ">
            <level className="mr-6 font-bold text-white">Quantity :</level>
            <input
              className="my-4 py-2 px-2 rounded-md focus:outline-none focus:ring focus:border-green-800"
              type="number"
            ></input>
          </div>
          <div className=" text-lg grid grid-cols-4 ml-20 ">
            <level className="mr-6 font-bold text-white">Brand :</level>
            <input
              className="my-4 py-2 px-2 rounded-md focus:outline-none focus:ring focus:border-green-800"
              type="text"
            ></input>
          </div>
          <div className=" text-lg grid grid-cols-4 ml-20">
            <level className="mr-6 font-bold text-white">Rating :</level>
            <input
              className="my-4 py-2 px-2 rounded-md focus:outline-none focus:ring focus:border-green-800"
              type="text"
            ></input>
          </div>
          <div className=" text-lg  grid grid-cols-4 ml-20">
            <level className="mr-6 font-bold text-white">Offer Price :</level>
            <input
              className="my-4 py-2 px-2 rounded-md focus:outline-none focus:ring focus:border-green-800"
              type="text"
            ></input>
          </div>
          <div className=" text-lg grid grid-cols-4 ml-20">
            <level className="my-4 font-bold text-white mr-4">
              Poducts Details :
            </level>
            <textarea
              className=" py-4 px-2  rounded-md focus:outline-none focus:ring focus:border-green-800"
              type="text"
            ></textarea>
          </div>
          <hr className="m-10" />
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
          <div className=" text-lg grid grid-cols-4 ml-20">
            <level className="my-4 font-bold text-white mr-4">Address :</level>
            <textarea
              className=" py-4 px-2  rounded-md focus:outline-none focus:ring focus:border-green-800"
              type="text"
            ></textarea>
          </div>
        </div>

        <div className=" relative mx-auto gap-20 mt-10 p-5 outline-gray-400 outline outline-3 w-[1000px]">
          <div className="grid grid-cols-3 gap-4">
            <div className="py-3">
              <level className="text-white font-semibold">বিভাগ:</level>
              <select
                className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                id="division"
                name="division"
                onChange={handleDivision}
              >
                {divisions.map((item) => (
                  <option key={item} value={item.division_name}>
                    {item.division_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="py-3">
              <level className="text-white font-semibold">জেলা:</level>
              <select
                className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                id="dist"
                name="dist"
                onChange={handleDistrict}
              >
                {districts.map((item) => (
                  <option key={item} value={item.district_name}>
                    {item.district_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="py-3">
              <level className="text-white font-semibold">উপজেলা:</level>
              <select
                className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                id="upzila"
                name="upzila"
                onChange={handleUpazila}
              >
                {upzilas.map((item) => (
                  <option key={item} value={item.upazila_name}>
                    {item.upazila_name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="py-3 ">
            <h3 className=" absolute translate-y-[-14px] text-yellow-200 bg-red-400 rounded-lg ml-2 px-3 top-0 left-0">
              ঠিকানা:{" "}
            </h3>
            <level className="text-white font-semibold">পোস্ট অফিস :</level>
            <input
              className="py-2 px-10 rounded-md ml-28 pl-1 border outline-1 hover:outline-indigo-600 focus:outline-none focus:ring focus:border-green-800 "
              placeholder="পোস্ট অফিস "
              type="text"
              name="name"
            ></input>
          </div>
          <div className="py-3">
            <level className="text-white font-semibold">
              গ্রাম/মহল্লা/ওয়ার্ড :
            </level>
            <input
              className="py-2 px-10 rounded-md ml-24 pl-1 border outline-1 hover:outline-indigo-600  focus:outline-none focus:ring focus:border-green-800"
              placeholder="গ্রাম/মহল্লা/ওয়ার্ড "
              type="text"
              name="name"
            ></input>
          </div>
          <div className="py-3">
            <level className="text-white font-semibold">রাস্তা নং :</level>
            <input
              className="py-2 px-10 rounded-md ml-40 border pl-1 outline-1 hover:outline-indigo-600 focus:outline-none focus:ring focus:border-green-800 "
              placeholder="রাস্তা নং"
              type="text"
              name="name"
            ></input>
          </div>
          <div className="py-3 ">
            <level className="text-white font-semibold">বাড়ি নং :</level>
            <input
              className="py-2 px-10 rounded-md ml-40  pl-1 border outline-1 hover:outline-indigo-600 focus:outline-none focus:ring focus:border-green-800 "
              placeholder="বাড়ি"
              type="text"
              name="name"
            ></input>
          </div>
        </div>
        <div className="text-center text-white font-bold">
          <level className="px-4">আপলোড আইটেমের ছবি</level>
          <input className="py-6 text-center  mb-[50px]" type="file"></input>
        </div>
        <div className="pb-20">
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

export default PostItem;
