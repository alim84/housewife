const PostItem = () => {
  return (
    <>
      <div className="container mx-auto bg-red-400">
        <h2 className="text-2xl text-white font-bold text-center py-12">
          POST YOUR ITEMS
        </h2>
        <div className="text-white text-lg  text-center">
          <level className="mr-6 font-bold">Poducts Name:</level>
          <input className="py-2 px-20 rounded-md" type="text"></input>
        </div>
        <div>
          <level>Poducts Price</level>
          <input type="text"></input>
        </div>
        <div>
          <level>Offer Price</level>
          <input type="text"></input>
        </div>
        <div>
          <level>Poducts Name</level>
          <input type="text"></input>
        </div>

        <div className=" relative mx-auto justify-center gap-20 mt-10 p-5 outline-gray-400 outline outline-3 w-[800px]">
          <div className="flex grid-cols-3 justify-between">
            <div className="py-3">
              <level className="text-yellow-200">বিভাগ :</level>
              <select
                className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                id="division"
                name="division"
              ></select>
            </div>
            <div className="py-3">
              <level className="text-yellow-200">জেলা :</level>
              <select
                className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                id="dist"
                name="dist"
              ></select>
            </div>

            <div className="py-3">
              <level className="text-yellow-200">উপজেলা :</level>
              <select
                className="rounded-lg ml-3 border-none hover:border-indigo-300 py-[2px] px-5"
                id="upzila"
                name="upzila"
              ></select>
            </div>
          </div>

          <div className="py-3 ">
            <h3 className=" absolute translate-y-[-10px] text-yellow-200 bg-cyan-900 ml-2 px-3 top-0 left-0">
              স্থায়ী ঠিকানা:{" "}
            </h3>
            <level className="text-yellow-200">পোস্ট অফিস :</level>
            <input
              className="py-2 px-10 rounded-md ml-32 border outline-1 hover:outline-indigo-600 "
              placeholder="পোস্ট অফিস "
              type="text"
              name="name"
            ></input>
          </div>
          <div className="py-3">
            <level className="text-yellow-200 i">গ্রাম/মহল্লা/ওয়ার্ড :</level>
            <input
              className="py-2 px-10 rounded-md ml-24 border outline-1 hover:outline-indigo-600 "
              placeholder="গ্রাম/মহল্লা/ওয়ার্ড "
              type="text"
              name="name"
            ></input>
          </div>
          <div className="py-3">
            <level className="text-yellow-200">রাস্তা নং :</level>
            <input
              className="py-2 px-10 rounded-md ml-40 border outline-1 hover:outline-indigo-600 "
              placeholder="রাস্তা নং"
              type="text"
              name="name"
            ></input>
          </div>
          <div className="py-3 ">
            <level className="text-yellow-200">বাড়ি নং :</level>
            <input
              className="py-2 px-10 rounded-md ml-40 border outline-1 hover:outline-indigo-600 "
              placeholder="বাড়ি"
              type="text"
              name="name"
            ></input>
          </div>
        </div>
        <level>আপলোড আইটেম</level>
        <input type="file"></input>
      </div>
    </>
  );
};

export default PostItem;
