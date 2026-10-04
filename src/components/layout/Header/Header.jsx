import { useState } from "react";
import { Link } from "react-router-dom";
import { navigationLinks } from "../../../data/navigation";
import Button from "../../common/Button/Button";
import "./Header.css";
import MiLogo from "../Header/logo.png"



function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          {/* <span className="brand-mark"><img src={MiLogo} ></img> </span> */}
          <div className="div-logo"><img src={MiLogo}></img></div> 
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={`main-nav ${open ? "main-nav--open" : ""}`}>
          {navigationLinks.map((link) => (
            <Link key={link.label} to={link.path} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Button
            href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || "5491170996259"}`}
            variant="primary"
            target="_blank"
          >
            WhatsApp
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;