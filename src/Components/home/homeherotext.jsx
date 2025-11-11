import React from 'react'
import Videos from "./vid.jsx"

const HomeHeroText = () => {
  return (
    <div  className='font-[font1] pt-5 mt-72 lg:mt-0 text-center'>
        <div className='lg:text-[9.5vw] text-[11.5vw] uppercase lg:leading-[8vw] leading-[10vw]' >L'étincelle</div>

        <div className='lg:text-[9.5vw] text-[11.5vw] uppercase lg:leading-[8vw] leading-[10vw] flex  justify-center item-center' >qui
            <div className='h-[7vw] w-[16vw] rounded-full -mt-2 overflow-hidden'>
            <Videos/>
            </div>
            génère
        </div>
        
        <div className='lg:text-[9.5vw] text-[11.5vw] uppercase lg:leading-[8vw] leading-[10vw] flex justify-center items-center' >la créativité</div>
    </div>
  )
}

export default HomeHeroText
