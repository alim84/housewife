import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import PostItem from "./component/PostItem";
import Rootlayout from "./layout/Rootlayout";
import Home from "./pages/Home";
import Cake from "./pages/Cake";
import DailyFood from "./pages/DailyFood";
import Dairy from "./pages/Dairy";
import Fish from "./pages/Fish";
import Foods from "./pages/Foods";
import Frozen from "./pages/Frozen";
import Fruits from "./pages/Fruits";
import Grocery from "./pages/Grocery";
import HouseHold from "./pages/HouseHold";
import Meat from "./pages/Meat";
import OilItem from "./pages/OilItem";
import PersonalCare from "./pages/PersonalCare";
import Stationery from "./pages/Stationery";
import Vegetables from "./pages/Vegetables";
import UserDashboard from "./component/userLogin/UserDashboard";
import PersonalInfo from "./component/userLogin/PersonalInfo";
import MyOrders from "./component/userLogin/MyOrders";
import Profile from "./component/userLogin/Profile";
import Registration from "./component/Registration";
import OpinionForm from "./component/userLogin/OpinionForm";
import Offers from "./pages/Offers";
import HouseWife from "./pages/HouseWife";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/opinionform" element={<OpinionForm />} />
      <Route path="/postitem" element={<PostItem />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="cake" element={<Cake />} />
        <Route path="dailyfood" element={<DailyFood />} />
        <Route path="dairy" element={<Dairy />} />
        <Route path="fish" element={<Fish />} />
        <Route path="foods" element={<Foods />} />
        <Route path="frozen" element={<Frozen />} />
        <Route path="fruits" element={<Fruits />} />
        <Route path="grocery" element={<Grocery />} />
        <Route path="household" element={<HouseHold />} />
        <Route path="meat" element={<Meat />} />
        <Route path="oilitem" element={<OilItem />} />
        <Route path="personalcare" element={<PersonalCare />} />
        <Route path="stationery" element={<Stationery />} />
        <Route path="vegetables" element={<Vegetables />} />
        <Route path="offers" element={<Offers />} />
        <Route path="housewife" element={<HouseWife />} />

        {/* User Profile Routes */}
        <Route path="profile" element={<Profile />}>
          <Route index element={<UserDashboard />} />
          <Route path="personalinfo" element={<PersonalInfo />} />
          <Route path="myorders" element={<MyOrders />} />
        </Route>
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
