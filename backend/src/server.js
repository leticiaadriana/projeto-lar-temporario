import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();


app.use(cors()); // middleware do cors aceita qualquer origem

app.use(express.json());

// rotas
app.use("/auth", authRoutes);

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
