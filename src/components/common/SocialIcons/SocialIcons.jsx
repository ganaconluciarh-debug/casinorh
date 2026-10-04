import { socialLinks } from "../../../data/navigation";
import "./SocialIcons.css";

function SocialIcons({ compact = false }) {
  return (
    <div className={`social-icons ${compact ? "social-icons--compact" : ""}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          aria-label={social.name}
          title={social.name}
        >
          <span>{social.short}</span>
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;