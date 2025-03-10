import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const DailyFood = () => {
  let [Viewitem, setViewitem] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,

    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="py-4">
        <div className="container mx-auto  ">
          <div className="bg-red-300 py-5">
            <h1 className="px-4 text-2xl  text-gray-700">Daily Food</h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto justify-center items-center slider-container">
        <Slider {...settings}>
          <div>
            <div className="container mx-auto justify-center items-center">
              <div className="w-[255px] h-[350px] bg-red-100 shadow-md shadow-red-300 hover:border-2  hover:border-green-500 ">
                <div className="p-5">
                  <img
                    className="w-[200px] h-[150px] rounded-md mb-5"
                    src="Cake-1.jpg"
                    alt=""
                  />
                  <button>
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
            </div>
          </div>

          <div>
            <div className="container mx-auto justify-center items-center">
              <div className="w-[255px] h-[350px] bg-red-100 shadow-md shadow-red-300 hover:border-2  hover:border-green-500 ">
                <div className="p-5">
                  <img
                    className="w-[200px] h-[150px] rounded-md mb-5"
                    src="Cake-1.jpg"
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
                  <Link to="/cart">
                    <button className="relative flex mx-auto py-3 px-7 text-white font-bold bg-red-400 hover:text-red-500 hover:bg-red-300 hover:font-bold  ">
                      ADD TO CART
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default DailyFood;
