import React, { useState } from "react"
import { Search, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import NewsCard from "../components/NewsCard"
import { newsData } from "../data/newsData"
import Header from "../components/Header"
import Footer from "../components/Footer"

const categories = [
  "All",
  "Govt Policy",
  "Weather",
  "Market",
  "Technology",
  "Farming Tips",
]

export default function NewsWebsite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredNews = newsData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">

      {/* GLOBAL HEADER */}
      <header className="sticky top-0 z-50">
        <Header />
      </header>

      {/* LOCAL NEWS BAR */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

          <h1 className="text-xl sm:text-2xl font-bold text-green-700">
            Bharat Krishi News
          </h1>

          {/* Search */}
          <div className="relative hidden sm:block w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 opacity-60" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search news..."
              className="pl-10 py-2 w-full border rounded-xl shadow-sm focus:outline-none"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Search */}
        {menuOpen && (
          <div className="sm:hidden px-4 pb-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search news..."
              className="w-full border rounded-xl px-4 py-2"
            />
          </div>
        )}
      </div>

      {/* HERO */}
      <section
        className="relative h-72 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80')",
        }}
      >
        <div className="bg-black/50 p-6 rounded-xl text-center">
          <h2 className="text-white text-3xl sm:text-4xl font-bold">
            Daily Agriculture News
          </h2>
          <p className="text-gray-200 mt-2">
            Farming • Weather • Markets • Government
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="flex gap-3 overflow-x-auto pb-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap transition
                ${
                  activeCategory === c
                    ? "bg-green-600 text-white"
                    : "bg-white border hover:bg-green-100"
                }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* NEWS GRID */}
      <section className="max-w-7xl mx-auto p-4 mt-6">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>

        {filteredNews.length === 0 ? (
          <p className="text-gray-500">No news found.</p>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {filteredNews.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </motion.div>
        )}
      </section>

      <Footer />
    </div>
  )
}
