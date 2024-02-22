import { useEffect } from "react";
import Aos from "aos";
import { useRef } from 'react';
import swal from 'sweetalert';


import emailjs from '@emailjs/browser'
export default function Maps() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);


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
    <div className="flex flex-col gap-7 lg:flex-row justify-between"
    >
      <div data-aos="fade-right">
        <div>
          <h2 className="text-[#0C19B7] font-extrabold">Contact With Us</h2>
          <span className="text-[36px] font-bold">
            Don’t Google Design Questions
          </span>
          <p className="text-[14px] text-[#70798B] font-medium">
            Your email address will not be published. Required fields are
            marked*
          </p>
        </div>
        <form
         ref={form} onSubmit={sendEmail}
          className="flex flex-col gap-6 my-9 items-end"
        >
          <input
            className="p-4 w-full rounded-full bg-[#F5F5F7] outline-none  text-black "
            placeholder="Your Name *"
            type="text" name="user_name"
          />
          <input
            className="p-4 w-full rounded-full bg-[#F5F5F7] outline-none  text-black"
            placeholder="Your Email *"
            type="email" name="user_email"
          />
          <textarea
            className="p-4 w-full rounded-2xl h-[265px] bg-[#F5F5F7] outline-none  text-black"
            placeholder="Question *"
            name="message"
          />
          <button className="w-[200px] text-white font-semibold text-[14px] cursor-pointer rounded-full p-3 bg-[#0C19B7] hover:bg-black shadow-xl "
            type="submit"
          >
            Send A Message
          </button>
        </form>



      </div>
      <div className=" w-[900] lg:w-[500px] shadow-2xl  h-[500px] mb-28" data-aos="fade-right">
        <iframe
          width="100%"
          height="600"
        //   frameborder="0"
        //   scrolling="no"
        //   marginheight="0"
        //   marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6JQ9+V7%20Al%20Wadi,%20El%20Tor,%20Egypt+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">Population Estimator map</a>
        </iframe>
      </div>
    </div>
  );
}
