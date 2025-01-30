// Type of 
// let a = 111
// let b = "11"
// let c = null
// let d = true
// let f = 12344555666456564n
// let g = function () {}
//  console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g)
//  O/p number string object boolean undefined bigint function

// Conversion 
// let isLoggein = 0
// let booleanConv = Boolean(isLoggein)
// console.log(booleanConv);
// console.log(typeof booleanConv);


// Operation 
// let aa = 100
// ++aa

// let bb = 100
// bb++

// console.log(aa + bb);


// Comparision 

// console.log("2" === 2);


//-------------------------------------
// Stack & Heap 
//-------------------------------------
// Stack = Premitive data type and change the value and store the original also 
// Heap = non premitive data type and once change the value , also it make that value original and returned the changed value

// Stack----------- 
// let email1 = "jp@email.com"
// let email2 = email1
// email2 = "useratgmail.com"
// console.log(email1)

// Heap -------------
// let userDataOne = {
//     email: "test@gmail.com",
//     phone: 1234
// }
// let userDataTwo = userDataOne
// userDataTwo.email = "lol@gmail.com"
// userDataTwo.phone = 1111
// console.log(userDataTwo.phone, userDataTwo.email);
//-------------------------------------

// const mainData = [
//     { "id": 1, "first_name": "Cristie", "last_name": "Kleinhaut", "email": "ckleinhaut0@washington.edu", "gender": "Female", "ip_address": "163.254.63.185" },
//     { "id": 2, "first_name": "Clare", "last_name": "Sackes", "email": "csackes1@w3.org", "gender": "Female", "ip_address": "78.93.230.11" },
//     { "id": 3, "first_name": "Skylar", "last_name": "   FitzAlan.  ", "email": "sfitzalan2@netvibes.com", "gender": "Male", "ip_address": "35.153.208.18" },
//     { "id": 4, "first_name": "Jim", "last_name": "Pennington", "email": "jpennington3@psu.edu", "gender": "Male", "ip_address": "7.108.237.248" },
//     { "id": 5, "first_name": "Terry", "last_name": "Newnham", "email": "tnewnham4@homestead.com", "gender": "Male", "ip_address": "156.165.143.204" },
//     { "id": 6, "first_name": "Herby", "last_name": "Caswell", "email": "hcaswell5@technorati.com", "gender": "Male", "ip_address": "115.194.86.41" },
//     { "id": 7, "first_name": "Delila", "last_name": "Ruperto", "email": "druperto6@cnet.com", "gender": "Non-binary", "ip_address": "39.113.219.76" },
//     { "id": 8, "first_name": "Maria", "last_name": "Cattemull", "email": "mcattemull7@simplemachines.org", "gender": "Female", "ip_address": "146.151.79.254" },
//     { "id": 9, "first_name": "Elisabetta", "last_name": "Klimentyonok", "email": "eklimentyonok8@thetimes.co.uk", "gender": "Female", "ip_address": "222.206.128.172" },
//     { "id": 10, "first_name": "Zorana", "last_name": "Marusyak", "email": "zmarusyak9@toplist.cz", "gender": "Female", "ip_address": "119.104.96.255" }
//   ]
  

//   console.log(`This is id ${mainData[2].id} and this is last name ${mainData[2].last_name}`);
  


//-------------------------------------
// String 
//-------------------------------------
// const name = "Jagat"
// const last = "Patel"

// console.log(`Hello My first name is ${name} and Last Name is ${last}`)

// const fname = new String('JagatPatel')
// let newfname = fname.toLowerCase
// let newfname = fname.repeat

// console.log(fname[25]);   25th num char display
// console.log(fname.toLowerCase()); make string lower case
// console.log(fname.charAt(20)); find char at 20th position
// console.log(fname.indexOf("Z"));  will give position number of Z
// console.log(`${mainData[2].last_name.trim()}`); This will remove extra spaces


// Slice ---------
// const fsustring = fname.substring(0,5)
// const lsustring = fname.substring(5,10)
// const zzz = `This if first ${fsustring} and this is last ${lsustring}`
// console.log(zzz);

