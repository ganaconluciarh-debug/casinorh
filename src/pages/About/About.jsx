import "./About.css";

function About() {
  return (
    <section className="legal-page">
      <div className="container legal-container">
        <span className="eyebrow">INFORMACIÓN LEGAL</span>
        <h1>Condiciones de uso</h1>

        <div className="legal-card">
          <h2>1. Alcance</h2>
          <p>Este sitio tiene carácter informativo y de entretenimiento. La información publicada puede cambiar sin previo aviso.</p>

          <h2>2. Edad mínima</h2>
          <p>El acceso a actividades de juego está destinado exclusivamente a personas mayores de edad conforme a la legislación aplicable.</p>

          <h2>3. Juego responsable</h2>
          <p>El juego debe considerarse una forma de entretenimiento y no una fuente garantizada de ingresos. No juegues por encima de tus posibilidades económicas.</p>

          <h2>4. Promociones</h2>
          <p>Las promociones, premios, condiciones y disponibilidad pueden estar sujetos a requisitos específicos. Consultá siempre las condiciones vigentes antes de participar.</p>

          <h2>5. Uso del sitio</h2>
          <p>El usuario se compromete a utilizar el sitio de forma lícita y responsable. No se garantiza la disponibilidad permanente de los contenidos.</p>

          <h2>6. Contacto</h2>
          <p>Para consultas sobre promociones o información general, utilizá nuestros canales oficiales de contacto.</p>
        </div>
      </div>
    </section>
  );
}

export default About;