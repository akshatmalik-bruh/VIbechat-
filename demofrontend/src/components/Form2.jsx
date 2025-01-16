import { useForm } from "react-hook-form"
import axios from 'axios'
import {useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authcontext"


export default function Form2() {
    const {login} = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

const Navigate = useNavigate()
  const onSubmit = async(data) => {
    await axios.post("http://localhost:3000/posts/login", data).then((res) =>{
if(res.status){
    console.log(res.data.token);
    login(res.data.token);
    Navigate('/Main/');
}
  
        
        });
  
  }


   // watch input value by passing the name of it


  return (

    
    <form className = "h-screen flex flex-col items-center justify-center bg-custom-bg bg-cover w-full  text-white " onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-8 border-2 rounded-2xl items-center backdrop-blur-3xl  p-8">
      <h1 className = "text-3xl ">Sign IN</h1>
      <input placeholder="enter the email" {...register("email")} className ="p-4 rounded-2xl text-black  "/>


      
      <input  {...register("password", { required: true })} placeholder="enter the password" className ="p-4 rounded-2xl text-black" />
    
    


      
      <input type="submit" className ="p-3 rounded-2xl text-white bg-slate-400" defaultValue= "submit"/>
    </div></form>
  )
}