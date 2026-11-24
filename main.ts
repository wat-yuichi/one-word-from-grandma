import { mkdir, writeFile } from "node:fs/promises";

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", "ChattyGippy", "utf8");
