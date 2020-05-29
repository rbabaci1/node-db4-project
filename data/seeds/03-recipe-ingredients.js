exports.seed = function (knex) {
  return knex("recipe_ingredients")
    .del()
    .then(function () {
      return knex("recipe_ingredients").insert([
        { ingredient_id: 1, recipe_id: 3, quantity: 22.1 },
        { ingredient_id: 1, recipe_id: 2, quantity: 22.1 },
        { ingredient_id: 2, recipe_id: 3, quantity: 22.1 },
        { ingredient_id: 2, recipe_id: 4, quantity: 22.1 },
        { ingredient_id: 3, recipe_id: 5, quantity: 22.1 },
        { ingredient_id: 3, recipe_id: 3, quantity: 22.1 },
      ]);
    });
};
