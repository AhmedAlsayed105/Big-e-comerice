
import { Box } from "@mui/material";
import people from "../../Image/people.png"

import { useEffect } from "react";
import AOS from "aos";

export default function SectionOneAbout() {
  useEffect(() => {
    AOS.init({
      duration : 1200
    });
  }, []);

  return (
      <div className="container flex gap-10 items-center flex-col lg:flex-row "
      >
        <Box
        data-aos="fade-right"
        >
          <p className="text-[#0C19B7] text-[16px] sm:text-[20px] font-bold ">
            Welcome To Phlox
          </p>
          <p className="font-extrabold text-[20px] sm:text-[40px] mb-5">
            Who We Are ?
          </p>
          <div className="text-[#7A8393] text-[16px]">
            <p >
              When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray
            </p>
            <br />
            <p >
              gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me .        </p>
            <p >
              <br />
              when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence .
            </p>
            <br />
          </div>
          <button className="w-[150px] text-white rounded-full p-3 bg-[#0C19B7] hover:bg-black shadow-xl "> Contact Us</button>
        </Box>
        <div className="max-w-[700px] mb-6"
        data-aos="fade-right"
        >
          <img src={people} className="rounded-3xl shadow-lg  max-w-full" alt="photo" />
        </div>

      </div>
  )
}
