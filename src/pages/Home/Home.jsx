import Button from "../../components/common/Button/Button";
import PrizeCard from "../../components/ui/PrizeCard/PrizeCard";
import SocialIcons from "../../components/common/SocialIcons/SocialIcons";
import { prizeData } from "../../data/navigation";
import "./Home.css";
import ImageCarousel from "../../components/ui/ImageCarousel/ImageCarousel";

function Home() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5491100000000";
  const whatsappMessage = encodeURIComponent(
    import.meta.env.VITE_WHATSAPP_MESSAGE || "Hola, quiero consultar por las promociones."
  );

  return (
    <>
    <div>
      <section className="hero">         
        <div className="container promo-box">
          <div>
            <span className="eyebrow">CONTACTO DIRECTO</span>
            <h2>¿Querés conocer las promociones vigentes?</h2>
            <p>Escribinos por WhatsApp y recibí información actualizada.</p>
          </div>
          <Button href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} variant="primary" target="_blank">
            Hablar ahora
          </Button>
        </div>
      </section>

      <section className="section social-section">
        <div className="container social-content">
          <div>
            <span className="eyebrow">REDES SOCIALES</span>
            <h2>Seguinos y enterate primero.</h2>
            <p>Encontranos en nuestras redes oficiales para conocer novedades y promociones.</p>
          </div>
          <SocialIcons />
        </div>
      </section>

      <a
        className="floating-whatsapp"
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <span>💬</span>
      </a>
    </div>
    </>
  );
}

export default Home;