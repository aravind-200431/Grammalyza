import React, { useState } from 'react'
import api from '../Api/api'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [IsLoading,SetIsLoading]=useState(false);
  const navigate=useNavigate();
  const [Form,SetForm]=useState({
     username:"",
     email:"",
     password:""
  })

  const handleSubmit=async (e)=>{
    SetIsLoading(true);
      
     e.preventDefault();
     
      try{
        SetIsLoading(true);

        const res=await api.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`,Form)
        console.log(res.data);
        const responseData=res.data;
        localStorage.setItem("USER",responseData.username);
        navigate("/login");

        toast.success(`🎉 Welcome aboard, ${responseData.username}!`);

      }catch(err){
         console.log(err);
      }finally{
        SetIsLoading(false);
      }


  }
  return (
    <>
     <div className='flex justify-center items-center min-h-[calc(90vh-96px)]'>
       <div className='flex flex-col justify-start sm:p-7 p-5 border-1 border-[#3F51B5] gap-7 shadow-2xl shadow-slate-400 sm:w-[450px] sm:h-fit h-[500px] w-[330px] sm:py-14 py-8 w-[]  rounded-md my-14 items-center'>
         <h1 className='text-4xl font-bold text-slate-800 mb-4'>Signup</h1>
         <form onSubmit={handleSubmit} className='flex flex-col gap-2 justify-center items-center' >

            <div className='flex-col  justify-start items-center'>
               <label className='text-xl font-semibold text-slate-600'>
                 Username
               </label>
            <input 
               placeholder='Ex: John Doe'
               type='text'
               name='username' 
               onChange={(e)=> SetForm({...Form,username:e.target.value})}
               className='w-full border-1 border-[#3F51B5] outline-0 
                       placeholder:text-slate-500 rounded-md sm:px-14 
                         px-7 py-2 text-md text-slate-800 font-semibold mt-1' 
               required
                         
            />
            </div>
            
            
            <div className='w-full flex-col justify-center items-center'>
              <label className='text-xl font-semibold text-slate-600' >
               E-mail
              </label>
            <input 
               placeholder='Ex: JohnDoe@gmail.com' 
               type='email'
               name='email'
               onChange={(e)=> SetForm({...Form,email:e.target.value})}
               className='w-full border-1 border-[#3F51B5] outline-0 
                        placeholder:text-slate-500 rounded-md sm:px-14 
                          px-7 py-2 text-md text-slate-800 font-semibold mt-1' 
               required

             />
            </div>
            
            <div className='flex-col justify-start items-center'>
               <label className='text-xl font-semibold text-slate-600' >
                  password
               </label>
            <input 
               placeholder='...........' 
               type='password'
               name='password'
               onChange={(e)=> SetForm({...Form,password:e.target.value})}
               className='w-full border-1 border-[#3F51B5] outline-0 
                        placeholder:text-slate-500 rounded-md sm:px-14 
                          px-7 py-2 text-md text-slate-800 font-semibold mt-1' 
               required        
            />
                          
            </div>
            

            <button className='w-full border-1 mt-4 border-[#3F51B5] hover:text-white transition-all px-4 py-2 rounded-md bg-[#3F51B5] text-xl font-semibold text-[#00BCD4] ' >
               {
                IsLoading ? "Loading..." : "Submit"
               }
            </button>
         </form>
         <div className='flex gap-2' >
            <p>Already have an account?</p>
            <Link to="/login" className='text-blue-500 font-semibold underline underline-offset-1' >
              Login
            </Link>
         </div>
       </div>
     </div>
    </>
  )
}

export default Signup