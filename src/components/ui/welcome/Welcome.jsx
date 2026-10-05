import './welcome.css';
import Bienvenido from "../../../assets/images/bienvenido.gif"

import "./Welcome.css";

function Welcome({
  alt = "Bienvenido a RH Club",
}) {
  return (
    <section className="welcome">
      <div className="welcome-container">
        <img
          src={Bienvenido}
          alt={alt}
          className="welcome-gif"
        />
      </div>
    </section>
  );
}

export default Welcome;