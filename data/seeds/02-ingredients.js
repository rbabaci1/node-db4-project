exports.seed = function (knex) {
  return knex("ingredients")
    .del()
    .then(function () {
      return knex("ingredients").insert([
        { id: 1, name: "Olive Oil", color: "Yellow" },
        { id: 2, name: "Salt", color: "White" },
        { id: 3, name: "Garlic", color: "White" },
        { id: 4, name: "Black Peppers", color: "Black" },
        { id: 5, name: "Potatoes", color: "Brown" },
      ]);
    });
};
