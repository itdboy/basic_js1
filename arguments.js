// the arguments of a function are maintained in an array
// -like object. within a function, you can address the arguments
// passed to it as follows
// arguments[0], arguments[1], etc.

function myConcat(separator) {
  let result = "";
  //iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }

  return result;
}

console.log(myConcat(", ", "apple", "banana", "cherry")); // Output: apple, banana, cherry

console.log(myConcat("; ", "apple", "banana", "cherry")); // Output: apple, banana, cherry

// There are two kinds of parameters. one is default parameters and rest parameters.
//default parameters are used to set default values for function .

// in the following example, if not value is provided for b,
// its value would be undefined when evaluating the function
// when evaluating a*b and  a call to multiply would normally
// have to return NaN. however, this is prevented by the second line

function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // Output: 5

console.log(multiply(5, 2)); // Output: 10

// Default parameters
//with default parameters, a manual check in the function body is
// no longer necessary, you can put 1 as default value for b in
// the function head

function multiplyWithDefault(a, b = 1) {
  return a * b;
}

console.log(multiplyWithDefault(5)); // Output: 5
console.log(multiplyWithDefault(5, 2)); // Output: 10

// Rest parameters
// the rest parameter syntax allows us to represent an indefinite
// of arguments as an array.

// in example, the function multiply uses rest parameters to collect
// arguments from the second one to the end. the function then
// multiplies these by the first argument.

function multiplyRest(multiplier, ...args) {
  return args.map((x) => multiplier * x);
}

console.log(multiplyRest(5, 1, 2, 3)); // Output: [2, 4, 6]

// Arrow functions
//Two factors influence the introduction of arrow functions : shorter functions and
// non-binding of 'this'

// Short functions
// in some functions parameters, shorter functions are welcome. Compare:

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // Output: [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // Output: [8, 6, 7, 9]
