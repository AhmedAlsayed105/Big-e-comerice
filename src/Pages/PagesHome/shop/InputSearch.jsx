import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function InputSearch() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  
  return (
    <div className="flex flex-col gap-2"
    data-aos="fade-right"

    >
      <h1 className="text-[20px] font-extrabold mb-6">Search</h1>
    <input type="search" placeholder="search" className="p-3 w-full max-w-[320px] rounded-full bg-[#F5F5F7] outline-none  text-black"/>
    <button className=" text-white font-semibold p-3 text-[14px] max-w-[320px] cursor-pointer rounded-full  bg-[#0C19B7] hover:bg-black shadow-xl "
            type="submit"
    >
      Search
    </button>
  </div>
  )
}
