const { add } = require("./calculator");

test("empty string returns 0", () => {
  expect(add("")).toBe(0);
});

test("single number returns its value", () => {
  expect(add("1")).toBe(1);
});

test('returns sum of two numbers', () => {
  expect(add("1,5")).toBe(6);
});

test('returns sum of multiple numbers', () => {
  expect(add("1,2,3,4,5")).toBe(15);
});