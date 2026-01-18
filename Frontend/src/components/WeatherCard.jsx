export default function WeatherCard({ day }) {
  if (!day) return null;

  const date = new Date(day.dt_txt).toLocaleDateString("en-US", {
    weekday: "short",
  });

  return (
    <div className="backdrop-blur-xl bg-white/20 shadow-xl border border-white/30 rounded-xl p-4 text-center text-white hover:bg-white/30 transition cursor-pointer">
      <p className="font-semibold text-lg">{date}</p>

      <img
        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
        alt=""
        className="mx-auto w-16"
      />

      <p className="text-2xl font-bold">{Math.round(day.main.temp)}°C</p>

      <p className="text-sm opacity-80">{day.weather[0].description}</p>
    </div>
  );
}
