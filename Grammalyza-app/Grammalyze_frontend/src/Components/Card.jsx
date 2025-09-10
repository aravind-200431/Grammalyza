import React from 'react'


const Card = (
    { name,image,review }
) => {
  return (
    <>
     <div className='flex-col justify-start  text-center items-center gap-2 bg-[#00BCD4] rounded-2xl' >
        <div className='flex justify-center items-center m-4'>
          <img src={image} className='w-[200px] h-[200px] rounded-[50%] border-4 border-white bg-center '/>
        </div>
        
        <h1 className='text-3xl font-bold text-slate-800 mb-2' >{name}</h1>
        <p className='bg-[#3F51B5] rounded-md p-4 text-md text-white font-semibold'>
            {review}
        </p>
     </div>
    </>
  )
}

export default Card