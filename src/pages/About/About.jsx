import "./About.css";

function About() {
  return (
    <>
      <section className="legal-page">
        <div className="container legal-container">
          <span className="eyebrow">INFORMACIÓN LEGAL</span>
          <h1>Condiciones de uso</h1>

          <div className="legal-card">
            

            <h2>1. Promociones</h2>
            <p> 
              Mínimo de carga $1000<br />
              Mínimo de retiro $10.000<br />
              Retiros 2 cada 24 horas<br />
              Retiros días domingos hasta las 22 hs<br />
              Lunes se bajan las fichas a partir de las 20 hs
            </p>

            <h2>2. condiciones de retiro</h2>
            <p>
              Para retirar <br /> 
              Alias o cbu. <br /> 
              Titular.<br /> 
              Monto $$.<br /> 
              captura del juego pagando premio.<br /> 
            </p>

            <h2>3. contacto</h2>
            <p>Agendanos para ver nuestras promociones vigentes y muestras de algunos de los ganadores</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;