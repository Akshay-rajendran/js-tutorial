function sayHalo(){
    // console.log("who are u")
}
sayHalo()
sayHalo()
sayHalo()
sayHalo()

function sayHaloTo(x){ //to print different value in a same function
    // console.log("Are u "+x)
}
sayHaloTo("vyshnavi")
sayHaloTo("athira")


function printPlusFive(x){
    // console.log(5+x)
}
printPlusFive(8)
printPlusFive(12)


function printSum(x,y){
    // console.log(x+y)
}
printSum(6,8)
printSum(2,15)


function printBirthYear(x){ //to print someones birth year

    sum=2022-x
    // console.log("you were born in "+sum )
    return sum
}
printBirthYear(22)
printBirthYear(16)
printBirthYear(0)



function printSquare(a){ // to find square of a number
    // console.log(a*a);
}
printSquare(4)
printSquare(6)


function getSquare(b){ //return the square of "b" and stored squared value into "c"
    return(b*b)
}
let c=getSquare(5)
// console.log(c)

//example 
let year=printBirthYear(18)
// console.log(year);



function getTriangleArea(x,y){
    sum=1/2*x*y
    return ("Area = "+sum)
   
}
let z=getTriangleArea(2,6)
let u=getTriangleArea(10,15)
console.log(z);
console.log(u);



function basketBall(a,b,c){
    sum=(a*3)+(b*2)+(c*1)
    tot=sum
    return ("Total = "+sum)
}
let d=basketBall
let o = d(6,9,1)
console.log(o);