import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";

import authRoutes from "./routes/auth.routes.js";
import catRoutes from "./routes/cat.routes.js";
import { authMiddleware } from "./middlewares/auth.middleware.js";

import "./models/Cat.js";

import fs from "fs";
import XLSX from "xlsx";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/cats", catRoutes);

app.get("/dashboard", authMiddleware, (req, res) => {
  return res.json({ message: "Authorized access" });
});

app.post("/adoption", (req, res) => {
  const formData = req.body;

  const filePath = "./adoptions.xlsx";

  let workbook;
  let worksheet;

  if (fs.existsSync(filePath)) {
    workbook = XLSX.readFile(filePath);
    worksheet = workbook.Sheets["Adocoes"];
    const json = XLSX.utils.sheet_to_json(worksheet);
    json.push(formData);

    const newSheet = XLSX.utils.json_to_sheet(json);
    workbook.Sheets["Adocoes"] = newSheet;
  } else {
    workbook = XLSX.utils.book_new();
    worksheet = XLSX.utils.json_to_sheet([formData]);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Adocoes");
  }

  XLSX.writeFile(workbook, filePath);

  return res.json({ message: "Formulário salvo com sucesso!" });
});

app.get("/download/adoption", (req, res) => {
  const filePath = "./adoptions.xlsx";

  if (!fs.existsSync(filePath)) {
    return res
      .status(404)
      .json({ message: "Nenhum formulário enviado ainda." });
  }

  return res.download(filePath);
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
