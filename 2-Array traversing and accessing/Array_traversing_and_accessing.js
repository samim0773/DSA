let arrElement = [23, 54, 65, 78, 76, 88];

// traversing means print all the array element
const traverse = () => {
  for (let i = 0; i < arrElement.length; i++) {
    console.log(arrElement[i]);
  }
};
traverse();

const accessing = () => {
  // accessing means find one perticular array element with index
  let findValue = 4;
  console.log("find perticular array value:", arrElement[findValue]);
};
accessing();
