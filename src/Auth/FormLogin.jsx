/* eslint-disable react-refresh/only-export-components */
import { useState,memo } from "react";


const FormLogin  =()=>  {
const [formLogin,setFormLogin] = useState({
  userName:"",
  password:""
})


const HandelChange = (e)=>{
  const {name,value} = e.target
  setFormLogin(prev => ({
    ...prev,
    [name]:value
  }))
  console.log(name,value);
}

const HandelSubmit = (e)=>{
  e.preventDefault()
  console.log("dd");
}

  return (
    <div>
    <div className="h-[500px]  flex container justify-center">
      <form onSubmit={HandelSubmit} className=" w-[500px] max-w-[500px] px-2 sm:p-7  flex flex-col gap-4 justify-center border shadow-l rounded-md items-start ">
        <p className="text-[24px] font-bold">Login</p>
        <div className="container w-full  h-[1px] bg-[#eeeff2]  mx-auto mt-2 mb-6"></div>
        <label>Username or email address <span className="text-red-500">*</span></label>
        <input name="userName" value={formLogin.name} onChange={HandelChange} type="text" placeholder="Enter Your Name"  className="p-5 outline-none border rounded-full w-full" />
        <label>Password <span className="text-red-500">*</span></label>
        <input name="password" value={formLogin.password} onChange={HandelChange} type="text" placeholder="Enter Your Password"  className="p-5 outline-none border rounded-full w-full" />
      <button className="rounded-full text-white bg-[#004CFF] w-full h-[55px]"> Log in </button>
      </form>
    </div>
    </div>
  )
}

export default memo(FormLogin)