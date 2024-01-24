
import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";
import Home from "../Pages/PagesHome/Home";
import About from "../Pages/About/About";
import Shop from "../Pages/Shop";
import Blog from "../Pages/Blog";
import Content from "../Pages/Content";
import LayoutMain from "./LayoutRoute/LayoutMain";

// You can do this:
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutMain/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="contact" element={<Content/>} />
      </Route>
    )
  );

export default router