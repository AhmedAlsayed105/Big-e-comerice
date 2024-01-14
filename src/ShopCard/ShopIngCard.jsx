import Button from '@mui/material/Button';
import { useState } from 'react';
import { IconButton, Box, Stack, Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import photos from "./../Image/handfry.png";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ShopIngCard() {
  const [count, setCount] = useState(1);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const media = useMediaQuery('(max-width: 780px)')



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
    <div className="">
      {/* Start Card On small screen */}

      {/* {useMediaQuery('(max-width:900px)') && ( */}
      <>
        <IconButton aria-label="cart" onClick={toggleDrawer("right", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          sx={{
            ".MuiPaper-elevation": {
            
              height: "fit-content",
              maxWidth: "1000px",
              top: "190px",
              margin:"0 5% "

            },
            width: "fit-content",

          }}
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)} // false
        >
          <>
            <IconButton
              sx={{
                ":hover": { rotate: "180deg", transition: "0.3s ", color: "red" },
                position: "absolute",
                right: 10,
                top: 8,
              }}
              onClick={toggleDrawer("right", false)} // false
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="border-test"
              role="presentation"
              onKeyDown={toggleDrawer("left", false)}
            >
              {/* Start Her  */}
              <Stack flexDirection={`${media ? "column" : "row"}`}>

                <Box className="border-test grow">
                  {/* slider */}
                  
                  <img src={photos} className='max-w-[400px] max-h-[300px]' />
                  


                  {/* slider */}
                </Box>
                <Box className="border-test">
                  <Typography variant="p" component="h2">
                    Momentum Phone
                  </Typography>
                  <Typography>
                    350$
                  </Typography>
                  <Typography>
                    This NoiseStorm font is inspired by Classic Retro and Vintage apparel, headlines, signage, logo, quote, apparel and other creative applications.
                  </Typography>
                <Box
                  // sx={{
                  //   color: 'action.active',
                  //   display: 'flex',
                  //   flexDirection: 'column',
                  //   '& > *': {
                  //     marginBottom: 2,
                  //   },
                  //   '& .MuiBadge-root': {
                  //     marginRight: 4,
                  //   },
                  // }}
                >

                  <div>
                    <ButtonGroup>
                      <Button
                        aria-label="reduce"
                        onClick={() => {
                          setCount(Math.max(count - 1, 0));
                        }}
                      >
                        <RemoveIcon fontSize="small" />
                      </Button>
                      <h1>{count}</h1>
                      <Button
                        aria-label="increase"
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      >
                        <AddIcon fontSize="small" />
                      </Button>
                    </ButtonGroup>
                  </div>


                  </Box>
                </Box>
              </Stack>



              {/* Start Her  */}

              <Divider />
            </Box>
          </>
        </Drawer>
      </>
      {/* ) */}
      {/* } */}

      {/* End NavBar Small screen */}
    </div>
  );

}
