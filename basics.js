// Type of 
let a = 111
let b = "11"
let c = null
let d = true
let f = 12344555666456564n
let g = function () {}
//  console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g)
//  O/p number string object boolean undefined bigint function

// Conversion 
let isLoggein = 0
let booleanConv = Boolean(isLoggein)
// console.log(booleanConv);
// console.log(typeof booleanConv);


// Operation 
let aa = 100
++aa

let bb = 100
bb++

// console.log(aa + bb);


// Comparision 

// console.log("2" === 2);


//-------------------------------------
// Stack & Heap 
//-------------------------------------
// Stack = Premitive data type and change the value and store the original also 
// Heap = non premitive data type and once change the value , also it make that value original and returned the changed value

// Stack----------- 
let email1 = "jp@email.com"
let email2 = email1
email2 = "useratgmail.com"
// console.log(email1)

// Heap -------------
let userDataOne = {
    email: "test@gmail.com",
    phone: 1234
}
let userDataTwo = userDataOne
userDataTwo.email = "lol@gmail.com"
userDataTwo.phone = 1111
// console.log(userDataTwo.phone, userDataTwo.email);
//-------------------------------------

const mainData = [
    { "id": 1, "first_name": "Cristie", "last_name": "Kleinhaut", "email": "ckleinhaut0@washington.edu", "gender": "Female", "ip_address": "163.254.63.185" },
    { "id": 2, "first_name": "Clare", "last_name": "Sackes", "email": "csackes1@w3.org", "gender": "Female", "ip_address": "78.93.230.11" },
    { "id": 3, "first_name": "Skylar", "last_name": "   FitzAlan.  ", "email": "sfitzalan2@netvibes.com", "gender": "Male", "ip_address": "35.153.208.18" },
    { "id": 4, "first_name": "Jim", "last_name": "Pennington", "email": "jpennington3@psu.edu", "gender": "Male", "ip_address": "7.108.237.248" },
    { "id": 5, "first_name": "Terry", "last_name": "Newnham", "email": "tnewnham4@homestead.com", "gender": "Male", "ip_address": "156.165.143.204" },
    { "id": 6, "first_name": "Herby", "last_name": "Caswell", "email": "hcaswell5@technorati.com", "gender": "Male", "ip_address": "115.194.86.41" },
    { "id": 7, "first_name": "Delila", "last_name": "Ruperto", "email": "druperto6@cnet.com", "gender": "Non-binary", "ip_address": "39.113.219.76" },
    { "id": 8, "first_name": "Maria", "last_name": "Cattemull", "email": "mcattemull7@simplemachines.org", "gender": "Female", "ip_address": "146.151.79.254" },
    { "id": 9, "first_name": "Elisabetta", "last_name": "Klimentyonok", "email": "eklimentyonok8@thetimes.co.uk", "gender": "Female", "ip_address": "222.206.128.172" },
    { "id": 10, "first_name": "Zorana", "last_name": "Marusyak", "email": "zmarusyak9@toplist.cz", "gender": "Female", "ip_address": "119.104.96.255" }
  ]
  

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

const score = 400
// console.log(score);

const newScore = new Number(4040.46233)
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

let myDate = new Date()
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

const arr = ["aa", "bb", "cc", "dd", "ee", "ff", "gg",] 
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

 const num1 = [0, 1, 2, 3, 4, 5]
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



// Building an Array 
const w = 100
const x = 200
const y = 300
const z = 400

const neww = Array.of(w, x, y, z)
// console.log(neww)

//-------------------------------------



//-------------------------------------
// Objects 
//-------------------------------------

const mysymbol = Symbol("Keyyy")
const userData = {
name: "Jagat Patel",
[mysymbol] : "1234567890",
age: 30,
email: "jagatp290@gmail.com",
"Test Names" : "HEHEHEHE"
}


// console.log(userData.age);
// console.log(userData["age"]);
// console.log(userData["Test Names"]); 
// console.log(typeof userData[mysymbol]); 



userData.name = "Changed name"
console.log(userData);

// Object.freeze(userData)
userData.name = "ddasasas"
console.log(userData);




//-------------------------------------