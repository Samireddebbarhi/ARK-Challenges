function onlyDuplicates(str) {
  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  const filteredChars = str.split("").filter((char) => charCount[char] > 1);

  const result = filteredChars.join("");

  return result;
}

console.log(onlyDuplicates("abccdefee")); // "cceee"
