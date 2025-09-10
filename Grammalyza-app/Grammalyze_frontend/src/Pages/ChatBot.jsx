import React, { useState } from 'react'
import api from '../Api/api'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ChatBot = () => {
  const [IsLoading,SetIsLoading] = useState(false);
  const navigate=useNavigate();
  const token=localStorage.getItem("JWT_TOKEN");
  const [Form,SetForm] = useState({
     sentence:"",
     query:""
  });

 const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
       SetIsLoading(true);

       const response=await api.post(`${import.meta.env.VITE_BACKEND_URL}/api/grammer/query`,Form,{
         headers:{
           Authorization: `Bearer ${token}`,
           "Content-Type":"application/json",
           Accept:"application/json"
         }
       });
       
       console.log(response.data);
       const result=response.data;
       
       navigate(`/result?data=${result}`);
       toast.success("Result generated!")

    }catch(err){
      console.log(err);
      toast.error("Oops! something went wrong")
    }finally{
       SetIsLoading(false);
    }
 }

  return (
    <>
     <div className='flex flex-col justify-start sm:mt-[25px] mt-[100px] items-center min-h-[calc(90vh-96px)]' >
        <div className='flex flex-col justify-start items-center'>
          <form onSubmit={handleSubmit}>
           <div>
             <h1
               className='text-3xl font-bold text-[#3F51B5] font-sans mb-4'
             >
               Error Sentence to Process
             </h1>
             <textarea 
               name='sentence'
               onChange={(e)=> SetForm({...Form,sentence:e.target.value})}
               className='border-1 sm:w-[500px] sm:h-[400px] w-[350px] h-[300px] text-md  text-slate-600 font-semibold p-4 rounded-md'
               placeholder='What to fix?'
             >

             </textarea>
           </div>
           <div className='mt-4 mb-7'>
             <h1
               className='text-3xl font-bold text-[#3F51B5] font-sans mb-4'
             >
              Enter Your Query
             </h1>
             <input 
               type='text'
               name='query'
               onChange={(e)=> SetForm({...Form,query:e.target.value}) }
               placeholder='What to do?'
               className='sm:w-full text-md font-semibold text-slate-600 w-[350px] border-1 rounded-md px-4 py-2'
              
             />
           </div>
           <button
              type='submit'
              className='w-full mb-4 px-4 py-2 transition-all hover:text-[#00BCD4] bg-[#3F51B5] text-white rounded-md text-xl font-semibold'
           >
              {
                IsLoading ? "Loading..." : "Submit"
              }
           </button>
          </form>
        </div>
     </div>
    </>
  )
}

export default ChatBot