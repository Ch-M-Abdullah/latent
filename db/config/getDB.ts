import { getItemAsync } from "expo-secure-store";
import { openDatabaseAsync, type SQLiteDatabase } from "expo-sqlite";
import createTables from "./createTables";

let db: SQLiteDatabase | null;

async function createDatabase() {
  try {
    const username = await getItemAsync("email"); //Retrieving the email of user that is currently logged-in.
    db = await openDatabaseAsync(`${username}_latent.db`); //Opening a Database File With The username of the logged-in user. This also creates the db if not exists
    await db.execAsync("PRAGMA foreign_keys = ON;"); // Enable foreign keys for this connection
    return db;
  } catch (err: any) {
    throw err; //throwing the error to the calling function
  }
}

export default async function getDatabase() {
  if (!db) {
    try {
      db = await createDatabase();
      await createTables(db);
    } catch (err: any) {
      console.log("Error in getDatabase: ", err);
    }
  }
  return db;
}
