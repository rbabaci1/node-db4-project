const express = require("express");

const {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions,
  getSingleIngredientRecipe,
} = require("./dbHelpers");

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

    res
      .status(200)
      .json(
        ingredients.length
          ? { recipe_name: recipe.name, ingredients }
          : { message: "No ingredients available for the specified recipe." }
      );
  } catch ({ errno, code, message }) {
    next({
      message: "The recipe ingredients could not be retrieved at this moment.",
      errno,
      code,
      reason: message,
    });
  }
});

router.get("/:id/instructions", validateId, async (req, res, next) => {
  try {
    const { params, recipe } = req;
    const instructions = await getInstructions(params.id);

    res
      .status(200)
      .json(
        instructions.length
          ? { recipe_name: recipe.name, instructions }
          : { message: "No instructions available for the specified recipe." }
      );
  } catch ({ errno, code, message }) {
    next({
      message: "The recipe instructions could not be retrieved at this moment.",
      errno,
      code,
      reason: message,
    });
  }
});

router.get("/ingredients/:id/recipes", async (req, res, next) => {
  try {
    const { id } = req.params;

    const recipes = await getSingleIngredientRecipe(id);

    res
      .status(200)
      .json(
        recipes.length
          ? recipes
          : { message: "No recipe available uses the specified ingredient" }
      );
  } catch ({ errno, code, message }) {
    next({
      message: "The recipes could not be retrieved at this moment.",
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
