
// DataProduct

import { Container } from "@mui/material";
import EmailMe from "./PagesHome/ContentMe";
import Footer from "./PagesHome/Footer/Footer";
import FooterTwo from "./PagesHome/Footer/FooterTwo";

export default function Shop() {

  
  return (
    <>
    <Container>
    <div className="w-full  h-[1px] bg-[#B5B8CD]  mx-auto mt-10 mb-6"></div>
     {/* Start section Product */}

     {/* End section Product */}
    {/* <Grid   container spacing={2} >
          {
            // dataPost
          }
      </Grid> */}
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
  </>
  )
}
