import React, {lazy} from "react";
import LandingPage from "../Components/Home-Components/LandingPage";
import Discover from "../Components/Home-Components/Discover";
import WhyChoose from "../Components/Home-Components/WhyChoose/WhyChoose";
import ConnectingClients from "../Components/Home-Components/Connecting/ConnectingClients";
import MiddlePage from "../Components/Home-Components/MiddlePage";
import CardList from "../Components/Home-Components/CardList/CardList";
import Projects from "../Components/Home-Components/Projects/Projects";
import ClientStories from "../Components/Home-Components/ClientStories";
import Footer from "../Components/Home-Components/Footer";
import Matrix from "../Components/Home-Components/Matrix";
import ContactUs from "../Components/Home-Components/ContactUs";


export default function Home() {


  return (
    <div className="">
      <LandingPage />
      <Discover />
      <WhyChoose />
      <ConnectingClients />
      {/* <MiddlePage /> */}
      <CardList />
      <Projects />
      <ClientStories />
      {/* <Matrix /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}
