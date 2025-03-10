import { BrowserRouter } from "react-router-dom"
import { Navigation, StarBackground, } from "./components";
import { lazy, useEffect } from "react";
import AchievementsShowcase from "./components/AchievementsShowcase";
import Tech from "./components/Tech";

const GoogleAnalytics = () => {
  useEffect(() => {
    if (!import.meta.env.VITE_GA_ID) {
      console.log("issues with GA");
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${
      import.meta.env.VITE_GA_ID
    }`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", import.meta.env.VITE_GA_ID);
  }, []);

  return null;
};


// Lazy load components
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills")); 
const Works = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
      <GoogleAnalytics />
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
