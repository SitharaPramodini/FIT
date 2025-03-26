import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import StoriesHome from "./Components/Stories/StoriesHome";

// Lazy-loaded components
const Home = React.lazy(() => import("./Pages/Home"));
const Navbar = React.lazy(() => import("./Components/Navbar"));
const AboutUs = React.lazy(() => import("./Pages/AboutUs"));
const Stage = React.lazy(() => import("./Components/Awards/Stage"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const Services = React.lazy(() => import("./Pages/Services"));
const DatacenterDivider = React.lazy(() => import("./Components/Services/DatacenterDivider"));


function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    // Reload only once when navigating to "/awards"
    if (location.pathname === "/test/awards" && !sessionStorage.getItem("awardsPageReloaded")) {
      sessionStorage.setItem("awardsPageReloaded", "true");
      window.location.reload();
    } else if (location.pathname !== "/test/awards") {
      sessionStorage.removeItem("awardsPageReloaded");
    }
  }, [location]);

  return (
    <>
      {/* Navbar displayed across all routes */}
      <Navbar />

      <Routes>
        {/* Define all routes */}
        <Route path="/test/" element={<Home />} />
        <Route path="/test/aboutus" element={<AboutUs />} />
        <Route path="/test/stories" element={<StoriesHome />} />
        <Route path="/test/service/:index" element={<Services />} />
        <Route path="/test/slider" element={<DatacenterDivider />} />
        <Route path="/test/contact" element={<Contact />} />
        <Route path="/test/awards" element={<Stage />} />
        <Route path="*" element={<Navigate to="/test/" />} />
      </Routes>
    </>
  );
}

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
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
