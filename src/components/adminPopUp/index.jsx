import { useEffect, useState } from "react";
import "./style.css";

function CatModal({ cat, onClose, onSave, onDelete }) {
  if (!cat) return null;

  const [name, setName] = useState(cat.name || "");
  const [description, setDescription] = useState(cat.description || "");
  const [imageUrl, setImageUrl] = useState(cat.image || "");
  const [gender, setGender] = useState(cat.gender || "");
  const [age, setAge] = useState(cat.age || "");

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

  const handleSave = () => {
    const updatedCat = {
      ...cat,
      name,
      description,
      image: imageUrl,
      gender,
      age,
    };

    onSave(updatedCat);
    handleClose();
  };

  const handleDelete = () => {
    onDelete(cat.id);
    handleClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-btn" onClick={handleClose}>✕</button>

        <div className="modal-left">
          <img src={imageUrl} alt={name} className="modal-main-img" />
        </div>

        <div className="modal-right">
          <h2>Editar Gatinho</h2>

          <label className="info-label">Nome:</label>
          <input
            type="text"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="info-label">URL da Imagem:</label>
          <input
            type="text"
            className="input-field"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://exemplo.com/imagem.jpg"
          />

          <label className="info-label">Gênero:</label>
          <select
            className="input-field"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Macho">Macho</option>
            <option value="Fêmea">Fêmea</option>
          </select>

          <label className="info-label">Idade:</label>
          <input
            type="text"
            className="input-field"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Ex: 1 ano, 7 meses"
          />

          <label className="info-label">Descrição:</label>
          <textarea
            className="input-area"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <button className="adopt-btn" onClick={handleSave}>
              Salvar Alterações
            </button>

            {cat.id && (
              <button
                className="delete-btn"
                style={{
                  background: "#d9534f",
                  padding: "12px 25px",
                  borderRadius: "20px",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={handleDelete}
              >
                Deletar
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default CatModal;
