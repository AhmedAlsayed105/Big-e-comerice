import FirstComponentsHome from "./FirstComponentsHome";
import IphoneImage from "../../Image/Iphon.png"
import HeadPhon from "../../Image/headPhone.png"
import Laptop from "../../Image/laptop.png"
import Mask from "../../Image/Mask.png"
import D from "../../Image/dron.png"
import { Grid } from "@mui/material";
import SecondComponentsHome from "./SecondComponentsHome";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-1 ">
      <Grid container spacing={2}>
        {/* <Grid item xs={12}   md={4}   >
          <FirstComponentsHome  Imag={IphoneImage} Direction={"flex-col"} bgColorElement={"black"} positionImg={"bottom-[-9px]"} positionP={"mt-3"} bgButton={"bg-cyan-500 "} textH2={"todoIPhone 12 Pro It’s A Leap Year"} textP={"Blast Past Fast."}/>
        </Grid>
        <Grid item xs={12}   md={4}  >
          <FirstComponentsHome  Imag={HeadPhon} Direction={"flex-col-reverse"} bgColorElement={" #FD734A "} positionImg={"top-[-200px]"} positionP={"mt-[-290px]"} bgButton={"bg-black "} textP={"Noise Cancelling"} textH2={"Beats Solo Wireless-Pro"}/>
        </Grid>
        <Grid item xs={12}   md={4}  >
          <FirstComponentsHome  Imag={Laptop} Direction={"flex-col"} bgColorElement={"black"} positionImg={"bottom-[-9px]"} positionP={"mt-3"} bgButton={"bg-violet-500 "} textP={"Macbook Pro"} textH2={"More Power. Wakes Instantly."}/>
        </Grid> */}



        {/* section Two */}
        <Grid item xs={12}   md={4}  >
          <FirstComponentsHome  Imag={Mask} Direction={"flex-col"} bgColorElement={"#86888C"} positionImg={"bottom-[-9px]"} positionP={"mt-3"} bgButton={"bg-black "} textP={"Macbook Pro"} textH2={"More Power. Wakes Instantly."}/>
        </Grid>

      <div className="flex flex-col justify-around ">

      <SecondComponentsHome  Imag={D} Direction={"flex-col"} bgColorElement={"#86888C"} positionImg={"bottom-[-9px]"} positionP={"mt-3"} bgButton={"bg-black "} textP={"Macbook Pro"} textH2={"More Power. Wakes Instantly."}/>
      
      <SecondComponentsHome  Imag={D} Direction={"flex-col"} bgColorElement={"#86888C"} positionImg={"bottom-[-9px]"} positionP={"mt-3"} bgButton={"bg-black "} textP={"Macbook Pro"} textH2={"More Power. Wakes Instantly."}/>
      
      </div>

          </Grid>
        {/* section Two */}
    </div>
    </>
  )
}
// h-[450px] sm:h-[570px] max-w-[850px]


















// sx={{
//   ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
//     height: "100%",
//   },
// }}