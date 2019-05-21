const express = require("express");
const router = express.Router();

const topicController = require("../controllers/groceryItemsController")

router.get("/groceries", groceryItemsController.index);

module.exports = router;
