import { writeFile } from "node:fs/promises";

await writeFile("/output/entry.txt", "ChattyGippy", "utf8");
