const express = require("express");
const route = express.Router();
const { isAuthentication } = require("../middleware");
const adminController = require("../controllers/AdminController");

route.post("/login", adminController.login);
route.post("/forget_password", adminController.forgetPassword);
route.post("/reset_password", adminController.resetPassword);
route.post("/token", adminController.refreshToken);

route.use(isAuthentication);
route.post("/logout", adminController.logout);

module.exports = route;
