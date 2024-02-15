
import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";
import Home from "../Pages/PagesHome/Home";
import About from "../Pages/About/About";
import Shop from "../Pages/Shop";
import Blog from "../Pages/Blog";
import Content from "../Pages/Content/Content";
import LayoutMain from "./LayoutRoute/LayoutMain";
import LogIn from "../Auth/LogIn";

// You can do this:
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutMain/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="contact" element={<Content/>} />
        <Route path="LogIn" element={<LogIn/>} />
      </Route>
    )
  );

export default router