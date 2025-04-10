import { expect, test } from "vitest";
import { add } from "./main.js";

test('return 0 for empty numbers', () => {
    expect(add("")).toBe(0);
});

test('returns number for single number string', () => {
    expect(add("1")).toBe(1);
});
