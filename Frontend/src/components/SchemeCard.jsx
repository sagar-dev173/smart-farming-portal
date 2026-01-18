import { useLanguage } from "../context/LanguageContext";
import { Tractor, Sprout, Landmark, CheckCircle } from "lucide-react";

const SchemeCard = ({ scheme }) => {
  const { language } = useLanguage();

  return (
    <div
      className="
        relative
        bg-white/50 backdrop-blur-xl 
        border border-white/40 
        rounded-2xl shadow-lg 
        p-6 
        transition-all duration-300 
        hover:shadow-2xl hover:-translate-y-1
      "
    >
      {/* Decorative Icon (Reduced Dominance) */}
      <div className="absolute top-4 right-4 opacity-20">
        <Tractor size={24} className="text-green-700" />
      </div>

      {/* Title */}
      <div className="flex items-center gap-2">
        <Sprout size={22} className="text-green-700" />
        <h2 className="text-xl font-extrabold text-green-800 tracking-wide">
          {scheme.title[language]}
        </h2>
      </div>

      {/* Description (Clamped for consistency) */}
      <p className="text-gray-700 text-sm mt-3 leading-relaxed line-clamp-3">
        {scheme.description[language]}
      </p>

      {/* Benefits & Eligibility */}
      <div className="mt-4 space-y-3 text-gray-800">

        <p className="text-sm flex items-start gap-2">
          <Landmark size={16} className="text-green-700 mt-1 shrink-0" />
          <span>
            <span className="font-semibold text-green-700">Benefits: </span>
            {scheme.benefits[language]}
          </span>
        </p>

        <p className="text-sm flex items-start gap-2">
          <CheckCircle size={16} className="text-green-700 mt-1 shrink-0" />
          <span>
            <span className="font-semibold text-green-700">Eligibility: </span>
            {scheme.eligibility[language]}
          </span>
        </p>

      </div>

      {/* Date */}
      <p className="text-gray-500 text-xs mt-4">{scheme.date[language]}</p>

      {/* CTA */}
      <a
        href={scheme.applyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex items-center justify-center 
          mt-6 
          px-5 py-2.5 
          bg-linear-to-r from-green-600 to-green-500 
          text-white font-semibold 
          rounded-xl shadow-md 
          hover:shadow-lg hover:from-green-700 hover:to-green-600 
          transition
        "
      >
        Apply Now
      </a>
    </div>
  );
};

export default SchemeCard;
