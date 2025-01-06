let person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 10,
};
let printDetails = function (city) {
  console.log(
    `I am ${this.firstName} ${this.lastName} and I am ${this.age} years old and I am from ${city}`
  );
};
let person2 = {
  firstName: "Manu",
  lastName: "Ls",
  age: 20,
};

// Call method
printDetails.call(person2, "Bangalore");
// apply method
printDetails.apply(person1, ["Mysore"]);
// Bind method
let person1PrintDetails = printDetails.bind(person1);
person1PrintDetails("Tumkur");

// person1.printDetails();
