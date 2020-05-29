const express = require("express");

const { getRecipes } = require("./dbHelpers");

const router = express.Router();

router.get("/", async (res, req, next) => {
  try {
    const recipes = await getRecipes();

    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
