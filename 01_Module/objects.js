// // In js objects are in key value pairs

// var person = {
//   name: "manu",
//   age: 25,
//   ownsCar: false,
// };

// console.log(person);

// // dot notation

// console.log(person.age);

// // Bracket notation

// console.log(person["name"]);
// console.log(person["age"]);

var cap = {
  firstName: "Steve",
  lastName: "Rogers",
  age: 102,

  friends: ["Bucky", "Bruce Banner", "Tony Streak"],
  isAvenger: true,
  address: {
    state: "New York",
    city: {
      name: "Broklyn",
      pincode: 12345,
    },
  },
};

console.log(cap.friends);

console.log(cap.address.city.name);

cap.isAvenger = false;

console.log(cap.isAvenger);

cap.movies = ["age of ultron", "civil war"];

console.log(cap.movies);

delete cap.age;

console.log(cap);
