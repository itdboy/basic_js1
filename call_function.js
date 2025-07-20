// a function can call itself.example, here is a function
// that computes factorials

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
console.log(factorial(4)); // Output: 24
console.log(factorial(3)); // Output: 6
console.log(factorial(2)); // Output: 2
console.log(factorial(1)); // Output: 1

// this code run without error , despite the square() function
// being called before its declaration. this is because JS int
// console.log(square(5)); // 25

// function square(n) {
//   return n * n;
// }

// Function hoisting only works with function declarations --
// not with function expressions.
const square = function (n) {
  return n * n;
};

console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization

//function form as a scope for variables - this mean variable defined
// inside a function cannot be accessed from outside function. the function
// scope inherits from all the upper scopes

const num1 = 20;
const num2 = 3;
const name = "John";

//this function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // Output: 60

//a nested function example

function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // Output: John scored 5

//example. the name variable of outer function is accessible to the inner
// and there is no other way to access the inner variable except through
// inner function. the inner variable of the inner function act as safe
// stores for the outer arguments and variables. they hold "persistent"
// and "encapsulated" data for the inner functions to work with.

const createPet = function (name) {
  let sex;

  const pet = {
    // setName(newName) is equivalent to setName : function(newName)
    // in this context
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    getSex() {
      return sex;
    },

    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLocaleLowerCase() === "male" ||
          newSex.toLocaleLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };

    return pet;
};

const pet = createPet("Buddy");
console.log(pet.getName()); // Output: Buddy

pet.setName("Rex");
pet.setSex("male");

console.log(pet.getName()); // Output: Rex
console.log(pet.getSex()); // Output: male

