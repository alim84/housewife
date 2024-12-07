import { Outlet } from "react-router-dom";
import Topmenu from "../component/Topmenu";
import Footer from "../component/Footer";
import Profile from "../component/userLogin/Profile";


const userlayout = () => {
    return (
        <div>
            <Topmenu />
            <Profile/>

        <Outlet />
        <Footer/>
        </div>
    );
};

export default userlayout;