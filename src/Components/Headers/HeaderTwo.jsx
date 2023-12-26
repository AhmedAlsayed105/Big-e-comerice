import Logo from "../../Image/Logo.png";
import { Box, Container, IconButton, Badge, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useMediaQuery from "@mui/material/useMediaQuery";
import LinksSmallScreen from "./LinksSmallScreen";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchPage from './SearchPage'
import { NavLink } from "react-router-dom";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
export default function HeaderTwo() {
  return (
    <nav className="my-5 ">
      <Container>
      <Stack sx={{background:"red" , padding:"10px"}} direction={"row"} justifyContent={"space-between"}  alignItems={"center"}>
{/* start Div green */}
          <div className="flex gap-10 items-center bg-green-500">
            {/* <Box className="flex-1"> */}
              <img src={Logo} alt="logo" />
            {/* </Box> */}
            <Box className="flex items-center  gap-10" >
                {/* start part 765px to 900px  */}
              {useMediaQuery(" (min-width:765px) and (max-width:900px)") && (
                <Box className="cursor-pointer flex flex- items-center flex-row gap-10">
                  <div className=" flex flex- items-center flex-row gap-2 text-black ">
                    <PersonOutlineOutlinedIcon />
                    <p className="text-black font-thine">Login</p>
                  </div>
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
          <ul className=" flex gap-[10px] cursor-pointer" >
          {/* <NavLink to={<Home/>}>Home</NavLink> */}
          {/* <NavLink to={<About/>}>About</NavLink> */}
          <NavLink>Shop</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Contact</NavLink>
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
                  <Box className="cursor-pointer flex flex- items-center flex-row gap-10">
                  <div className=" flex flex- items-center flex-row gap-2 text-black ">
                    <PersonOutlineOutlinedIcon />
                    <p className="text-black font-thine">Login</p>
                  </div>
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
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartIcon />
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
      </Container>
    </nav>
  );
}


