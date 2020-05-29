exports.seed = function (knex) {
  return knex("ingredients")
    .del()
    .then(function () {
      return knex("ingredients").insert([
        { name: "Olive Oil", color: "Yellow" },
        { name: "Salt", color: "White" },
        { name: "Garlic", color: "White" },
        { name: "Black Peppers", color: "Black" },
        { name: "Potatoes", color: "Brown" },
      ]);
    });
};
