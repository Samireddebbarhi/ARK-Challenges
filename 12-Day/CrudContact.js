const rl = require("readline");

const RL = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const AddContact = (arr) => {
  console.log("\nAdding a contact\n");
  RL.question("Enter the information contact : name \n", (name) => {
    var arr1 = [];
    var list = new Map();
    list.set("name", name);
    RL.question(name + " please add your  : phone number \n", (nphone) => {
      list.set("numberPhone", nphone);
      console.log(
        "the information contact " +
          name +
          " " +
          nphone +
          " is added succefully"
      );
      for (let obj of list) {
        arr.push(arr1.push(obj));
      }
      operate();
    });
  });
};
const displayContact = (arr) => {
  if (arr.length == 0) {
    return console.log("No contacts yet.");
  } else {
    List = new Map(arr);
    for (let obj of List) {
      console.log(obj);
    }
  }
};

const searchContact = (arr) => {
  const List = new Map(arr);
  if (List.size == 0) {
    console.log("There are no contacts in the directory");
  } else {
    RL.question("type the searched info : name or number, \n", (infoType) => {
      switch (infoType) {
        case "name":
          console.log(List.get(infoType));
          break;
        case "number":
          console.log(List.get(infoType));
          break;
        default:
          console.log('Wrong input , please enter "name" or "number"');
          process.exit();
      }
    });
  }
};

const operate = () => {
  RL.question(
    "choose the option that you want do in the list add | display | search | exit :",
    (action) => {
      var arr = [];
      switch (action) {
        case "add":
          AddContact(arr);
          operate();
          break;
        case "display":
          displayContact(arr);
          operate();
          break;
        case "search":
          searchContact(arr);
          operate();
          break;
        case "exit":
          console.log("quitting");
          process.exit();

        default:
          console.log(
            "wrong action! Please type 'add' or 'display' or 'search' or 'exit' "
          );
      }
    }
  );
};
module.exports = { operate };
