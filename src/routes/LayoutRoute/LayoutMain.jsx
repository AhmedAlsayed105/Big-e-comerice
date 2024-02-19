import { Outlet } from "react-router-dom";
import HeaderOne from "../../Components/Headers/HeaderOne";
import HeaderTwo from "../../Components/Headers/HeaderTwo";
import ScrollTop from "../../Components/ScrollTop";


export default function LayoutMain() {
    return (
        <>
            <HeaderOne />
            <HeaderTwo />
            <ScrollTop/>
            <Outlet />
        </>
    )
}
