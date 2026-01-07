
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './pages/News';
import GovtScheme from './pages/GovtScheme';
import MarketRates from './pages/MarketRates';
import Weather from './pages/Weather';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import ScrollToTop from './components/scrollToTop';

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        {<Route path="/" element={<Home />} /> }
        {<Route path="/news" element={<News />} /> }
        {<Route path="/weather" element={<Weather />} /> }
        {<Route path="/marketrates" element={<MarketRates />} /> }
        {<Route path="/govtscheme" element={<GovtScheme />} /> }
        { <Route path="*" element={<NotFound/>} />}  
      </Routes>
    </BrowserRouter>
    
  
  )
}

export default App
