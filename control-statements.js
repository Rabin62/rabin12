//null, "", 0, false, undefined, empty variable - falsy value
let exp;
if(exp){
console.log("I am truthy value")
}
else{
    console.log("I am falsy value")
}

const product = {
    name: "Rabin",
    price: 1200,
    discount: 10,
}

const discountamt = product.discount/100 * product.price

console.log(discountamt)
product.discountamt = discountamt
product.price = product.price - discountamt

console.log(product.price)
console.log(product)


const user = {
    name:"Rabin",
    consumed_units: 394
}
// using else if will be better as it compiles faster
/**
 * totalPay = 0;
 * if(user.consumed_units <= 20){
 * totalPay = 50}
 * else if(user.consumed_units <=30){
 * totalPay = 50 + (user.consumed_units - 20)*6.5 }.....
 */
if(user.consumed_units>20){
if(user.consumed_units<=30 && user.consumed_units>20){
    user.totalamt = 50 + (user.consumed_units - 20)*6.5
}
if(user.consumed_units>30 && user.consumed_units<=50){
user.totalamt = 50 + 10*6.5 + 10*8
}
if(user.consumed_units>50 && user.consumed_units<=100){
    user.totalamt = 50 + 10*6.5 + 20*8 + 50*9.5
    }
if(user.consumed_units>100 && user.consumed_units<=250){
        user.totalamt = 50 + 10*6.5 + 20*8 + 50*9.5 + 150*9.5
    }
    if(user.consumed_units>250){
        user.totalamt = 50 + 10*6.5 + 20*8 + 50*9.5 + 150*9.5 + (user.consumed_units - 250 ) *11
    }
}
else{
    user.totalamt = 50
    }
    console.log(user.totalamt)
const student = {
        marks_obtained : 590,
    total_marks : 500
    }
    const percentage = (student.marks_obtained/student.total_marks)*100
    console.log(percentage)
//     if(percentage>=45){
//         if(percentage<55){
// console.log("D")}
// if(percentage>=55 && percentage<60){
//     console.log("C")}
//     if(percentage>=60 && percentage<75){
//         console.log("B")}
//         if(percentage>=75 && percentage<80){
//             console.log("B-")}
//             if(percentage>=80 && percentage<85){
//                 console.log("B+")}
//                 if(percentage>=85 && percentage<90){
//                     console.log("A")}
//                     if(percentage>=90 && percentage<95){
//                         console.log("A-")}
//                         if(percentage>=95 ){
//                             console.log("A+")}
//     }
//     else{
//         console.log("Fail")
//     }
if(percentage>100){
    console.log("Percentage can't be greater than 100")
}
else if(percentage >= 95){
    console.log("A+")
}
else if(percentage >=90 ){
    console.log("A-") 
}
else if(percentage >=85 ){
    console.log("A") 
}
else if(percentage >=80 ){
    console.log("B+") 
}
else if(percentage >=75 ){
    console.log("B-") 
}
else if(percentage >=60 ){
    console.log("B") 
}
else if(percentage >=55 ){
    console.log("C") 
}
else if(percentage >=45 ){
    console.log("D") 
}
else{
    console.log("F")
}
