import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import authRoutes from "./routes/auth.routes.js";
import catRoutes from "./routes/cat.routes.js";
import { authMiddleware } from "./middlewares/auth.middleware.js";
import "./models/Cat.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/cats", catRoutes);

app.get("/dashboard", authMiddleware, (req, res) => {
  return res.json({ message: "Authorized access" });
});

const PORT = process.env.PORT || 3001;

async function init() {
  try {
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Backend running in port ${PORT}`)); 
  } catch (e) {
    console.error("Error trying to initialize server", e);
  }
}

init();
