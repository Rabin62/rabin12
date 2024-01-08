//'only on same line '. " ". `can be continue on next line, can use variable inside it as ${a}`

let a ="123";
let b = '123';
let c = `Saugat`;
let d = 'Rabin'
let e = 1e2 //1^2
let f = 123 
let g = a-f
let h //undefined ( no memory allocation here )
h = 123 // memory allocated here
// typescript(tightly coupled program,, build , change to js and compile) and javascript( can change datatype after declaring, loosely coupled program, can directly run)
// array(collection of data type, index value pair, index is auto assigned, always starts with 0)
// object(collection of data of any type, key value pair, keys custom assigned)
// JSON (Javascript Object Notation, similar to js object, universal data type)

// need to research (object datatype, array datatype , json datatype)

let longText =`Congratulations!
 ${c} have got ${a} points and ${b} scores. This is ${d} statement.`
console.log(longText)
console.log(g)