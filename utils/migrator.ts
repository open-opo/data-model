import "@open-opo/data-model";
import { ConnectionOptions, createConnection } from "typeorm";
import { createDatabase } from "typeorm-extension";

export const connectionOptions: ConnectionOptions = {
  name: "drop_db_synchronize",
  type: "postgres",
  logging: true,
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "OpenOpo",
  entities: ["./node_modules/@open-opo/data-model/dist/**/*.js"],
};

export async function handler(): Promise<unknown> {
  console.log(connectionOptions);

  try {
    console.log("Create DB if it does not exist....");
    await createDatabase({ ifNotExist: true }, connectionOptions);
    console.log("Creating Connection...");
    const connection = await createConnection(connectionOptions);
    console.log("Connection Established...");
    console.log("Starting Sync...");
    await connection.synchronize(true);
    console.log("Sync Complete...");
    console.log("Closing Connection...");
    await connection.close();
    console.log("Connection Closed...");
  } catch (error) {
    console.log(error);
    return false;
  }

  return true;
}

(async () => {
  await handler();
  process.exit(0);
})();
