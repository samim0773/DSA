function findArrElement() {
  let arr = [10, 26, 89, 74, 45, 96, 37];
  let n = 137;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return "found";
    }
  }
  return "not found";
}
const result = findArrElement();
console.log(result);
