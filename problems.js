1+"2" - "1" // 11

// - Difference b/w Null or Undefined 

// null: Represents the intentional absence of any object value. It's typically used to indicate that a variable should have no value.
// i.e =>  let a = null 

// undefined: Indicates that a variable has been declared but not yet assigned a value. It can also be the value of a function parameter that wasn't passed.
// i.e =>  let a , let a = undefined 


 // Code examples -
   
function difference(name, age = null) {
  return `Hi my name is ${name} and my age is ${age}`;
}
console.log(difference("Sahil", 12));


function difference(name, age = undefined) {
  return `Hi my name is ${name} and my age is ${age}`;
}
console.log(difference("Sahil", 12));

// Note: There is also Type difference :

console.log(typeof null); // Output: object
console.log(typeof undefined); // Output: undefined

