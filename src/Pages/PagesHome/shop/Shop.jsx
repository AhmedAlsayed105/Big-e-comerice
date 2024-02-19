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

export default function Shop() {
// DataProduct
useEffect(() => {
  AOS.init({
    duration : 2000
  });
}, []);


const dataProductApi = DataProductApi.map((productApi)=>( 
      <Grid data-aos="fade-right" key={productApi.id} item xs={12}  md={6} lg={4} >
      <Product 
        data={productApi}
      />
  </Grid>
  ))
  
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
        <InputRang/>
        {/* End Rang  */}
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
