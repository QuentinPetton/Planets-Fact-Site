//On récupère express 
const express = require("express");
const router = express.Router();
const homeController = require(`../controllers/homeController`);


//route définie
router.get("/", homeController.homePage);


module.exports = router;