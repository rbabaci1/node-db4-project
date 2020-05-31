const db = require("../data/dbConfig");

const addRecipe = newRecipe => db("recipes").insert(newRecipe);

const addIngredient = newIngredient => db("ingredients").insert(newIngredient);

const updateRecipeIngredient = newPair => {
  return db("recipe_ingredients").insert(newPair);
};

const getRecipes = () => db("recipes");

const getRecipeById = id => db("recipes").where({ id }).first();

const getIngredientById = id => db("ingredients").where({ id }).first();

const getShoppingList = recipe_id => {
  return db("recipe_ingredients as r_i")
    .select("i.*")
    .join("recipes as r", "r_i.recipe_id", "r.id")
    .join("ingredients as i", "r_i.ingredient_name", "i.name")
    .where({ recipe_id });
};

const getInstructions = recipe_id => {
  return db("instructions").where({ recipe_id }).orderBy("step_number");
};

const getSingleIngredientRecipe = ingredient_name => {
  return db("recipe_ingredients as r_i")
    .select("r.*")
    .join("recipes as r", "r_i.recipe_id", "r.id")
    .join("ingredients as i", "r_i.ingredient_name", "i.name")
    .where({ ingredient_name });
};

module.exports = {
  addRecipe,
  addIngredient,
  updateRecipeIngredient,
  getRecipes,
  getRecipeById,
  getIngredientById,
  getShoppingList,
  getInstructions,
  getSingleIngredientRecipe,
};
