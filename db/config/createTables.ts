import { SQLiteDatabase } from "expo-sqlite";

export default async function createTables(database: SQLiteDatabase) {
  // Create topic table
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS topic (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    );
  `);

  // Create sub_topics table with foreign key constraint
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS sub_topic (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      topic_id INTEGER NOT NULL,
      done INTEGER NOT NULL DEFAULT 0,
      FOREIGN KEY(topic_id) REFERENCES topic(id) ON DELETE CASCADE
    );
  `);

  // Create resources table
  await database.execAsync(`
        CREATE TABLE IF NOT EXISTS resource (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            sub_topic_id INTEGER NOT NULL,
            link TEXT,
            type TEXT,
            FOREIGN KEY(sub_topic_id) REFERENCES sub_topic(id) ON DELETE CASCADE
    );
  `);
}
