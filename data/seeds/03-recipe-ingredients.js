exports.seed = function (knex) {
  return knex("recipe_ingredients")
    .del()
    .then(function () {
      return knex("recipe_ingredients").insert([
        { recipe_id: 3, ingredient_name: "olive oil" },
        { recipe_id: 2, ingredient_name: "olive oil" },
        { recipe_id: 3, ingredient_name: "salt" },
        { recipe_id: 4, ingredient_name: "salt" },
        { recipe_id: 5, ingredient_name: "garlic" },
      ]);
    });
};
