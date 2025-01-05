var a = 10;

function impure(x) {
  console.log(x + a);
}

impure(5);

function pure(x, a) {
  return x + a;
}

console.log(pure(2, 3));
console.log(pure(2, 7));
