 export const storeData = [
  {
    id: 1,
    name: "Urea Fertilizer",
    price: 320,
    oldPrice: 380,
    discount: 15,
    use: "Wheat, Rice, Sugarcane",
    category: "Fertilizer",
    description: "Nitrogen-rich fertilizer for rapid plant growth.",
    image: "../public/productimg/urea.jpg",
    rating: 4.4,
    reviewsCount: 310,
    stock: 25,
    freeDelivery: true,
    organic: false,
    usage: "Provides essential nitrogen to crops for healthy growth and higher yield.",
    reviews: [
      { customer: "Rahul", rating: 5, comment: "Great product! My wheat crop grew much faster." },
      { customer: "Sneha", rating: 4, comment: "Good quality, but packaging could be improved." },
      { customer: "Amit", rating: 5, comment: "Easy to apply and very effective." },
      { customer: "Pooja", rating: 4, comment: "Plants are healthier and greener now." },
      { customer: "Vikram", rating: 5, comment: "Highly recommend for nitrogen-hungry crops." }
    ]
  },
  {
    id: 2,
    name: "DAP Fertilizer",
    price: 1350,
    oldPrice: 1500,
    discount: 10,
    use: "Soybean, Cotton, Vegetables",
    category: "Fertilizer",
    description: "Ideal fertilizer for strong root development.",
    image: "../public/productimg/dap.jpg",
    rating: 4.6,
    reviewsCount: 512,
    stock: 12,
    freeDelivery: true,
    organic: false,
    usage: "Provides phosphorus and nitrogen to improve root development and crop yield.",
    reviews: [
      { customer: "Ramesh", rating: 5, comment: "Very effective for my vegetable garden." },
      { customer: "Neha", rating: 4, comment: "Good fertilizer, plants are doing well." },
      { customer: "Sahil", rating: 5, comment: "Boosted growth and flowering significantly." },
      { customer: "Tina", rating: 4, comment: "Quality is good, easy to use." },
      { customer: "Ajay", rating: 5, comment: "Best fertilizer for phosphorus-loving crops." }
    ]
  },
  {
    id: 3,
    name: "Bayer Pesticide",
    price: 850,
    oldPrice: 950,
    discount: 12,
    use: "All vegetables & fruits",
    category: "Pesticide",
    description: "Powerful pesticide for insects and leaf diseases.",
    image: "../public/productimg/bayer.webp",
    rating: 4.5,
    reviewsCount: 210,
    stock: 15,
    freeDelivery: false,
    organic: false,
    usage: "Protects crops from harmful insects and pests effectively.",
    reviews: [
      { customer: "Deepak", rating: 5, comment: "Pests are gone, very effective spray." },
      { customer: "Simran", rating: 4, comment: "Good product, safe for plants." },
      { customer: "Manish", rating: 5, comment: "Highly effective and easy to use." },
      { customer: "Rekha", rating: 4, comment: "Works well, noticeable results in a few days." },
      { customer: "Karan", rating: 5, comment: "Excellent pesticide, worth buying." }
    ]
  },
  {
    id: 4,
    name: "Hybrid Tomato Seeds",
    price: 120,
    oldPrice: 150,
    discount: 20,
    use: "Tomato farming",
    category: "Seeds",
    description: "High-yield hybrid tomato seeds for all climates.",
    image: "../public/productimg/tomatoseed.jpg",
    rating: 4.7,
    reviewsCount: 98,
    stock: 40,
    freeDelivery: true,
    organic: true,
    usage: "High-yield tomato seeds that grow disease-resistant and healthy plants.",
    reviews: [
      { customer: "Priya", rating: 5, comment: "Tomatoes grew healthy and big!" },
      { customer: "Rohit", rating: 4, comment: "Seeds germinated well, good yield." },
      { customer: "Alok", rating: 5, comment: "Very high-quality seeds." },
      { customer: "Sonia", rating: 4, comment: "Plants are strong and disease-resistant." },
      { customer: "Anil", rating: 5, comment: "Great variety, tasty tomatoes." }
    ]
  },

  // ⭐⭐⭐ More Items Added Below — Fully Premium

  {
    id: 5,
    name: "NPK 20-20-20 Fertilizer",
    price: 950,
    oldPrice: 1100,
    discount: 14,
    use: "Vegetables, Fruits, Flowers",
    category: "Fertilizer",
    description: "Balanced fertilizer for overall plant health.",
    image: "../public/productimg/npk20-20.jpg",
    rating: 4.3,
    reviewsCount: 189,
    stock: 28,
    freeDelivery: true,
    organic: false,
    usage: "Balanced fertilizer with nitrogen, phosphorus, and potassium for all-round crop nutrition.",
    reviews: [
      { customer: "Vivek", rating: 5, comment: "Excellent all-purpose fertilizer." },
      { customer: "Meena", rating: 4, comment: "Good results, plants are thriving." },
      { customer: "Rajat", rating: 5, comment: "Boosted crop growth significantly." },
      { customer: "Kavita", rating: 4, comment: "Well-balanced, easy to apply." },
      { customer: "Harish", rating: 5, comment: "Very effective for mixed crops." }
    ]
  },

  {
    id: 6,
    name: "Potash (MOP)",
    price: 780,
    oldPrice: 900,
    discount: 13,
    use: "Wheat, Paddy, Sugarcane",
    category: "Fertilizer",
    description: "Improves crop strength and resistance.",
    image: "../public/productimg/potash.webp",
    rating: 4.2,
    reviewsCount: 142,
    stock: 30,
    freeDelivery: false,
    organic: false,
    usage: "Supplies potassium to crops for stronger stems, disease resistance, and better fruit quality.",
    reviews: [
      { customer: "Shivam", rating: 5, comment: "Crops are healthier and fruits are bigger." },
      { customer: "Neelam", rating: 4, comment: "Good product, works well." },
      { customer: "Ajit", rating: 5, comment: "Highly recommended for potassium-deficient soil." },
      { customer: "Ritu", rating: 4, comment: "Easy to use, noticeable results." },
      { customer: "Manoj", rating: 5, comment: "Excellent quality, strong plants." }
    ]
  },

  {
    id: 7,
    name: "Syngenta Insecticide",
    price: 650,
    oldPrice: 750,
    discount: 13,
    use: "Pest control for vegetables",
    category: "Pesticide",
    description: "Premium insecticide with long-lasting protection.",
    image: "../public/productimg/syngenta.webp",
    rating: 4.5,
    reviewsCount: 205,
    stock: 18,
    freeDelivery: true,
    organic: false,
    usage: "Effective insecticide to control a wide range of crop pests.",
    reviews: [
      { customer: "Ananya", rating: 5, comment: "Pests were completely eliminated." },
      { customer: "Suresh", rating: 4, comment: "Good insecticide, safe to use." },
      { customer: "Reena", rating: 5, comment: "Highly effective and fast-acting." },
      { customer: "Pradeep", rating: 4, comment: "Plants are healthier, pests are gone." },
      { customer: "Alisha", rating: 5, comment: "Worth every rupee." }
    ]
  },

  {
    id: 8,
    name: "F1 Hybrid Chilli Seeds",
    price: 95,
    oldPrice: 130,
    discount: 25,
    use: "Chilli Farming",
    category: "Seeds",
    description: "High germination hybrid chilli seeds.",
    image: "../public/productimg/chili.webp",
    rating: 4.8,
    reviewsCount: 76,
    stock: 60,
    freeDelivery: true,
    organic: true,
    usage: "High-yield chilli seeds producing spicy, disease-resistant plants.",
    reviews: [
      { customer: "Kiran", rating: 5, comment: "Chillies grew very well, spicy and healthy." },
      { customer: "Pankaj", rating: 4, comment: "Seeds germinated nicely, good harvest." },
      { customer: "Rina", rating: 5, comment: "Excellent quality seeds." },
      { customer: "Vikash", rating: 4, comment: "Plants are strong, good yield." },
      { customer: "Maya", rating: 5, comment: "Highly recommended for chilli farming." }
    ]
  },

  {
    id: 9,
    name: "Organic Compost",
    price: 230,
    oldPrice: 280,
    discount: 18,
    use: "All crops & gardening",
    category: "Fertilizer",
    description: "100% organic compost improving soil health.",
    image: "../public/productimg/compost.jpg",
    rating: 4.9,
    reviewsCount: 330,
    stock: 50,
    freeDelivery: true,
    organic: true,
    usage: "Improves soil fertility naturally and promotes healthy plant growth.",
    reviews: [
      { customer: "Sunil", rating: 5, comment: "Soil quality improved greatly." },
      { customer: "Pooja", rating: 4, comment: "Plants are healthier, very effective." },
      { customer: "Rakesh", rating: 5, comment: "High-quality organic compost." },
      { customer: "Anjali", rating: 4, comment: "Good for garden plants." },
      { customer: "Tarun", rating: 5, comment: "Soil moisture retention improved a lot." }
    ]
  },

  {
    id: 10,
    name: "Neem Oil Spray",
    price: 190,
    oldPrice: 240,
    discount: 21,
    use: "Natural pest control",
    category: "Pesticide",
    description: "Organic neem oil for insect and fungus control.",
    image: "../public/productimg/neemspray.jpg",
    rating: 4.6,
    reviewsCount: 412,
    stock: 22,
    freeDelivery: true,
    organic: true,
    usage: "Natural pesticide to protect crops from pests and diseases.",
    reviews: [
      { customer: "Rahul", rating: 5, comment: "Pests reduced significantly." },
      { customer: "Sita", rating: 4, comment: "Safe and effective for plants." },
      { customer: "Deepak", rating: 5, comment: "Neem oil works very well." },
      { customer: "Maya", rating: 4, comment: "Easy to spray, noticeable results." },
      { customer: "Anil", rating: 5, comment: "Highly recommended for organic farming." }
    ]
  },

  {
    id: 11,
    name: "Drip Irrigation Pipe (30m)",
    price: 1300,
    oldPrice: 1500,
    discount: 13,
    use: "All field crops",
    category: "Tools",
    description: "High-quality drip irrigation pipe for water saving.",
    image: "../public/productimg/irrigation.jpg",
    rating: 4.4,
    reviewsCount: 260,
    stock: 10,
    freeDelivery: false,
    organic: false,
    usage: "Provides efficient water supply directly to plant roots, saving water and improving growth.",
    reviews: [
      { customer: "Suresh", rating: 5, comment: "Easy to install and very effective." },
      { customer: "Rekha", rating: 4, comment: "Water savings are excellent." },
      { customer: "Amit", rating: 5, comment: "Crops are healthier with drip irrigation." },
      { customer: "Priya", rating: 4, comment: "Good quality pipe, long-lasting." },
      { customer: "Vikram", rating: 5, comment: "Highly recommended for small farms." }
    ]
  },

  {
    id: 12,
    name: "Garden Spray Pump (5L)",
    price: 890,
    oldPrice: 1200,
    discount: 26,
    use: "Pesticide & fertilizer spraying",
    category: "Tools",
    description: "Durable hand pump for easy spraying.",
    image: "../public/productimg/garden5L.jpg",
    rating: 4.7,
    reviewsCount: 178,
    stock: 20,
    freeDelivery: true,
    organic: false,
    usage: "Portable pump to spray fertilizers, pesticides, or water on garden plants.",
    reviews: [
      { customer: "Neha", rating: 5, comment: "Lightweight and easy to use." },
      { customer: "Rohit", rating: 4, comment: "Works well, durable pump." },
      { customer: "Alok", rating: 5, comment: "Perfect for garden maintenance." },
      { customer: "Simran", rating: 4, comment: "Good product, reasonable price." },
      { customer: "Ananya", rating: 5, comment: "Very effective and convenient." }
    ]
  },

  // MORE SEEDS
  {
    id: 13,
    name: "Onion Seeds (Red Var.)",
    price: 55,
    oldPrice: 80,
    discount: 31,
    use: "Onion farming",
    category: "Seeds",
    description: "High-quality red onion seeds with strong yield.",
    image: "../public/productimg/onion.webp",
    rating: 4.5,
    reviewsCount: 99,
    stock: 45,
    freeDelivery: false,
    organic: true,
    usage: "High-quality onion seeds that produce healthy and uniform bulbs.",
    reviews: [
      { customer: "Rajesh", rating: 5, comment: "Onions grew well, very healthy." },
      { customer: "Meena", rating: 4, comment: "Seeds germinated nicely, good yield." },
      { customer: "Pankaj", rating: 5, comment: "Excellent quality seeds." },
      { customer: "Sonia", rating: 4, comment: "Uniform growth and good bulbs." },
      { customer: "Alisha", rating: 5, comment: "Highly recommend for onion farming." }
    ]
  },

  {
    id: 14,
    name: "Sugarcane Booster",
    price: 260,
    oldPrice: 300,
    discount: 13,
    use: "Sugarcane growth",
    category: "Fertilizer",
    description: "Improves sugarcane weight and plant height.",
    image: "../public/productimg/Sugarcane.webp",
    rating: 4.3,
    reviewsCount: 85,
    stock: 28,
    freeDelivery: false,
    organic: false,
    usage: "Promotes healthy sugarcane growth and increases yield significantly.",
    reviews: [
      { customer: "Vikram", rating: 5, comment: "Sugarcane grew taller and stronger." },
      { customer: "Anjali", rating: 4, comment: "Good results, very effective." },
      { customer: "Ritesh", rating: 5, comment: "Highly recommend for sugarcane farmers." },
      { customer: "Pooja", rating: 4, comment: "Easy to apply, noticeable growth." },
      { customer: "Sahil", rating: 5, comment: "Excellent product for sugarcane yield." }
    ]
  },

  {
    id: 15,
    name: "Potato Growth Tonic",
    price: 180,
    oldPrice: 220,
    discount: 18,
    use: "Potato farming",
    category: "Fertilizer",
    description: "Ensures bigger and healthier potatoes.",
    image: "../public/productimg/potatogrow.jpg",
    rating: 4.4,
    reviewsCount: 142,
    stock: 33,
    freeDelivery: true,
    organic: false,
    usage: "Enhances potato plant growth, tuber formation, and yield.",
    reviews: [
      { customer: "Shivam", rating: 5, comment: "Potatoes are bigger and healthier." },
      { customer: "Neha", rating: 4, comment: "Good results, improved yield." },
      { customer: "Amit", rating: 5, comment: "Easy to use, very effective." },
      { customer: "Priya", rating: 4, comment: "Plants are thriving well." },
      { customer: "Rohit", rating: 5, comment: "Highly recommended for potato crops." }
    ]
  },

  // MORE PESTICIDES
  {
    id: 16,
    name: "Fungal Cure 24",
    price: 490,
    oldPrice: 560,
    discount: 12,
    use: "Fungal infections in crops",
    category: "Pesticide",
    description: "Controls fungal diseases quickly and effectively.",
    image: "../public/productimg/fungal.jpg",
    rating: 4.6,
    reviewsCount: 216,
    stock: 26,
    freeDelivery: true,
    organic: false,
    usage: "Cures fungal infections in plants and protects crops from disease spread.",
    reviews: [
      { customer: "Deepak", rating: 5, comment: "Fungal infection cleared quickly." },
      { customer: "Simran", rating: 4, comment: "Works well, plants are healthier." },
      { customer: "Rakesh", rating: 5, comment: "Highly effective, noticeable results." },
      { customer: "Anjali", rating: 4, comment: "Good product, easy to apply." },
      { customer: "Vikram", rating: 5, comment: "Best for fungal protection." }
    ]
  },

  {
    id: 17,
    name: "Herbicide Weed Control",
    price: 740,
    oldPrice: 900,
    discount: 18,
    use: "Remove weeds from paddy & wheat",
    category: "Pesticide",
    description: "Fast-action herbicide for removing unwanted weeds.",
    image: "../public/productimg/weed.webp",
    rating: 4.3,
    reviewsCount: 170,
    stock: 17,
    freeDelivery: false,
    organic: false,
    usage: "Effectively kills unwanted weeds and prevents them from competing with crops.",
    reviews: [
      { customer: "Rahul", rating: 5, comment: "Weeds removed quickly and effectively." },
      { customer: "Sita", rating: 4, comment: "Good product, safe for crops." },
      { customer: "Amit", rating: 5, comment: "Highly effective and fast-acting." },
      { customer: "Neha", rating: 4, comment: "Easy to apply, noticeable results." },
      { customer: "Manish", rating: 5, comment: "Excellent for weed control." }
    ]
  },

  // EXTRA TOOLS
  {
    id: 18,
    name: "Mini Soil Testing Kit",
    price: 550,
    oldPrice: 700,
    discount: 21,
    use: "Check soil pH & nutrients",
    category: "Tools",
    description: "Portable soil test kit for farmers.",
    image: "../public/productimg/soil-testing.jpg",
    rating: 4.8,
    reviewsCount: 240,
    stock: 14,
    freeDelivery: true,
    organic: false,
    usage: "Allows farmers to test soil nutrients at home for better crop planning.",
    reviews: [
      { customer: "Vivek", rating: 5, comment: "Easy to use and accurate results." },
      { customer: "Meena", rating: 4, comment: "Helpful for planning fertilizer application." },
      { customer: "Rohit", rating: 5, comment: "Portable and very convenient." },
      { customer: "Anjali", rating: 4, comment: "Good quality kit." },
      { customer: "Sahil", rating: 5, comment: "Highly recommend for small farms." }
    ]
  },

  {
    id: 19,
    name: "Bio-Fertilizer Pack",
    price: 390,
    oldPrice: 500,
    discount: 22,
    use: "Organic farming",
    category: "Fertilizer",
    description: "Bio-based fertilizer improving soil microbes.",
    image: "../public/productimg/bio-fertilizer.png",
    rating: 4.9,
    reviewsCount: 320,
    stock: 19,
    freeDelivery: true,
    organic: true,
    usage: "Natural fertilizer containing beneficial microorganisms to improve soil fertility.",
    reviews: [
      { customer: "Shivam", rating: 5, comment: "Soil quality improved greatly." },
      { customer: "Neha", rating: 4, comment: "Plants are healthier and stronger." },
      { customer: "Amit", rating: 5, comment: "Highly effective bio-fertilizer." },
      { customer: "Priya", rating: 4, comment: "Easy to apply and works well." },
      { customer: "Rohit", rating: 5, comment: "Excellent for organic farming." }
    ]
  },

  {
    id: 20,
    name: "Water-Soluble NPK Fertilizer",
    price: 880,
    oldPrice: 1000,
    discount: 12,
    use: "Fruit & vegetable crops",
    category: "Fertilizer",
    description: "Premium quality water-soluble fertilizer.",
    image: "../public/productimg/water-soluble.jpg",
    rating: 4.5,
    reviewsCount: 290,
    stock: 20,
    freeDelivery: false,
    organic: false,
    usage: "Quickly provides balanced nutrients to crops, suitable for foliar feeding and irrigation.",
    reviews: [
      { customer: "Vikram", rating: 5, comment: "Fast-acting and effective." },
      { customer: "Anjali", rating: 4, comment: "Good quality, easy to dissolve." },
      { customer: "Ritesh", rating: 5, comment: "Boosted plant growth significantly." },
      { customer: "Pooja", rating: 4, comment: "Excellent fertilizer for all crops." },
      { customer: "Sahil", rating: 5, comment: "Highly recommended for quick results." }
    ]
  },
];
