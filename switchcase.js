const day = "thursday"
switch(day){
    case "Sunday":
    console.log("Holiday")
    break;
    case "Saturday":
        console.log("Holiday")
        break;
    case "Friday":
        console.log("Weekend")
        break;
        default :
        console.log("Work day")
        break;    
}

const user = {
    name : "Saugat",
    consumed_units : 30,
    total_amt : 0
}
switch(true){
    case user.consumed_units<=20:
        user.total_amt = 50
        break;
        case user.consumed_units<=30:
        user.total_amt = 50 + (user.consumed_units-20)*6.5
        break;
        case user.consumed_units<=50:
        user.total_amt = 50 + 10*6.5 + (user.consumed_units-30)*6.5
        break;
        default:
            user.total_amt = 100
            break;
}
console.log(user.total_amt)
for(i=1;i<=5;i++){
   let toPrint = "";
   for(;j=1;){

   }
    }
