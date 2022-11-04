// object "stud" 
let stud={
    roll_no:3,
    name:"shins",
    mark:13,
    ph:987654321,
    subject:["physics","chemistry","maths","malayalam"],
    // object"guardian" 
    guardian:{
              name:"rajeevan",
              relation:"father",
              ph:123498765
    }
}
console.log(stud.roll_no)
console.log(stud.ph)

// if we have to pick one subject from the object "subject" 
console.log(stud.subject[2])

// if we have to pick "relation" from the object "guardian" from the main object "subject" 
console.log(stud.guardian.relation)

// replacing any value in the object "stud" 
stud.roll_no=115
console.log(stud)

// another way of printing value 
console.log(stud["ph"])
console.log(stud["guardian"]["ph"])

// adding new key and value to the object"stud"
stud.attendance="50%"
console.log(stud)

// deleting one property from the object"stud"
delete stud.ph
console.log(stud)

// to check wheather a property is in or not in object"stud"
console.log(stud.hasOwnProperty("guardian"));
console.log(stud.hasOwnProperty("address"));




                            //    NEW WORK 


 let smartphone=[
    {
        model:"s22-ultra",
        price:59000,
        brand:"samsung",
    },

    {
        model:"mi-12pro",
        price:43000,
        brand:"redmi",
    },

    {
        model:"se-9",
        price:31000,
        brand:"iqoo",
    },

    {
        model:"f15pro-plus",
        price:21000,
        brand:"oppo",
    }
 ]

 // print first object
 console.log(smartphone[0])

//print price from the second object
 console.log(smartphone[2].price)

 //add an extra object to the array
 smartphone.push(
    {
        model:"v23",
        price:23000,
        brand:"vivo"
    }
 )
 console.log(smartphone)

//delete the brand from the third object 
  delete smartphone[3].brand
  console.log(smartphone); 
  
  //adding elemrnt stock to the first object
 smartphone[0].stock=50000 
 console.log(smartphone);

 //delete first object from the array
 smartphone.pop()
 console.log(smartphone);

               
                         


