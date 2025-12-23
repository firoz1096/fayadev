import { useEffect, useState } from "react";
import "../src/custom.scss";

import Loader from "./components/Loader";
import AboutHome from "./components/AboutHome";
import ContactHome from "./components/ContactHome";
import HomeCoverContent from "./components/HomeCoverContent";
import MainHeader from "./components/MainHeader";
import MiniFooter from "./components/MiniFooter";
import Portfolio from "./components/Portfolio";
import ServicesHome from "./components/ServicesHome";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";

function App() {
  const [loading, setLoading] = useState(
    !sessionStorage.getItem("siteLoaded")
  );

  useEffect(() => {
    if (!loading) return;

    const handlePageLoad = async () => {
      // wait for fonts
      if (document.fonts) {
        await document.fonts.ready;
      }

      sessionStorage.setItem("siteLoaded", "true");
      setLoading(false);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, [loading]);

  if (loading) return <Loader />;

  return (

    <div className="App">
      <div id="home" className="bg_home_section">
        <MainHeader />
        <HomeCoverContent />
      </div>

      <AboutHome />
      <ServicesHome />
      <Portfolio />
      <StatsSection />
      <ContactHome />
      <Testimonials />
      <MiniFooter />
    </div>
   
  );
}

export default App;
