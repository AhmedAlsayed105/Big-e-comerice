/* eslint-disable react/prop-types */


import { Box,Container,Typography } from '@mui/material';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FirstComponentsHome({ Imag,bgColorElement, positionImg,positionP, Direction,bgButton,textH2,textP,HightComp}) {
    
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    
    return (
        <div className=''>
        
            <Box className={` px-10  text-white ${HightComp}  h-[450px] sm:h-[570px]  rounded-3xl shadow-2xl flex  ${Direction}

               justify-between `
            }   
            style={{
                overflow: "inherit", // إضافة خاصية overflow
            }}
                sx={{
                    position: 'relative',
                    background:`${bgColorElement}`,
                    '&:hover ::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: "-30px",
                        left: "50%",
                        transform: "translate(-50%)",
                        width: "70%",
                        height: "30%",
                        opacity: "0.3",
                        borderRadius: "30px",
                        backgroundColor: `${bgColorElement}`,
                        filter: "blur(40px)",
                        transitionDuration: "3ms",
                        zIndex: "-10"
                    }
                }}
                data-aos="fade-right"
                
            >


                    <div className={`${positionP} relative z-10`} >
                        <Typography className='mb-3 text-2xl' variant='p' component="p">{textP}</Typography>
                        <p  className='text-[25px] font-extrabold sm:text-[30px] '  >{textH2}<br /></p>

                        <button className={` hover:bg-white hover:text-black text-white font-medium w-[180px] h-[50px] mt-4 rounded-3xl ${bgButton}  duration-200 `}  size="large">shop By Category</button>

                    </div>

                    <div className={`flex justify-center relative ${positionImg} `}  >

                        <img data-aos="fade-right" style={{
                            "data-aos" : {overflow:"auto"}
                        }}
                         src={Imag} />

                    </div>
                    
                </Box>
             </div>
            )

}
// [data-aos] {
//     overflow:"auto"
//   }