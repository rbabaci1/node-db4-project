exports.seed = function (knex) {
  return knex("ingredients")
    .del()
    .then(function () {
      return knex("ingredients").insert([
        { name: "Olive Oil", quantity: 22.1, color: "Yellow" },
        { name: "Salt", quantity: 12.1, color: "White" },
        { name: "Garlic", quantity: 42.1, color: "White" },
        { name: "Black Peppers", quantity: 32.1, color: "Black" },
        { name: "Potatoes", quantity: 20.1, color: "Brown" },
      ]);
    });
};
