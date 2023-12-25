import Logo from "../../Image/Logo.png";
import { Box, Container, IconButton, Badge, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useMediaQuery from "@mui/material/useMediaQuery";
import LinksSmallScreen from "./LinksSmallScreen";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchPage from './SearchPage'
export default function HeaderTwo() {
  return (
    <nav className="my-5">
      <Container>
        <Stack direction={"row"} justifyContent={"space-between"}  alignItems={"center"}>
          <div className="flex gap-10 ">
            <Box className="flex-1">
              <img src={Logo} alt="logo" />
            </Box>
            <Box className="flex items-center  gap-10">
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
            {/* start part 901px  */}
            {
                useMediaQuery("(min-width:901px)") && (
                
            <Box className=" flex gap-[10px] cursor-pointer" >
            <p>Home</p>
            <p>About</p>
            <p>Shop</p>
            <p>Blog</p>
            <p>Contact</p>
            </Box>
        )
        }
            {/* End part 901px to BagScreen */}
              <IconButton aria-label="cart">
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          </div>

          <div>
            {/* start Page Links smallScreen */}
            {useMediaQuery("(max-width:900px)") && <LinksSmallScreen />}
            {/* End Page Links smallScreen */}
          </div>
        </Stack>
      </Container>
    </nav>
  );
}
