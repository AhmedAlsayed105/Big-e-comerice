/* eslint-disable react/prop-types */

import { Box,IconButton, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShopIngCard from "../../../ShopCard/ShopIngCard";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
export default function Product(productApi) { //{id,name,Brand,Category,ImageOne,ImageTwo,description,priceNews,priceOld,sales}
  console.log();
    const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
<div className=" h-[490px] ">
      <Box
        className={` transition duration-700 ease-in-out px-5 text-white rounded-3xl border-2 border-[#70798b4d] hover:shadow-2xl hover:border-[#ddd] relative  `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} 
      >                                                                                                       
        <div        //{`transition duration-700 ease-in-out opacity-0 ${isHovered ? "mb-[10px] opacity-[1]" : ""}`}
          className={`flex justify-center items-center relative  transition duration-300 ease-in-out `}
        > 
          <Stack  className={`transition duration-700 ease-in-out opacity-0 z-40 absolute right-0  top-12 ${isHovered ? "opacity-[1] " : ""}`} //" z-40 absolute right-0  top-12"    
          >
          <IconButton  color="error">
          <FavoriteBorderIcon />
          </IconButton>
          <IconButton >
          <ShopIngCard ClickIconOnOpen={<VisibilityOutlinedIcon />}/>
          </IconButton>
        </Stack>
        <div className="h-[299px] max-w-[300px] max-h-[300px] cursor-pointer transition duration-700 ease-in-out">
        {
          !isHovered ? <img className=" w-full" src={productApi.data?.ImageOne} /> : <img className=""  src={productApi.data?.ImageTwo} />
        }
        </div>
        </div>
        <div className={`text-black py-3 `}>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            margin={"10px"}
          >
            <Typography
              className="mb-3 font-extrabold text-[19px]"
              component="h3"
            >
              {productApi.data?.name}
            </Typography>
            <Typography className="mb-3 font-extrabold" component="span">
              365$
              
            </Typography>
          </Stack>
          <p className="text-[15px]  text-[#70798B]   ">
            Game Console Control ...
          </p>
  
  <div data-aos="top" className= {`transition duration-700  ease-in-out opacity-0 fixed ${isHovered ? " opacity-[1] relative " : ""}`}>
            <Stack
  
            flexDirection={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
            className="bg-[#2631C5] w-full text-white min-h-[50px] rounded-3xl my-4  "
            >
              <button size="large">shop By Category</button>
              <ShoppingBagOutlinedIcon/>
            </Stack>
      </div>
      
        </div>
          {/* Start icon sale! */}
        {
            productApi.data?.sales ? 
            <div className="w-[65px] h-[65px] rounded-full bg-[#FF0507] z-40 absolute left-[15px] top-7 flex items-center justify-center ">
            <h1 className="font-bold">sale!</h1>
          </div>
          :
          ("")
        }
        {/* End icon sale! */}
      </Box>
      
</div>
  );
  
}
// [data-aos] {
//     overflow:"auto"
//   }
// data-aos-delay="200" // تأخير الأنميشن للخلفية
          // data-aos-duration="500" // مدة الأنميشن