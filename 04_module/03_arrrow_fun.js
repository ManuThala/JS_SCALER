let a = 2;
let test1 = () => console.log(1);

let test2 = (a) => console.log(a * 2);

let test3 = (a, b) => {
  console.log(a + b);
};

test1();
test2(2);
test3(2, 3);
