import { expect, test } from "vitest";
import { add } from "./main.js";

test('adds "1,2,3"', () => {
    expect(add("1,2,3")).toBe(6);
});
