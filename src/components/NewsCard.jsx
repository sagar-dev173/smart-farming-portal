import { useLanguage } from "../context/LanguageContext"

const NewsCard = ({ news = {} }) => {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col h-full">

      {/* Image */}
      <img
        src={news.image}
        alt={news.title[language]}
        className="w-full h-40 object-cover"
      />
 
      {/* Content */}
      <div className="p-4 flex flex-col grow">

        {/* Category */}
        <span className="text-sm text-green-600 font-medium">
          {news.category[language]}
        </span>

        {/* Title (2 lines max) */}
        <h2 className="text-lg font-semibold mt-2 line-clamp-2">
          {news.title[language]}
        </h2>

        {/* Description (3 lines max) */}
        <p className="text-gray-600 text-sm mt-1 line-clamp-3 grow">
          {news.description[language]}
        </p>

        {/* Date at bottom */}
        <p className="text-gray-400 text-xs mt-3">
          {news.date[language]}
        </p>
      </div>
    </div>
  )
}

export default NewsCard
