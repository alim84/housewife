import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Topmenu from "./pages/Topmenu";
import Registration from "./pages/Registration";
import PostItem from "./component/PostItem";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/topmenu" element={<Topmenu />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/postitem" element={<PostItem />}></Route>
    

    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;