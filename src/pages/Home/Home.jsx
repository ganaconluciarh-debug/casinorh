import Button from "../../components/common/Button/Button";
import PrizeCard from "../../components/ui/PrizeCard/PrizeCard";
import SocialIcons from "../../components/common/SocialIcons/SocialIcons";
import { prizeData } from "../../data/navigation";
import "./Home.css";

function Home() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5491100000000";
  const whatsappMessage = encodeURIComponent(
    import.meta.env.VITE_WHATSAPP_MESSAGE || "Hola, quiero consultar por las promociones."
  );

  return (
    <>
      <section className="hero">
        <div className="hero-pattern"></div>
        <div className="container hero-content">
          <span className="eyebrow">♠ EXPERIENCIA ROYAL · ♥ ENTRETENIMIENTO</span>
          <h1>Donde la suerte<br /><span>se viste de oro.</span></h1>
          <p>
            Descubrí promociones, premios destacados y toda la información
            para disfrutar de una experiencia de casino responsable.
          </p>
          <div className="hero-actions">
            <Button href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} variant="whatsapp" target="_blank">
              💬 Consultar por WhatsApp
            </Button>
            <Button to="/condiciones" variant="secondary">
              Ver condiciones
            </Button>
          </div>
          <div className="hero-trust">
            <span>✦ Atención personalizada</span>
            <span>✦ Promociones</span>
            <span>✦ Juego responsable</span>
          </div>
        </div>
        <div className="hero-wheel">♛</div>
      </section>

      <section className="section" id="premios">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">PREMIOS DESTACADOS</span>
              <h2>La mesa está servida.</h2>
            </div>
            <p>Algunos de nuestros premios y promociones de referencia.</p>
          </div>
          <div className="prize-grid">
            {prizeData.map((prize) => <PrizeCard key={prize.title} prize={prize} />)}
          </div>
        </div>
      </section>

      <section className="promo-section">
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
    </>
  );
}

export default Home;