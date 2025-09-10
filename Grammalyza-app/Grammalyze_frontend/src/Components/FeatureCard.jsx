import React from 'react'

const FeatureCard = ({
    heading='',
    points=[]
}) => {
  return (
    <>
    <div className='bg-[#3F51B5] p-7 w-full rounded-2xl flex flex-col '>
        <h1 className='text-xl text-[#00BCD4] font-bold mb-4' >{heading}</h1>
        <p className='text-md text-white font-semibold'>
          {
            points.map((point,index)=>(
                <li key={index} >{point}</li>
            ))
          }
        </p>

    </div>
    </>
  )
}

export default FeatureCard