//ecommerce 
//product
// const prduct_name = "iphone 12"

//Array
//last index= size - 1
//size = no of elems on the array

const product = [
    "iphone 12",
    12000,
    "apple",
    "Smart phones"
]
console.log(product[0])

const product1 = new Array(
    "iphone 12",
    12000,
    "apple",
    "Smart phones"
    //constructor
)
console.log(product1[0])

const allProducts = [
    [
        "product name 1",
        12345,
        "Brand 1",
        "Category 1"
    ],
    [
        "product name 1",
        12345,
        "Brand 1",
        "Category 1"
    ]
]
//create an array variable to store a student information 
//Student data should contain name, email, address, phone
// print the values individually

const student = [
    
        "Rabin",
        "Imadol",
        9818505737,
        "Virinchi College"
    
  
]
console.log(student[0])
console.log(student[1])
console.log(student[2])
console.log(student[3])

//Objects
const studentObj1 = [
    {
    name: "Rabin Thapa",
    address: "Imadol",
    number : 9818505737
},
{
    name: {first:"Saugat", last:"Dhakal"},
    address: "Imadol",
    number : 9818504838
}
]
console.log(studentObj1[0].name + studentObj1[0].address)
console.log(studentObj1[0].address)+
console.log(studentObj1[0].number)+
console.log(studentObj1[1]['name'].last)+
console.log(studentObj1[1].address)+
console.log(studentObj1[1].number)

const files = {
    0: {
        name: "Rabin",
        size: "",
        type: "",
    },
    1: {
        name: "",
        size: "",
        type: "",
    }
}
console.log(files['0'].name)