const add = (a: number, b: number): number => a + b;

const a: number = 7;
const b: number = 8;

console.log({ a, b });
console.log({
  'add(a, b)': add(a, b),
  'add(3, 10)': add(3, 10),
});
