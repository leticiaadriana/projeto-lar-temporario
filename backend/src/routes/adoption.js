const express = require("express");
const router = express.Router();
const XLSX = require("xlsx");
const fs = require("fs");

router.post("/", (req, res) => {
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

  res.json({ message: "Salvo com sucesso." });
});

module.exports = router;
