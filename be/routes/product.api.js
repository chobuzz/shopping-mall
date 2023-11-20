const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const productController = require("../controllers/product.controller");

router.post(
  "/",
  authController.authenticate,
  authController.checkAdminPermission,
  productController.createProduct
);
//토큰이 valid한지 인증 및 admin level인지 확인 후, admin level이라면 product 생성 가능

router.get("/", productController.getProducts);
module.exports = router;
