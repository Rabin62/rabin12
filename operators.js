//Arithematic operator

let a = 10 
let b = 3
const c = a/b
const d = a%b
console.log(c)
console.log(d)

//Assignment operator
// =, +=, -=, *=

a = a+1
a += 1
a++
++a
console.log(a++) //post assign 14
console.log(a) // 15
console.log(++a) // pre assign 

//Increment or Decrement operator
// ++, --

// need to research 
// comparison
/**
 * 
 */
// string/ concatination
// logical operators
// conditional/ ternamry

let x = 10
let y = '10'
console.log(x<=y)
console.log(x==y) // compare with value
console.log(x===y) // compare along with datatype
console.log(x!=y) // 

/**
 * create a js object data to denote one product
 * you
 * r produc 
 */
const productss = {
    name:
    "Mobile",
    brand:
        "Samsung"
    ,
    price:3500
    
}

console.log("Product name:"+ productss.name)
console.log("Product brand:"+ productss.brand)
console.log("Product price:"+ productss.price)
/**
 * for true true true use
 * let age = x ?? 0  same to let age = x? x : 0
 * for e.g. 
 * console.log(userObj?.phone)
 */
//spread operator (...)
let obj1={
    name: "",
    email:""
}
//let obj2 = obj1 //obj1 and obj2 take same memory address
let obj2= {
    ...obj1
}
obj2.name = "Object 2"
console.log(obj2.name)

const student = {
    name : " std one ",
    roll_no : 1
}
/**
 * operators revise 
 * destructing object
 */





