// if we have to pick one letter from the word inside the array 
let a=["h","adhi",23,1,"adhityan"]
console.log(a.length)
console.log(a[3])
console.log(a[4][4])
console.log(y=a[4][6])

// if we have to pick "h" from array inside the array
let b=[3,"true",[1,4,5,"hai"]]
console.log(b[2][3][0])

// replace the values inside the array 
let c=["aro",2,"kitten",27]
c[0]="hello"
console.log(c)
 
// if we have to add an element to the end 
let d=["true",6,"things",78,[1,2,7,"about"]]
d.push("object")
console.log(d)

// if we have to add element to the array which is in the inside "array d"  
d[4].push("stuff")
console.log(d)

// if we have to delete last element from the array 
let e=["true",6,"things",78,[1,2,7,"about"],657]
e.pop()
console.log(e)

// if we have to push element into an array in the front 
let f=["true",6,"things",78,[1,2,7,"about"]]
f.unshift("begining")
console.log(f)

// if we have to delete an element from the front in the array 
let g=["true",6,"things",78,[1,2,7,"about"]]
g.shift()
console.log(g)

// to join the array element 
let h=["x","y","z"]
i=h.join("")
console.log(i)