// Replace 
// const url = "www.google.com"
// const newurl = url.replace('google', 'jagat')
// console.log(newurl);

// Data matching
// console.log(url.includes('goog'));


//-------------------------------------




//-------------------------------------
// Numbers & Maths 
//-------------------------------------

// const score = 400
// console.log(score);

// const newScore = new Number(4040.46233)
// console.log(newScore);
// console.log(newScore.toFixed(2));                  4040.46
// console.log(newScore.toString());    
// console.log(typeof newScore.toString());           type =  String
// console.log(newScore.toPrecision(5));              4040.5
// console.log(newScore.toLocaleString('en-IN'));     40,40,40,400



// MAths ---------
// console.log(Math);
// console.log(Math.abs(-4));                      4    
// console.log(Math.round(5.63));                  6
// console.log(Math.ceil(5.3));                    6 
// console.log(Math.floor(5.93));                  5 
// console.log(Math.min(1, 5, 10, 1090));          1 
// console.log(Math.max(1, 5, 10, 1090));          1090 


// console.log(Math.random())
// console.log(Math.floor(Math.random() * 10) + 1)


// const Min = 10
// const Max = 20
// console.log(Math.floor(Math.random() * (Max - Min + 1)) + Min)


//-------------------------------------



//-------------------------------------
// Date and Time 
//-------------------------------------

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// console.log(`${myDate.getDate()}-${myDate.getMonth()}-${myDate.getFullYear()}`);

// console.log(Math.floor(Date.now() / 1000));

// let newnew = myDate.toLocaleString('default', {
//     weekday: 'short',
//     day: '2-digit',
//     month: '2-digit',
//     year: '2-digit',
//     timeZone: 'Asia/Kolkata',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//     hour12: true
// })

// console.log(newnew);



//-------------------------------------

// let line = "To print only the hour, minute, and second, you can adjust the toLocaleString method"
// let word = "only"
// console.log(`Word ${line.includes(word) ? 'is' : 'is not'} including `)

// let jagatName = "RThis is jojo singh"
// let Word = "singh"
// console.log(`The Word "${Word}" ${jagatName.includes(Word) ? ' is' : 'is not'} including`)


//-------------------------------------
// Title 
//-------------------------------------
// let line = "hello, this is jagat patel"
// let word = "thiss"
// let result = `The word "${word}" ${line.includes(word) ? 'is' : 'is not'} including.`
// let result = line.slice(4, 8) 
// let result = line.replace("jagat", "jp") 
// let result = line.trim(" ", "" ) 


// console.log(result);


//-------------------------------------




//-------------------------------------
// Arrays 
//-------------------------------------
// const firstArray = ["jp", "hello", 109, true, null]
// const newarr = new Array("dcdsc", "dscs", 2, 5)
// console.log(newarr[1]) 


// Array Methods 

// const arr = ["aa", "bb", "cc", "dd", "ee", "ff", "gg",] 
// arr.push("hh")      Addition
// arr.push("ii")      Addition
// arr.pop()           Remove Last data
// arr.unshift(3232)      Add data from first
// arr.shift()            Remove data from first
// arr.pop()           Remove Last data

// const newarr = arr.join()
// console.log(arr);
// console.log(newarr)
// console.log(typeof newarr)


// Slice And Splice 

// const arr = [0, 1, 2, 3, 4, 5]
// console.log("A ", arr);                 A  [ 0, 1, 2, 3, 4, 5 ]
// // console.log(arr.slice(2, 5))         [ 2, 3, 4 ]
// // console.log("B ", arr);              B  [ 0, 1, 2, 3, 4, 5 ]
// console.log(arr.splice(2, 5));          [ 2, 3, 4, 5 ]
// console.log("C ", arr);                 C  [ 0, 1 ]


// Array Merge 

//  const num1 = [0, 1, 2, 3, 4, 5]
// const num2 = ["|||||", 1, 2, 3, 4, 5]
// const res = num1.push(num2).      Push Array with []
// const ress = num1.concat(num2)    Merge Array 
// const res = [...num1,...num2]       Merge Multiple Arrays 
// console.log(num1);

