import i18n from "../src";
import { test, expect } from "vitest";


test("single word", () => {
  expect(i18n("developer")).toBe("d7r");
});

test("sentence", () => {
  expect(i18n("Hello world!")).toBe("H3o w3d!");
});

test("keep short word", () => {
  expect(i18n("to be")).toBe("to be");
});

test("mixed english/non-english", () => {
  expect(i18n("你好 developer")).toBe("你好 d7r");
});

test("punctuation", () => {
  expect(i18n("Hello-world")).toBe("H3o-w3d");
});