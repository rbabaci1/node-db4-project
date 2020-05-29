exports.seed = function (knex) {
  return knex("recipes")
    .del()
    .then(function () {
      return knex("recipes").insert([
        {
          id: 1,
          name: "CousCous",
          cuisine_type: "Algerian",
          creator: "Rabah Babaci",
        },
        {
          id: 1,
          name: "Pizza",
          cuisine_type: "Italian",
          creator: "Kyla Gifford",
        },
        {
          id: 1,
          name: "Omelette",
          cuisine_type: "American",
          creator: "Mike Tyson",
        },
        {
          id: 1,
          name: "Tacos",
          cuisine_type: "Mexican",
          creator: "Me. Yessss!",
        },
        {
          id: 1,
          name: "Lentil Soup",
          cuisine_type: "French",
          creator: "Itself",
        },
        {
          id: 1,
          name: "New York Steak",
          cuisine_type: "American",
          creator: "Ramsey",
        },
      ]);
    });
};
