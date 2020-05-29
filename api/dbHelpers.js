const db = require("../data/dbConfig");

const getRecipes = () => db("recipes");

const getRecipeById = id => db("recipes").where({ id }).first();

const getShoppingList = recipe_id => {
  return db("recipe_ingredients as r_i")
    .select("i.*", "r_i.quantity")
    .join("recipes as r", "r_i.recipe_id", "r.id")
    .join("ingredients as i", "r_i.ingredient_id", "i.id")
    .where({ recipe_id });
};

const getInstructions = recipe_id => {
  return db("recipe_instructions as r_i")
    .select("i.*", "r_i.step_number")
    .join("recipes as r", "r_i.recipe_id", "r.id")
    .join("instructions as i", "r_i.instruction_id", "i.id")
    .where({ recipe_id })
    .orderBy("step_number");
};

const getSingleIngredientRecipe = ingredient_id => {
  return db("recipe_ingredients as r_i")
    .select("r.*")
    .join("recipes as r", "r_i.recipe_id", "r.id")
    .join("ingredients as i", "r_i.ingredient_id", "i.id");
  // .where()
};

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions,
  getSingleIngredientRecipe,
};
