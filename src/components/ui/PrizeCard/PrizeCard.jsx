import "./PrizeCard.css";

function PrizeCard({ prize }) {
  return (
    <article className="prize-card">
      <div className="prize-glow"></div>
      <div className="prize-icon">{prize.icon}</div>
      <span className="prize-category">{prize.category}</span>
      <h3>{prize.title}</h3>
      <strong>{prize.amount}</strong>
      <div className="prize-chip">PREMIO</div>
    </article>
  );
}

export default PrizeCard;