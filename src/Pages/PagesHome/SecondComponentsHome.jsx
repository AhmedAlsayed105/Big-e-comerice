

import { Box, Typography, useMediaQuery } from '@mui/material';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// eslint-disable-next-line react/prop-types
export default function SecondComponentsHome({ Image, bgColorElement,positionP, bgButton, textH2, textP ,textColor }) {
    const media = useMediaQuery('(min-width:900px) and (max-width:1000px)');
    // data-aos="fade-right"
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    
    // console.log(media);
    return (
        // <Container>
        <Box className={`p-3  text-white h-[370px] sm:h-[250px] lg:h-[330px]    gap-5  rounded-3xl shadow-2xl flex items-center   `}
            sx={{
                position: 'relative',
                background: `${bgColorElement}`,
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
            style={{
                overflow: "inherit", // إضافة خاصية overflow
            }}
        >
            <div className=''>

                <div className={positionP}>
                    <Typography className={` text-2xl ${textColor}`} variant='p' component="p">{textP}</Typography>
                    <p className={`text-[30px] font-bold lg:text-[30px] ${textColor}`}  >{textH2}<br /></p>

                    <button className={`relative z-10 hover:bg-white hover:text-black text-white font-medium w-[180px] h-[50px] mt-4 rounded-3xl ${bgButton}  duration-200 `} size="large">shop By Category</button>

                </div>


            </div>
            <div data-aos="fade-right" className={`flex justify-center absolute  right-[-0px] bottom-[-25px]  w-[300px]          ${media ? "w-[200px] right-[-55px]" : ""} lg:right-[-55px] max-w-[350px] `}           >

                <img className={' '} src={Image} />

            </div>
        </Box>

    )

}