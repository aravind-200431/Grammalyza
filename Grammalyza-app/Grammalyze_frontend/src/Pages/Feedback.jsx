import React, { useState } from 'react'
import api from '../Api/api'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Feedback = () => {
  const token=localStorage.getItem("JWT_TOKEN");
  const [IsLoading,SetIsLoading]=useState(false);
  const [Form,SetForm]=useState({
     feedback:""
  });
  const navigate=useNavigate();

  const handleSubmit= async(e)=>{
      e.preventDefault();

      try{
        SetIsLoading(true);
        const response=await api.post(`${import.meta.env.VITE_BACKEND_URL}/feedback/add`,Form,{
          headers:{
            Authorization: `Bearer ${token}`,
            Accept:"application/json",
            "Content-Type":"application/json"
          }
        });

        console.log(response.data);
        const message=response.data;
        navigate("/");
        
        toast.success(`${message}`);
      }catch(err){
         console.log(err);
         toast.error("Oops! something went wrong");
      }finally{
         SetIsLoading(false);
      }
  }
  return (
    <>
     <div className='flex flex-col justify-start items-center min-h-[calc(90vh-96px)]' >
        <div className='flex flex-col mt-[75px] justify-start items-center' >
           <h1 className='text-2xl font-semibold mb-4 text-[#3F51B5]' >
             We are happy to hear from you 💜
           </h1>
           <form
             onSubmit={handleSubmit} 
             className='flex flex-col gap-2 justify-start items-center'
           >
             <textarea 
               className='sm:w-[500px] p-4 sm:h-[400px] w-[375px] h-[400px] text-md font-semibold text-slate-800 border-1 rounded-md'
               placeholder='Your opinion matters'
               onChange={(e)=> SetForm({...Form,feedback:e.target.value})}
             >

             </textarea>
             <button
                type='submit'
                className='w-full mb-4 px-4 py-2 transition-all hover:text-white bg-[#3F51B5] rounded-md text-md font-semibold text-[#00BCD4]'
             >
               {
                 IsLoading ? "Sending 💌..." : "Submit"
               }
             </button>
           </form>
        </div>
     </div>
    </>
  )
}

export default Feedback