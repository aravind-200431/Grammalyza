import React from 'react'
import Banner from '../assets/images/Banner.png'
import FeatureCard from '../Components/FeatureCard'
import Card from '../Components/Card'
import Mia from '../assets/images/mia.jpg'
import Aravind from '../assets/images/aravind.jpg'
import Rebecca from '../assets/images/Rebecca.jpg'
import R from '../assets/images/r.png'
import Linktronics from '../assets/images/linktronics.png'
import Logo from '../assets/images/Logo.png'
import Quibly from '../assets/images/quibly.png'
import ProductCard from '../Components/ProductCard'
import Chris from '../assets/images/chris.jpeg'


const Landingpage = () => {
  return (
    <>
     <div className='min-h-[calc(90vh-96px)] bg-[#ECEFF1]'>
       <div className='flex lg:flex-row flex-col justify-between items-center lg:gap-4  m-4 lg:mt-0'>

        <div className='lg:w-[50%] mt-2 w-full lg:p-7 p-4 text-left'>
           <h1 className='sm:text-4xl text-3xl mb-4 text-[#212121] font-bold underline underline-offset-4 font-sans'>Grammalyze</h1>
           <p className='text-[18px] font-semibold text-slate-600 ' >Grammalyze is your intelligent writing companion, 
              powered by advanced AI. It goes beyond simple spell-checking — analyzing your grammar, 
              punctuation, sentence structure, and writing tone in real-time. Whether you're writing emails, 
              reports, or creative content, 
              Grammalyze helps you communicate more clearly, professionally, and effectively with every keystroke.
           </p>
           <div className='flex gap-7  mt-7'>
             <a 
               href='#'
               className='border-2 border-green-400 text-green-400 font-bold px-4 py-2 rounded-md hover:bg-green-400 hover:text-white'
              >
              Check grammer
             </a>
              <a 
               href='#'
               className='border-2 border-[#3F51B5] px-4 py-2 rounded-md bg-[#3F51B5] text-white font-bold'
              
              >
               Give Feedback
              </a>
           </div>
        </div>
        <div className='lg:w-[50%] w-full lg:p-7 p-4 lg:ml-[100px] flex justify-center items-center'>
           <img src={Banner} className='lg:w-[500px] lg:h-[500px] h-[400px] w-[400px]' />
        </div>

       </div>
       <div className='flex flex-col justify-start items-center'>
         <h1 className='text-4xl font-bold font-mono text-slate-800 mt-2' >
           Features
         </h1>
         <div className='grid w-full lg:gap-7 gap-4 p-4 justify-start items-center auto-rows-min grid-cols-[repeat(auto-fit,minmax(250px,1fr))] '>
           <FeatureCard                     
               heading={"What It Does"} 
               points={[
                 "✅ Grammar & punctuation correction",
                 "✨ Smart rephrasing suggestions",
                 "🧠 Context-aware AI improvements",
                 "🌍 Multilingual support (Coming soon!)"
               ]} />
           <FeatureCard 
               heading={"How It Works"} 
               points={[
                 "Paste or write your content in the editor.",
                 "Grammalyze scans it using advanced AI.",
                 "You get real-time suggestions",
                 "fix them with a click!"
               ]} />
               <FeatureCard 
               heading={"Why Choose Grammalyze?"} 
               points={[
                 "Built with cutting-edge AI technology",
                 "Fast, intuitive, and distraction-free",
                 "Works on any device",
                 "Privacy-first: your content stays yours"
               ]} />
               <FeatureCard 
               heading={"Who It's For"} 
               points={[
                 "📚 Students: write better essays & reports",
                 "🧑‍💼 Professionals: send polished emails",
                 "✍️ Writers & bloggers: keep your voice, but error-free"
               ]} />
               <FeatureCard 
               heading={"Modern & Tech-Savvy"} 
               points={[
                 "Smarter Writing Starts Here.",
                 "AI-Powered Grammar. Human-Level Clarity.",
                 "Fix. Enhance. Impress.",
                 "Grammar Meets Intelligence."
               ]} />
               
               
         </div>
       </div>
       <div className='flex flex-col justify-center items-center mt-7 xl:m-[100px] m-2'>
         <h1 className='text-4xl font-bold font-mono text-slate-800 mt-2 mb-4' >User's Feedback</h1>
       <div className='grid w-full lg:gap-7 gap-4 p-4 justify-start items-center auto-rows-min grid-cols-[repeat(auto-fit,minmax(250px,1fr))] '>
          <Card 
             image={Mia}
             name="Mia"
             review="“Grammalyze has become my go-to tool for writing anything important. It catches mistakes that even other grammar tools miss — and the AI suggestions are super smart.”"
          />
          <Card 
             image={Chris}
             name="Chris"
             review="“I used to triple-check my emails before sending. Now I just run them through Grammalyze. It’s quick, accurate, and even rephrases awkward sentences beautifully!”"
          />
          <Card 
             image={Rebecca}
             name="Rebecca"
             review="“What I love most is how clean and simple the interface is. No clutter, just powerful grammar correction & great suggestions.Grammalyze has helped me write more confidently”"
          />
       </div>
       </div>
       <div className='flex flex-col justify-start items-center mb-[100px]'>
          <h1 className='text-4xl font-bold font-mono text-slate-800 sm:mt-0 mt-4 mb-4'>Products</h1>
          <div className='flex  justify-center items-center gap-4' >
             <ProductCard
                   image={Quibly}
                   url="https://quibly-task.netlify.app/"
                   
             />

              <ProductCard
                   image={Linktronics}
                   url="https://linktronics.netlify.app/"
             />

              <ProductCard
                   image={R}
                   url="#"
             />

              <ProductCard
                   image={Logo}
                   url="#"
             />
          </div>
       </div>
     </div>
    </>
  )
}

export default Landingpage

