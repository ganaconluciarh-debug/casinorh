import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ImageCarousel from "./components/ui/ImageCarousel/ImageCarousel";
import PrizeCard from "./components/ui/PrizeCard/PrizeCard";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ImageCarousel />} />
          <Route path="/" element={<PrizeCard />} />
          <Route path="/condiciones" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;