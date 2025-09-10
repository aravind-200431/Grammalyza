import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { MutatingDots } from 'react-loader-spinner';

const Logout = () => {
    const [IsLoading,SetIsLoading]=useState(false);
    const navigate=useNavigate();

    useEffect(()=>{
      try{
         SetIsLoading(true);
         localStorage.removeItem("JWT_TOKEN");
         navigate("/login");
         toast.success("Logged out successfully!");
      }catch(err){
         console.log(err);
         toast.error("Error logging you out!")
      }finally{
        SetIsLoading(false);
      }
    },[])
  return (
    <>
    <div className='flex justify-center items-center min-h-[calc(90vh-96px)]' >
        {
        IsLoading && <div className='flex justify-center items-center flex-col gap-2'>
                      <MutatingDots
                          visible={true}
                          height="100"
                          width="100"
                          color="#3F51B5"
                          secondaryColor="#00BCD4"
                          radius="12.5"
                          ariaLabel="mutating-dots-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                       />
                       <p className='text-xl font-semibold' >
                         Loading...
                       </p>
                    </div>
            
              
      }
    </div>
    </>
  )
}

export default Logout