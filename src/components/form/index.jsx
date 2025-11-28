import { useState } from "react";
import "./style.css";

function AdoptionForm() {
  const initialState = {
    name: "",
    telefone: "",
    email: "",
    address: "",
    cat: "",
  };

  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://localhost:3001/adoption", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Formulário enviado!");
    setFormData(initialState);
  }

  return (
    <div className="adoption-form-container">
      <div className="adoption-form">
        <div className="adoption-form-title">
          <h2>Formulário de Interesse</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome completo: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="telefone">Telefone (DDD + Número):</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="address">Endereço completo:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <label htmlFor="cat">Gatinho(a) que tem interesse:</label>
          <input
            type="text"
            id="cat"
            name="cat"
            value={formData.cat}
            onChange={handleChange}
          />

          <button className="submit-form" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdoptionForm;
