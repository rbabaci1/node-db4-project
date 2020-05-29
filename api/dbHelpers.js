const db = require("../data/dbConfig");

const getRecipes = () => db("recipes");
