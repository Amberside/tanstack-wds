import { boolean, timestamp, mysqlTable, varchar, int } from 'drizzle-orm/mysql-core';

export const todos = mysqlTable('todos', {
  id: int().primaryKey().autoincrement(),
  title: varchar({length: 64}).notNull(),
  isComplete: boolean().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp()
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
})
