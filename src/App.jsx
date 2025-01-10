import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoriesHome from "./Components/Stories/StoriesHome";
// import Informationsecurity from "./Pages/InformationSecurity";
import Services from "./Pages/Services";
import ServiceSlider from "./Components/Services/ServiceSlider";
import DatacenterDivider from "./Components/Services/DatacenterDivider";
import Contact from "./Pages/Contact";
import Stage from "./Components/Awards/Stage";

const Home = React.lazy(() => import("./Pages/Home"));
const Navbar = React.lazy(() => import("./Components/Navbar"));
const AboutUs = React.lazy(() => import("./Pages/AboutUs"));

function App() {
  useEffect(() => {
    // Restore the scroll position on page load
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }

    // Save the scroll position before the page unloads
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <BrowserRouter>
      {/* Suspense Wrapper */}
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/fit/" element={<Home />} />
          <Route path="/fit/aboutus" element={<AboutUs />} />
          <Route path="/fit/stories" element={<StoriesHome />} />
          <Route path="/fit/service/:index" element={<Services />} />

          <Route path="/fit/slider" element={<DatacenterDivider />} />
          {/* <Route path="/fit/consultancyservices" element={<ConsultancyServices />} /> */}

          {/* services */}
          {/* <Route path="/fit/stories" element={<StoriesHome />} /> */}
          <Route path="/fit/contact" element={<Contact />} />
          <Route path="/fit/awards" element={<Stage />}></Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
