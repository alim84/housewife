const PostItem = () => {
  return (
    <>
      <div className="container mx-auto bg-red-400">
        <h2 className="text-2xl text-white font-bold text-center py-12">
          POST YOUR ITEMS
          <hr />
        </h2>
        <div className="text-justify justify-between">
          <div className="text-white text-lg  text-center">
            <level className="mr-6 font-bold">Poducts Name :</level>
            <input className="my-4 py-2 px-20 rounded-md" type="text"></input>
          </div>
          <div className="text-white text-lg  text-center ">
            <level className="mr-6 font-bold">Poducts Price :</level>
            <input className="my-4 py-2 px-20 rounded-md" type="text"></input>
          </div>
          <div className="text-white text-lg  text-center">
            <level className="mr-6 font-bold">Offer Price :</level>
            <input className="my-4 py-2 px-20 rounded-md" type="text"></input>
          </div>
          <div className="text-white text-lg  text-center">
            <level className="mr-6 font-bold">Poducts Name :</level>
            <input className="my-4 py-2 px-20 rounded-md" type="text"></input>
          </div>
        </div>

        <div className=" relative mx-auto justify-center gap-20 mt-10 p-5 outline-gray-400 outline outline-3 w-[800px]">
          <div className="flex grid-cols-3 justify-between">
            <div className="py-3">
              <level className="text-white font-semibold">বিভাগ :</level>
              <select
                className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                id="division"
                name="division"
              ></select>
            </div>
            <div className="py-3">
              <level className="text-white font-semibold">জেলা :</level>
              <select
                className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                id="dist"
                name="dist"
              ></select>
            </div>

            <div className="py-3">
              <level className="text-white font-semibold">উপজেলা :</level>
              <select
                className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                id="upzila"
                name="upzila"
              ></select>
            </div>
          </div>

          <div className="py-3 ">
            <h3 className=" absolute translate-y-[-10px] text-yellow-200 bg-cyan-900 rounded-lg ml-2 px-3 top-0 left-0">
              স্থায়ী ঠিকানা:{" "}
            </h3>
            <level className="text-white font-semibold">পোস্ট অফিস :</level>
            <input
              className="py-2 px-10 rounded-md ml-32 border outline-1 hover:outline-indigo-600 "
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
              className="py-2 px-10 rounded-md ml-24 border outline-1 hover:outline-indigo-600 "
              placeholder="গ্রাম/মহল্লা/ওয়ার্ড "
              type="text"
              name="name"
            ></input>
          </div>
          <div className="py-3">
            <level className="text-white font-semibold">রাস্তা নং :</level>
            <input
              className="py-2 px-10 rounded-md ml-40 border outline-1 hover:outline-indigo-600 "
              placeholder="রাস্তা নং"
              type="text"
              name="name"
            ></input>
          </div>
          <div className="py-3 ">
            <level className="text-white font-semibold">বাড়ি নং :</level>
            <input
              className="py-2 px-10 rounded-md ml-40 border outline-1 hover:outline-indigo-600 "
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
            className="flex mx-auto py-3 px-32  bg-white rounded-md text-red-500 font-bold  "
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
