import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoriesHome from "./Components/Stories/StoriesHome";

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
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/stories" element={<StoriesHome />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
