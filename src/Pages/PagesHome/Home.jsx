import FirstComponentsHome from "./FirstComponentsHome";
import IphoneImage from "../../Image/Iphon.png";
import HeadPhon from "../../Image/headPhone.png";
import Laptop from "../../Image/laptop.png";
import Mask from "../../Image/Mask.png";
import D from "../../Image/dron.png";
import watch from "../../Image/watch.png";
import handfry from "../../Image/handfry.png";
import { Grid } from "@mui/material";
import SecondComponentsHome from "./SecondComponentsHome";
import Product from "./Product/Product";

export default function Home() {
  return (
    <>
      <div className="container    mx-auto px-1 ">
        <Grid container rowSpacing={8} columnSpacing={2}>
          <Grid item xs={12} md={4}>
            <FirstComponentsHome
              HightComp={" h-[450px] sm:h-[570px]"}
              Imag={IphoneImage}
              Direction={"flex-col"}
              bgColorElement={"black"}
              positionImg={" bottom-[45px]  sm:bottom-[0px]"}
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
              positionImg={"bottom-[-100px] md:bottom-[0px]"}
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
              positionImg={"bottom-[0px]"}
              positionP={"mt-16"}
              bgButton={"bg-violet-500 "}
              textP={"Macbook Pro"}
              textH2={"More Power. Wakes Instantly."}
            />
          </Grid>
        </Grid>

        {/* section Two */}
        <div className=" container mt-10  flex gap-5">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <FirstComponentsHome
                HightComp={" h-[500px] sm:h-[700px]"}
                Imag={Mask}
                Direction={"flex-col"}
                bgColorElement={"#86888C"}
                positionImg={"bottom-[0] "}
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
                  Image={D}
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
                positionImg={"bottom-[0px]"}
                positionP={"mt-20 mb-[-110px]"}
                bgButton={"bg-[#d6ba81] "}
                textP={"Macbook Pro"}
                textH2={"More Power. Wakes Instantly."}
              />
            </Grid>
          </Grid>
        </div>

        {/* End section Two */}

        {/* start section Product */}
        <div className="flex flex-col justify-center items-center my-10 ">
              <h2 className="text-[30px] sm:text-[45px] font-bold">Best Seller Products</h2>
              <p className="font-[27px] text-[#70798B]">There are many variations passages</p>
        </div>
        
        
        <Grid container spacing={2}>
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
        
        



        {/* End section Product */}
      </div>
    </>
  );
}
