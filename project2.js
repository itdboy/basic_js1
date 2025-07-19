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
