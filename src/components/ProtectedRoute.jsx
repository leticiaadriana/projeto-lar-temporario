import { Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    async function verify() {
      const token = localStorage.getItem("token");
      if (!token) {
        setAuthorized(false);
        return;
      }

      try {
        const res = await axios.get("http://localhost:3001/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAuthorized(res.status === 200);
      } catch {
        setAuthorized(false);
      }
    }

    verify();
  }, []);

  if (authorized === null) return <div>Carregando...</div>;

  return authorized ? children : <Navigate to="/login" />;
}
