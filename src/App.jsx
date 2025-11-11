import { Route, Routes, useHref } from "react-router-dom";
import Home from './pages/Home'
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Navbar from "./Components/Navigation/Navbar";
import FullScreenNav from "./Components/Navigation/FullScreenNav";



function App() {

  return (
    <div className="overflow-x-hidden">
    <Navbar/>
    <FullScreenNav/>
    <div className="text-6xl text-white">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Agence" element={<Agence/>} />
        <Route path="/Projects" element={<Projects/>} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
