import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LandingPage from "../components/LandingCard";
import AboutUs from "../components/AboutUs";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="flex min-h-screen">
          <div className="flex-1 flex flex-col justify-center items-center p-8 bg-gray-100">
            <LandingPage />
          </div>
          <div className="flex-1 flex justify-center items-center p-8 bg-gray-100">
            <img
              src={require("../img/student_laptop.webp")}
              alt="Landing Animation"
              className="w-75 object-cover bg-gray-100"
            />
          </div>
        </div>
        <AboutUs/>
        <Footer />
      </div>
    );
  }
}

export default Home;
