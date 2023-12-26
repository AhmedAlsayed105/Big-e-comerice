import { Outlet } from "react-router-dom";
import HeaderOne from "../../Components/Headers/HeaderOne";
import HeaderTwo from "../../Components/Headers/HeaderTwo";


export default function LayoutMain() {
    return (
        <>
            <HeaderOne />
            <HeaderTwo />
            <Outlet />
        </>
    )
}
