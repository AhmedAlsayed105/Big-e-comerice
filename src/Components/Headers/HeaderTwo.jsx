import Logo from "../../Image/Logo.png";
import { Box, IconButton, Badge, Stack } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import LinksSmallScreen from "./LinksSmallScreen";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchPage from './SearchPage'
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function HeaderTwo() {
  const cart = useSelector(state => state.cart)
  
  return (
    <nav className="my-5 container mx-auto ">
      {/* <Container> */}
      <Stack sx={{ padding:"10px"}} direction={"row"} justifyContent={"space-between"}  alignItems={"center"}>
{/* start Div green */}
          <div className="flex gap-10 items-center relative z-10">
            {/* <Box className="flex-1"> */}
          <Link to={"/"} >
                <img src={Logo} alt="logo" />
          </Link >
            {/* </Box> */}
            <Box className="flex items-center  gap-10" >
                {/* start part 765px to 900px  */}
              {useMediaQuery(" (min-width:765px) and (max-width:900px)") && (
                <Box className="relative z-10 cursor-pointer flex flex- items-center flex-row gap-10">
                  <Link to={"LogIn"}  className="flex flex- items-center flex-row gap-2 text-black ">
                    <PersonOutlineOutlinedIcon />
                    <p className="text-black font-thine">Login</p>
                  </Link>
                  <div className=" flex  items-center flex-row ">
                    <SearchPage/>
                  </div>
                </Box>
              )}
            {/*  end part 765px to 900px*/}
            </Box>
            {/*  start Link Big screen part 901px  */}
          {
        useMediaQuery("(min-width:901px)") && (
          <ul className=" flex gap-[10px] cursor-pointer relative z-10" >
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"about"}>About</NavLink>
          <NavLink to={"shop"}>Shop</NavLink>
          <NavLink to={"blog"}>Blog</NavLink>
          <NavLink to={"contact"}>Contact</NavLink>
          </ul>
          )
          }
          {/*  End Link Big screen part 901px  */}
          </div>
{/* end div green */}
<div className="flex">
              {
                useMediaQuery("(min-width:901px)") &&
                (
                  <Box className=" relative z-10 cursor-pointer flex flex- items-center flex-row gap-10">
                  <Link to={"LogIn"}  className=" flex flex- items-center flex-row gap-2 text-black ">
                    <PersonOutlineOutlinedIcon />
                    <p className="text-black font-thine">Login</p>
                  </Link>
                  <div className=" flex  items-center flex-row ">
                    <SearchPage/>
                  </div>
                </Box>
                )
              }

               {/* START Card  901px to BagScreen */}
               {useMediaQuery("(min-width:901px)") &&
              (
                <IconButton aria-label="cart">
                <Badge badgeContent={cart.length} color="primary">
                  <Link to={"pageCart"}><ShoppingCartIcon/></Link>
                </Badge>
              </IconButton>
              )
              }
               {/* END Card  901px to BagScreen */}
  
</div>


            {/* start Page Links smallScreen */}
            {useMediaQuery("(max-width:900px)") && <LinksSmallScreen />}
            {/* End Page Links smallScreen */}
        
        </Stack>
      {/* </Container> */}
    </nav>
  );
}


