import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
export default function AboutUser() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async(data) => {
        await axios.post("")


};
  console.log(errors);

  
  return (
    <form onSubmit={handleSubmit(onSubmit) }className = "h-screen flex flex-col items-center justify-center bg-custom-bg bg-cover w-full  text-white ">
        
        <div className = "p-5 text-black flex flex-col gap-4 rounded-2xl items-center backdrop-blur-3xl border-solid  ">
        <h1 className = "text-3xl text-white">Enter the required details</h1>
      <input type="number" className = "p-4 rounded-xl" placeholder="Height" {...register("Height", {required: true, max: 210, min: 80})} />
      <input type="text" className = "p-4 rounded-xl" placeholder="Gender" {...register("Gender", {required: true, maxLength: 4})} />
      <input type="text" className = "p-4 rounded-xl" placeholder="Hobby" {...register("Hobby", {required: true})} />
      <input type="text" className = "p-4 rounded-xl" placeholder="Course" {...register("Course", {required: true, maxLength: 4})} />
      <input type="number" className = "p-4 rounded-xl" placeholder="Year" {...register("Year", {required : true, maxLength: 2})} />

      <input type="submit" className = "text-white bg-slate-400 p-4 rounded-xl" />
    </div>
    </form>
    
  );
}