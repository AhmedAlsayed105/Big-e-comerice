/* eslint-disable react/prop-types */


import { Box, Typography } from '@mui/material';
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'red',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   })),



export default function FirstComponentsHome({ Imag,bgColorElement, positionImg ,positionP, Direction,bgButton,textH2,textP}) {
    return (
        // <Container>
            <Box className={`px-10  text-white h-[450px] sm:h-[570px]  rounded-3xl shadow-2xl flex  ${Direction}

               justify-evenly `}   
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

                    <div className={positionP}>
                        <Typography className='mb-3 text-2xl' variant='p' component="p">{textP}</Typography>
                        <p  className='text-[25px] font-extrabold sm:text-[30px] '  >{textH2}<br /></p>

                        <button className={` hover:bg-white hover:text-black text-white font-medium w-[180px] h-[50px] mt-4 rounded-3xl ${bgButton}  duration-200 `}  size="large">shop By Category</button>

                    </div>

                    <div className={`flex justify-center relative ${positionImg} `}>

                        <img className=' ' src={Imag} />

                    </div>
                </Box>
            )

        // </Container>
}