import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  return <div style={{ backgroundColor: "#023047" }} className=" min-h-screen">
    <Toaster/>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>;
};

export default App;
