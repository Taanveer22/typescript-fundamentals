function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("division by zero is not allowted");
  }
  return a / b;
}

console.log(divide(6, 3));
// console.log(divide("text", 3));

const result = divide (32,3);
console.log(result.toFixed(2));
