const { sqliteTable, text, integer } = require('drizzle-orm/sqlite-core');

const posts = sqliteTable('posts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  content: text('content').notNull(),
});

module.exports = {
  posts,
};