import React from "react";
import { cropRate } from "../data/cropRate";
import CropCard from "../components/CropCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CropRates = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">

      {/* Sticky Header */}
      <header className="sticky top-0 z-50">
        <Header />
      </header>

      {/* ================= HERO BANNER ================= */}
      <section className="relative w-full h-72 sm:h-96 lg:h-[28rem] overflow-hidden rounded-b-3xl shadow-lg">
        <img
          src="/allVegetable.png"
          alt="Crop Market Rates"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
            📊 Market Rates
          </h1>
          <p className="text-white/90 mt-3 text-base sm:text-lg max-w-xl">
            Latest mandi prices for Tomato, Sugarcane, Onion & other crops
          </p>
        </div>
      </section>

      {/* ================= MARKET RATES GRID ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-green-800 mb-10 text-center">
          Today’s Crop Prices
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cropRate.map((item) => (
            <CropCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ================= BACKGROUND DECOR ================= */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-200 rounded-full opacity-15 blur-3xl"></div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CropRates;
