import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Inicio from "./pages/Home/Inicio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import BotonWhatsapp from "./components/common/Button/BotonWhatsapp";


function App() {
  return (
    <div className="app">
      <Header />
      <BotonWhatsapp />    
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/condiciones" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;