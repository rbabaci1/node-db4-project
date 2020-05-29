exports.seed = function (knex) {
  return knex("instructions")
    .del()
    .then(function () {
      return knex("instructions").insert([
        { instruction: "Wash your hands!" },
        { instruction: "Enjoy your meal!" },
        { instruction: "Turn oven on" },
        { instruction: "Turn back off" },
        { instruction: "Figure it out" },
      ]);
    });
};
