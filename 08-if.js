function oddEven(x){
    if(x==0){
      console.log("the number is 0");
    }else if(x%2==0){
        console.log("the number is even");
    }else{
    console.log("the number is odd");
   }

}
oddEven(3)
oddEven(0)
oddEven(7)








function birthYear(x){
    if(x==2004){
        console.log("you are 18");
    
    }else if(x<2004){
        console.log("you are adult");
    
    }else{
        console.log("you are a kid");
    }
}
birthYear(2005)
birthYear(2001)
birthYear(2004)





function wishMe(x){                    
    
    
     if(x==18){
       console.log("today is Your birthday");

    }else if(x>18){
              console.log("sorry ,you Birthday is in next year");
    }else if(x<18){
                a=18-x 
                console.log("you  Birthday is after " + a +" days");

    }else{
       console.log("invalid  Message")
    }
}
wishMe(6)
wishMe(18)
wishMe(27)

