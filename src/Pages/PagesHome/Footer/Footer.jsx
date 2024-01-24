import { Grid, Typography } from "@mui/material";
import Logo from "../../../Image/Logo.png"
import { Link, NavLink } from "react-router-dom";


export default function Footer() {
    // <Grid container >  rowSpacing={8} columnSpacing={2}
    return (
        <Grid container columnSpacing={2}>
            <Grid item xs={12} md={12} lg={2} marginBottom={"20px"}>
                <img src={Logo} alt="Logo" />
            </Grid>

            <Grid item xs={12} md={6} lg={2}>
                <Typography sx={{ marginBottom: "10px", fontWeight: "700" }} variant="h5" component="h2" >
                    Visit Link
                </Typography>
                <ul className="text-[#70798B] text-[19px] flex flex-col gap-2">
                    <NavLink to={"shop"}>Shop</NavLink>
                    <li>Privacy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
                <Typography sx={{ marginBottom: "10px", fontWeight: "700" }} variant="h5" component="h2" >
                    Company
                </Typography>
                <ul className="text-[#70798B] text-[19px] flex flex-col gap-2 mb-2">
                    <Link to={"/"}>Home</Link>
                    <NavLink to={"about"}>About Us</NavLink>
                    <NavLink to={"contact"}>Contact Us</NavLink>
                </ul>
            </Grid>


            <Grid item xs={12} md={6} lg={3}>
                <Typography sx={{ marginBottom: "10px", fontWeight: "700" }} variant="h5" component="h2" >
                    Contact
                </Typography>
                <ul className="text-[#70798B] text-[19px] flex flex-col gap-2">
                    <NavLink to={"http://wa.me/+2001119561901"}>01119561901</NavLink>
                    <li>AhmedAlsayedIssa@gmail.com</li>
                </ul>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <Typography sx={{ marginBottom: "10px", fontWeight: "700" }} variant="h5" component="h2" >
                    Address
                </Typography>
                <ul className="text-[#70798B] text-[19px] flex flex-col gap-2">
                    <li>Patricia Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051</li>
                </ul>
            </Grid>

        </Grid>
    )
}
// https://www.linkedin.com/in/ahmed-alsayed-issa

