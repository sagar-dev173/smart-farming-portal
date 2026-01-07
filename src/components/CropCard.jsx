import React from "react";

const CropCard = ({ item }) => {
  if (!item) return null;

  return (
    <div className="bg-white/70 backdrop-blur-md border border-gray-200 shadow-md rounded-xl p-5 hover:shadow-xl transition-shadow duration-300 flex">
      
      {/* LEFT SECTION — Text Details */}
      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          🌿 {item.crop}
        </h2>

        <p className="text-gray-600 mb-3 text-sm">
          <span className="font-semibold">Market:</span> {item.mandi} <br />
          <span className="font-semibold">Variety:</span> {item.category || "N/A"}
        </p>

        <div className="flex flex-col text-gray-800 font-semibold mt-2">
          <div className="flex items-center gap-1">
            💰 Min: {item.minPrice}
          </div>
        </div>

        <p className="text-gray-500 mt-2 text-xs">
          {item.date || "Updated recently"}
        </p>
      </div>

      {/* RIGHT SECTION — Image on top + Max Price */}
      <div className="ml-4 flex flex-col items-center">
        <img
          src={item.image}
          alt={item.crop}
          className="w-20 h-20 object-cover rounded-lg shadow-sm border border-gray-200"
        />

        <div className="mt-2 text-gray-800 font-semibold flex items-center gap-1">
          💵 Max: {item.maxPrice}
        </div>
      </div>

    </div>
  );
};

export default CropCard;
