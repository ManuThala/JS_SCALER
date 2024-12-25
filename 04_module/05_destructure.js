// the destructuring assignment is syartax is a javascript expression that makes it possible to unpack
// from arrays, or properties from objects into distinct variables

let arr = ["hi", "I", "am", "manu"];

let [a, b, c, d] = arr;
console.log(a);

// Destructuring an objects

let myobj = {
  name: "manu",
  age: 26,
  gender: "male",
  address: {
    country: "India",
    city: "mumbai",
  },
};

let {
  name: n,
  age,
  gender,
  address: { country },
} = myobj;
console.log(n);
console.log(country);
