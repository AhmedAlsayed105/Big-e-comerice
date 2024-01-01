

import { Box, Typography } from '@mui/material';


// eslint-disable-next-line react/prop-types
export default function SecondComponentsHome({ Imag,bgColorElement, positionImg ,positionP, Direction,bgButton,textH2,textP}) {
    return (
        // <Container>
            <Box className={`p-10  text-white    gap-5  rounded-3xl shadow-2xl flex  ${Direction}

                `}   
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
            >
<div className='flex flex-row  items-center'>
    
                        <div className={positionP}>
                            <Typography className='mb-3 text-2xl' variant='p' component="p">{textP}</Typography>
                            <p  className='text-[25px] font-extrabold sm:text-[30px] '  >{textH2}<br /></p>
    
                            <button className={` hover:bg-white hover:text-black text-white font-medium w-[180px] h-[50px] mt-4 rounded-3xl ${bgButton}  duration-200 `}  size="large">shop By Category</button>
    
                        </div>
    
                        <div className={`flex justify-center relative  ${positionImg} max-w-[300px]`}>
    
                            <img  className={' '} src={Imag} />
    
                        </div>
                        
</div>
                </Box>
            )

        // </Container>
}