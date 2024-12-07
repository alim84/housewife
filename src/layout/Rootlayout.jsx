
import { Outlet } from "react-router-dom";

import Topmenu from "../component/Topmenu";
import Footer from "../component/Footer";

const Rootlayout = () => {
  return (
  

      <div >
      <Topmenu />
        <Outlet />
        <Footer/>
      </div>
  
  );
};

export default Rootlayout;