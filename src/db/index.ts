// import { drizzle } from 'drizzle-orm/node-postgres'

// import * as schema from './schema.ts'

// export const db = drizzle(process.env.DATABASE_URL!, { schema })

import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';

// export const db = drizzle({ connection: {uri: process.env.DATABASE_URL}, {schema, mode: "default"}});

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo-test",
  port: 3306
});

export const db = drizzle({
  client: connection, 
  schema,
  mode: 'default',
});
// Reuse the connection pool across serverless invocations/hot-reloads
// const poolConnection = mysql.createPool(process.env.DATABASE_URL!);


// export const db = drizzle(poolConnection, {schema, mode: "default"});