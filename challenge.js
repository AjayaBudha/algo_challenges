//capitalise any string
//using function declaration
function capitalse(string) {
  return (
    string[0].toUpperCase() + string.slice(1, string.length + 1).toLowerCase()
  );
}

//console.log(capitalse("ajaya"));

//switch case
//using function expression

const switchCase = function (string) {
  let newStr = "";
  for (let x = 0; x < string.length; x++) {
    if (string[x] === string[x].toUpperCase()) {
      newStr = newStr.concat(string[x].toLowerCase());
    } else {
      newStr = newStr.concat(string[x].toUpperCase());
    }
  }
  return newStr;
};
//console.log(switchCase("AjAyA"));

//reverse string using for
//using arrow function expression

reverse1 = (string) => {
  newStr = "";
  for (let x = string.length - 1; x >= 0; x--) {
    newStr = newStr.concat(string[x]);
  }
  return newStr;
};
//console.log(reverse1("ajaya"));

//reverse string using for of
reverse2 = (string) => {
  newStr = "";
  for (element of string) {
    newStr = element + newStr;
  }

  return newStr;
};

//change all item in array to uppercase
upcase = (myArr) => {
  let upperArr = [];
  myArr.forEach((myArr) => upperArr.push(myArr.toUpperCase()));
  return upperArr;
};
// console.log(upcase(["a", "b", "c", "d"]));

//change all item in array to lowercase
upcase = (myArr) => {
  let lowerArr = [];
  myArr.forEach((myArr) => lowerArr.push(myArr.toLowerCase()));
  return lowerArr;
};
// console.log(upcase(["A", "B", "C", "D"]));

//get even numbers
evens = (myArr) => {
  newArr = [];
  newArr = myArr.filter((myArr) => myArr % 2 === 0);
  return newArr;
};
// console.log(evens([1, 2, 3, 45, 79, 8]));

//implement howIndex
howIndex = (myArr) => {
  let x = 0;
  x = myArr.indexOf("how");
  return x;
};
// console.log(howIndex(["hello", "how", "are", "you"]));

//implement index using join and split
reverse3 = (string) => {
  eachString = string.split("");
  eachString = eachString.reverse();
  newString = eachString.join("");
  return newString;
};

// console.log(reverse3("olleh"));

//max function
max = (myArr) => {
  findMax = myArr.reduce((accumulator, currentvalue) => {
    return accumulator > currentvalue ? accumulator : currentvalue;
  });
  return findMax;
};
console.log(max([1, 297, -73, 99, 10]));
