import { ToastAndroid } from "react-native";
import createTables from "./config/createTables";
import getDatabase from "./config/getDB";

// Create
export async function createSubTopic(name: string, topicId: number) {
  const db = await getDatabase();
  if(!db || db === null){
    ToastAndroid.show("Error creating the DB", ToastAndroid.SHORT);
    return;
  }
  await createTables(db);
  await db.runAsync(
    `INSERT INTO sub_topic (name, topic_id, done) VALUES (?, ?, 0);`,
    [name, topicId]
  );
}

// Read
export async function getSubTopics(topicId: number) {
  const db = await getDatabase();
  if(!db || db === null){
    ToastAndroid.show("Error creating the DB", ToastAndroid.SHORT);
    return;
  }
  await createTables(db);
  return await db.getAllAsync(`SELECT * FROM sub_topic WHERE topic_id = ?;`, [topicId]);
}

// Update Name
export async function updateSubTopicName(id: number, name: string) {
  const db = await getDatabase();
  if(!db || db === null){
    ToastAndroid.show("Error creating the DB", ToastAndroid.SHORT);
    return;
  }
  await createTables(db);
  await db.runAsync(`UPDATE sub_topic SET name = ? WHERE id = ?;`, [name, id]);
}

// Update Done Status
export async function setSubTopicDone(id: number, done: boolean) {
  const db = await getDatabase();
  if(!db || db === null){
    ToastAndroid.show("Error creating the DB", ToastAndroid.SHORT);
    return;
  }
  await createTables(db);
  await db.runAsync(`UPDATE sub_topic SET done = ? WHERE id = ?;`, [done ? 1 : 0, id]);
}

// Delete
export async function deleteSubTopic(id: number) {
  const db = await getDatabase();
  if(!db || db === null){
    ToastAndroid.show("Error creating the DB", ToastAndroid.SHORT);
    return;
  }
  await createTables(db);
  await db.runAsync(`DELETE FROM sub_topic WHERE id = ?;`, [id]);
}
