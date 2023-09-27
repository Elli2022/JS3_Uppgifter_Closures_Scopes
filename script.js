// 1. Write a func.on that allows you to do this:

// var addSix = createBase(6)
// addSix(10) // 16
// addSix(21) // 27

function createBase(baseNumber) {
  return function (number) {
    return baseNumber + number;
  };
}

var addSix = createBase(6);

console.log(addSix(6));
console.log(addSix(18));

//----------------------------------------------------------------

// Create a simple func.on that only run once after been called.

function runOnce(fn) {
  let hasRun = false;
  return function (...args) {
    if (!hasRun) {
      hasRun = true;
      return fn(...args);
    }
    console.log("Function has already been run!");
  };
}

const sayHelloOnce = runOnce(() => console.log("Hello, World!"));
sayHelloOnce();
sayHelloOnce();

// 3. Using closures, Create a private counter and a way to print the value of the counter
// at any desired .me.
// Tips: A func.on can return several func.ons in the following way:

function counter() {
  let count = 0;
  function increment() {
    count++;
  }
  function print() {
    console.log(count);
  }
  return {
    increment,
    print,
  };
}

const myCounter = counter();
myCounter.increment();
myCounter.print(); // 1

// 4. Create a func.on that builds a string adding characters/words to it every .me the
// func.on is called.
// Example:
// 1st .me calling the func.on I add the word: Hello
// 2nd .me calling the func.on we add the word: world
// 3rd .me calling the func.on we add the exclama.on mark: !
// When you have added all the desired characters/words the whole word/sentence
// should be printed out:
// Hello world!

function createString() {
  let string = "";
  return function (word) {
    if (word) string += ` ${word}`;
    else console.log(string.trim());
  };
}

const myString = createString();
myString("Hello");
myString("world!");
myString(); // logs: 'Hello world!'

//   5. Create a vending machine that randomly chooses a product when a total of 100 coins
// has been added to it.
// Every .me coins are added to our vending machine a message showing how much
// coins there are left to reach 100 coins should appear (if the total of coins in the
// machine is lower than 100).

// Example:
// 1st .me calling our vending machine we add 25 coins -> // 75 coins left to 100
// 2nd .me calling our vending machine we add 25 coins -> // 50 coins left to 100
// 3rd .me calling our vending machine we add 50 coins -> // ** random product **

function vendingMachine() {
  const products = ["Coke", "Pepsi", "Sprite"];
  let coins = 0;
  return function (addedCoins) {
    coins += addedCoins;
    if (coins >= 100) {
      coins -= 100;
      const randomProduct =
        products[Math.floor(Math.random() * products.length)];
      console.log(`** ${randomProduct} **`);
    } else {
      console.log(`${100 - coins} coins left to 100`);
    }
  };
}

const myVendingMachine = vendingMachine();
myVendingMachine(25);
myVendingMachine(25);
myVendingMachine(50);
