require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.signUp = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.json({ error: "All fields are required" });

  try {
    const isUserExist = await User.findOne({ email: email });
    if (isUserExist)
      return res.json({ error: "Already user exist with this email!" });

    const user = new User({ email, password: User.hashPassword(password) });
    const registeredUser = await user.save();
    return res.json({ message: "successfully user registered!" });
  } catch (error) {
    return res.json({ error: "Something went wrong" });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.json({ error: "All fields are required" });

  try {
    const user = await User.findOne({ email: email });
    if (!user) return res.json({ error: "User doesn't exist" });

    const isValidPassword = await user.isValid(password);
    if (!isValidPassword) return res.json({ error: "invalid credentials!!" });

    const payload = { id: user._id, email: user.email };
    const token = jwt.sign(payload, process.env.JWTSECRETKEY, {
      expiresIn: "24h",
    });

    return res.json({ token });
  } catch (error) {
    return res.json({ error: "Something went wrong" });
  }
};
