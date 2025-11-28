import { useState, useEffect } from "react";
import CatCard from "../card";
import CatModal from "../adminPopUp";
import imgAdd from "../../assets/add.png";
import "./style.css";

function CatsGridAdmin() {
  const [selectedCat, setSelectedCat] = useState(null);
  const [cats, setCats] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3001/cats")
      .then((res) => res.json())
      .then((data) => setCats(data))
      .catch((err) => console.error("Erro ao carregar gatos:", err));
  }, []);


  const handleNewCat = () => {
    setSelectedCat({
      id: null,
      name: "",
      image: "",
      shortDescription: "",
      description: "",
      gender: "",
      age: "",
    });
  };


  const handleSaveCat = async (catData) => {
    const isNew = !catData.id;
    const url = isNew
      ? "http://localhost:3001/cats"
      : `http://localhost:3001/cats/${catData.id}`;

    const method = isNew ? "POST" : "PUT";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(catData),
    });

    const savedCat = await res.json();

    if (isNew) {
      setCats((prev) => [...prev, savedCat]);
    } else {
      setCats((prev) =>
        prev.map((c) => (c.id === savedCat.id ? savedCat : c))
      );
    }
  };


  const handleDeleteCat = async (id) => {
    await fetch(`http://localhost:3001/cats/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    setCats((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="cats-container">
      <h2 className="title">Painel de Gatinhos</h2>

      <div className="cats-grid">
        <div className="cat-card add-card" onClick={handleNewCat}>
          <span className="add-icon">+</span>
        </div>

        {cats.map((cat) => (
          <CatCard key={cat.id} cat={cat} onClick={setSelectedCat} />
        ))}
      </div>

      <CatModal
        cat={selectedCat}
        onClose={() => setSelectedCat(null)}
        onSave={handleSaveCat}
        onDelete={handleDeleteCat}
      />
    </div>
  );
}

export default CatsGridAdmin;
