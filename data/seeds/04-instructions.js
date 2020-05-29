exports.seed = function (knex) {
  return knex("instructions")
    .del()
    .then(function () {
      return knex("instructions").insert([
        { recipe_id: 1, step_number: 2, instruction: "Wash your hands!" },
        { recipe_id: 2, step_number: 1, instruction: "Enjoy your meal!" },
        { recipe_id: 2, step_number: 3, instruction: "Turn oven on" },
        { recipe_id: 2, step_number: 2, instruction: "Turn back off" },
        { recipe_id: 4, step_number: 2, instruction: "Figure it out" },
      ]);
    });
};
