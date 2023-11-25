const express = require("express");
const { getRegister, register } = require("../controller/Controlletr.js");

const router = express.Router();

router.get("/user/register", getRegister);
router.post("/user/register", register);

module.exports = router;
