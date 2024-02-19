/* eslint-disable react/prop-types */
import { Box,Typography } from '@mui/material';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

export default function FirstComponentsHome({ Imag,bgColorElement, positionImg,positionP, Direction,bgButton,textH2,textP,HightComp}) {
    
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    
    return (
        
            <Box className={` px-10   text-white   ${HightComp}  rounded-3xl shadow-2xl flex  

               justify-between    ${Direction}`
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
                        <Typography className='mb-3 text-[16px]' variant='p' component="p">{textP}</Typography>
                        <p  className='text-[25px] font-extrabold sm:text-[30px] lg:text-[45px] '  >{textH2}<br /></p>
                        <Link to={"/shop"}>
                        <button className={` hover:bg-white hover:text-black text-white font-medium w-[180px] h-[50px] mt-4 rounded-3xl ${bgButton}  duration-200 `}  size="large">shop By Category</button>
                        </Link>

                    </div>

                    <div className={`flex justify-center  ${positionImg}    `}  >

                        <img data-aos="fade-right" style={{
                            "data-aos" : {overflow:"auto"}
                        }}
                         src={Imag} />

                    </div>
                    
                </Box>
            )

}
// [data-aos] {
//     overflow:"auto"
//   }