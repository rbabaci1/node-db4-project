const db = require("../data/dbConfig");

const getRecipes = () => db("recipes");

const getShoppingList = recipe_id => {
  return db("recipes as r")
    .select("recipes.*", "ri.ingredient_id", "ri.ingredient_quantity")
    .join("recipe_ingredient as ri", "r.id", "ri.recipe_id")
    .where({ recipe_id });
};

module.exports = { getRecipes, getShoppingList };
