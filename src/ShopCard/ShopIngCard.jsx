import Button from '@mui/material/Button';
import { useState } from 'react';
import { IconButton, Box, Stack, Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/swiper.css';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

import log from '../Image/Camer.png'




// eslint-disable-next-line react/prop-types
export default function ShopIngCard({ClickIconOnOpen}) {
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
        <IconButton aria-label="cart" onClick={toggleDrawer("right", true)}>
        {ClickIconOnOpen}
        </IconButton>
        <Drawer
          sx={{
            ".MuiPaper-elevation": {
              position: "sticky",
              top: "calc((100% - 570px)/2) !important",
              display:"block",
              margin:"0 auto",
              width: "100%",
              height: "570px",
              maxWidth: "1000px",
              border: "none",
              padding: "0",
              borderRadius:"39px",
            },
            // width: "fit-content",

          }}
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", true)} // trueNoCLose  onclose false
        >
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
          <div className=' '>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className=" container p-5"
              role="presentation"
              onKeyDown={toggleDrawer("left", true)}
            >
              {/* Start Her  */}
              <Stack justifyContent={'center'} flexDirection={`${media ? "column" : "row"}`}>

                <Box className="">
                  {/* slider */}
                  <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="max-w-[300px]  sm:max-w-[500px] "
      >
        <SwiperSlide>
        <img src={log} className='max-w-[300px] max-h-[300px]  p-1 border '  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={log} className='max-w-[300px] max-h-[300px]  p-1 border '  />
        </SwiperSlide>
      </Swiper>
                  {/* slider */}
                </Box>
                <Box className=" flex flex-col gap-3">
                  <p className='font-extrabold text-[30px] sm:text-[35px]'>
                    Momentum Phone
                  </p>
                  <Typography className="text-[#70798B] " variant="h4" component="h4">
                    $350
                  </Typography>
                  <Typography className="text-[#70798B] " variant="h6" component="h6">
                    This NoiseStorm font is inspired by Classic Retro and Vintage apparel, headlines, signage, logo, quote, apparel and other creative applications.
                  </Typography>
                <Box
                >
                  <div className='my-2  flex flex-row gap-5'>
                    <ButtonGroup sx={{borderRadius:"999px"}} className='bg-[#E7E7E7] p-3 flex flex-row gap-2 items-center'>
                      <Button
                        aria-label="reduce"
                        onClick={() => {
                          setCount(Math.max(count - 1, 0));
                        }}
                        variant="black"
                      >
                        <RemoveIcon  fontSize="small" />
                      </Button>
                      <p className='text-[20px] '>{count}</p>
                      <Button
                        variant="black"
                        aria-label="increase"
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      >
                        <AddIcon fontSize="small" />
                      </Button>
                    </ButtonGroup>
                    <button className='bg-[#1723BD] hover:bg-[#3c47df] w-[150px]  p-6 text-white rounded-full'>Add To Cart</button>
                  </div>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </div>
        </Drawer>
    </div>
  );

}
