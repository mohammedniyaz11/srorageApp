import express from "express";
import checkAuth from "../middlewares/authMiddleware.js";
import {
  getCurrentUser,
  login,
  logout,
  logoutAll,
  register,
  getAllUsers,

} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/", checkAuth, getCurrentUser);


router.get(
  "/users",
  checkAuth,
  (req, res, next) => {
    if (req.user.role !== "User") return next();
    res.status(403).json({ error: "You can not access users" });
  },
  getAllUsers
);


router.post("/logout", logout);
router.post("/logout-all", logoutAll);

export default router;
