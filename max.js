let marks = [20, 12, 30, 34, 21, 67, 45, 33, 45];
let max = Math.max(...marks);
let min = Math.min(...marks);
let sum = marks.reduce((acc, val) => acc + val, 0);
let average = sum / marks.length;

console.log("Max:", max);
console.log("Min:", min);
console.log("Average:", average.toFixed(4));

