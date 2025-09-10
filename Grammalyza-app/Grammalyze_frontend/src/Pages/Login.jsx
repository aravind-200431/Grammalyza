import React, { useState } from 'react'
import api from '../Api/api';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [IsLoading,SetIsLoading]=useState(false);
    const navigate=useNavigate();
    const user=localStorage.getItem("USER");
    const [Form,SetForm]=useState({
        username:"",
        password:""
    });

    const handleSubmit=async (e)=>{
        e.preventDefault();

        try{
            SetIsLoading(true);
            
            const res=await api.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`,Form);
            const resultData=res.data;
            const token=resultData.token;

            console.log(token);
            localStorage.setItem("JWT_TOKEN",token);

            navigate("/chatbot");
            toast.success(`Welcome ${user}`);
        }catch(err){
             console.log(err);
        }finally{
            SetIsLoading(false);
        }

    }
  return (
    <>
     <div className='flex  w-full justify-center items-center min-h-[calc(90vh-96px)]' >
        
        <div className='flex p-7 flex-col justify-start items-center gap-2 border-1 sm:w-[420px] w-[320px] border-slate-600 rounded-md shadow-2xl shadow-slate-400'>
           <h1 className='text-4xl font-bold text-slate-800'>
             Login
           </h1>
            <form 
               onSubmit={handleSubmit}
               className='flex-col px-4 py-7 justify-items-start items-center' >
               <div>
                  <label className='text-xl text-slate-600 font-semibold' >
                    Username
                  </label>
                  <input 
                     type='text'
                     name='username'
                     onChange={(e)=> SetForm({...Form,username:e.target.value})}
                     className='border-1 text-slate-600 rounded-md w-full px-7 py-2 mt-1 mb-1'
                     placeholder='Ex: John Doe'
                  
                  />
               </div>
               <div>
                  <label className='text-xl font-semibold text-slate-600' >
                    Password
                  </label>
                  <input 
                     type='password'
                     name='password'
                     onChange={(e)=> SetForm({...Form,password:e.target.value})}
                     className='border-1 text-slate-600 rounded-md w-full px-7 py-2 mt-1 mb-1'
                     placeholder='..........'
                  
                  />
               </div>
               <button 
                  type='submit'
                  className='w-full text-xl border-1 mt-4 border-[#3F51B5] bg-[#3F51B5] text-[#00BCD4] font-semibold hover:text-white px-4 py-2 rounded-md'>
                  {
                    IsLoading ? "Loading..." : "Submit"
                  }
               </button>
            </form>
            <div className='flex gap-2' >
               <p>Doesn't have an account?</p>
               <Link to="/signup" className='text-blue-500 font-semibold underline underline-offset-1'>
                 Signup
               </Link>
            </div>
        </div>
     </div>
    </>
  )
}

export default Login