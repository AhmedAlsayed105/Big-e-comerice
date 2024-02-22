
import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";
import Home from "../Pages/PagesHome/Home";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog";
import Shop from "../Pages/PagesHome/shop/Shop";
import Content from "../Pages/Content/Content";
import LayoutMain from "./LayoutRoute/LayoutMain";
import LogIn from "../Auth/LogIn";
import CarCartPage from "../Pages/PagesHome/shop/CarCartPage";
import PageNotFound from "../PageNotFound/pageNotFound";

const isToken = true ;

const router = createBrowserRouter(
  
    createRoutesFromElements(
      <>
      <Route path="/" element={<LayoutMain/>}>
        <Route index element={isToken ? <Home/> : <LogIn/>} />
        <Route path="about" element={<About/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="pageCart" element={<CarCartPage/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="contact" element={<Content/>} />
        <Route path="LogIn" element={<LogIn/>} />
    </Route>
{/*  */}
        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );

export default router