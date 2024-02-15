import { Container,  } from "@mui/material";
import Maps from "./Maps";
import EmailMe from "../PagesHome/ContentMe";
import Footer from "../PagesHome/Footer/Footer";
import FooterTwo from "../PagesHome/Footer/FooterTwo";
import ContentIcon from "./ContentIcon";

export default function Content() {


  return (
    <Container>
      <div className="w-full  h-[1px] bg-[#B5B8CD]  mx-auto mt-10 mb-6"></div>
      <Maps/>
      <div className="my-24 flex items-center lg:items-stretch flex-col">
      <ContentIcon/>   
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
  )
}
