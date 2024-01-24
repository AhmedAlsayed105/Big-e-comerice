import { Box, Typography } from "@mui/material";
import ContactMePhoto from "../../Image/ContactMe.jpg"

export default function EmailMe() {
  return (
    <div className="lg:h-[95vh] text-white py-[110px] px-[40px] rounded-3xl"
    
    style={{
    backgroundImage: `url(${ContactMePhoto})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}
    
    >
  <Box className="flex flex-col items-center mt-10">
    <h2 className="text-[20px] mb-6 "> Sign Up Newsletter & Promotions!</h2>
  <Box className='flex flex-col items-center'>
    <Typography className="text-[30px] sm:text-[60px] font-bold" variant="span" component="span" >Get 25% Discount</Typography>
    <Typography className="text-[30px] sm:text-[60px] font-normal" variant="span" component="span">On Your Next Purchase</Typography>
  </Box>

  <Box className=" flex mt-5 flex-col md:flex-row items-center w-full max-w-[700px] gap-3 relative">
    <input  className=" h-[60px] sm:h-[68px]  bg-[transparent] rounded-full px-3  w-full outline-none border-[2px] border-[#F6A8D2] placeholder-[#F6A8D2]  " type="email" placeholder="Enter Your E-Mail"/>
    <button className={` md:absolute md:right-4   text-[#E60E7D] bg-white w-full md:w-[180px] h-[50px] hover:bg-black hover:text-white   font-medium   rounded-3xl   duration-200 `}  size="large">Get Started</button>

  </Box>

  </Box>

    </div>
  )
}
// background-image: url
// background-position: center center;
// background-repeat: no-repeat;
// background-size: cover;