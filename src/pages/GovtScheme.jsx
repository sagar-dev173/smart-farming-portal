import React from "react";
import { schemesData } from "../data/schemesData";
import SchemeCard from "../components/SchemeCard";
import Footer from "../components/Footer";

const GovtScheme = () => {
  return (

    <div className="min-h-screen bg-linear-to-br from-green-50 to-green-100 relative">
      {/* Header Banner */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl mb-10">

        {/* Banner Image */}
        <img
          src="/farm1.jpg"
          className="w-full h-full object-cover"
          alt="Farming Banner"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-green-900/60 to-transparent"></div>

        {/* Banner Text */}
        <div className="absolute top-1/2 -translate-y-1/2 left-8 sm:left-14 md:left-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Government Schemes for Farmers
          </h1>
          <p className="text-white/90 mt-3 max-w-xl text-sm sm:text-base">
            Explore important government initiatives designed to empower and uplift
            farmers with subsidies, insurance, loans and more.
          </p>
        </div>
      </div>

      {/* Faint Agriculture Pattern Background */}
      <div className="absolute inset-0 opacity-[0.07] bg-[url('/agri-pattern.png')] bg-repeat pointer-events-none"></div>

      {/* Scheme Cards */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 pb-16">
        {schemesData.map((scheme) => (
          <div
            key={scheme.id}
            className="backdrop-blur-xl bg-white/40 border border-white/30 
                     rounded-2xl shadow-xl hover:-translate-y-2 
                     transition duration-300 p-1"
          >
            <SchemeCard scheme={scheme} />
          </div>
        ))}
      </div>

      {/* Bottom Highlight */}
      <div className="relative max-w-5xl mx-auto mt-20 mb-10 p-10 
                      rounded-3xl bg-linear-to-r from-green-700 to-green-500 
                      text-white shadow-2xl text-center">
        <h2 className="text-2xl font-bold">Stay Updated</h2>
        <p className="mt-2 text-white/90">
          Get instant alerts for new schemes, subsidies and farmer benefits.
        </p>
        <button className="mt-5 px-6 py-3 bg-white text-green-700 font-semibold 
                           rounded-xl shadow-md hover:bg-gray-100 transition">
          Subscribe Now
        </button>
      </div>
        <Footer/>
    </div>
  );
};

export default GovtScheme;