// const oneArray = [1, 2, 3, 4, [0, 0, 0, 0], [2, 2, 2, 2, 2, [1, 2, 3, 4, 5]]]   Multiple array hierarchy in one array 
// const newArr = oneArray.flat(Infinity)
// console.log(newArr);


// const forE = num1.forEach(element1 => console.log(element1));


// String to Array conversion 
// const arrr = "JagatPatel"
// const neww = Array.from(arrr)
// console.log(neww)



// // Building an Array 
// const w = 100
// const x = 200
// const y = 300
// const z = 400

// const neww = Array.of(w, x, y, z)
// // console.log(neww)

//-------------------------------------



//-------------------------------------
// Objects 
//-------------------------------------

// const mysymbol = Symbol("Keyyy")
// const userData = {
//             name: "Jagat Patel",
//             [mysymbol] : "1234567890",
//             age: 30,
//             email: "jagatp290@gmail.com",
//             "Test Names" : "HEHEHEHE"
//           }


// console.log(userData.age);
// console.log(userData["age"]);
// console.log(userData["Test Names"], userData["age"]); 
// console.log(typeof userData[mysymbol]); 


// -----------------------
// Freeze Object
// -----------------------

// userData.name = "Changed name"
// console.log(userData);

// // Object.freeze(userData)
// userData.name = "ddasasas"
// console.log(userData);

// -----------------------
// New Object
// -----------------------

// const tindUser = new Object()

// tindUser.Id = "dscs1233"
// tindUser.Name = "JP"
// tindUser.isLoggein = true

// console.log(tindUser);

// -----------------------
// Nested Object
// -----------------------

// const userData = {
//   name: "Jagat Patel",
//   age: 30,
//   email: "jagatp290@gmail.com",
//   fullName: {
//     userName: {
//       FirstName : "Jagat",
//       LastName: "Patel"
//     }
//   }
// }

// console.log(userData.fullName.userName.FirstName);

// -----------------------
// Object Merge
// -----------------------

// const obj1 = {1: "a", 2: "b" }
// const obj2 = {3: "c", 4: "d" }

// const res = Object.assign({}, obj1, obj2)

// const res1 = {...obj1, ...obj2}

// console.log(res);    op:{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(res1);   op:{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// -----------------------
// Array Object
// -----------------------

// const us = [
//   {
//     id : 100,
//     Name : "Jagat"
//   },
//   {
//     id : 2,
//     Name : "Jaga"
//   },
//   {
//     id : 3,
//     Name : "Jag"
//   },
//   {
//     id : 4,
//     Name : "Jagat"
//   }
// ]
// console.log(us[2].Name);
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

// console.log(obj1.hasOwnProperty('1'))

// -----------------------
// Object Destructure
// -----------------------

// const courses = {
//   courseName: "TextDecoderStream",
//   courseIntructor: "Jagat",
//   coursePrice: "$24"
// }

// const {courseName : cname} = courses
// console.log(cname);


//-------------------------------------

// -----------------------
// Functions
// -----------------------


// function myfunction() {
//   console.log("Hello")
// }

// myfunction()


// -----------------------
// Basic
// -----------------------
// function addNum(num1, num2) {
//   let result = num1 + num2
//   return result
// }
// const result = addNum(999, 21213)
// console.log(result);


// -----------------------
// Return and value given to function and print
// // -----------------------
// function userLog(username = "Sam") {
//   // if (username === undefined) {
//     if (!username) {
// console.log("No user name given")
//   }
// //   else {
//   return `${username} is just logged in` 
// // }
// }
// console.log(userLog());




// Multiple value 

// function cartPrice(...price) {
//   return price
// }
// console.log(cartPrice(20, 100, 200, 400, 500));   OP : [ 20, 100, 200, 400, 500 ]


// function cartPrice1(val1, val2, val3, ...price) {
//   return price
// }
// console.log(cartPrice1(20, 100, 200, 400, 500));     OP : [ 400, 500 ]


//---------------------
// Objects in Functiion 
//---------------------

