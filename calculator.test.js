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

test('handles new lines between numbers', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiter with //;\n syntax', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('throws exception on negative numbers', () => {
  expect(() => add("1,-2,-4")).toThrow("negative numbers not allowed -2,-4");
});

test("ignores numbers bigger than 1000", () => {
  expect(add("2,1001")).toBe(2);
});

test("handles delimiter of any length", () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
});
