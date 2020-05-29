exports.seed = function (knex) {
  return knex("recipe_instructions")
    .del()
    .then(function () {
      return knex("recipe_instructions").insert([
        { recipe_id: 1, instruction_id: 1, step_number: 2 },
        { recipe_id: 3, instruction_id: 1, step_number: 1 },
        { recipe_id: 3, instruction_id: 1, step_number: 4 },
        { recipe_id: 2, instruction_id: 1, step_number: 10 },
        { recipe_id: 3, instruction_id: 5, step_number: 2 },
      ]);
    });
};
