exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
      tbl.string("cuisine_type", 128);
      tbl.string("creator", 128);
      tbl.timestamps();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("name").notNullable().unique();
      tbl.string("color", 128);
    })
    .createTable("ingredient_recipe", tbl => {
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl.float("ingredient_quantity").notNullable();
    })
    .createTable("instructions", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl.integer("step_number").notNullable();
      tbl.string("instruction", 128).notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredient_recipe")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};