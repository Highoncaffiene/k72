import { useGSAP } from '@gsap/react'
import React, { useContext, useRef } from 'react'
import gsap from 'gsap'
import {NavbarContext} from '../../context/NavContext'

const FullScreenNav = () => {
  const  fullNavLinksRef = useRef(null) 
  const [navOpen, setNavOpen] = useContext(NavbarContext)
  const fullScreenRef = useRef(null)
  console.log(navOpen);

  
function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.1,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            delay: 0.1,
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }

    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])

    
  return (
    <div ref={fullScreenRef} id='fullscreennav' className=' fullscreennav h-screen w-full z-50  absolute text-white overflow-hidden'>
      <div  className='h-screen w-full fixed'>  
        <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
        
        
      </div>
      <div ref={fullNavLinksRef} className='relative'>
        <div className='navlink flex w-full justify-between p-4 items-start'>
        <div className="">
         <div className="w-31.5">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                      <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
        </div>
        </div>
        <div onClick={()=>{
          setNavOpen(false)
        }} className='Cross lg:h-32 lg:w-32 h-24 w-24 relative cursor-pointer'>
          <div className='Inside lg:h-44 lg:w-0.5 h-32 w-0.5 bg-white  absolute origin-top -rotate-45 '></div>
          <div className='Inside lg:h-44 lg:w-0.5 h-32 w-0.5 right-0 bg-white absolute origin-top rotate-45'></div>
        </div>
      </div>  
      <div className='py-40'>
         
          {/* The div the with marque effect */}
            <div className=' link origin-top relative  border-t-1 border-white'>
                <h1 className='font-[font2] text-[7vw] text-center uppercase leading-[0.7] pt-10'>Projects</h1>
               <div className=' moveLink absolute text-black flex h-full top-0 bg-[#D3FD50]'>
                 <div className='moveX flex items-center'>
                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.7] pt-10'>Pour Tout Voir</h2>
                    <img className=' h-24 mt-6 rounded-full w-72 object-cover shrink-0' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.7] pt-10'>Pour Tout Voir</h2>
                    <img className=' h-24 mt-6 rounded-full w-72 object-cover shrink-0' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                </div>
                 <div className='moveX flex items-center'>
                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.7] pt-10'>Pour Tout Voir</h2>
                    <img className=' h-24 mt-6 rounded-full w-72 object-cover shrink-0' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.7] pt-10'>Pour Tout Voir</h2>
                    <img className=' h-24 mt-6 rounded-full w-72 object-cover shrink-0' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                </div>
               </div>
            </div> 
            {/* 2nd marque */}
            <div className='link origin-top relative  border-t-1 border-white'>
                <h1 className='font-[font2] text-[7vw] text-center uppercase leading-[0.7] pt-10'>AGENCE</h1>
               <div className=' moveLink absolute text-black flex top-0 h-full bg-[#D3FD50]'>
                 <div className='moveX flex items-center'>
                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.7] pt-10'>Pour Tout savoir</h2>
                    <img className=' h-24 mt-6 rounded-full w-72 object-cover shrink-0' src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" alt="" />
                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.7] pt-10'>Pour Tout savoir</h2>
                    <img className=' h-24 mt-6 rounded-full w-72 object-cover shrink-0' src="https://k72.ca/images/teamMembers/PLP_640x280.jpg?w=640&h=290&s=e675a180832a690a53a22b25ea7fa365" alt="" />
                </div>
                 <div className='moveX flex items-center'>
                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.7] pt-10'>Pour Tout savoir</h2>
                    <img className=' h-24 mt-6 rounded-full w-72 object-cover shrink-0' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.7] pt-10'>Pour Tout savoir</h2>
                    <img className=' h-24 mt-6 rounded-full w-72 object-cover shrink-0' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                </div>
               </div>
            </div>
            {/* 3rd marque */}
            <div className=' link origin-top relative  border-t-1 border-white'>
                <h1 className='font-[font2] text-[7vw] text-center uppercase leading-[0.7] pt-10'>CONTACT</h1>
               <div className=' moveLink absolute text-black flex h-full top-0 bg-[#D3FD50]'>
                 <div className='moveX flex items-center'>
                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.7] pt-10'>Pour envoyer un fax</h2>
                    <img className=' h-24 mt-6 rounded-full w-72 object-cover shrink-0' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.7] pt-10'>Pour envoyer un fax </h2>
                    <img className=' h-24 mt-6 rounded-full w-72 object-cover shrink-0' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                </div>
                 <div className='moveX flex items-center'>
                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.7] pt-10'>Pour envoyer un fax</h2>
                    <img className=' h-24 mt-6 rounded-full w-72 object-cover shrink-0' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.7] pt-10'>Pour envoyer un fax</h2>
                    <img className=' h-24 mt-6 rounded-full w-72 object-cover shrink-0' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                </div>
               </div>
            </div>
            {/* 4th marque */}
            <div className=' link  origin-top relative  border-y-1 border-white'>
                <h1 className='font-[font2] text-[7vw] text-center uppercase leading-[0.7] pt-10'>BLOGUE</h1>
               <div className=' moveLink absolute text-black flex h-full top-0 bg-[#D3FD50]'>
                 <div className='moveX flex items-center'>
                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.7] pt-10'>lire les articles</h2>
                    <img className=' h-24 mt-6 rounded-full w-72 object-cover shrink-0' src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a" alt="" />
                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.7] pt-10'>lire les articles</h2>
                    <img className=' h-24 mt-6 rounded-full w-72 object-cover shrink-0' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                </div>
                 <div className='moveX flex items-center'>
                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.7] pt-10'>lire les articles</h2>
                    <img className=' h-24 mt-6 rounded-full w-72 object-cover shrink-0' src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a" alt="" />
                    <h2 className=' whitespace-nowrap font-[font2] text-[8vw] text-center uppercase leading-[0.7] pt-10'>lire les articles</h2>
                    <img className=' h-24 mt-6 rounded-full w-72 object-cover shrink-0' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                </div>
               </div>
            </div>


      </div>
      </div>
      
    </div>
  )
}

export default FullScreenNav;
