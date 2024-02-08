const { displayContact, Addcontact, operate } = require("./CrudContact");

try {
  operate();
  //Addcontact(arr);
  //displayContact(arr);
} catch (error) {
  console.log(error);
}
