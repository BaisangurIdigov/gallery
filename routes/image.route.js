const { Router } = require("express");
const { imageControllers } = require("../controllers/image.controllers");
const router = Router();

router.get("/images", imageControllers.getImage);
router.post("/image", imageControllers.postImage);
router.delete("/image", imageControllers.deleteImage);

module.exports = router;
