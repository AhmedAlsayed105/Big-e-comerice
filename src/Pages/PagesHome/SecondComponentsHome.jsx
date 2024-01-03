

import { Box, Typography, useMediaQuery } from '@mui/material';


// eslint-disable-next-line react/prop-types
export default function SecondComponentsHome({ Imag, bgColorElement, positionImg, positionP, Direction, bgButton, textH2, textP }) {
    const media = useMediaQuery('(min-width:900px) and (max-width:1000px)');


    // console.log(media);
    return (
        // <Container>
        <Box className={`p-3  text-white h-[370px] sm:h-[250px] lg:h-[330px]    gap-5  rounded-3xl shadow-2xl flex items-center ${Direction}  `}
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
        >
            <div className=''>

                <div className={positionP}>
                    <Typography className=' text-2xl' variant='p' component="p">{textP}</Typography>
                    <p className='text-[30px] font-extrabold lg:text-[25px] '  >{textH2}<br /></p>

                    <button className={`relative z-10 hover:bg-white hover:text-black text-white font-medium w-[180px] h-[50px] mt-4 rounded-3xl ${bgButton}  duration-200 `} size="large">shop By Category</button>

                </div>


            </div>
            <div className={`flex justify-center absolute ${positionImg} right-[-0px] bottom-[-25px]  w-[300px]          ${media ? "w-[200px] right-[-55px]" : ""} lg:right-[-55px] max-w-[350px] `}           >

                <img className={' '} src={Imag} />

            </div>
        </Box>

    )

}