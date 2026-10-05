import { Link } from "react-router-dom";
import SocialIcons from "../../common/SocialIcons/SocialIcons";
import "./Footer.css";
import MiLogo from "../../../assets/images/logo.png"

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="div-logo"><img src={MiLogo}></img></div>
          <p>Entretenimiento, promociones y experiencias diseñadas para disfrutar responsablemente.</p>
        </div>

        <div>
          <h3>Enlaces</h3>
          <Link to="/">Inicio</Link>
          <Link to="/condiciones">Condiciones de uso</Link>
          <Link to="/contacto">Contacto</Link>
        </div>

        
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} RH CLUB Casino</span>
          <span>Solo para mayores de edad · Jugar responsablemente</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;