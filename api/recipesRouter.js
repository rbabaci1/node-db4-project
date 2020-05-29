const express = require("express");

const {
  addRecipe,
  getRecipes,
  getRecipeById,
  getIngredientById,
  getShoppingList,
  getInstructions,
  getSingleIngredientRecipe,
} = require("./dbHelpers");

const router = express.Router();

router.post("/", async (req, res, next) => {});

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

router.get(
  "/:id/shoppingList",
  validateId("recipes"),
  async (req, res, next) => {
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
        message:
          "The recipe ingredients could not be retrieved at this moment.",
        errno,
        code,
        reason: message,
      });
    }
  }
);

router.get(
  "/:id/instructions",
  validateId("recipes"),
  async (req, res, next) => {
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
        message:
          "The recipe instructions could not be retrieved at this moment.",
        errno,
        code,
        reason: message,
      });
    }
  }
);

router.get(
  "/ingredients/:id/recipes",
  validateId("ingredients"),
  async (req, res, next) => {
    try {
      const { params, ingredient } = req;
      const recipes = await getSingleIngredientRecipe(params.id);

      res
        .status(200)
        .json(
          recipes.length
            ? { ingredient, recipes }
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
  }
);

/*********************  Validation Middleware ********************/
function validateId(tableName) {
  return async (req, res, next) => {
    try {
      const { id } = req.params;
      const item =
        tableName === "recipes"
          ? await getRecipeById(id)
          : await getIngredientById(id);

      if (item) {
        req[tableName === "recipes" ? "recipe" : "ingredient"] = item;
        next();
      } else {
        next({
          status: 404,
          message: `The ${
            tableName === "recipes" ? "recipe" : "ingredient"
          } with the specified ID does not exist.`,
        });
      }
    } catch (err) {
      next({
        error: `The ${
          tableName === "recipes" ? "recipe" : "ingredient"
        } info could not be retrieved at this moment.`,
        reason: err.message,
      });
    }
  };
}

module.exports = router;
