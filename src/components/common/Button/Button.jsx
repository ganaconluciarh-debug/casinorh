import { Link } from "react-router-dom";
import "./Button.css";

function Button({ children, href, to, variant = "primary", className = "", ...props }) {
  const classes = `casino-button casino-button--${variant} ${className}`.trim();

  if (to) {
    return <Link className={classes} to={to}>{children}</Link>;
  }

  if (href) {
    return <a className={classes} href={href} {...props}>{children}</a>;
  }

  return <button className={classes} {...props}>{children}</button>;
}

export default Button;