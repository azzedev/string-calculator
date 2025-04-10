import { expect, test } from "vitest";
import { add } from "./main.js";

test('return 0 for empty numbers', () => {
    expect(add("")).toBe(0);
});

test.each([
    ["1", 1],
    ["2", 2],
    ["3", 3],
    ["4", 4],
    ["5", 5],
    ["6", 6],
    ["7", 7],
    ["8", 8],
    ["9", 9],
])('returns %i for "%s"', (input, expected) => {
    expect(add(input)).toBe(expected);
});