// const userData1 = {
//   userName: "JP1",
//   phone: 11111111
// }
// const userData2 = {
//   userName: "JP2",
//   phone: 2222222
// }
// const userData3 = {
//   userName: "JP3",
//   phone: 33333333
// }


// function handleObject(anyobject) {
//   console.log(`username is ${anyobject.userName} and his Phone num is ${anyobject.phone}`);
// }
// handleObject(userData3)


//-------------------------------------


//---------------------
// Scope 
//---------------------

// function one() {
//   const first = "one Function"

//   function two() {
//     const second = "Two Function"
//     console.log(first);
    
//   }
//   two()
//   // console.log(second);
// }
// one()



// if(true) {
//   const names = "JP"
//   if(names === "JP") {
//     const last = " Patel"
//     console.log(names + last);
//   }
//   // console.log(last);
  
// }

// console.log(names);



// console.log(addOne(5));    \/ 
// function addOne(num) {
//   return num + 1
// }

// console.log(addTwo(2));      X
// const addTwo = function(num) {
//   return num + 2
// }




//-------------------------------------


//---------------------
// This & Arrow Function
//---------------------

// const user = {
//   name: "JP",
//   price: 999,
//   welcomeMessgae: function () {
//     console.log(`${this.name}, Welcome to the store`); 
// // console.log(this);

//   }
// }
// user.welcomeMessgae()
// user.name = "JAJAJAJ"
// user.welcomeMessgae()
// console.log(this);

//-------------------------------------

// function arrows () {
//   let usn = "JP"
//   console.log(this);
// }
// arrows()




// const chai = () => {
//   let usn = "JPPP"
//   console.log(this); 
// }

// chai()


// const addNum = (num1, num2) => {
//   return num1 + num2
// }
// console.log(addNum(55, 55));


// const addNum = (num1, num2) => num1 + num2
// console.log(addNum(55, 55));

// const addNum = (num1, num2) => (num1 + num2)
// console.log(addNum(55, 55));

// const addNum = (num1, num2) => ({username: "Hello"})
// console.log(addNum());



//-------------------------------------


//---------------------
// IIFE   (function)(value)
//---------------------


// (function dbconnect(){
//   console.log(`DB Connected`);
// })();


// ((name) => {
//   console.log(`db again connected to ${name}`);
// })("Jagat")

//-------------------------------------


//---------------------
// If elseif 
//---------------------

// const balance = 100
// if(balance < 900) {
//     console.log("balance is low");
// } else if(balance > 900) {
//     console.log("balance is usable");    
// }
// else {
//     console.log("no balance");    
// }


// && condition checking

// const userLoggein = true
// const debitcard = true
// if (userLoggein && debitcard && 2==2)  {
//     console.log("User can buy courses");
// }
// else {
//     console.log("User is not allowed to buy course");  
// }

// || condition checking

// const LoggeinfromEmail = false
// const LoggeinfromGoogle = false
// const LoggeinfromFacebook = false

// if (LoggeinfromEmail || LoggeinfromGoogle || LoggeinfromFacebook) {
//     console.log("User can Login");
// }
// else {
//     console.log("User is not allowed to Login");  
// }


// Switch Case 

// const Month = 1
// switch (Month) {
//     case 1:
    //    console.log("January");
//     break;
//     case 2:
//        console.log("Feb");
//     break;
//     case 3:
//        console.log("March");
//     break;
//     case 4:
//        console.log("April");
//     break; 
//     default:
//         console.log("Default Month")
//     break;
// }


// Falsy Value
// const useremail = ""         //Falsy
// const useremail = 0          //Falsy
// const useremail = -0         //Falsy
// const useremail = undefined  //Falsy
// const useremail = null       //Falsy
// const useremail = NaN        //Falsy

// Truthy Value
// const useremail = true.      //Truthy
// const useremail = BigInt     //Truthy
// const useremail = "0"        //Truthy
// const useremail = "false"    //Truthy
// const useremail = " "        //Truthy
// const useremail = {}         //Truthy
// const useremail = []         //Truthy
// const useremail = function() {}     //Truthy


// if (useremail)  {
//     console.log("User email found");
// }
// else {
//     console.log("User email is not found");  
// }



//Terniary operator. //

