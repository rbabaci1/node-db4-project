exports.seed = function (knex) {
  return knex("instructions")
    .del()
    .then(function () {
      return knex("instructions").insert([
        { recipe_id: 1, step_number: 1, instruction: "Wash your hands!" },
        { recipe_id: 1, step_number: 5, instruction: "Enjoy your meal!" },
        { recipe_id: 2, step_number: 1, instruction: "Turn oven on" },
        { recipe_id: 2, step_number: 5, instruction: "Turn back off" },
        { recipe_id: 3, step_number: 3, instruction: "Figure it out" },
      ]);
    });
};
