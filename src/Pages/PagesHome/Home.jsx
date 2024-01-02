import FirstComponentsHome from "./FirstComponentsHome";
import IphoneImage from "../../Image/Iphon.png"
import HeadPhon from "../../Image/headPhone.png"
import Laptop from "../../Image/laptop.png"
import Mask from "../../Image/Mask.png"
import D from "../../Image/dron.png"
import watch from "../../Image/watch.png"
import { Grid } from "@mui/material";
import SecondComponentsHome from "./SecondComponentsHome";

export default function Home() {
  return (
    <>
      <div className="container  mx-auto px-1 ">
      <Grid container spacing={2}>
        {/* <Grid item xs={12}   md={4}   >
          <FirstComponentsHome HightComp={" h-[450px] sm:h-[570px]"} Imag={IphoneImage} Direction={"flex-col"} bgColorElement={"black"} positionImg={"bottom-[-9px]"} positionP={"mt-3"} bgButton={"bg-cyan-500 "} textH2={"todoIPhone 12 Pro It’s A Leap Year"} textP={"Blast Past Fast."}/>
        </Grid>
        <Grid item xs={12}   md={4}  >
          <FirstComponentsHome  HightComp={" h-[450px] sm:h-[570px]"} Imag={HeadPhon} Direction={"flex-col-reverse"} bgColorElement={" #FD734A "} positionImg={"top-[-200px]"} positionP={"mt-[-290px]"} bgButton={"bg-black "} textP={"Noise Cancelling"} textH2={"Beats Solo Wireless-Pro"}/>
        </Grid>
        <Grid item xs={12}   md={4}  >
          <FirstComponentsHome HightComp={" h-[450px] sm:h-[570px]"}  Imag={Laptop} Direction={"flex-col"} bgColorElement={"black"} positionImg={"bottom-[-9px]"} positionP={"mt-3"} bgButton={"bg-violet-500 "} textP={"Macbook Pro"} textH2={"More Power. Wakes Instantly."}/>
        </Grid> */}


          </Grid>

        {/* section Two */}
        <div className="container flex gap-5">

      <Grid container spacing={8}>

        <Grid item xs={12}   md={4}   >
          <FirstComponentsHome  HightComp={" h-[500px] sm:h-[700px]"}  Imag={Mask} Direction={"flex-col"} bgColorElement={"#86888C"} positionImg={"bottom-[-9px]"} positionP={"mt-3"} bgButton={"bg-black "} textP={"Macbook Pro"} textH2={"More Power. Wakes Instantly."}/>
        </Grid>
        <Grid item xs={12}   md={4}  >

      <div className="flex flex-col gap-5 justify-around ">

      <SecondComponentsHome  Imag={D} Direction={""} bgColorElement={"#DFDFDF"} positionImg={""} positionP={"mt-3"} bgButton={"bg-black "} textP={"Quadcopter"} textH2={
         <>
         DJI Mavic Mini
         <br />
         Drone FlyCam.
       </>
      }/>
      
      <SecondComponentsHome  Imag={watch} Direction={""} bgColorElement={"#CF364C"} positionImg={""} positionP={"mt-3"} bgButton={"bg-black "} textP={"wear gadgets "} textH2={
         <>
         Wear Gadgets 
         <br />
         Stay Creative.

       </>
      }/>
      
      </div>
        </Grid>

      <Grid item xs={12}   md={4}  >
          <FirstComponentsHome HightComp={" h-[500px] sm:h-[700px]"}  Imag={Mask} Direction={"flex-col"} bgColorElement={"#86888C"} positionImg={"bottom-[-9px]"} positionP={"mt-3"} bgButton={"bg-black "} textP={"Macbook Pro"} textH2={"More Power. Wakes Instantly."}/>
        </Grid>
      </Grid>
      </div>

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