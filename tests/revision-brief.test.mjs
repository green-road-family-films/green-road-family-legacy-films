import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const home = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

test("implements the approved positioning and homepage sequence", () => {
  for (const text of ["Your Story.", "NOT A FAMILY VIDEO.", "WHO IS THIS FOR?", "BEFORE WE FILM", "YOUR ARCHIVE", "BEYOND THE FILM", "THE CRAFT", "THE EXPERIENCE", "EVERY STORY FINDS", "MEHDI", "YOUR STORY", "EVERY LEGACY BEGINS"]) assert.match(home, new RegExp(text));
});

test("uses the four approved story territories and five experience stages", () => {
  for (const text of ["A LIFE", "A FAMILY", "A JOURNEY", "A LEGACY", "DISCOVER", "DEVELOP", "FILM", "CRAFT", "PRESERVE"]) assert.match(home, new RegExp(text));
});

test("removes prohibited placeholder and package language", () => {
  assert.doesNotMatch(home, /Google|★★★★★|Bronze|Silver|Gold|Pexels|placeholder|25–45|45–75|60–90|camera specifications/i);
});

test("includes responsive, accessible and motion-reduction foundations", () => {
  assert.match(css, /@media\(max-width:900px\)/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(layout, /openGraph/);
});
