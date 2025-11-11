function ProjectCard(props){

    return(
      <>
                 <div className="w-1/2 h-full group transition-all relative rounded-none hover:rounded-[50px] overflow-hidden">
                 <img className="h-full w-full object-cover" src={props.image1} alt="" />
                 
                 <div className="opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center">
                    <h2 className="uppercase text-6xl font-[font1] border-2 rounded-full pt-4 px-4 text-white border-white">VOIR LE PROJETS</h2>
                 </div>
                 </div>
                 <div className="w-1/2 h-full group transition-all relative rounded-none hover:rounded-[50px] overflow-hidden">
                 <img className="h-full w-full object-cover" src={props.image2} alt="" />
                 
                 <div className="opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center">
                    <h2 className="uppercase text-6xl font-[font1] border-2 rounded-full pt-4 px-4 text-white border-white">VOIR LE PROJETS</h2>
                 </div>
                 </div>
      </>
         
    )


}

export default ProjectCard