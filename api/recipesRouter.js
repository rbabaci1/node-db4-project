const express = require("express");

const { getRecipes, getRecipeById, getShoppingList } = require("./dbHelpers");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const recipes = await getRecipes();

    res.status(200).json(recipes);
  } catch ({ errno, code, message }) {
    next({
      message: "The recipes could not be retrieved at this moment.",
      errno,
      code,
      reason: message,
    });
  }
});

router.get("/:id/shoppingList", validateId, async (req, res, next) => {
  try {
    const { params, recipe } = req;
    const ingredients = await getShoppingList(params.id);

    res.status(200).json({ recipe_name: recipe.name, ingredients });
  } catch ({ errno, code, message }) {
    next({
      message: "The recipe ingredients could not be retrieved at this moment.",
      errno,
      code,
      reason: message,
    });
  }
});

/*********************  Validation Middleware ********************/
async function validateId(req, res, next) {
  try {
    const { id } = req.params;
    const recipe = await getRecipeById(id);

    if (recipe) {
      req.recipe = recipe;
      next();
    } else {
      next({
        status: 404,
        message: `The recipe with the specified ID does not exist.`,
      });
    }
  } catch (err) {
    next({
      error: `The recipe info could not be retrieved at this moment.`,
      reason: err.message,
    });
  }
}

module.exports = router;
