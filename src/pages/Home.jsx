import Videos from "../Components/home/vid"
import HomeHeroText from "../Components/home/homeherotext"
import HomeBottomText from "../Components/home/homebottomtext"

function Home(){

    return(<div>
    <div className="h-screen w-screen fixed">
        <Videos/>
    </div>  

    <div className="h-screen w-screen relative overflow-hidden flex flex-col justify-between">
        <HomeHeroText/>
        <HomeBottomText/>
        

    </div>
    
    </div>)
}

export default Home