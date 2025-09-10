import React, { useState } from 'react'
import Logo from '../assets/images/Logo.png'
import { RxCrossCircled } from 'react-icons/rx';
import { IoIosMenu } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [navbarOpen,Setnavbaropen]=useState(false);
  const path=useLocation().pathname;
  const token=localStorage.getItem("JWT_TOKEN");
  return (
    <>
     <div className='flex p-9  w-full h-[8vh] bg-[#3F51B5] justify-between items-center'>
        <img src={Logo} className='w-[60px] h-[60px]' />

        <ul className={`flex  sm:gap-7 gap-4 sm:items-center sm:mt-1 sm:pt-0 pt-3 sm:pl-0 pl-7  text-[#00BCD4] font-semibold sm:static absolute left-0 top-[62px] sm:shadow-none shadow-md
            ${navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"}
            transition-all duration-100 sm:h-fit text-xl sm:bg-none bg-[#3F51B5] sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0
            `}>
          <li className={`${path === '/' && "text-white font-semibold drop-shadow-[0px_0px_39px_rgba(255,255,255,0.9)]" }`} >
            <Link to="/" >
              Home
             </Link>
          </li>
          <li className={`${path === '/about' && "text-white font-semibold drop-shadow-[0px_0px_39px_rgba(255,255,255,0.9)]"}`} >
            <Link to="/about" >
              About
             </Link>
          </li>

          {
             !token && <li className={`${path === '/signup' && "text-white font-semibold "} px-3 py-1.5 bg-[#00BCD4] w-fit rounded-md text-[#3F51B5]`} >
                         <Link to="/signup" >
                           Signup
                         </Link>
                       </li>
          }
          
          {
            
            token && <li className={`${path === '/feedback' && "text-white font-semibold drop-shadow-[0px_0px_39px_rgba(255,255,255,0.9)]"}`} >
                       <Link to="/feedback" >
                         Feedback
                       </Link>
                     </li>
          }
          
          {
            token && <li className={`${path === '/chatbot' && "text-white font-semibold drop-shadow-[0px_0px_39px_rgba(255,255,255,0.9)] "}`} >
                      <Link to="/chatbot" >
                         Review & Fix
                      </Link>
          </li>
          }

          {
            token && <li className='text-white font-semibold w-fit px-2 py-1 bg-red-500 rounded-md hover:bg-red-600 transition-all'>
                   <Link to="/logout" >
                      Logout
                   </Link>              
            </li>
          }
          
        </ul>
         <button
           onClick={()=> Setnavbaropen(!navbarOpen)}
           className='sm:hidden flex items-center sm:mt-0 mt-2'
        >

          {navbarOpen ? (
             <RxCrossCircled className='text-white text-3xl' />
          ) : (
             <IoIosMenu className='text-white text-3xl' />
          )}

        </button>
     </div>
    </>
  )
}

export default NavBar