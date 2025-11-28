import { useState, useEffect } from "react";
import CatCard from "../card";
import CatModal from "../popup";
import "./style.css";

function CatsGrid() {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);

  useEffect(() => {
    async function fetchCats() {
      try {
        const response = await fetch("http://localhost:3001/cats");
        const data = await response.json();
        setCats(data);
      } catch (error) {
        console.error("Erro ao buscar gatinhos:", error);
      }
    }

    fetchCats();
  }, []);

  return (
    <div className="cats-container">
      <h2 className="title">Conheça os gatinhos disponíveis!</h2>

      <div className="cats-grid">
        {cats.map((cat) => (
          <CatCard key={cat.id} cat={cat} onClick={setSelectedCat} />
        ))}
      </div>

      <CatModal cat={selectedCat} onClose={() => setSelectedCat(null)} />
    </div>
  );
}

export default CatsGrid;
