import React, { useState } from "react";

const ProductDetails = () => {
  let [Viewitem, setViewitem] = useState(false);
  const [counter, setCounter] = useState(0);


  return (
    <div>
      {Viewitem && (
        <div className="absolute translate-x-[50%] translate-y-[-50%] bg-red-200 w-[800px] h-[500px] p-6 grid grid-cols-2 items-center z-40">
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
              <div className="flex items-center ">
                <button
                  className="px-2  bg-green-800 rounded-lg mr-2  text-white"
                  onClick={() => setCounter(counter + 1)}
                >
                  +
                </button>
                {/* <button onClick={handleReset}>Reset</button> */}
                <p> {counter}</p>
                <button
                  className="px-2  bg-red-800 rounded-lg mr-2  text-white ml-2"
                  onClick={() => setCounter(counter - 1)}
                >
                  -
                </button>
              </div>
              <button className="flex mx-auto py-3 px-7 text-white font-bold bg-red-400 hover:text-red-500 hover:bg-red-300 hover:font-bold ">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
