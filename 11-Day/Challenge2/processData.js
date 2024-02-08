const xl = require("xlsx");
/*
const readFileAsync = (path) =>
  new Promise((Resolved, Rejected) => {
    xl.readFile(path, (error, workbook) => {
      if (!error) {
        Resolved(() =>
          console.log(
            xl.utils
              .sheet_to_json(workbook.Sheets["Sheet"])
              .then((data) => console.log("the datasheet is:" + data))
          )
        );
      } else {
        Rejected(Error);
      }
    });
  });
  async function Read_File() {
    return await readFileAsync("employee_data_1.xlsx");
  }
  
*/

const readingFile = (path) => {
  const data = xl.readFile(path);
  const res = xl.utils.sheet_to_json(data.Sheets["Sheet"]);

  return res;
};

const calculBonus = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].AnnualSalary < 50000) {
      arr[i]["BonusPercentage"] = "5%";
      arr[i]["BonusAmount"] = (arr[i].AnnualSalary * 5) / 100;
    } else if (arr[i].AnnualSalary >= 50000 && arr[i].AnnualSalary < 100000) {
      arr[i]["BonusPercentage"] = "7%";
      arr[i]["BonusAmount"] = (arr[i].AnnualSalary * 7) / 100;
    } else {
      arr[i]["BonusPercentage"] = "10%";
      arr[i]["BonusAmount"] = (arr[i].AnnualSalary * 10) / 100;
    }
  }
  return arr;
};
const writeFile = (data) => {
  const wb = xl.utils.book_new();
  const ws = xl.utils.json_to_sheet(data);
  const nw = xl.utils.book_append_sheet(wb, ws, "NewSheet");

  xl.writeFileXLSX(wb, "New_File.xlsx");
};

module.exports = { readingFile, calculBonus, writeFile };
