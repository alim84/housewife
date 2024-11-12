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
        <div className="flex justify-between">
          <div className="w-[200px] text-pretty">
            <h2>IN A BRIEF</h2>
            <p>
              Khaas food is an innovative agri-tech startup based in Bangladesh
              with the vision to create a future where safe agro food is the
              standard, not the exception. We envision and inspire positive
              impact in the world where every individual has access to
              responsibly sourced, safe and nutritious products at its
              originality that support their health and the health of the
              environment.
            </p>
            <div>
              <h3>Head office:</h3>
              <p>
                Floor- 8, 15/1-15/2, Biswas Shawpnil, Jigatala, Dhaka 1209
                khaasfood@gmail.com
              </p>
            </div>
          </div>
          <div>
            <h2>CONTACT US</h2>
            <p>
              09612002255 01708183874 (WhatsApp Only) customercare@khaasfood.com
              Corporate Sales & Retailer Only
            </p>
          </div>
          <div>
            <h2>JOIN OUR COMMUNITY</h2>
            <p> Official FB Group</p>
            <h2>VISIT OUR SHOP</h2>
            <p> Official FB Group</p>
            <h2>DOWNLOAD OUR APP</h2>
            <p> Official FB Group</p>
          </div>
          <div>
            <h2>USEFUL LINKS</h2>
            <ul>
              <li>Privacy Policy </li>
              <li>Delivery Policy </li>
              <li>Refund Policy</li>
              <li>Corporate Deal</li>
              <li>FAQs </li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Our Blog </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
