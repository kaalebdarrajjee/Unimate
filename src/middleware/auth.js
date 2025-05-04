const jwt = require("jsonwebtoken");
const User = require("../models/userModel")
const isAuthenticated =async function   (req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "No token provided" });
  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(id)
    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

const isPremium = async function (req,res,next){
  const authHeader = req.headers.authorization || "";
  const token = authHeader.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "No token provided" });
  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(id)
    req.user = user;
    if(req.user.isPremium) {next()}
    else{res.status(400).json({message:"not an admin"})};
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}

module.exports = {
  isPremium,
  isAuthenticated
};