import Button from "../../components/common/Button/Button";
import "./Contact.css";

function Contact() {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || "5491100000000";
  const message = encodeURIComponent(
    import.meta.env.VITE_WHATSAPP_MESSAGE || "Hola, quiero realizar una consulta."
  );

  return (
    <section className="contact-page">
      <div className="container contact-container">
        <div className="contact-intro">
          <span className="eyebrow">ESTAMOS PARA AYUDARTE</span>
          <h1>Hablemos.</h1>
          <p>Elegí el canal que prefieras para consultar promociones, horarios o información general.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card contact-card--main">
            <span className="contact-icon">💬</span>
            <h2>WhatsApp</h2>
            <p>Atención directa para cargar fichas o resolver tus consultas.</p>
            <Button href={`https://wa.me/${number}?text=${message}`} variant="whatsapp" target="_blank">
              Abrir WhatsApp
            </Button>
          </div>

          <div className="contact-card">
            <span className="contact-icon">◎</span>
            <h2>Redes sociales</h2>
            <p>Seguinos para conocer novedades y promociones.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;