const router = require("express").Router();
const UserGameController = require ("./user_game");
const authenticateSuperUser = require("../middleware/superuserauthenticate")
const UserControl = new UserGameController();

router.get("/", authenticateSuperUser, UserControl.index);
router.get("/create", authenticateSuperUser, UserControl.create);
router.get("/:id", authenticateSuperUser, UserControl.show);
router.get("/:id/edit", authenticateSuperUser, UserControl.edit);
router.get("/:id/delete", authenticateSuperUser, UserControl.delete);

router.post("/newuser", UserControl.store);
router.post("/:id/update", UserControl.update);

module.exports = router;

