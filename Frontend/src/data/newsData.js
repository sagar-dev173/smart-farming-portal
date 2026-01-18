import rainImg from "../assets/news_img/heavy-rain.jpg";
import soyabean from "../assets/news_img/soyabean.jpg";
import kisan from "../assets/news_img/kisan.jpg";
import irrigation from "../assets/news_img/irrigation.jpg";
import pest from "../assets/news_img/pest attack.webp";
import tomato from "../assets/news_img/tomato.jpg";
import coldwave from "../assets/news_img/cold wave.jpeg";
import cotton from "../assets/news_img/cotton yield.jpg";
import soilHealth from "../assets/news_img/soilHealth.jpg";
import sugarcane from "../assets/news_img/sugarcane.jpg";
import Onion from "../assets/news_img/onion.jpg";
import rabi from "../assets/news_img/rabi crop.jpeg";
import locust from "../assets/news_img/locust.jpg";

export const newsData = [
  {
    id: 1,
    title: {
      en: "Government announces new MSP for Rabi crops",
      hi: "सरकार ने रबी फसलों के लिए नया एमएसपी घोषित किया"
    },
    description: {
      en: "Wheat MSP increased by ₹150 per quintal for 2025 season.",
      hi: "2025 सीजन के लिए गेहूं का एमएसपी ₹150 प्रति क्विंटल बढ़ाया गया।"
    },
    date: {
      en: "17 Nov 2025",
      hi: "17 नवम्बर 2025"
    },
    category: {
      en: "Govt Policy",
      hi: "सरकारी नीति"
    },
    image:rabi
  },
  {
    id: 2,
    title: {
      en: "Heavy rainfall alert issued for Maharashtra",
      hi: "महाराष्ट्र के लिए भारी बारिश की चेतावनी जारी"
    },
    description: {
      en: "Farmers are advised to avoid irrigation for next 3 days.",
      hi: "किसानों को अगले 3 दिनों तक सिंचाई न करने की सलाह दी गई है।"
    },
    date: {
      en: "16 Nov 2025",
      hi: "16 नवम्बर 2025"
    },
    category: {
      en: "Weather",
      hi: "मौसम"
    },
    image: rainImg
  },
  {
    id: 3,
    title: {
      en: "Soybean mandi prices rise by 8%",
      hi: "सोयाबीन मंडी कीमतों में 8% की बढ़ोतरी"
    },
    description: {
      en: "Average price touches ₹5,200 per quintal due to high demand.",
      hi: "अधिक मांग के कारण औसत कीमत ₹5,200 प्रति क्विंटल तक पहुंची।"
    },
    date: {
      en: "15 Nov 2025",
      hi: "15 नवम्बर 2025"
    },
    category: {
      en: "Market",
      hi: "बाजार"
    },
    image: soyabean
  },
  {
    id: 4,
    title: {
      en: "PM-Kisan next installment to be released soon",
      hi: "पीएम-किसान की अगली किस्त जल्द जारी होगी"
    },
    description: {
      en: "Over 9 crore farmers will receive ₹2,000 directly to their bank accounts.",
      hi: "9 करोड़ से अधिक किसानों को ₹2,000 सीधे उनके बैंक खातों में मिलेंगे।"
    },
    date: {
      en: "14 Nov 2025",
      hi: "14 नवम्बर 2025"
    },
    category: {
      en: "Govt Policy",
      hi: "सरकारी नीति"
    },
    image: kisan
  },
  {
    id: 5,
    title: {
      en: "New pest attack reported in soybean fields",
      hi: "सोयाबीन खेतों में नए कीट प्रकोप की सूचना"
    },
    description: {
      en: "Agriculture department advises farmers to use approved pesticides.",
      hi: "कृषि विभाग ने किसानों को स्वीकृत कीटनाशक उपयोग करने की सलाह दी है।"
    },
    date: {
      en: "13 Nov 2025",
      hi: "13 नवम्बर 2025"
    },
    category: {
      en: "Crop Advisory",
      hi: "फसल सलाह"
    },
    image: pest
  },
  {
    id: 6,
    title: {
      en: "IMD predicts cold wave in North India",
      hi: "उत्तर भारत में शीत लहर की भविष्यवाणी"
    },
    description: {
      en: "Low temperatures expected to impact mustard and potato crops.",
      hi: "कम तापमान से सरसों और आलू की फसलों पर असर पड़ने की संभावना है।"
    },
    date: {
      en: "12 Nov 2025",
      hi: "12 नवम्बर 2025"
    },
    category: {
      en: "Weather",
      hi: "मौसम"
    },
    image: coldwave
  },
  {
    id: 7,
    title: {
      en: "Tomato prices fall sharply in southern states",
      hi: "दक्षिणी राज्यों में टमाटर की कीमतों में भारी गिरावट"
    },
    description: {
      en: "Surplus arrivals push average mandi price down by 20%.",
      hi: "अधिक आवक के कारण औसत मंडी कीमतों में 20% की गिरावट आई।"
    },
    date: {
      en: "11 Nov 2025",
      hi: "11 नवम्बर 2025"
    },
    category: {
      en: "Market",
      hi: "बाजार"
    },
    image: tomato
  },
  {
    id: 8,
    title: {
      en: "New subsidy announced for drip irrigation",
      hi: "ड्रिप सिंचाई के लिए नई सब्सिडी घोषित"
    },
    description: {
      en: "Farmers can now get up to 55% subsidy under Micro-Irrigation Scheme.",
      hi: "किसानों को माइक्रो-इरीगेशन योजना के तहत 55% तक सब्सिडी मिलेगी।"
    },
    date: {
      en: "10 Nov 2025",
      hi: "10 नवम्बर 2025"
    },
    category: {
      en: "Govt Policy",
      hi: "सरकारी नीति"
    },
    image: irrigation
  },
  {
    id: 9,
    title: {
      en: "Cotton yield improves with new seed variety",
      hi: "नई बीज किस्म से कपास की पैदावार में सुधार"
    },
    description: {
      en: "Trials show 12% higher productivity in major cotton-growing states.",
      hi: "परीक्षणों में प्रमुख कपास उत्पादक राज्यों में 12% अधिक उत्पादन दिखा।"
    },
    date: {
      en: "09 Nov 2025",
      hi: "09 नवम्बर 2025"
    },
    category: {
      en: "Research",
      hi: "अनुसंधान"
    },
    image: cotton
  },
  {
    id: 10,
    title: {
      en: "Locust movement detected near Rajasthan border",
      hi: "राजस्थान सीमा के पास टिड्डी दल की गतिविधि देखी गई"
    },
    description: {
      en: "Authorities issue advisory and prepare control measures.",
      hi: "प्रशासन ने चेतावनी जारी कर नियंत्रण उपाय शुरू किए हैं।"
    },
    date: {
      en: "08 Nov 2025",
      hi: "08 नवम्बर 2025"
    },
    category: {
      en: "Alert",
      hi: "चेतावनी"
    },
    image: locust
  },
  {
    id: 11,
    title: {
      en: "Sugarcane farmers demand early payment",
      hi: "गन्ना किसानों ने शीघ्र भुगतान की मांग की"
    },
    description: {
      en: "Several mills delay payments due to low sugar exports.",
      hi: "कम चीनी निर्यात के कारण कई मिलों ने भुगतान में देरी की है।"
    },
    date: {
      en: "07 Nov 2025",
      hi: "07 नवम्बर 2025"
    },
    category: {
      en: "Farmer Issues",
      hi: "किसान समस्याएँ"
    },
    image: sugarcane
  },
  {
    id: 12,
    title: {
      en: "New mobile app launched for soil health tracking",
      hi: "मृदा स्वास्थ्य ट्रैकिंग के लिए नया मोबाइल ऐप लॉन्च"
    },
    description: {
      en: "App allows farmers to scan soil samples and receive instant reports.",
      hi: "ऐप किसानों को मिट्टी के नमूने स्कैन कर तुरंत रिपोर्ट प्राप्त करने देता है।"
    },
    date: {
      en: "06 Nov 2025",
      hi: "06 नवम्बर 2025"
    },
    category: {
      en: "Technology",
      hi: "तकनीक"
    },
    image: soilHealth
  },
  {
    id: 13,
    title: {
      en: "Onion wholesale prices jump amid short supply",
      hi: "कम आपूर्ति के कारण प्याज की थोक कीमतों में उछाल"
    },
    description: {
      en: "Nashik mandi reports 15% increase due to crop damage.",
      hi: "फसल नुकसान के कारण नाशिक मंडी में 15% बढ़ोतरी दर्ज की गई।"
    },
    date: {
      en: "05 Nov 2025",
      hi: "05 नवम्बर 2025"
    },
    category: {
      en: "Market",
      hi: "बाजार"
    },
    image: Onion
  }
];
