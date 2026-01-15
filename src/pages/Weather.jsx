import { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import Header from "../components/Header";
import { useLanguage } from "../context/LanguageContext";
import { commonText } from "../lang/commonLang";
const Weather = () => {
  const { language } = useLanguage();
  const [city, setCity] = useState("Raipur");
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "4a5508afd22d017b3b4126edeb5b1f3e";

  const getWeather = async () => {
    try {
      setLoading(true);
      setError("");

      const CITY = `${city},IN`;

      const res1 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=${language}`
      );
      const cur = await res1.json();

      if (!res1.ok) {
        setError(cur.message || "City not found");
        return;
      }

      setCurrent(cur);

      const res2 = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`
      );
      const fore = await res2.json();

      const daily = fore.list.filter((_, i) => i % 8 === 0);
      setForecast(daily);
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-500 to-indigo-700 px-4 py-6">
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      <div className="max-w-md mx-auto">

        {/* HEADER (Mobile First) */}
        <h1 className="text-3xl font-extrabold text-white text-center mb-4">
          Weather
        </h1>

        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-3">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            className="px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/60 outline-none"
          />

          <button
            onClick={getWeather}
            className="py-3 rounded-xl bg-white text-blue-600 font-semibold"
          >
            Search
          </button>
        </div>

        {/* STATES */}
        {loading && (
          <p className="text-center text-white mt-6">Loading...</p>
        )}

        {error && (
          <p className="text-center text-red-200 mt-6">{error}</p>
        )}

        {/* CURRENT WEATHER */}
        {current && !loading && (
          <div className="mt-6 bg-white/20 backdrop-blur-xl rounded-3xl p-6 text-center text-white">
            <h2 className="text-xl font-semibold">{current.name}</h2>

            <p className="text-7xl font-extrabold my-2">
              {Math.round(current.main.temp)}°
            </p>

            <p className="uppercase text-sm tracking-wide opacity-90">
              {current.weather[0].description}
            </p>

            <div className="flex justify-between mt-4 text-sm opacity-90">
              <span>💧 {current.main.humidity}%</span>
              <span>🌬 {current.wind.speed} km/h</span>
            </div>
          </div>
        )}

        {/* FORECAST */}
        {forecast.length > 0 && (
          <>
            <h3 className="text-white text-xl font-bold mt-8 mb-3">
              Next Days
            </h3>

            {/* Mobile: horizontal scroll */}
            <div className="flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:gap-4">
              {forecast.map((item, i) => (
                <WeatherCard key={i} day={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
