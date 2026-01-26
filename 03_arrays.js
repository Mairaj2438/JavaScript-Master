const FirstDays = ["sunday","monday","tuesday"]
const SecondDays =["Tuessday", "wedenesday","saturday"]
const ThirdDays =["leap days", "AI Days"]


// concat function of arrays just gives new arrays while adding one array into another
// while push pushes one array into another completely defining two different arrays


let  myAllArrays = FirstDays.concat(SecondDays)
let mySecondAns = SecondDays.concat(ThirdDays,FirstDays)
console.log("A",myAllArrays)
console.log("B",mySecondAns)
let myFruits = ["banana", "apple", "grapes"]
console.log(myFruits)

// now let's use spread function for spreading all arrays  into their items individually
let mySpreadArr = [...FirstDays, ...SecondDays, ...ThirdDays, ...myFruits]
console.log(mySpreadArr)

const myAnotherArray = [6,89,35,22,[83749,374,2879,34],34,[384,485,38492,45],78]
const SoMyArray = myAnotherArray.flat(Infinity) 
console.log(SoMyArray)

// now we write how to convert a string to an array
console.log(Array.from("MAIRAJ HAIDER"))
console.log(Array.from("PAKISTN IS GREAT"));
console.log(Array.from("Turkiye is beautiful country"));
console.log(Array.from("always believe in your dreams"));
console.log(Array.from("let's  make it to line number thirty"))
console.log(Array.from({name:"MAIRAJ"})) // interested
console.log(Array.from({lname:"AONGA JAONGA"})) // we have to tell you tha where we want the arrays 
console.log(Array.from({name:"SHAID"}))// to be  created
// now solution to this problem  
let score1 = 450;
let score2= 699;
let score3= 854;
let score4 = 94390;
let score5 = 4930;
let score7 =49030;
console.log(Array.of(score1,score2,score3))
console.log(Array.of(score1,score2,score3,score4,score5,score7,score7))