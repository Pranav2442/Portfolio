import { BrowserRouter } from "react-router-dom"
import { Navigation, StarBackground, } from "./components";
import { lazy } from "react";
import AchievementsShowcase from "./components/AchievementsShowcase";
import Tech from "./components/Tech";


// Lazy load components
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills")); 
const Works = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
        <StarBackground/>
        <Navigation/>
        <Tech/>
        </div>
        <Experience/>
        <Skills/>
        <Works/>
        <AchievementsShowcase/>
        <div className="relative z-0">
          <Contact/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
