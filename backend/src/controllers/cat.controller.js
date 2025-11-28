import Cat from "../models/Cat.js";

export async function getCats(req, res) {
  try {
    const cats = await Cat.findAll();
    return res.json(cats);
  } catch (err) {
    console.error("Error fetching cats:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}


export async function createCat(req, res) {
  try {
    const cat = await Cat.create(req.body);
    return res.status(201).json(cat);
  } catch (err) {
    console.error("Error creating cat:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function updateCat(req, res) {
  try {
    const { id } = req.params;
    const cat = await Cat.findByPk(id);

    if (!cat) return res.status(404).json({ error: "Cat not found" });

    await cat.update(req.body);

    return res.json(cat);
  } catch (err) {
    console.error("Error updating cat:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}


export async function deleteCat(req, res) {
  try {
    const { id } = req.params;
    const cat = await Cat.findByPk(id);

    if (!cat) return res.status(404).json({ error: "Cat not found" });

    await cat.destroy();

    return res.json({ message: "Cat deleted" });
  } catch (err) {
    console.error("Error deleting cat:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
