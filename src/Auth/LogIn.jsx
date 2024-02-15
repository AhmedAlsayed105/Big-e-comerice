import { Container } from "@mui/material";
import FormLogin from "./FormLogin";
import EmailMe from "../Pages/PagesHome/ContentMe";
import Footer from "../Pages/PagesHome/Footer/Footer";
import FooterTwo from "../Pages/PagesHome/Footer/FooterTwo";


export default function LogIn() {
  return (
    <>
    <div className="container w-full  h-[1px] bg-[#B5B8CD]  mx-auto mt-10 mb-6"></div>
    <Container>
    <div className="my-24">
    <FormLogin/>
      </div>
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
