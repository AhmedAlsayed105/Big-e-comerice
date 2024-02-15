import { Container, Grid } from "@mui/material";
import EmailMe from "./PagesHome/ContentMe";
import Footer from "./PagesHome/Footer/Footer";
import FooterTwo from "./PagesHome/Footer/FooterTwo";
import LatestPosts from "./PagesHome/LatestPosts";
import { DataPostsApi } from "../Data/DataPosts";


export default function Blog() {
  
  const dataPost = DataPostsApi.map(({title,description,image},index)=>(
    <Grid key={index} item margin={" auto "} xs={11}  md={6} lg={3}>
    <LatestPosts 
    textH2={title}
    textP={description}
    bgColorElement={image}/>
  </Grid>
  ))
  return (
    <Container>
      <div className="w-full  h-[1px] bg-[#B5B8CD]  mx-auto mt-10 mb-6"></div>
       {/* Start section Seven Latest Posts  */}
       <div className=" flex flex-col justify-center items-center my-24">
              <h2 className=" sm:text-[45px] font-bold">Latest Posts</h2>
        </div>
        <Grid   container spacing={2} >
            {
              dataPost
            }
        </Grid>
        {/* End section Seven  Latest Posts */}
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
    </Container>
  )
}
