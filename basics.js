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


//-------------------------------------



//-------------------------------------
// Title 
//-------------------------------------


//-------------------------------------




//-------------------------------------
// Title 
//-------------------------------------


//-------------------------------------




//-------------------------------------
// Title 
//-------------------------------------


//-------------------------------------



//-------------------------------------
// Title 
//-------------------------------------


//-------------------------------------