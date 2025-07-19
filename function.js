const a = function myFunction() {
  console.log("This is my function!");
};

a();

//when you pass an object as a parameter , if function changes the object's properties,
//that change is visible outside the function, as show in the following example:
function myFunc(obj) {
  console.log("This is another function!");
  obj.make = "Toyota";
}

const car = {
  make: "Honda",
  model: "Civic",
  year: 2020,
};

console.log(car.make);
myFunc(car);
console.log(car.make); // Output: Toyota

//when you pass an array as a parameter, if the function change any of the array's
//value that change is visible outside the function

function myFunc2(theArray) {
  theArray[0] = 30;
}

const arr = [45];

console.log(arr[0]);

myFunc2(arr);

console.log(arr[0]); // Output: 30

//functions declared and expressions can be nested , which forms a scope chain.
//for example:

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(2, 5)); // Output: 29

// while function declaration above is syntactically a statement,
//function can also be create a function expression

const myFunc3 = function (number) {
  return number * number;
};

console.log(myFunc3(4)); // Output: 16

// however , a name can be provided with a function expression,
// providing a name allows the function to refer to itself
// , and also makes it easier to identify the function in a
// debugger's stack traces

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));

//function expression are convenient when passing a function as 
// argument to another function. this following example defines 
// a map function that should receive a function as first argument and 
// array as second argument. then, it is called with a function 
// defined by a function expression 

// กำหนดฟังก์ชัน map ที่รับฟังก์ชัน f และอาร์เรย์ a เป็นพารามิเตอร์
// ฟังก์ชันนี้จะสร้างอาร์เรย์ใหม่ที่มีผลลัพธ์จากการเรียกใช้ฟังก์ชัน f กับแต่ละสมาชิกของอาร์เรย์ a
// The map function takes a function f and an array a as parameters.
function map(f, a){
    const result = Array(a.length) ;
    for (let i = 0 ; i < a.length ; i ++) {
        result[i] = f(a[i]);
    }
    return result ;
}

// ตัวอย่างการใช้งานฟังก์ชัน map
// Example usage of the map function
const numbers = [1, 2, 3, 4, 5];
// สร้างอาร์เรย์ใหม่ที่มีค่ากำลังสองของสมาชิกในอาร์เรย์ numbers
// Create a new array with the squares of the numbers in the numbers <array></array>
const squares = map(function (x) {
  return x * x;
}, numbers);

console.log(squares); // Output: [1, 4, 9, 16, 25]



//in javascript, a function can be defined based on a condition 
//for example, the following code function definition defines
// myFunc only if num equal 0 

let myFunc;
if(num=== 0){
    myFunc = function(theObject){
        theObject.make = "Toyota";
    }
}
