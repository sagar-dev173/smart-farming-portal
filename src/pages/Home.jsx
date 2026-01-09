import React, { useEffect, useState } from "react";
import {
  Leaf,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import CropCard from "../components/CropCard";
import { cropRate } from "../data/cropRate";
import { storeData } from "../data/storeData";
import Header from "../components/Header";

const Home = () => {
  const [crop, setCrop] = useState([]);
  const [storedata, setstoreData] = useState([]);

  useEffect(() => {
    setCrop(cropRate);
  }, []);

  useEffect(() => {
    setstoreData(storeData);
  }, []);

  return (
    <div className="bg-gray-50">
      <header className="sticky top-0 z-50">
        <Header />
      </header>


      {/* ========================== HERO ========================== */}
      <section className="relative overflow-hidden bg-black text-white h-screen px-6 text-center shadow-xl flex items-center justify-center brightness-100">
        <iframe
          src="https://skybox.blockadelabs.com/e/59ecde5bdde1d1e5a7bcae06e8c89c77"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: "0", pointerEvents: "none", zIndex: 0 }}
          allow="fullscreen"
        ></iframe>

        <div className="absolute inset-0 bg-black/20 z-10"></div>

        <div className="relative z-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] animate-pulse">
            Smart Farming.
            <span className="text-yellow-300 drop-shadow-[0_0_25px_rgba(255,255,0,0.7)]">
              {" "}
              Smarter Future.
            </span>
          </h1>

          <Link
            to="/#live-news"
            onClick={(e) => {
              e.preventDefault(); // route jump rokta hai
              document
                .getElementById("live-news")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <button className="mt-10 bg-yellow-400 text-black px-12 py-4 rounded-3xl font-semibold shadow-2xl hover:bg-yellow-500 transition-all duration-300 flex items-center mx-auto gap-3 animate-bounce-slow">
              Explore Farming Info <ArrowRight size={20} />
            </button>
          </Link>

        </div>

        <style>
          {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s infinite ease-in-out;
          }
        `}
        </style>
      </section>
      {/* ========================== LIVE NEWS ========================== */}
      <section
        id="live-news"
        className="py-16 px-6 bg-green-900 text-white relative overflow-hidden scroll-mt-24"
      >

        <h2 className="text-3xl font-bold mb-6 text-center">
          📰 Live Agriculture News
        </h2>

        {/* Scrolling Container */}
        <div className="h-48 overflow-hidden border border-green-700 rounded-xl bg-green-950 px-6">
          <ul className="space-y-4 animate-news-scroll">
            <li>🌾 MSP rates may increase for Rabi crops this season</li>
            <li>🚜 Government announces new subsidy for farm machinery</li>
            <li>🌧 IMD predicts good monsoon for central India</li>
            <li>🌱 Organic farming adoption rises among small farmers</li>
            <li>📢 New PMFBY updates released for 2026</li>
          </ul>
        </div>

        {/* Read More */}
        <div className="text-center mt-6">
          <Link
            to="/news"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition"
          >
            Read More News →
          </Link>
        </div>

        {/* Animation */}
        <style>
          {`
      @keyframes news-scroll {
        0% { transform: translateY(100%); }
        100% { transform: translateY(-100%); }
      }
      .animate-news-scroll {
        animation: news-scroll 18s linear infinite;
      }
    `}
        </style>
      </section>


      {/* ========================== SEASONAL CROPS ========================== */}
      <section
        className="py-20 px-6 bg-white"
        style={{
          backgroundImage:
            "url('')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-4xl font-bold text-green-700 mb-10 text-center">
          Seasonal Crop Rate
        </h2>

        {/* RESPONSIVE GRID + CENTER ITEMS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {crop.slice(0, 4).map((crop, index) => (
            <div
              key={index}
              className="w-full max-w-sm p-4 rounded-xl bg-green-50 shadow hover:shadow-lg transition"
            >
              <Leaf className="text-green-600 mb-2" />
              <CropCard item={crop} />
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/MarketRates"
            className="bg-green-600 text-white px-10 py-3 rounded-lg shadow hover:bg-green-700 transition flex items-center gap-2"
          >
            <Leaf className="w-5 h-5 text-white" />
            Explore More Crops
          </Link>
        </div>
      </section>



      {/* ========================== GOVT SCHEMES ========================== */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-green-700 mb-10">
          Government Schemes
        </h2>

        <ul className="space-y-4">
          <li className="p-5 bg-gray-50 rounded-xl shadow border hover:bg-gray-100">
            PM-Kisan Samman Nidhi Yojna
          </li>
          <li className="p-5 bg-gray-50 rounded-xl shadow border hover:bg-gray-100">
            Soil Health Card Scheme
          </li>
          <li className="p-5 bg-gray-50 rounded-xl shadow border hover:bg-gray-100">
            Crop Insurance (PMFBY)
          </li>
        </ul>

        <div className="mt-10 flex justify-center">
          <Link
            to="/GovtScheme"
            className="bg-green-600 text-white px-10 py-3 rounded-xl shadow hover:bg-green-700 transition flex items-center gap-2"
          >
            Explore more 🌿
          </Link>
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default Home;
