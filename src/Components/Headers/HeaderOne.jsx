import  {Box,Typography }  from "@mui/material";
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeaderOne() {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    
   
  return (
    <nav data-aos="fade-right" className="  text-white  bg-[#000000] rounded-b-md">
    {/* <Container> */}
    <div  className=" container mx-auto   py-2 flex flex-col sm:flex-row justify-between items-center">
        <Box className="">
    <Typography variant="p" component="p">
        Worlds Fastest Online Shopping Destination
    </Typography>
        </Box>
        {/*  */}
    <Box className="flex flex-col sm:flex-row gap-5 my-1 ">
   <Box className="flex gap-2">
     <PhoneInTalkOutlinedIcon/>
     <Typography variant="p" component="p">
         0111-956-1901
     </Typography>
   </Box>
    <Box className="flex gap-2">
    <EmailOutlinedIcon/>
    <Typography className="m-1" variant="p" component="p">
        info@phlox.pro
    </Typography>
    </Box>
        </Box>
    </div>
    {/* </Container> */}
</nav>
  )
}
