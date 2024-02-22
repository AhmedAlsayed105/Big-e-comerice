/* eslint-disable react/prop-types */
import { useState } from 'react';
import { IconButton, Box, Stack, Typography } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/swiper.css';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { addProductToCart } from '../Redux/CartSlice';


// eslint-disable-next-line react/prop-types
export default function ShopIngCard({ClickIconOnOpen,data}) {
  const dispatch = useDispatch()
  const [checkProductToCard,setCheckProductToCard] =useState(0)
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
    const media = useMediaQuery('(max-width: 780px)')

  const HandelAddToCart = ()=>{
    dispatch(addProductToCart(data.data))
    setCheckProductToCard(prev => prev + 1)
    if(checkProductToCard >= 1) {
      swal({
        // title: "Good job!",
        text: "The product already exists😇",
        buttons: false,
        timer: 1000,
      });
    }else{
      swal({
        // title: "Good job!",
        text: "The product has been added successfully❤️",
        icon: "success",
        buttons: false,
        timer: 1500,
      });
    }
  }


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
                zIndex:100,
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
        className="max-w-[300px]  sm:max-w-[500px] cursor-pointer "
      >
        <SwiperSlide>

        <img src={data?.data.ImageOne} className='sm:max-w-[380px] max-w-[300px] max-h-[300px] sm:max-h-[380px]  p-1 border '  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={data?.data.ImageTwo} className='sm:max-w-[380px] max-w-[300px] max-h-[300px] sm:max-h-[380px]  p-1 border '  />
        </SwiperSlide>
      </Swiper>
                  {/* slider */}
                </Box>
                <Box className=" flex flex-col gap-3 justify-evenly">
                  <p className='font-extrabold text-[20px] sm:text-[35px]'>
                    {data?.data.name}
                  </p>
                  <Box className="font-extrabold text-[20px]  sm:text-[25px] flex gap-3 items-center" >
              {
                <>
                <p >${data.data?.priceNews}</p>
                <p className="text-[#767F90] text-[18px]">{data.data?.priceOld === "" ? "" : <del > {"$"+data.data?.priceOld}</del>}</p> 
                </>
              }
              </Box>
                  <Typography className="text-[#70798B] " variant="h6" component="h6">
                    This NoiseStorm font is inspired by Classic Retro and Vintage apparel, headlines, signage, logo, quote, apparel and other creative applications.
                  </Typography>
                <Box
                >
                    <button className='bg-[#1723BD] hover:bg-[#3c47df] w-[150px]  p-6 text-white rounded-full' onClick={HandelAddToCart} >Add To Cart</button>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </div>
        </Drawer>
    </div>
  );

}
