exports.seed = function (knex) {
  return knex("recipes")
    .del()
    .then(function () {
      return knex("recipes").insert([
        {
          name: "CousCous",
          cuisine_type: "Algerian",
          creator: "Rabah Babaci",
        },
        {
          name: "Pizza",
          cuisine_type: "Italian",
          creator: "Kyla Gifford",
        },
        {
          name: "Omelette",
          cuisine_type: "American",
          creator: "Mike Tyson",
        },
        {
          name: "Tacos",
          cuisine_type: "Mexican",
          creator: "Me. Yessss!",
        },
        {
          name: "Lentil Soup",
          cuisine_type: "French",
          creator: "Itself",
        },
        {
          name: "New York Steak",
          cuisine_type: "American",
          creator: "Ramsey",
        },
      ]);
    });
};
