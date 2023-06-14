const userLoginController = require("./login")

const userRoute = () => {
  const router = require("express").Router();
  const authenticate = require("../middleware/authenticate")
  const controller = new userLoginController();

  router.get("/", controller.loginPage);
  router.post("/", controller.doLogin);
  router.get("/user", authenticate, controller.userLogin);
  router.get("/admin", authenticate, controller.adminLogin);

  router.get("/logout", controller.logout);

  return router;
};

module.exports = userRoute();