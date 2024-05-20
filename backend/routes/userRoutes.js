const express = require("express");
const router = express.Router();
const upload = require('../middleware/upload');
const { login, signup, postAd } = require("../controllers/userControllers");

router.post("/login", login);
router.post("/signup", signup);
router.post("/postad", upload.array("images[]"), postAd);

module.exports = router;
