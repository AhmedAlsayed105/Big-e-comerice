/* eslint-disable react/prop-types */

import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import test from "../../../Image/productOne.jpg";
import { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShopIngCard from "../../../ShopCard/ShopIngCard";
export default function Product({Imag,bgColorElement,positionImg,positionP,Direction,bgButton,textH2,textP,HightComp,}) {
    const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);


  return (

    <Box
      className={` px-5  text-white ${HightComp}    rounded-3xl shadow-2xl relative cursor-pointer  `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
    
    >                                                                                                       
      <div
        className={`flex justify-center items-center relative border-test   ${positionImg} `}
      > 
      {isHovered &&  
      <Stack  className=" z-40 absolute right-0  top-12"    

      style={{
        overflow: "hidden", // إضافة خاصية overflow
        }} 
        >
        <IconButton  color="error">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton >
          <VisibilityOutlinedIcon />
        </IconButton>
        
      </Stack>
      }

        <img data-aos="fade-right" src={test} />
      </div>

      <div className={`${positionP}   text-black py-3 `}>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          margin={"10px"}
          
        >
          <Typography
            className="mb-3 font-extrabold text-[19px]"
            component="h3"
          >
            Momentum Phone
          </Typography>
          <Typography className="mb-3 font-extrabold" component="span">
            365$
          </Typography>
        </Stack>
        <p className="text-[15px]  text-[#70798B]   ">
          Game Console Control ...
        </p>

        {/*  */}
       
       <div data-aos="fade-up">
        {isHovered && (
          <Stack
          flexDirection={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
          className="bg-[#2631C5] w-full text-white min-h-[50px] rounded-3xl my-4  "
          data-aos="fade-top"
          // data-aos-delay="200" // تأخير الأنميشن للخلفية
          // data-aos-duration="500" // مدة الأنميشن
          >
            <button size="large">shop By Category</button>
            <span>ss</span>
          </Stack>
    )}
    </div>

        </div>
        {/*  */}

        <ShopIngCard/>
    </Box>
  );
  
}
// [data-aos] {
//     overflow:"auto"
//   }