// Condition ? true : false. 

// const result = 100
// result >= 500 ? console.log("right") : console.log("wrong");


//-------------------------------------


//---------------------
// For Loop with Break & Continue  (Iterations = Loop)
//---------------------
// for (let newVar = 0; newVar <= 10; newVar++) {
//     const element = newVar;
//     console.log(element)
// }

// for with If condition//

// for( i = 0; i <= 10; i++ ) {
    
//     const value = i;

//         if(value == 5) {
//             console.log('5 is called Five');   
//         } else if (value == 7) {
//             console.log('7 is also called Five');   
//         }
    
//     console.log(value);  
// }



// Matrix table print using inner for loop 

// for (let i = 11; i <= 20; i++) {
//     console.log(`Table of ${i} is below`);
    
//     for (let j =1; j <= 10; j++) {
//         console.log(i + '*' + j + '=' + i*j);   
//     }  
// }



// Array in for loop 

// let arr = ["Hello", "This is", "Jagat"]
// console.log(arr.length);

// for (let index = 0; index < arr.length; index++) {    
//     const element = arr[index];
//     console.log(element);
// }

// Break and Continue in For loop 

// for (let index = 0; index < 20; index++) {
//     if (index == 6) {
//         console.log("6 is detected");
//         break
//     }
//     console.log(index);
// }

// for (let index = 0; index < 20; index++) {
//     if (index == 6) {
//         console.log("6 is detected");
//         continue
//     }
//     else if (index == 12) {
//         console.log("12 is detected");
//         break
//     }
//     console.log(index);
// }



//-------------------------------------


//---------------------
// While and do while loop 
//---------------------

// Simple 

// let a = 1
// while (a <= 10) {
//     console.log(`value is ${a}`); 
//     a++;  
// }



// While with Array 

// let arr = ["gfx", "dcds", "fvds"]
// let a = 0
// while (a < arr.length) {
//     console.log(`value is ${arr[a]}`);
//     a++;  
// }


// Do While 

// let score = 11
// do {
//     console.log(`value is ${score}`);
//     score++;
// } while (score <= 10);

//-------------------------------------


//---------------------
// Forof loop 
//---------------------

// ::::::Maps:::::
// const newMap = new Map
// newMap.set('IN', "India")
// newMap.set('FR', "France")
// newMap.set('PR', "Paris")

// // console.log(newMap);
// for (const [key, value] of newMap) {
//     console.log(`${value} is full name of ${key}`);
// }



// const arr = [111, 222, 333, 555]
// const str = "Hello World"

// for (const element of str) {
//     if (element === " ") {
//         continue
//     }
//     console.log(element);
// }

//-------------------------------------


//---------------------
// For In Loop with object and array
//---------------------
// const myObj = {
//     one: "o n e",
//     two: "t w o",
//     three: "t h r e e"
// }
// // console.log(myObj);

// for (const key in myObj) {
//     console.log(`key is ${key} and value is ${myObj[key]}`);
// }

// const arr = ["one", "two", "three", "one", "two", "three"]
// for (const key in arr) {
//     console.log(arr[key]);  
// }

//-------------------------------------


//---------------------
// Foreach loop 
//---------------------

// Normal function 
// const arr = ["one", "two", "three", "one", "two", "three"]
// arr.forEach(function (value) {
//     console.log(`value of array is ${value}`);
// })


// Arrow function 
// const arr = ["one", "two", "three", "one", "two", "three"]
// arr.forEach((value, index, arr) => {
//     // console.log(`value of array is ${value}, Index is ${index} and array is ${arr} `);
//     console.log(value, index, arr);
// })


// Array with object data access 

// const database = [
//     {
//         FirstName: "Jagat",
//         LastName: "Patel"
//     },
//     {
//         FirstName: "Jagat1",
//         LastName: "Patel"
//     },
//     {
//         FirstName: "Jagat2",
//         LastName: "Patel"
//     },
//     {
//         FirstName: "Jagat3",
//         LastName: "Patel"
//     }
// ]

// database.forEach( (UserName) => {
//     console.log(UserName.FirstName);
    
// })

