import { Box, Stack, Typography } from "@mui/material"


import { useEffect } from "react";
import AOS from "aos";

// eslint-disable-next-line react/prop-types
function SectionEightIcon({Icon,textP,textH2}) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (  
        <Stack flexDirection={"row"} alignItems={"center"} gap={"30px"}
        data-aos="fade-right"
        >
            <Box>
                <img className="max-w-[60px] h-fit" src={Icon}/>
            </Box>
            <Box>
            <Typography className='mb-3  font-extrabold ' variant='h4' component="h4">{textH2}</Typography>
            <p  className='text-[#474747] font-medium'  >{textP}</p>
            </Box>
        </Stack>
  )
}

export default SectionEightIcon