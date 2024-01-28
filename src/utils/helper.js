export const generatePrimes = (upToNumber) => {
    // Initialize an array to track whether each number is prime
    let isPrime = new Array(upToNumber + 1).fill(true);
    
    // Mark 0 and 1 as not prime
    isPrime[0] = isPrime[1] = false;
  
    // Iterate through the numbers using the Sieve of Eratosthenes algorithm
    for (let i = 2; i <= Math.sqrt(upToNumber); i++) {
      if (isPrime[i]) {
        // Mark multiples of the current prime number as not prime
        for (let j = i * i; j <= upToNumber; j += i) {
          isPrime[j] = false;
        }
      }
    }
  
    // Collect the prime numbers
    const primeNumbers = [];
    for (let i = 2; i <= upToNumber; i++) {
      if (isPrime[i]) {
        primeNumbers.push(i);
      }
    }
  
    return primeNumbers;
  }
  
  // Example: Generate prime numbers up to 20
//   const upToNumber = 20;
//   const primes = generatePrimes(upToNumber);
//   console.log(`Prime numbers up to ${upToNumber}: ${primes.join(', ')}`);
  
export const complicatedMathFunction = (n) => {
    return Math.sin(Math.pow(n, 2)) + Math.log(Math.abs(n + 1)) / Math.sqrt(n + 2);
  }
  
  // Example: Call the function with a value
//   const inputValue = 5;
//   const result = complicatedMathFunction(inputValue);
//   console.log(`The result for n = ${inputValue} is ${result}`);
  

export const performanceHeavyFunction = (n)=> {
    let result = 0;
  
    for (let i = 0; i < 1000000; i++) {
      result += Math.pow(Math.sin(n * i), 2) + Math.sqrt(Math.abs(n + i));
    }
  
    return result;
  }
  
//   // Example: Call the function with a value
//   const inputValue = 5;
//   const startTime = Date.now();
//   const result = performanceHeavyFunction(inputValue);
//   const endTime = Date.now();
  
//   console.log(`The result for n = ${inputValue} is ${result}`);
//   console.log(`Execution time: ${endTime - startTime} milliseconds`);
  