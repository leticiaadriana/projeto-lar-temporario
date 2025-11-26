import "./style.css";

function CatCard({ cat, onClick }) {
  return (
    <div className="cat-card" onClick={() => onClick(cat)}>
      <img src={cat.image} alt={cat.name} className="cat-card-img" />

      <div className="cat-card-content">
        <h3>{cat.name}</h3>
        <p className="cat-card-desc">{cat.shortDescription}</p>
      </div>
    </div>
  );
}

export default CatCard;
