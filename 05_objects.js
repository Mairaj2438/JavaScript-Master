const Details = {
    name : "Mairaj Haider ",
    contact : " 0303292438749433",
    email : "mk3149823@gmail.com",
    Gender : "Male",
    department: "computer science",
    isLoggedIn : "true",
    identity:"proved"


}
console.log(Details.Gender)
console.log(Details.contact)
console.log(Details.department)
console.log(Details.email)
console.log(Details.name)
console.log(Details.isLoggedIn)
console.log(Details.identity)
// we can change the values of the declared objects just putting an = sign to change some 
//objects value
// at the same time, we can freeze a whole object so that no one can change the value of the object
// for that we just have to put object.freexe function so no one will be able to change their valus
// till now we have studied about the strings etc but no we move towards function
// javascript takes function as its mandatory part
//there is no discrimination about functions , javscripy takes it as variables nothing else
//while making the functions in the javascript , we care about the calling by reference , 
// for that, we have to care about functions to call values present under these declared objects
// like i want to access name under the details named object
// let us make that
// first let us make the greetings function
Details.greetings = function(){
    console.log("hello how are you?")

}
Details.greetingsTwo = function(){
    console.log(`Gender ,${this.Gender}`)
    console.log(`my department is,${this.department}`)
}

console.log(Details.greetings());
console.log(Details.greetingsTwo());

//while we put greetings() as this double braces , it just gives us the undefined
// now how do we tackle up with this kind of problem?
// we just do nothing but, we rather put these functions under some kind of curly braces {}
//then it makes it easier to tackle up issue to access items present under any kind of pre defined objects
//the meaning of the problem is  thst whenever we want to call a function by some method , it gived undefined
//whenever we write greetings only with the  details that is our declared object, 
// it returns back to us the anynomous function not any item of object
//now we try to make a second function just to reference items of the spcific declared object
// so correct way of referencing is to access some item by using backtick on the string of function
//that is called string interpulation
//after putting backticks, we just put the $ sign to access each and every item in the object


