import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const key = process.env.JWT_SECRET_KEY

function createCookie(req, res, next) {
  const User = req.body;
  const token = jwt.sign({
    username: User.username,
    email: User.email
  }, key, { expiresIn: "1d" });
  res.cookie("ChatAppCookie", token, { maxAge: 1 * 24 * 60 * 60 * 1000 });
  res.status(200).json({
    success: true,
    message: "User signed in successfully",
    user: {
      username: User.username,
      email: User.email,
      profilePicture: User.profilePicture,
      _id: User._id,
      bio: User.bio,
      gender: User.gender,
      privacy: User.privacy,
      bookmarks: User.bookmarks,
      following: User.following,
    }
  });
}


export { createCookie }