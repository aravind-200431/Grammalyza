import React from 'react'

const ProductCard = (
    {url,image}
) => {
  return (
    <>
      <div className='flex-col justify-center items-center gap-4' >
         <a href={url} >
            <img src={image} className='md:w-[175px] md:h-[175px] w-[100px] h-[100px]' />
         </a>
      </div>
    </>
  )
}

export default ProductCard