import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Foods = () => {

  
  let [Viewitem, setViewitem] = useState(false);
  return (
    <>
      <div className="container mx-auto mt-4 ">
        <div className="bg-red-300 py-5">
          <h1 className="px-4 text-2xl text-gray-700">Foods</h1>
        </div>
      </div>

      <div className="container flex mx-auto  gap-4 mt-4 ">
        <div className="w-[250px] h-[350px] bg-red-100 shadow-md shadow-red-300 hover:border-2  hover:border-green-500">
          <div className="p-5">
            <img
              className="w-[200px] h-[150px] rounded-md mb-5"
              src="Food-1.jpg"
              alt=""
            />
               <button onClick={() => setViewitem(!Viewitem)}>
              {" "}
              <CiSearch className="absolute translate-x-[200px] translate-y-[-180px]" />
            </button>
            <h2 className="text-lg text-center font-bold text-red-800 mb-4">
              Product Name
            </h2>
            <div className="flex gap-4 justify-center mb-4">
              <div className="w-[80px] h-[30px] bg-red-300 rounded-lg text-center font-bold pt-1">
                {" "}
                $ 200
              </div>
              <div className="w-[80px] h-[30px] bg-red-300 rounded-lg text-center font-bold pt-1">
                {" "}
                Offer 20%
              </div>
            </div>
            <button className="flex mx-auto py-3 px-7 text-white font-bold bg-red-400 hover:text-red-500 hover:bg-red-300 hover:font-bold  ">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="w-[250px] h-[350px] bg-red-100 shadow-md shadow-red-300 hover:border-2  hover:border-green-500 ">
          <div className="p-5">
            <img
              className="w-[200px] h-[150px] rounded-md mb-5"
              src="Food-2.jpg"
              alt=""
            />
            <h2 className="text-lg text-center font-bold text-red-800 mb-4">
              Product Name
            </h2>
            <div className="flex gap-4 justify-center mb-4">
              <div className="w-[80px] h-[30px] bg-red-300 rounded-lg text-center font-bold pt-1">
                {" "}
                $ 200
              </div>
              <div className="w-[80px] h-[30px] bg-red-300 rounded-lg text-center font-bold pt-1">
                {" "}
                Offer 20%
              </div>
            </div>
            <button className="flex mx-auto py-3 px-7 text-white font-bold bg-red-400 hover:text-red-500 hover:bg-red-300 hover:font-bold  ">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="w-[250px] h-[350px] bg-red-100 shadow-md shadow-red-300 hover:border-2  hover:border-green-500 ">
          <div className="p-5">
            <img
              className="w-[200px] h-[150px] rounded-md mb-5"
              src="Food-3.jpg"
              alt=""
            />
            <h2 className="text-lg text-center font-bold text-red-800 mb-4">
              Product Name
            </h2>
            <div className="flex gap-4 justify-center mb-4">
              <div className="w-[80px] h-[30px] bg-red-300 rounded-lg text-center font-bold pt-1">
                {" "}
                $ 200
              </div>
              <div className="w-[80px] h-[30px] bg-red-300 rounded-lg text-center font-bold pt-1">
                {" "}
                Offer 20%
              </div>
            </div>
            <button className="flex mx-auto py-3 px-7 text-white font-bold bg-red-400 hover:text-red-500 hover:bg-red-300 hover:font-bold">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="w-[250px] h-[350px] bg-red-100 shadow-md shadow-red-300 hover:border-2  hover:border-green-500">
          <div className="p-5">
            <img
              className="w-[200px] h-[150px] rounded-md mb-5"
              src="Food-6.jpg"
              alt=""
            />
            <h2 className="text-lg text-center font-bold text-red-800 mb-4">
              Product Name
            </h2>
            <div className="flex gap-4 justify-center mb-4">
              <div className="w-[80px] h-[30px] bg-red-300 rounded-lg text-center font-bold pt-1">
                {" "}
                $ 200
              </div>
              <div className="w-[80px] h-[30px] bg-red-300 rounded-lg text-center font-bold pt-1">
                {" "}
                Offer 20%
              </div>
            </div>
            <button className="flex mx-auto py-3 px-7 text-white font-bold bg-red-400 hover:text-red-500 hover:bg-red-300 hover:font-bold  ">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="w-[250px] h-[350px] bg-red-100 shadow-md shadow-red-300 hover:border-2  hover:border-green-500 ">
          <div className="p-5">
            <img
              className="w-[200px] h-[150px] rounded-md mb-5"
              src="Food-5.jpg"
              alt=""
            />
            <h2 className="text-lg text-center font-bold text-red-800 mb-4">
              Product Name
            </h2>
            <div className="flex gap-4 justify-center mb-4">
              <div className="w-[80px] h-[30px] bg-red-300 rounded-lg text-center font-bold pt-1">
                {" "}
                $ 200
              </div>
              <div className="w-[80px] h-[30px] bg-red-300 rounded-lg text-center font-bold pt-1">
                {" "}
                Offer 20%
              </div>
            </div>
            <button className="flex mx-auto py-3 px-7 text-white font-bold bg-red-400 hover:text-red-500 hover:bg-red-300 hover:font-bold  ">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="w-[250px] h-[350px] bg-red-100 shadow-md shadow-red-300  hover:border-2  hover:border-green-500">
          <div className="p-5">
            <img
              className="w-[200px] h-[150px] rounded-md mb-5"
              src="Food-4.jpg"
              alt=""
            />
            <h2 className="text-lg text-center font-bold text-red-800 mb-4">
              Product Name
            </h2>
            <div className="flex gap-4 justify-center mb-4">
              <div className="w-[80px] h-[30px] bg-red-300 rounded-lg text-center font-bold pt-1">
                {" "}
                $ 200
              </div>
              <div className="w-[80px] h-[30px] bg-red-300 rounded-lg text-center font-bold pt-1">
                {" "}
                Offer 20%
              </div>
            </div>
            <button className="flex mx-auto py-3 px-7 text-white font-bold bg-red-400 hover:text-red-500 hover:bg-red-300 hover:font-bold ">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

        
      {Viewitem && (
        <div className="absolute translate-x-[50%] translate-y-[-50%] bg-red-200 w-[800px] h-[500px] p-6 grid grid-cols-2 items-center">
          <button
            onClick={() => setViewitem(!Viewitem)}
            className="absolute translate-x-[760px] translate-y-[-220px] bg-red-500 px-3 rounded-full"
          >
            X
          </button>

          <div>
            <img
              className="w-[300px] h-[250px] rounded-md"
              src="images.jpg"
              alt=""
            />
          </div>
          <div className="">
            <h2 className="font-bold text-3xl mb-10">Product Name</h2>
            <p className="font-bold bg-sky-500 inline-block rounded-full mb-4 px-4">
              Price
            </p>
            <p>
              asjdf;dsajf;lkjdsaf;lkjdsafljfa asdfdsakjfldasjflkjdsaflkjdsafa
              asfdljaflakdsjfjdsajfasd ladskjfldajfadsjf
            </p>
            <div className="flex mt-10 items-center">
              <div className="font-bold ">count</div>
              <button className="flex mx-auto py-3 px-7 text-white font-bold bg-red-400 hover:text-red-500 hover:bg-red-300 hover:font-bold ">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Foods;
