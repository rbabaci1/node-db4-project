const db = require("../data/dbConfig");

const getRecipes = () => db("recipes");

const getRecipeById = id => db("recipes").where({ id }).first();

const getShoppingList = recipe_id => {
  return db("recipes as r")
    .select("i_r.ingredient_id", "i_r.ingredient_quantity")
    .join("recipe_ingredients as i_r", "r.id", "i_r.recipe_id")
    .where({ id: recipe_id });
};

const getInstructions = recipe_id => {
  return db("recipes as r").select("");
};

module.exports = { getRecipes, getRecipeById, getShoppingList };
