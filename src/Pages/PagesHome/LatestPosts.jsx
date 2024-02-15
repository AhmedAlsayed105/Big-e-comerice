    import { Box,Container,Stack,Typography } from '@mui/material';

    import { useEffect, useState } from "react";
    import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
    import AOS from "aos";
    import "aos/dist/aos.css";


// eslint-disable-next-line react/prop-types
export default function LatestPosts({bgColorElement,textP,textH2}) {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);


      return (
    <div className='border-2 rounded-xl  ' data-aos="fade-right">
    <Stack 
    className='h-[400px] sm:h-[275px] lg:h-[375px] flex justify-evenly'
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} 
    sx={{
    position: 'relative',
    
    '&:hover': {
        backgroundImage:` url( ${bgColorElement})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxShadow: " 0 40px 35px rgba(112,121,139,.2)",
        color:"whitesmoke",
        transition: "0.5s",
        borderRadius:"10px",
    },
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
        filter: "blur(40px)",
        transitionDuration: "3ms",
        zIndex: "-10"
    }
    
}}
>
        
        <Container>
        <Box className="mt-12  ">
        <Typography className='mb-3 text-[16px]' variant='p' component="p">{textH2}</Typography>
        <p  className='text-[25px] font-semibold sm:text-[30px] '  >{textP}</p>
        <p  className={`mt-6 mb-12 h-1 font-medium  ${isHovered?"bg-white":"bg-[#4F56DB]"}`}  ></p>
        </Box>
        <div className="mt-6 mb-12 font-medium flex items-center gap-3 z-50 cursor-pointer">
            Read More
            <p>
              <ArrowRightAltIcon/>
            </p>
        </div>
        
    </Container>
    </Stack>
  </div>
  )
}