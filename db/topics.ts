import { ToastAndroid } from "react-native";
import createTables from "./config/createTables";
import getDatabase from "./config/getDB";

// Create
export async function createTopic(name: string) {
  const db = await getDatabase();
  if (!db || db === null) {
    ToastAndroid.show("Error creating the DB", ToastAndroid.SHORT);
    return;
  }
  await createTables(db);
  await db.runAsync(`INSERT INTO topic (name) VALUES (?);`, [name]);
}

// Read
export async function getTopics() {
  const db = await getDatabase();
  if (!db || db === null) {
    ToastAndroid.show("Error creating the DB", ToastAndroid.SHORT);
    return;
  }
  await createTables(db);
  const result = await db.getAllAsync(`SELECT * FROM topic;`);
  return result;
}

// Update
export async function updateTopic(id: number, name: string) {
  const db = await getDatabase();
  if (!db || db === null) {
    ToastAndroid.show("Error creating the DB", ToastAndroid.SHORT);
    return;
  }
  await createTables(db);
  await db.runAsync(`UPDATE topic SET name = ? WHERE id = ?;`, [name, id]);
}

// Delete
export async function deleteTopic(id: number) {
  const db = await getDatabase();
  if (!db || db === null) {
    ToastAndroid.show("Error creating the DB", ToastAndroid.SHORT);
    return;
  }
  await createTables(db);
  await db.runAsync(`DELETE FROM topic WHERE id = ?;`, [id]);
}
