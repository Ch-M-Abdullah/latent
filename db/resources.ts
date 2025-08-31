import { ToastAndroid } from "react-native";
import createTables from "./config/createTables";
import getDatabase from "./config/getDB";

// Create
export async function createResource(
  name: string,
  subTopicId: number,
  link: string,
  type: string
) {
  const db = await getDatabase();
  if (!db || db === null) {
    ToastAndroid.show("Error creating the DB", ToastAndroid.SHORT);
    return;
  }
  await createTables(db);
  await db.runAsync(
    `INSERT INTO resource (name, sub_topic_id, link, type) VALUES (?, ?, ?, ?);`,
    [name, subTopicId, link, type]
  );
}

// Read
export async function getResources(subTopicId: number) {
  const db = await getDatabase();
  if (!db || db === null) {
    ToastAndroid.show("Error creating the DB", ToastAndroid.SHORT);
    return;
  }
  await createTables(db);
  return await db.getAllAsync(
    `SELECT * FROM resource WHERE sub_topic_id = ?;`,
    [subTopicId]
  );
}

// Update
export async function updateResource(
  id: number,
  name: string,
  link: string,
  type: string
) {
  const db = await getDatabase();
  if (!db || db === null) {
    ToastAndroid.show("Error creating the DB", ToastAndroid.SHORT);
    return;
  }
  await createTables(db);
  await db.runAsync(
    `UPDATE resource SET name = ?, link = ?, type = ? WHERE id = ?;`,
    [name, link, type, id]
  );
}

// Delete
export async function deleteResource(id: number) {
  const db = await getDatabase();
  if (!db || db === null) {
    ToastAndroid.show("Error creating the DB", ToastAndroid.SHORT);
    return;
  }
  await createTables(db);
  await db.runAsync(`DELETE FROM resource WHERE id = ?;`, [id]);
}
