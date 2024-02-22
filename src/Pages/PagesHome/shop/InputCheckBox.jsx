import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



// eslint-disable-next-line react/prop-types
export default function InputCheckBox({DataInput}) {
  useEffect(() => {
    AOS.init({
      duration : 1200
    });
  }, []);
const HandelSubmit =()=>{
  
}

  return (
    <>
    {
      // eslint-disable-next-line react/prop-types
      DataInput.map((item )=> (
        <form onSubmit={HandelSubmit} key={item} className="  flex flex-row gap-2 my-2 items-center justify-between  max-w-[320px]"
        data-aos="fade-right"

        >
                <div className=" flex gap-3 items-center">
                <input className="cursor-pointer w-4 h-4" value={item} id={item} name={item} type="checkbox"/>
                <label  className={`text-[17px] font-semibold cursor-pointer `}  htmlFor={item} name={item} >{item}</label>
                </div>
              <div>
              </div>
      </form>
    ))
  }
  </>
)
}
