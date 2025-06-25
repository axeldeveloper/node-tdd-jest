const { drizzle } = require('drizzle-orm/better-sqlite3');
const Database = require('better-sqlite3');
const { migrate } = require('drizzle-orm/better-sqlite3/migrator');
const { posts } = require('./schema');

//const sqlite = new Database('./sqlite.db');
const sqlite = new Database(process.env.NODE_ENV === 'test' ? './test.db' : './sqlite.db');
const db = drizzle(sqlite, { schema: { posts } });


// Executar migrações
// migrate(db, { migrationsFolder: './migrations' });


/*// Criar tabela se não existir (apenas para desenvolvimento)
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL
  );
`);*/


module.exports = { db, sqlite };

