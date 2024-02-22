// DataProduct
import { Grid } from "@mui/material";
import EmailMe from "../ContentMe";
import Footer from "../Footer/Footer";
import FooterTwo from "../Footer/FooterTwo";
import { DataProductApi } from "../../../Data/DataProduct";
import Product from "../Product/Product";
import InputSearch from "./InputSearch";
import InputCheckBox from "./InputCheckBox";
import InputRang from "./InputRang";
import { BrandData, categoryData } from "../../../Data/DataInput";
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import swal from "sweetalert";

export default function Shop() {
// DataProduct
useEffect(() => {
  AOS.init({
    duration : 1200
  });
}, []);

const dataProductApi = DataProductApi.map((productApi)=>( 
      <Grid  data-aos="fade-right" key={productApi.id} item xs={12}  md={6} lg={4} >
      <Product 
        data={productApi}
      />
  </Grid>
  ))
  
  const PopupMassage = ()=>{
    swal({
      text:"I can work on it in the future",
      title: "Search is not working now😅",
      buttons: false,
      timer: 2000,
    });
  }


  return (
    <div className="container sm:mx-auto">
    <div className="w-full  h-[1px] bg-[#B5B8CD]   mt-10 mb-6"></div>
     {/* Start section Product */}
    <div className=" my-24 flex flex-col gap-2  md:flex-row " 
    >
    <Grid >
      <div className="md:w-[350px] max-w-[600px]">
        {/* Start Search Bar */}
        <InputSearch/>
        {/* End Search Bar */}
        {/* start check Box Category  */}
        <div className="my-[50px]">
        <h1 className="font-extrabold text-[19px] my-[25px]">Category</h1>
        <InputCheckBox DataInput={categoryData}/>
        </div>
        {/* End check Box Category  */}
        {/* start check Box Category  */}
        <div className="">
        <h1 className="font-extrabold text-[19px] my-[25px]">Brand</h1>
        <InputCheckBox DataInput={BrandData}/>
        </div>
        {/* End check Box Category  */}
        {/* Start Rang  */}
        <div className="">
        <h1 className="font-extrabold text-[19px] my-[25px]">Choose Price</h1>
        <InputRang/>
        </div>
        {/* End Rang  */}
        <div className="my-5">
    <button 
    onClick={PopupMassage}
    className=" w-full text-white font-semibold p-3 text-[14px] max-w-[320px] cursor-pointer rounded-full  bg-[#0C19B7] hover:bg-black shadow-xl "
            type="submit"
        >
      Filter
    </button>
        </div>
      </div>
      </Grid>
      <div className=" w-full ">
        <Grid spacing={2}  container>
      {
        dataProductApi
      }
      </Grid>
      </div>
    </div>
     {/* End section Product */}
    <div className="my-24">
      <EmailMe />
    </div>
    <div className="my-10">
      <Footer />
    </div>
    <div className="w-full  h-[1px] bg-[#B5B8CD]  mx-auto mt-10 mb-6"></div>
    <div className="pb-4">
      <FooterTwo />
    </div>
  </div>
  )
}
