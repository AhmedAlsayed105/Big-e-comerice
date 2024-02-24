import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Box, IconButton, Badge } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from '@mui/material/useMediaQuery';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
import CartMinScreen from "../../Pages/PagesHome/shop/CartMinScreen";

export default function LinksSmallScreen() {
  const cart = useSelector(state => state.cart)

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  return (
    <div>
      {/* Start Card On small screen */}
      {/* <IconButton aria-label="cart"> */}
        <Badge  
        sx={{".MuiBadge-badge":{
           position: "absolute",
          top: "2px",
          right: "15px"
        }}}
        badgeContent={cart.length} color="primary">
          {/* <ShoppingCartIcon/> */}
          <CartMinScreen/>
        </Badge>
      {/* </IconButton> */}
      {/* Start Card On small screen */}

      {/* Start NavBar Small screen */}

      {useMediaQuery('(max-width:900px)') && (
        <>
          <IconButton aria-label="cart" onClick={toggleDrawer("top", true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
          >
            <>
              <IconButton
                sx={{
                  ":hover": { rotate: "180deg", transition: "0.3s ", color: "red" },
                  position: "absolute",
                  right: 10,
                  top: 8,
                }}
                onClick={toggleDrawer("top", false)}
              >
                <CloseIcon />
              </IconButton>
              <Box
                sx={{
                  width: "100%",
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                role="presentation"
                onKeyDown={toggleDrawer("top", false)}
              >
                <List className=" ">
                    <ul  
                    className="flex flex-col text-[36px] font-normal "
                    onClick={toggleDrawer("top", false)}
                    >
                      <NavLink to={"/"}>Home</NavLink>
                      <NavLink to={"about"}>About</NavLink>
                      <NavLink to={"shop"}>Shop</NavLink>
                      <NavLink to={"blog"}>Blog</NavLink>
                      <NavLink to={"contact"}>Contact</NavLink>
                    </ul>
                </List>

                <Divider />
              </Box>
            </>
          </Drawer>
        </>
      )
      }

      {/* End NavBar Small screen */}
    </div>
  );
}