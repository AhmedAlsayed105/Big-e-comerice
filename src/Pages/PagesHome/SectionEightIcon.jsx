import { Box, Stack, Typography } from "@mui/material"


// eslint-disable-next-line react/prop-types
function SectionEightIcon({Icon,textP,textH2}) {
  return (  
        <div className="  border-test  ">
        <Stack flexDirection={"row"} alignItems={"center"} gap={"30px"}>
            <Box>
                Icon
                {Icon}
            </Box>
            <Box>
            <Typography className='mb-3  font-extrabold ' variant='h4' component="h4">{textH2}</Typography>
            <p  className='text-[#474747] font-medium'  >{textP}</p>
            </Box>
        </Stack>
        </div>
  )
}

export default SectionEightIcon