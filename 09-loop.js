//while loop work only when the condition is true 
function printUpto5(){
    let x=1
    while(x <= 5){
        console.log(x);
        x++;
    }
}
 printUpto5()



 function printUpto(a){
    let x=1
    while(x <= a){
    console.log(x);
    x++
     } }
 printUpto(4)    
 printUpto(8)    



 //do while
 function printUpto6(a){
    let x=1
    do{
        console.log(x);
        x++;
    }
    while(x <= a)
}
printUpto6(4)
printUpto6(9)


// for loop

function printUpto9(a){
    for(let i=1;i<=a;i++){
           console.log(i);
    }
}
printUpto9(6)
printUpto9(8)





function print(a){
    for(let i=a;i>=1;i--){
           console.log(i);
    }
}
print(6)
print(8)






function printArray(a){
   b= a.length
    for(let i=0;i< b;i++){
        console.log(a[i]);
    }
}
printArray([3,4,9,7])