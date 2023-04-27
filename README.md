# DAD JOKES PROJECT

- explain what getElement by id does
- what is does the jokes api do?
- what is a javascript function
- what does fetch do in js
- explain asynchronous vs synchronous operations in js
- why do we use await
- why should one use return statement in a function
- what is a try catch block and why is it recommended

# LESSONS LEARNT

# 1. getElementById

### the getElementByid method returns an object repesenting the element which id matches the specified string.

### Example:

```js
getElementById("container");
```

### if their is no element with the given `id `or if you have ommitted a letter or missspelled a word in the string it will return `null`

### example:

```
document.getElementById("Main")
 WRONG

 instead of::

document.getElementById("main")
RIGHT
```

### because "M" and "m" are different for the purposes of this method.

# 2. Dad Jokes Api

## API stands for Application Programming Interface.

### is an interface which allows you to interact with other application

### A Web API is an application programming interface for the Web.

### A Browser API can extend the functionality of a web browser.

### A Server API can extend the functionality of a web server.

# 3. Functions in Javascript

### A javascript function is a block of code designed to perform a particular task

### A java script function is executed when "something" invokes it (callit)

## example

```
function myFuction(parameter1,parameter2) {
  return p1 * p2;
}
```

### function parameter are listed inside inside the parentheses() in the function defination

## Function Return

### When JavaScript reaches a return statement, the function will stop executing

### If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

## Example

### Calculate the product of two numbers, and return the result:

```
let x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b

  The result in x will be: 12
```

# 4. Using the Fetch Api in Javascript

### The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.

### The fetch() method is available in the global scope that instructs the web browsers to send a request to a URL.

## Sending a Request

### The fetch() requires only one parameter which is the URL of the resource that you want to fetch:

```js
let response = fetch(url);
```

## Using async/await with fetch

### A better and cleaner way of handling the promise is through the async/await keywords. You start by specifying the caller function as async and then use await to handle the promise.

## EXAMPLE

```js
async function getResponse() {
  const response = await fetch(
    "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
        "x-rapidapi-key": "your_api_key",
      },
    }
  );
}
```

### Because of the await keyword, the asynchronous function pauses until the promise is resolved. The Response object is assigned to response once the request completes.

# 5. Asynchronous vs Synchronous Operations

### Synchronous = happens at the same time. Asynchronous = doesn't happen at the same time.

### synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

### Asynchronous code execution allows to execution next instructions immediately and doesn't block the flow because of previous instructions.

## Difference Between Synchronous vs Asynchronous JavaScript?

# Synchronous JavaScript

## . 1 Instruction in synchronous code executes in a given sequence.

## . 2 Each operation waits for the previous operation to complete its execution

## . 3 Most of the time JavaScript is used as Synchronous code.

# Asynchronous JavaScript

## .1 Instructions in asynchronous code can execute in parallel.

## .2 Next operation can occur while the previous operation is still getting processed.

## .3 Asynchronous JavaScript is preferred in situations in which execution gets blocked indefinitely.

```js
async function someFunction() {}
await someFunction();
```

# 6. What is the await keyword

## is used to make the current thread waiting until all the parties have invoked await() method on this barrier or the specified waiting time elapses.

### Awaiting a promise to be fulfilled

### If a Promise is passed to an await expression, it waits for the Promise to be fulfilled and returns the fulfilled value.

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  const x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();
```

# 7. The return statement in Javascript

## ends function execution and specifies a value to be returned to the function caller.

## EXAMPLE

```js
document.getElementById("demo").innerHTML = myFunction("John");

function myFunction(name) {
  return "Hello " + name;
}
```

# 8. What is a try catch block in Javascript

### The <b><u>`try`</u></b> statement allows you to define a block of code to be tested for errors while it is being executed.

### The <b><u>`catch`</u></b> statement allows you to define a block of code to be executed, if an error occurs in the try block.

### The `try` and `catch` keywords come in pairs:

### The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

### The try statement always starts with a try block. Then, a catch block or a finally block must be present.

## Example

```js
public class Main {
  public static void main(String[ ] args) {
    try {
      int[] myNumbers = {1, 2, 3};
      System.out.println(myNumbers[10]);
    } catch (Exception e) {
      System.out.println("Something went wrong.");
    }
  }
}

```

## the out put will be `something went wrong. `
