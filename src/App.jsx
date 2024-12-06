import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Registration from "./component/Registration";
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
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/PostItem" element={<PostItem />}></Route>

      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="/cake" element={<Cake />}></Route>
        <Route path="/dailyfood" element={<DailyFood />}></Route>
        <Route path="/dairy" element={<Dairy />}></Route>
        <Route path="/fish" element={<Fish />}></Route>
        <Route path="/foods" element={<Foods />}></Route>
        <Route path="/frozen" element={<Frozen />}></Route>
        <Route path="/fruits" element={<Fruits />}></Route>
        <Route path="/grocery" element={<Grocery />}></Route>
        <Route path="/household" element={<HouseHold />}></Route>
        <Route path="/meat" element={<Meat />}></Route>
        <Route path="/oilitem" element={<OilItem />}></Route>
        <Route path="/personalcare" element={<PersonalCare />}></Route>
        <Route path="/stationery" element={<Stationery />}></Route>
        <Route path="/vegetables" element={<Vegetables />}></Route>
        <Route path="/userdashboard" element={<UserDashboard />}></Route>
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
