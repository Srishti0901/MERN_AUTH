const router = require("express").Router();
const { login, signup, logout } = require("../Controller/AuthController");
const authMiddleware = require("../MiddleWare/AuthMiddleware");

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

module.exports = router;
