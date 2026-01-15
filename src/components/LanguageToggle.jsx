import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="
        flex items-center gap-1.5
        px-3 py-1.5
        text-sm font-semibold
        text-green-900
        bg-white/40 backdrop-blur-md
        border border-white/30
        rounded-full
        hover:bg-white/60
        transition-all duration-200
        shadow-sm
      "
      title="Change Language"
    >
      🌐
      <span>
        {language === "hi" ? "English" : "हिंदी"}
      </span>
    </button>
  );
};

export default LanguageToggle;

