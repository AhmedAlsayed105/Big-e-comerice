import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function LinksSmallScreen() {
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
    <>
    {/* { useMediaQuery('(min-width:901px)') && (
            <>
            
            </>
          )
        } */}

        {/* Start NavBar Small screen */}
        { useMediaQuery('(max-width:900px)') && (
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
            <List className=" border-test ">
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text) => (
                  <ListItem
                    sx={{
                      "& .MuiTypography-root ": {
                        fontSize: "36px",
                        fontWeight: 400,
                      },
                      "& .MuiTypography-root:hover": {
                        color: "black",
                        fontWeight: 700,
                      },
                    }}
                    key={text}
                    disablePadding
                  >
                    <ListItemButton className="border-test">
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
          </Box>
        </>
      </Drawer>
          </>
          )
        }
        {/* End NavBar Small screen */}
    </>
  );
}
