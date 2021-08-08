const { Router } = require("express");
const router = Router();

router.use(require("./image.route"));

module.exports = router;
