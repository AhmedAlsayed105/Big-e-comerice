/* eslint-disable react/prop-types */


import { Box,Stack,Typography } from '@mui/material';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import test from "../../../Image/productOne.jpg"

export default function Product({ Imag,bgColorElement, positionImg,positionP, Direction,bgButton,textH2,textP,HightComp}) {
    
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    // console.log(test);
    return (
        <div className=''>
        
            <Box className={` px-10  text-white ${HightComp}  h-[350px]   rounded-3xl shadow-2xl `
            }   

                // data-aos="fade-right"
                
            >

                    <div className={`flex justify-center relative border-test ${positionImg} `}  >

                        <img data-aos="fade-right" src={test} />

                    </div>

                    <div className={`${positionP} relative z-10 text-black`} >
                        <Stack flexDirection={"row"} justifyContent={"space-between"}>
                            
                            <Typography className='mb-3 font-extrabold text-[19px]'  component="h3">Momentum Phone</Typography>
                            <Typography className='mb-3 font-extrabold'  component="span">365$</Typography>
                            
                        </Stack>
                        <p  className='text-[15px]  text-[#70798B] '  >Game Console Control ...</p>
                        
                            <Stack flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"} className=' bg-[#2631C5] w-full text-white  h-[50px] mt-4 rounded-3xl'>
                                
                               <button   size="large">shop By Category</button>
                               <span>ss</span> 

                            </Stack>
                    </div>

                    
                </Box>
             </div>
            )

}
// [data-aos] {
//     overflow:"auto"
//   }