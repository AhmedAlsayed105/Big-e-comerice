import FirstComponentsHome from "./FirstComponentsHome";
import IphoneImage from "../../Image/Iphon.png";
import HeadPhon from "../../Image/headPhone.png";
import Laptop from "../../Image/laptop.png";
import Laptop2 from "../../Image/lalptop-2.png";
import Mask from "../../Image/Mask.png";
import Dorn from "../../Image/dron.png";
import watch from "../../Image/watch.png";
import Camera from "../../Image/Camer.png";
import PlaySetion from "../../Image/playsetion.png";
import handfry from "../../Image/handfry.png";
import { Grid } from "@mui/material";
import SecondComponentsHome from "./SecondComponentsHome";
import Product from "./Product/Product";

export default function Home() {
  return (
    <>
      <div className="    mx-auto px-1 ">
        {/* Start section One  */}
        <Grid container rowSpacing={8} columnSpacing={2}>
          <Grid item xs={12} md={4}>
            <FirstComponentsHome
              HightComp={" h-[450px] sm:h-[570px]"}
              Imag={IphoneImage}
              Direction={"flex-col"}
              bgColorElement={"black"}
              positionImg={"relative bottom-[45px]  sm:bottom-[0px]"}
              positionP={"mt-16"}
              bgButton={"bg-cyan-500 "}
              textH2={"todoIPhone 12 Pro It’s A Leap Year"}
              textP={"Blast Past Fast."}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FirstComponentsHome
              HightComp={" h-[450px] sm:h-[570px]"}
              Imag={HeadPhon}
              Direction={"flex-col-reverse"}
              bgColorElement={" #FD734A "}
              positionImg={"relative bottom-[-100px] md:bottom-[0px]"}
              positionP={"mt-0 lg:mt-40 mb-[40px]"}
              bgButton={"bg-black "}
              textP={"Noise Cancelling"}
              textH2={"Beats Solo Wireless-Pro"}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FirstComponentsHome
              HightComp={" h-[450px] sm:h-[570px]"}
              Imag={Laptop}
              Direction={"flex-col"}
              bgColorElement={"black"}
              positionImg={"relative bottom-[0px]"}
              positionP={"mt-16"}
              bgButton={"bg-violet-500 "}
              textP={"Macbook Pro"}
              textH2={"More Power. Wakes Instantly."}
              />
          </Grid>
        </Grid>
          {/* End section One  */}

        {/* section Two */}
        <div className="  mt-10  flex gap-5">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <FirstComponentsHome
                HightComp={" h-[500px] sm:h-[700px]"}
                Imag={Mask}
                Direction={"flex-col"}
                bgColorElement={"#86888C"}
                positionImg={"relative bottom-[0] "}
                positionP={"mt-20 mb-[-110px]"}
                bgButton={"bg-black "}
                textP={"Macbook Pro"}
                textH2={"More Power. Wakes Instantly."}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="flex flex-col my-5 gap-10  sm:gap-5 justify-around ">
                {/*  ,, positionImg, */}
                <SecondComponentsHome
                  Image={Dorn}
                  bgColorElement={"#DFDFDF"}
                  positionP={"mt-3"}
                  bgButton={"bg-black "}
                  textP={"Quadcopter"}
                  textH2={
                    <>
                      DJI Mavic Mini
                      <br />
                      Drone FlyCam.
                    </>
                  }
                />

                <SecondComponentsHome
                  Image={watch}
                  bgColorElement={"#CF364C"}
                  positionP={"mt-3"}
                  bgButton={"bg-black "}
                  textP={"wear gadgets "}
                  textH2={
                    <>
                      Wear Gadgets
                      <br />
                      Stay Creative.
                    </>
                  }
                />
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <FirstComponentsHome
                HightComp={" h-[500px] sm:h-[700px]"}
                Imag={handfry}
                Direction={"flex-col"}
                bgColorElement={"black"}
                positionImg={"relative bottom-[0px]"}
                positionP={"mt-20 mb-[-110px]"}
                bgButton={"bg-[#d6ba81] "}
                textP={"Macbook Pro"}
                textH2={"More Power. Wakes Instantly."}
              />
            </Grid>
          </Grid>
        </div>
        {/* End section Two */}

        {/* start section Product and section Three */}
        <div className="flex flex-col justify-center items-center my-24 ">
              <h2 className="text-[30px] sm:text-[45px] font-bold">Best Seller Products</h2>
              <p className="font-[27px] text-[#70798B]">There are many variations passages</p>
        </div>
        
        <Grid container spacing={2} className="my-24">
        <Grid item xs={12} sm={6} md={3}>
             
        <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
             
        <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
             
        <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
             
        <Product/>
        </Grid>
        
        </Grid>
    {/* End section Product and section Three */}
    
    {/* Start section Four */}
      <Grid  container   spacing={2}>
              <Grid  item margin={"auto"} xs={11} lg={11} >
              <FirstComponentsHome
                HightComp={" h-[900px] md:h-[450px]   "} 
                Imag={Laptop2}
                Direction={"flex-col md:flex-row    "}
                bgColorElement={"black"}
                positionImg={"absolute bottom-[-5%] left-[-25%] translate-x-4 md:absolute md:top-[-35%] md:left-[30%]   "} 
                positionP={" mt-24 "}
                bgButton={"bg-[#DF5CB1] "}
                textH2={<span className="text-[40px]">
                  The Laptop 
                  <br/>
                  Of Tomorrow
                </span>}
                textP={"Asus Zenbook Duo."}
              />
            </Grid>
            </Grid>
            <div className=" flex flex-col justify-start items-start my-24 ">
              <h2 className=" sm:text-[45px] font-bold">New Arrival Products</h2>
              <p className="font-[16px]  text-[#70798B]">There are many variations passages</p>
        </div>
        {/* End section Four */}

        {/* start section Five Product */}
        <Grid container spacing={2} className="my-24">
        <Grid item xs={12} sm={6} md={3}>
             
        <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
             
        <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
             
        <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
             
        <Product/>
        </Grid>
        
        </Grid>
        {/* End section Five Product */}


        {/* start section Six  */}
        <Grid  container   spacing={2} >
              <Grid  item margin={"auto"} xs={10} lg={5} >
              <FirstComponentsHome
              HightComp={" h-[520px] sm:h-[700px] md:h-[400px] "} //sm:h-[570px]
              Imag={Camera}
              Direction={"flex-col-reverse"}
              bgColorElement={"#000000"}
              positionImg={"relative left-[40px]  sm-bottom-[-70px] md:bottom-[-300px]"}
              positionP={"mt-[-40px] lg:mt-40 mb-[40px]"}
                bgButton={"bg-[#505A8A] "}
              textH2={<span className="text-[34px] sm:text-[40px]">
              Launch Party
              <br/>
              Nice Photos
            </span>}
            textP={"camera Accessories."}
            />
          </Grid>
          <Grid  item margin={"auto"} xs={10} lg={5} >
            <FirstComponentsHome
              HightComp={" h-[475px] sm:h-[570px]"}
              Imag={PlaySetion}
              Direction={"flex-col"}
              positionImg={"relative bottom-[45px]  sm:bottom-[0px]"}
              positionP={"mt-16"}
              bgColorElement={" #0c19b7 "}
              bgButton={"bg-[#F8CB06] "}
              textH2={<span className="text-[34px] sm:text-[40px]">
                  Enjoy Game
                  <br/>
                  High Tech
                </span>}
                textP={"game Accessories."}
            />
          </Grid>
            </Grid>



        {/* End section Six  */}
      </div>

    </>
  );
}
