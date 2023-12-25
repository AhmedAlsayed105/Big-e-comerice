import  {Box,Container ,Typography }  from "@mui/material";
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
export default function HeaderOne() {
  return (
    <nav className=" text-white  bg-[#000000] rounded-b-md">
    <Container>
    <div  className="py-2 flex flex-col sm:flex-row justify-between items-center">
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
    </Container>
</nav>
  )
}
