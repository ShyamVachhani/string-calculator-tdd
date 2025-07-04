function add(numbers) {
  if (numbers === "") return 0;
  const cleaned = numbers.replace(/\n/g, ",");
  const nums = cleaned.split(",").map(Number);
  return nums.reduce((a, b) => a + b, 0);
}

module.exports = { add };
