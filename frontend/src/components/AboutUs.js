import React from 'react';

function AboutUs() {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img 
              src={require("../img/about.jpg")}
              className="rounded-lg shadow-lg w-75 h-auto object-cover" 
              alt="About Us" 
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="about-text">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are dedicated to providing the best experience for our users. 
                Our mission is to create meaningful solutions that empower people 
                and make a positive impact on the world. Join us on this journey!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
