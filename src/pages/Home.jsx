import { useEffect, useState } from "react";
import {
  Leaf,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import CropCard from "../components/CropCard";
import { cropRate } from "../data/cropRate";
import Header from "../components/Header";
import WeatherCard from "../components/WeatherCard";
import { useWeather } from "../hooks/useweather";
import { useLanguage } from "../context/LanguageContext";
import { commonText } from "../lang/commonLang";
import { schemesData } from "../data/schemesData";
const Home = () => {
  const [crop, setCrop] = useState([]);
 const { language } = useLanguage();

  useEffect(() => {
    setCrop(cropRate);
  }, []);



  const { forecast, loading } = useWeather();

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
            {commonText.Herohead1[language]}
            <span className="text-yellow-300 drop-shadow-[0_0_25px_rgba(255,255,0,0.7)]">
              {" "}
              {commonText.Herohead2[language]}
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
              {commonText.HeroDesc[language]} <ArrowRight size={20} />
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

{/* ========================== WEATHER PREVIEW ========================== */}
<section className="py-20 px-6 bg-linear-to-br from-sky-800 to-sky-950 text-white">
  <h2 className="text-4xl font-bold mb-10 text-center">
    {`🌦 ${commonText.weatherTitle[language]}`} 
  </h2>

  {loading ? (
    <p className="text-center">Loading weather...</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {forecast.slice(0, 3).map((day, index) => (
        <WeatherCard key={index} day={day} />
      ))}
    </div>
  )}

  <div className="mt-10 text-center">
    <Link
      to="/weather"
      className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition"
    >
      {commonText.weatherRM[language]} →
    </Link>
  </div>
</section>


      {/* ========================== LIVE NEWS ========================== */}
      <section
        id="live-news"
        className="py-16 px-6 bg-green-900 text-white relative overflow-hidden scroll-mt-24"
      >

        <h2 className="text-3xl font-bold mb-6 text-center">
          📰 {commonText.latestNews[language]}
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
            {commonText.readMore[language]} →
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
            "url('/marketImg/croprate-banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-4xl font-bold text-green-700 mb-10 text-center">
          {commonText.marketRatesTitle[language]}
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
            {commonText.marketRatesRM[language]}
          </Link>
        </div>
      </section>

      {/* ========================== GOVT SCHEMES ========================== */}
      <section className="py-10 px-6 bg-white">
        <h2 className="text-4xl font-bold text-green-700 mb-10">
          {commonText.govtSchemes[language]}
        </h2>

        <ul className="space-y-4">
          <li className="p-5 bg-gray-50 rounded-xl shadow border hover:bg-gray-100">
           {schemesData[1].title[language]}
          </li>
          <li className="p-5 bg-gray-50 rounded-xl shadow border hover:bg-gray-100">
            {schemesData[2].title[language]}
          </li>
          <li className="p-5 bg-gray-50 rounded-xl shadow border hover:bg-gray-100">
            {schemesData[3].title[language]}
          </li>
        </ul>

        <div className="mt-10 flex justify-center">
          <Link
            to="/GovtScheme"
            className="bg-green-600 text-white px-10 py-3 rounded-xl shadow hover:bg-green-700 transition flex items-center gap-2"
          >
            {commonText.readMore[language]} 🌿
          </Link>
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default Home;
