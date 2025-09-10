import React from 'react'
import { FcAbout } from "react-icons/fc";
import { LuSearchCheck } from "react-icons/lu";
import { TiSortAlphabetically } from "react-icons/ti";
import { CgSmartphoneChip } from "react-icons/cg";
import { GiArtificialHive } from "react-icons/gi";
import { IoGlobeOutline } from "react-icons/io5";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa6";

const About = () => {
  return (
    <>
     <div className='flex flex-col sm:p-7 p-4 justify-start items-center min-h-[calc(90vh-96px)]' >
       
          <div className='w-full flex flex-col sm:gap-4 gap-7' >
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
               <FcAbout size={32} />
               <h1 
                className='text-2xl font-bold text-[#00BCD4]'
              >
                About Grammalyze
              </h1>
              </div>
              
            <p className='text-md font-semibold text-slate-600'>
              Grammalyze is an intelligent writing assistant designed to help you write with clarity, 
              confidence, and correctness. Powered by advanced AI, 
              Grammalyze corrects grammar, punctuation, spelling, 
              and style in real time — whether you're drafting an email, 
              composing an essay, or posting on social media.
            </p>
            </div>
            <div className='flex flex-col gap-2' >
               <div className='flex gap-2'>
                 <LuSearchCheck size={32} className='text-green-600' />
                 <h1 className='text-2xl text-[#00BCD4] font-bold' >
                   What Grammalyze Does
                 </h1>   
               </div>
               <ul className='flex flex-col gap-2 sm:ml-7 ml-4' >
                   <li>
                     <div className='flex gap-2'>
                        <TiSortAlphabetically size={28} />
                        <h1 className='text-xl text-[#3F51B5] font-bold' >
                          Grammar & Punctuation Correction
                        </h1>
                     </div>
                     <p className='font-semibold text-slate-600' >
                       Instantly fix mistakes and polish your writing to perfection.
                     </p>
                   </li>
                   <li>
                     <div className='flex gap-2'>
                        <CgSmartphoneChip size={28} />
                        <h1 className='text-xl text-[#3F51B5] font-bold' >
                          Smart Rephrasing Suggestions
                        </h1>
                     </div>
                     <p className='font-semibold text-slate-600' >
                       Get context-aware rewrites that sound more natural and engaging.
                     </p>
                   </li>
                    <li>
                     <div className='flex gap-2'>
                        <GiArtificialHive size={28} />
                        <h1 className='text-xl text-[#3F51B5] font-bold' >
                          AI Writing Enhancements
                        </h1>
                     </div>
                     <p className='font-semibold text-slate-600' >
                       Improve sentence structure, tone, and flow — all tailored to your intent.
                     </p>
                   </li>
                    <li>
                     <div className='flex gap-2'>
                        <IoGlobeOutline size={28} />
                        <h1 className='text-xl text-[#3F51B5] font-bold' >
                          Multilingual Support (Coming Soon)
                        </h1>
                     </div>
                     <p className='font-semibold text-slate-600' >
                       Write confidently in multiple languages, not just English
                     </p>
                   </li>
                   <li>
                     <div className='flex gap-2'>
                        <RiGitRepositoryPrivateFill size={28} />
                        <h1 className='text-xl text-[#3F51B5] font-bold' >
                          Privacy-Focused
                        </h1>
                     </div>
                     <p className='font-semibold text-slate-600' >
                       We don’t store your texts. Your content stays yours — secure and private.
                     </p>
                   </li>
                 </ul>
               
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <FaLightbulb size={30} className='text-yellow-300' />
                <h1 className='text-2xl font-bold text-[#00BCD4]' >
                   Why We Built Grammalyze
                </h1>
              </div>
              <p className='text-slate-600 font-semibold text-md' >
                Writing is a core part of how we connect, create, and share ideas. 
                 But not everyone feels confident about grammar, tone, or clarity. 
                 Grammalyze was created to bridge that gap — making powerful writing 
                 assistance accessible, intuitive, and fast.

                 Whether you're a student, professional, or content creator, Grammalyze 
                 helps you express yourself more clearly and effectively.
              </p>
            </div>
            
          </div>
        
     </div>
    </>
  )
}

export default About