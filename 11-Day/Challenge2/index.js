const { readingFile, calculBonus, writeFile } = require("./processData.js");

try {
  const cbAndrf = calculBonus(readingFile("employee_data_1.xlsx"));

  writeFile(cbAndrf);
} catch (error) {
  console.log("the eroor is:" + error);
}
