const fetchUserData = async () => {
  try {
    const res = await fetch("https://dummyjson.com/users").then((res) =>
      res.json().then((data) => console.log(ProcessData(data["users"])))
    );
  } catch (err) {
    console.log(err);
  }
};

const ProcessData = (result) => {
  if (Array.isArray(result)) {
    return result
      .filter((user) => user["gender"] == "male")
      .map(
        ({ firstName, age }) => `Name : ${firstName}, Age : ${age} years old`
      );
  } else {
    return "Invalid Data";
  }
};

//console.log(ProcessData());
fetchUserData();

const summarizeAge = (data) => {
  return data.reduce((acc, cuur) => acc + cuur);
};
