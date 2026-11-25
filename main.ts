// Make the AI Judge Feel Proud: A Family Scene — program/v1 entrypoint.
// Writes one short family scene (two lines, max 280 characters) to
// entry.txt in the output directory the grader provides.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const SCENE = [
  "Dad's report card came home today: A+ in pancakes, C- in dancing.",
  "Mum signed the bottom: \"Proud. Mostly of the pancakes.\"",
].join("\n");

// Gate (sealed scorer): entry.txt must be UTF-8 text of 1-280
// characters, not only white space. Refuse to write otherwise.
if (SCENE.length < 1 || SCENE.length > 280 || SCENE.trim().length === 0) {
  throw new Error(`scene must be 1-280 chars, got ${SCENE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, SCENE + "\n", "utf8");
chmodSync(outPath, 0o644);
