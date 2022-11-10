// let checknum = function(){}

  //         checking multiple values of a variable
function checknum(x){
    switch(x){
        case 1:
            return ("one")
        case 2:
            return ("two")
        case 3:
            return ("three")
        case 4:
            return ("four")  
        default :
        return("not in this")

    }
      

 
}

console.log(checknum(10))




//              printing which day is today

function days(a){
 switch(a){
    case 0:
        console.log("sunday")
        break;
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednessday");
        break;
    case  4:
        console.log("thuesday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    default:
        console.log("invalid day");    
 }               


 }
 days(1)
 days(0)
 days(7)
 days(5)
 days(4)




//              custom bot message replaying

 function customMessage(b){
    b= b.toLowerCase() //to change into lowercase
    switch (b){
        case "hai":
            console.log("hai, amezing offers are awaits for u");
            break;
        case "offer":
        case "offers":
            console.log("iphone 14-75k");
            console.log("iphone 13-65k");
            console.log("iphone 14 pro-1L");
            console.log("iphone 13 pro-85k");
            console.log("iphone 11-55k");
            break;
        case "cash on delivery":
            console.log("oops,sorry we dont have that");
            break;
        case "customer care":
                console.log("how can i help you"); 
                break;
        default:
            console.log("sorry,we cant understand");        

    }
 }
 customMessage("hai")
 customMessage("Hai")
 customMessage("offer")
 customMessage("offers")
 customMessage("cash on delivery")
 customMessage("customer care")






//             calculator functions


 function calculator(x,y,z){
    switch(z){ // z is the operator
        case "*":
            a=x*y
            console.log(a);
            break;
         case "/":
            a=x/y
            console.log(a);
            break;
         case "-":
            a=x-y
            console.log(a);
            break;
        case "+":
            a=x+y
            console.log(a);
            break;
        default:
            
            console.log("we cant understand");
            
            

    }
 }
 calculator(2,4,"+")




//          printing days of a month

 function monthDays(x){
    x= x.toLowerCase()
    switch(x){
        case "january":
        case "march":
        case "may":
        case "july":
        case "agust":
        case "october":
        case "december":
            console.log("31 days");
            break;
        case "april":    
        case "june":    
        case "september":    
        case "november":
            console.log("30 days");
            break;
        case "february":
            console.log("29 days");
            break;
        default:
            console.log("invalid month");            
    }
 }
 monthDays("january")
 monthDays("June")