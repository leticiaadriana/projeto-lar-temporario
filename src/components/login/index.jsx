import { useState } from "react";
import axios from "axios";
import imgLogin from "../../assets/login_image.png"
import "./style.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });

      // Primeiro acesso
      if (response.data.firstAccess) {
        alert("Você precisa criar uma nova senha!");
        window.location.href = "/reset-password"; // rota do frontend
        return;
      }

      localStorage.setItem("token", response.data.token);

      alert("Login realizado com sucesso!");
      window.location.href = "/dashboard";

    } catch (err) {
      setError(err.response?.data?.error || "Erro ao fazer login");
    }
  }

  return (
    <div className="login-container">
        <div className="left">
            <img src={imgLogin} alt="gatinhos" className="cats" />
        </div>
        <div className="right">
            <h2>Entrar 🐾</h2>

            <form onSubmit={handleLogin}>
                <label>E-mail:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>Senha:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <a className="forgot" href="/forgot-password">Esqueceu a senha?</a>

                {error && <p className="error">{error}</p>}

                <button type="submit">Entrar</button>
            </form>
        </div>
    </div>
  );
}
