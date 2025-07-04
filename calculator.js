function add(numbers) {
  if (numbers === "") return 0;

  let delimiters = /,|\n/;

  if (numbers.startsWith("//")) {
    const delimiterSectionEnd = numbers.indexOf("\n");
    const delimiterSection = numbers.slice(2, delimiterSectionEnd);

    if (delimiterSection.startsWith("[")) {
      // Multiple delimiters
      const delimiterMatches = delimiterSection.match(/\[([^\]]+)\]/g);
      const delimiterList = delimiterMatches.map(d => d.slice(1, -1));
      const escaped = delimiterList.map(d => d.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"));
      delimiters = new RegExp(escaped.join("|"));
    } else {
      delimiters = new RegExp(numbers[2]);
    }

    numbers = numbers.slice(delimiterSectionEnd + 1);
  }

  const nums = numbers.split(delimiters).map(Number);
  const negatives = nums.filter(n => n < 0);

  if (negatives.length > 0) {
    throw new Error("negative numbers not allowed " + negatives.join(","));
  }

  return nums.filter(n => n <= 1000).reduce((a, b) => a + b, 0);
}


module.exports = { add };
