import { useEffect } from "react";
import Aos from "aos";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Stack } from "@mui/material";


export default function ContentIcon() {
    useEffect(() => {
        Aos.init({
          duration: 2000,
        });
      }, []);
  return (
    <div className="flex gap-y-[30px] flex-col lg:flex-row justify-between "
    
    >
      <Stack data-aos="fade-right"  flexDirection={"row"} alignItems={"center"} gap={"10px"} >
      <div className="w-[90px] h-[90px] rounded-full flex items-center justify-center bg-[#F5F5F7] transition cursor-pointer hover:bg-[#0C19B7] hover:text-white text-[#0C19B7] text-[30px] "> 
      <LocationOnIcon fontSize="lg"/>
    </div>
    <div>
      <h3 className="mb-5">Meet Us In Office :</h3>
      <p>Patricia C. 4401 Waldeck Street</p>
      <p>Grapevine Nashville, Tx 76051</p>
    </div>
      </Stack>

      <Stack data-aos="fade-right"  flexDirection={"row"} alignItems={"center"} gap={"10px"}>
      <div className="w-[90px] h-[90px] rounded-full flex items-center justify-center bg-[#F5F5F7] transition cursor-pointer hover:bg-[#0C19B7] hover:text-white text-[#0C19B7] text-[30px] "> 
      <EmailIcon fontSize="lg"/>
    </div>
    <div>
      <h3 className="mb-5">Our Email Address :</h3>
      <p>nfo@yourdomain.com</p>
      <p>Info@dataanalytics.com</p>
    </div>
      </Stack>

      <Stack data-aos="fade-right"  flexDirection={"row"} alignItems={"center"} gap={"10px"}>
      <div className="w-[90px] h-[90px] rounded-full flex items-center justify-center bg-[#F5F5F7] transition cursor-pointer hover:bg-[#0C19B7] hover:text-white text-[#0C19B7] text-[30px] "> 
      <CallIcon fontSize="lg"/>
    </div>
    <div>
      <h3 className="mb-5">Contact Numbers :</h3>
      <p>+99 (0) 101 0000 888</p>
      <p>+99 (0) 555 6759 126</p>
    </div>
      </Stack>
    
    </div>
  )
}
