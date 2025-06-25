module.exports = {
  schema: "./db/schema.js",
  out: "./migrations",
  driver: "better-sqlite3",  // Note a mudança de 'better-sqlite' para 'better-sqlite3'
  dbCredentials: {
    url: "./sqlite.db"
  },
  dialect: "sqlite"  // Adicione esta linha
};
