import * as dotenv from "dotenv";
import * as jsonfile from "jsonfile";
import * as path from "path";

import { env } from "../src/env";

dotenv.config();

const content = {
    type: env.db.type,
    host: env.db.host,
    port: env.db.port,
    username: env.db.username,
    password: env.db.password,
    database: env.db.database,
    entities: env.app.dirs.entities,
};
console.log("in ormconfig.ts");
const filePath = path.join(process.cwd(), "ormconfig.json");
jsonfile.writeFile(filePath, content, { spaces: 2 }, err => {
    if (err === null) {
        console.log("finished writing ormconfig");
        process.exit(0);
    } else {
        console.error("Failed to generate the ormconfig.json", err);
        process.exit(1);
    }
});
