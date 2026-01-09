import { useState, useEffect } from "react";

const API_KEY = "4a5508afd22d017b3b4126edeb5b1f3e";

export const useWeather = (defaultCity = "Raipur") => {
  const [city, setCity] = useState(defaultCity);
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    try {
      setLoading(true);
      setError("");

      const CITY = `${city},IN`;

      const curRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
      );
      const cur = await curRes.json();
      if (!curRes.ok) throw new Error(cur.message);

      setCurrent(cur);

      const foreRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`
      );
      const fore = await foreRes.json();

      const daily = fore.list.filter((_, i) => i % 8 === 0);
      setForecast(daily);
    } catch (err) {
      setError(err.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return { city, setCity, current, forecast, loading, error, getWeather };
};
