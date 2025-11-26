import { useEffect } from "react";
import "./style.css";

function CatModal({ cat, onClose }) {
  if (!cat) return null;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    document.body.style.overflow = "";
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleClose}>✕</button>

        <div className="modal-left">
          <img src={cat.image} alt={cat.name} className="modal-main-img" />
        </div>

        <div className="modal-right">
          <h2>{cat.name}</h2>

          <p className="info-label">Informações:</p>
          <div className="info-tags">
            <span>{cat.gender}</span>
            <span>{cat.age}</span>
          </div>

          <p className="info-label">Descrição:</p>
          <p className="modal-description">{cat.description}</p>

          <button className="adopt-btn">Me adote!</button>
        </div>
      </div>
    </div>
  );
}

export default CatModal;
