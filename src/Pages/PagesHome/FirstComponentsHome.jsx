// import div from '@mui/material/div',
import { Box, Container, Typography } from '@mui/material';
import IphoneImage from "../../Image/Iphon.png"
import { Translate } from '@mui/icons-material';
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'red',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   })),



export default function FirstComponentsHome() {
    return (
        <Container>
                <Box className=' border-test relative pt-6 px-10 bg-black text-white h-[450px] sm:h-[570px] max-w-[850px] rounded-3xl shadow-2xl '
                
            sx={{
                position: 'relative',
                '&:hover ::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: "-30px",
                  left: "50%",
                  transform:"translate(-50%)",
                  width: "70%",
                  height: "30%",
                  opacity:"0.1",
                  borderRadius: "30px",
                  backgroundColor: '#080d13',
                filter: "blur(35px)",
                transitionDuration: "3ms",
                zIndex:"-10"
                
            }
        }}
                >
            <Box className=''>
                    <div className="my-[40px]">
                        <Typography className='mb-3 text-2xl' variant='p' component="p">Blast Past Fast.</Typography>
                        <Typography sx={{fontWeight:800}} variant='h4'>IPhone 12 Pro It’sA Leap<br /> Year.</Typography>

                        <button className='relative z-[1] text-white font-medium w-[180px] h-[40px] mt-4 rounded-3xl   bg-gradient-to-r from-cyan-500 to-blue-500  ' size="large">shop By Category</button>

                    </div>
                    <div className='absolute bottom-0 z-[0] '>

                        <img className='min-w-[200px]' src={IphoneImage} />

                    </div>
                </Box>
            </Box>

        </Container>
    )
}