// there are two ways of creating objects either by singleton 
// or by literals
//the previous way is object literal
//in this part, we will see how do we create objects through singleton or by creating constructor
//for that we keep some kind of a tinderuser
const tinderUser ={}
tinderUser.id ="mairaj1231"
tinderUser.name = "khan sangat"
tinderUser.isLoggedIn ="yes"
console.log(tinderUser);

const RegularUser = {
    isloggedin: "yes",
    fullname :{
        UserFullName: {
            firstname: "mairaj" ,      
            secondname:"haider",
            middlename: "khan"
         }
    }
    
}
//so we have the authority to access these elements individually by dot operator
console.log(RegularUser.fullname.UserFullName.middlename)
const obj1 ={
    1: "a",2:"b"
}
const obj2 ={1:"c", 2:"d"}
const obj4 = {1:"mairaj", 2:"is ", 3:"here"}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3) ;
//the assign operator in objects works efficiently when we have to copy items of one source object 
//and paste to a target object and return a new resultant object having all the properties of both objects
//the best approach for merging multiple objects into one object is that we should give a target object to
// the function to specify all other objects as the source and they get merged into one empty target object
//this is also be going to less in use but what we are going to use most often is spreader like that of in arrays
//we can do this by using same the three dot ... operators to access each of the element and then mergind down each
//now after the spread operator, we can save multiuple items details in the same category by just 
//creating it in an array and spreading multiple items details like user's details
const obj5 = {...obj1,...obj2,...obj3,...obj4}
console.log(obj5);

const users =[
    {
        id:1,
        email: "mk345@gmail.com",
        department :" cs ",
        contact: "932840"
    },
    {
        id:2,
        email: "jhsdg38489@gmail.com",
        department :" electrical",
        contact:"83448"
    },
    {
        id:3,
        email:" hdshka32847@gmail.com",
        department:"mechanical",
        contact:"98324"
    },
    {
        id:4,
        email:"asjak9843@gmail.com",
        department:"software",
        contact: "732329823"
    }

]
console.log(users[2].contact);
console.log(users[3].department);
console.log(users[2].department)
//now if we want to print out the values of tinderuser object , we can use it by console.log
//As we can print the keys of objects , so we can print the values too.
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// the things to necessarily remembered are that while printing the user details through arrays, it gives
//answer in array 
//so as we can print out the values and keys of objects , we can print all entries of objects
//stepwise, but printed output would be an array under an array
console.log(Object.entries(tinderUser));
//at the end we can also confirm the presence of specific value or property of some object
//by using  hasownproperty('') for example console.log(object.hasownproperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
