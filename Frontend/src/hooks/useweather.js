import { useState, useEffect } from "react";
import { weatherMap } from "../utils/weatherTranslations";
import { useLanguage } from "../context/LanguageContext";
const API_KEY = "4a5508afd22d017b3b4126edeb5b1f3e";

export const useWeather = (defaultCity = "Raipur") => {
  const { language } = useLanguage();
  const [city, setCity] = useState(defaultCity);
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const translateWeather = (desc) =>
    weatherMap[desc?.toLowerCase()] || desc;

  const getWeather = async () => {
    try {
      setLoading(true);
      setError("");

      const CITY = `${city},IN`;

      const curRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=${language}`
      );
      const cur = await curRes.json();
      if (!curRes.ok) throw new Error(cur.message);

      // 🔥 Translate description safely
      cur.weather[0].description = translateWeather(
        cur.weather[0].description
      );

      setCurrent(cur);

      const foreRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`
      );
      const fore = await foreRes.json();

      const daily = fore.list
        .filter((_, i) => i % 8 === 0)
        .map(item => ({
          ...item,
          weather: [{
            ...item.weather[0],
            description: translateWeather(item.weather[0].description)
          }]
        }));

      setForecast(daily);
    } catch (err) {
      setError(err.message || "त्रुटि हुई");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return { city, setCity, current, forecast, loading, error, getWeather };
};
