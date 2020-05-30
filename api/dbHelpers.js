const db = require("../data/dbConfig");

const addRecipe = newRecipe => db("recipes").insert(newRecipe);

const addIngredient = newIngredient => {
  return db("ingredients").insert(newIngredient);
};

const syncRecipeIngredients = ids => {
  return db("recipe_ingredients").insert(ids);
};

const getRecipes = () => db("recipes");

const getRecipeById = id => db("recipes").where({ id }).first();

const getIngredientById = id => db("ingredients").where({ id }).first();

const getShoppingList = recipe_id => {
  return db("recipe_ingredients as r_i")
    .select("i.*")
    .join("recipes as r", "r_i.recipe_id", "r.id")
    .join("ingredients as i", "r_i.ingredient_id", "i.id")
    .where({ recipe_id });
};

const getInstructions = recipe_id => {
  return db("instructions").where({ recipe_id }).orderBy("step_number");
};

const getSingleIngredientRecipe = ingredient_id => {
  return db("recipe_ingredients as r_i")
    .select("r.*")
    .join("recipes as r", "r_i.recipe_id", "r.id")
    .join("ingredients as i", "r_i.ingredient_id", "i.id")
    .where({ ingredient_id });
};

module.exports = {
  addRecipe,
  addIngredient,
  syncRecipeIngredients,
  getRecipes,
  getRecipeById,
  getIngredientById,
  getShoppingList,
  getInstructions,
  getSingleIngredientRecipe,
};
