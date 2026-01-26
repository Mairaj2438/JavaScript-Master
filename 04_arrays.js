 let FirstDaysArr =["Monday", "wednesday"]
let SecondDaysArr = ["Thursday","Friday","Sarurday","Sunday"]
// let MyResultArr = FirstDaysArr.concat(SecondDaysArr);
// console.log(MyResultArr);

let myFruits = [
    "BANANA","Apple","Grapes",
    "Orange"
]
  let myNewArray = [...FirstDaysArr,...SecondDaysArr,...myFruits];
console.log(myNewArray);

let myNestedArray =[439,9549,868,[843,54,90],54,56,90,43];
 console.log(myNestedArray.flat(Infinity));
let str = "MAIRAJ";
console.log(Array.from(str));
// in above practice, i have used spread to spreadify the items of all arrays in ine array 
// and also i used flat to convert nested arrays in to level one array
// level one means only one array
//also i used .from to convert a string literal to an array