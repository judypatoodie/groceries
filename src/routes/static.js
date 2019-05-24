const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");
const groceryController = require("../controllers/groceryController");
router.get("/", groceryController.index);

module.exports = router;
