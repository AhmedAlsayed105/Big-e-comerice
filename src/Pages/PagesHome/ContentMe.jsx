import { Box, Typography, useMediaQuery } from "@mui/material";
import ContactMePhoto from "../../Image/ContactMe.jpg";
import { useEffect } from "react";
import Aos from "aos";
import { useRef } from 'react';
import swal from 'sweetalert';

import emailjs from '@emailjs/browser'
export default function EmailMe() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  const media = useMediaQuery(("(min-width:0) and (max-width:650px)"))
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ls9t4hq', 'template_2igakma', form.current, {
        publicKey: 'bGaiI9U7ktqZTpjQp',
      })
      .then(
        () => {
          swal({
            title: "Good job!",
            text: "The message was sent successfully ⚡️",
            icon: "success",
            button: "Close!",
          });
          form.current[0].value = "";
          form.current[1].value = ""
          form.current[2].value = ""
        },
        (error) => {
          console.log('FAILED...', error.text);
          swal({
            title: `${error.text}!`,
            icon: "error",
            button: "Close",
          });
          form.current[0].value = "";
          form.current[1].value = ""
          form.current[2].value = ""
        },
      );
  };


  return (
    <div
      className="lg:h-[95vh] text-white py-[110px] px-[40px] rounded-3xl"
      style={{
        backgroundImage: `url(${ContactMePhoto})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      data-aos="fade-right"
    >
      <Box className="flex flex-col items-center mt-10">
        <h2 className="text-[20px] mb-6 "> Sign Up Newsletter & Promotions!</h2>
        <Box className="flex flex-col items-center">
          <Typography
            className="text-[30px] sm:text-[60px] font-bold"
            variant="span"
            component="span"
          >
            Get 25% Discount
          </Typography>
          <Typography
            className="text-[30px] sm:text-[60px] font-normal"
            variant="span"
            component="span"
          >
            On Your Next Purchase
          </Typography>
        </Box>

        <Box className=" flex mt-5 flex-col  items-center w-full max-w-[700px] gap-3 relative">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input className="h-[50px] sm:h-[55px]  bg-[transparent] rounded-full px-3  w-full outline-none border-[2px] border-[#F6A8D2] placeholder-[#F6A8D2]" type="text" name="user_name" />
            <label>Email</label>
            <input className="h-[50px] sm:h-[55px]  bg-[transparent] rounded-full px-3  w-full outline-none border-[2px] border-[#F6A8D2] placeholder-[#F6A8D2]" type="email" name="user_email" />
            <label >Message</label>
            {
              media ?
                (
                  <>
                    <div className=" flex items-center  relative">
                      {/* <textarea className="h-[60px] sm:h-[70px]  bg-[transparent] rounded-xl px-3  w-full outline-none border-[2px] border-[#F6A8D2] placeholder-[#F6A8D2]" type="text" name="message" /> */}
                      <textarea className="h-[60px] sm:h-[70px]  bg-[transparent] rounded-xl px-3  w-full outline-none border-[2px] border-[#F6A8D2] placeholder-[#F6A8D2]" name="message"></textarea>
                    </div>
                    <button
                      type="submit"
                      className={`  w-full mt-5   text-[#E60E7D] bg-white  h-[50px] hover:bg-black hover:text-white   font-medium   rounded-3xl   duration-200 `}
                      size="large"
                    >
                      send
                    </button>
                  </>
                )
                :
                (
                  <div className=" flex items-center  relative">
                    {/* <textarea className="h-[60px] sm:h-[70px]  bg-[transparent] rounded-xl px-3  w-full outline-none border-[2px] border-[#F6A8D2] placeholder-[#F6A8D2]" type="text" name="message" /> */}
                    <textarea className="h-[60px] sm:h-[70px]  bg-[transparent] rounded-xl px-3  w-full outline-none border-[2px] border-[#F6A8D2] placeholder-[#F6A8D2]" name="message"></textarea>
                    
                    <button
                      type="submit"
                      className={` absolute right-[5px] w-[180px]   text-[#E60E7D] bg-white  h-[50px] hover:bg-black hover:text-white   font-medium   rounded-3xl   duration-200 `}
                      size="large"
                    >
                      send
                    </button>
                  </div>
                )
            }

          </form>
        </Box>
      </Box>
    </div>
  );
}
// background-image: url
// background-position: center center;
// background-repeat: no-repeat;
// background-size: cover;