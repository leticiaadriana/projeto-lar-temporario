import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(400).json({ error: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return res.status(400).json({ error: "Incorrect Password" });

    console.log("JWT_SECRET:", process.env.JWT_SECRET);
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({
      token,
      firstAccess: user.firstAccess,
    });

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ error: "Intern server error" });
  }
}
