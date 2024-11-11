import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto bg-green-900 py-10 px-20">
        <hr></hr>
        <h2 className="text-3xl font-bold  text-center text-white py-4 underline">
          গৃহিনী
        </h2>
        <div className=" flex justify-center gap-6 text-2xl text-white">
          <CiFacebook />
          <FaYoutube />
          <FaLinkedin />
          <FaXTwitter />
        </div>
      </div>
    </>
  );
};

export default Footer;
