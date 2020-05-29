exports.seed = function (knex) {
  return knex("ingredient_recipe")
    .del()
    .then(function () {
      return knex("ingredient_recipe").insert([
        { ingredient_id: 1, recipe_id: 3, ingredient_quantity: 22.1 },
        { ingredient_id: 1, recipe_id: 2, ingredient_quantity: 22.1 },
        { ingredient_id: 2, recipe_id: 3, ingredient_quantity: 22.1 },
        { ingredient_id: 2, recipe_id: 4, ingredient_quantity: 22.1 },
        { ingredient_id: 3, recipe_id: 5, ingredient_quantity: 22.1 },
        { ingredient_id: 3, recipe_id: 3, ingredient_quantity: 22.1 },
      ]);
    });
};
