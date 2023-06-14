const router = require("express").Router()

router.get("/game", require('./game'))
router.get("/", require('./landingpage'))

module.exports = router