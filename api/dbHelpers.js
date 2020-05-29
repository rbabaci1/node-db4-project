const db = require("../data/dbConfig");

const getRecipes = () => db("recipes");

const getRecipeById = id => db("recipes").where({ id }).first();

const getShoppingList = recipe_id => {
  return db("recipe_ingredients as r_i")
    .select("i.*", "r_i.ingredient_quantity")
    .join("recipes as r", "r_i.recipe_id", "r.id")
    .join("ingredients as i", "r_i.ingredient_id", "i.id")
    .where({ recipe_id });
};

const getInstructions = recipe_id => {
  return db("recipes as r").select("");
};

module.exports = { getRecipes, getRecipeById, getShoppingList };
