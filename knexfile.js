module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/recipeBook.db",
    },
    useNullAsDefault: true,
  },
};
