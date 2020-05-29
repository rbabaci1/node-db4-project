const db = require("../data/dbConfig");

const getRecipes = () => db("recipes");

const getRecipeById = id => db("recipes").where({ id }).first();

const getShoppingList = recipe_id => {
  return db("recipes as r")
    .select("ir.ingredient_id", "ir.ingredient_quantity")
    .join("ingredient_recipe as ir", "r.id", "ir.recipe_id")
    .where({ id: recipe_id });
};

module.exports = { getRecipes, getRecipeById, getShoppingList };
