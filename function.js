const students = [
    {
        obtMarks : 200,
        total : 500
    }
]
// const getDivision = (obtMarks, total) =>{}
// const func1 = 
function getDivision(obtMarks, total){
let per = obtMarks/total*100
if(per>=80){
    return "Destinction"
}
else if(per>=60){
    return "First Division"
}
else if(per>=45){
    return "Second Division"
}
else if(per>=35){
    return "Third Division"
}
else{
    return "Fail"
}
}

let response = getDivision(students[0].obtMarks, students[0].total)

console.log(response)

//create a function that recieves an array of numbers and returns the sum of numbers in the array
const nums = [1,2,3,4,5,6,7]
let sum = 0
function getsum(nums){
for(let i=0; i< nums.length;  i++){
    sum += nums[i]
}
return sum
}
const sum1 = getsum(nums)
console.log(sum1)

//print in the following format using function:
/**
 * Category 1
 */
const cats = [
    {
        name: "Category 1",
        children: [
            {
                name: "Category 1.1",
                children: null
            },
            {
                name: "Category 1.2",
                children: [
                    {
                        name: "Category 1.2.1",
                        children: null
                    },
                    {
                        name: "Category 1.2.2",
                        children: null
                    }
                ]
            }
        ]
    },
    {
        name: "Category 2",
        children: [
            {
                name: "Category 2.1",
                children: [
                    {
                        name: "Category 2.1.1",
                        children: null
                    }
                ]
            }
        ]
    }



]

function content(x){

    for(let i=0; i<x.length; i++){
        console.log(x[i].name)
        if(x[i].children){
for(let j=0; j<x[i].children.length; j++){
    console.log("  "+ x[i].children[j].name)
    if(x[i].children[j].children != null){
        for(let k =0; k<x[i].children[j].children.length; k++){
            console.log("    "+x[i].children[j].children[k].name)
        }
    }
}
        }
    }
}
content(cats);