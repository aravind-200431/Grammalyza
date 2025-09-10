import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { useParams, useSearchParams } from 'react-router-dom'

const Result = () => {
  const [searchParam]=useSearchParams();
  const data=searchParam.get("data");
  const [Iscopy,SetIsCopy] = useState(false);
  const [IsLoading,SetIsLoading]=useState(false);

  useEffect(()=>{
     try{
       SetIsLoading(true);
     }finally{
       SetIsLoading(false);
     }
  },[]);

  return (
    <>
     <div className='flex flex-col justify-center items-center min-h-[calc(90vh-96px)]'>

      {
        IsLoading ? <div className='flex justify-center items-center flex-col gap-2'>
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
                            </div> : <div className='flex flex-col justify-center items-center text-center' >
          <h1 className='text-3xl mt-2 text-[#3F51B5] font-bold mb-4' >
            Here's your corrected sentence
          </h1>
          <textarea
            className='border-1 whitespace-pre-wrap border-[#3F51B5] sm:h-[400px] sm:w-[500px] h-[400px] w-[350px] p-4 rounded-md'
            name='result'
            defaultValue={data}
          >
            
    
          </textarea>
          <CopyToClipboard
              text={data}
              onCopy={()=> SetIsCopy(true)}
          >
             <button
                className={`${Iscopy ? "bg-green-400 text-white" : "bg-[#3F51B5] text-white hover:text-[#00BCD4]"}  mt-2 px-4 py-2 sm:w-full w-[85%] mb-4  font-semibold  rounded-md`}
             >
                {
                    Iscopy ? "Copied" : "Copy"
                }
             </button>
          </CopyToClipboard>
        </div>
      }
        
         
     </div>
    </>
  )
}

export default Result