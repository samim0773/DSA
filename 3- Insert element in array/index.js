let arrayElement = [10, 20, 30, 40, 50];
let newElement = 99;
let position = 2;
console.log("before insert :", arrayElement);
for (let i = arrayElement.length - 1; i >= 0; i--) {
  if (i >= position) {
    arrayElement[i + 1] = arrayElement[i];
    if (i == position) {
      arrayElement[i] = newElement;
    }
  }
}
console.log("after insert :", arrayElement);
