const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");

//회원가입
router.post("/", userController.createUser);
//토큰값을 받을 때 body가 아닌 header로 주고받기 때문에, get을 사용한다.
router.get("/me", authController.authenticate, userController.getUser);
//토큰이 valid한 토큰인지, 이 token가지고 유저를 찾아서 리턴 (미들웨어)

module.exports = router;