//---------------------
// conditional loop with filter
//---------------------

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNum = arr.filter( (num) => {
//         return num > 4
//     })
// console.log(newNum);

//---------------------
// conditional loop with foreach
//---------------------

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newArr = []
// arr.forEach( (num) => {
//         if(num > 2) {
//             newArr.push(num)
//         }
//     })
// console.log(newArr);



// Get the specific filter data asked by user 

const mainData = [
    { "id": 1, "first_name": "Elisabetta", "last_name": "Ruperto", "email": "ckleinhaut0@washington.edu", "gender": "Female", "ip_address": "163.254.63.185", "Year": "1993" },
    { "id": 2, "first_name": "Clare", "last_name": "Sackes", "email": "csackes1@w3.org", "gender": "Female", "ip_address": "78.93.230.11", "Year": "1993" },
    { "id": 3, "first_name": "Skylar", "last_name": "Cattemull", "email": "sfitzalan2@netvibes.com", "gender": "Male", "ip_address": "35.153.208.18", "Year": "2003" },
    { "id": 4, "first_name": "Jim", "last_name": "Ruperto", "email": "jpennington3@psu.edu", "gender": "Male", "ip_address": "7.108.237.248", "Year": "2010" },
    { "id": 5, "first_name": "Terry", "last_name": "Newnham", "email": "tnewnham4@homestead.com", "gender": "Male", "ip_address": "156.165.143.204", "Year": "1993" },
    { "id": 6, "first_name": "Skylar", "last_name": "Cattemull", "email": "hcaswell5@technorati.com", "gender": "Male", "ip_address": "115.194.86.41", "Year": "1993" },
    { "id": 7, "first_name": "Delila", "last_name": "Ruperto", "email": "druperto6@cnet.com", "gender": "Non-binary", "ip_address": "39.113.219.76", "Year": "2000" },
    { "id": 8, "first_name": "Skylar", "last_name": "Cattemull", "email": "mcattemull7@simplemachines.org", "gender": "Female", "ip_address": "146.151.79.254", "Year": "1993" },
    { "id": 9, "first_name": "Elisabetta", "last_name": "Ruperto", "email": "eklimentyonok8@thetimes.co.uk", "gender": "Female", "ip_address": "222.206.128.172", "Year": "1993" },
    { "id": 10, "first_name": "Skylar", "last_name": "Marusyak", "email": "zmarusyak9@toplist.cz", "gender": "Female", "ip_address": "119.104.96.255", "Year": "1993" }
  ]
  

// let YearFilter = mainData.filter( (year) => {
//     return year.Year >= 2000 && year.gender === "Male" && year.first_name === "Skylar"
// })
// console.log(YearFilter);

// let newFilt = mainData.filter( (firstname) => {
//     return firstname.first_name === "Skylar"
// })

// let newfilt = mainData.filter( (firstname) => {
//     return firstname.gender === "Male"
// })
// console.log(newfilt);


// ::: Chaining :::::;

// const numbers = [1, 2, 3, 4, 5, 6, 7]
// const newNums = numbers.map( (num) => num * 3)
//                        .map( (num) => num + 10)
// console.log(newNums);


// // :::: Array Reduce ::::
// const numbers = [1, 2, 3]
// const total = numbers.reduce( function (acc, curvalue) {
//     console.log(`Acc is ${acc} and Value is ${curvalue}`);
    
//     return acc + curvalue
// }, 20)
// console.log(total);

// ::::::: Shopping Cart Total :::::::

const cart = [
    {
        itemName : "Laptop",
        price: 120000
    },
    {
        itemName : "Mobile",
        price: 87000
    },
    {
        itemName : "Adopter",
        price: 1900
    }
]

// const TotalCart = cart.reduce( (acc, itemPrice) => {
//    return acc + itemPrice.price
// }, 0
// )
// console.log(`Total Cart Price is ${TotalCart}`);

//-------------------------------------


//---------------------
// While and do while loop 
//---------------------

//-------------------------------------


//---------------------
// While and do while loop 
//---------------------

//-------------------------------------


//---------------------
// While and do while loop 
//---------------------
