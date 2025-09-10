import React from 'react'
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
     <footer className='relative z-40 p-8  bg-[#3F51B5]'>
       <div className='container mx-auto lg:py-9 py-7 lg:px-14  flex flex-col gap-4 lg:flex-row lg:justify-between'>
         <div className='lg:text-left text-center' >
            <h2 className='text-2xl font-bold text-[#00BCD4]' >Grammalyze</h2>
            <p className='text-md font-semibold text-[#00BCD4]'>"Let Your Writing Speak Fluently."</p>
         </div>
         <div className='text-center'>
            <p className='text-xl font-bold text-[#00BCD4] lg:mt-0 mt-4 '>
                &copy; 2020 DJ's Soul
            </p>
            <p className='text-[#00BCD4] font-semibold lg:mt-0 mt-1 '>Delievering excellence since 2019</p>
         </div>
         <div className='flex lg:gap-7 gap-4 lg:px-7 justify-center items-center text-[#00BCD4] lg:mt-0 mt-4'>
           <a href='mailto:daravindsuresh@gmail.com'>
             <SiGmail size={28}  className='hover:text-red-500 transition-all' />
           </a>
           <a href='tel:+919345780385'>
            <FaWhatsapp size={28} className='hover:text-green-400 transition-all' />
           </a>
           <a href='https://www.linkedin.com/in/aravind-d-277388303/'>
            <FaLinkedinIn size={28} className='hover:text-blue-600 transition-all'  />
           </a>
           <a href='https://github.com/aravind-200431'>
             <FaGithub  size={28} className='hover:text-slate-950 transition-all' />
           </a>
         </div>
       </div>
     </footer>
    </>
  )
}

export default Footer