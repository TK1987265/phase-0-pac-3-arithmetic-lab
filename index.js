// Basic math functions
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  
  // Increment and decrement functions
  function increment(n) {
    return n + 1;
  }
  
  function decrement(n) {
    return n - 1;
  }
  
  // Parsing functions
  function makeInt(n) {
    const parsedInt = parseInt(n, 10); // Parses as base 10
    return isNaN(parsedInt) ? NaN : parsedInt; // Return NaN if parsing fails
  }
  
  function preserveDecimal(n) {
    const parsedFloat = parseFloat(n); // Parses as a floating-point number
    return isNaN(parsedFloat) ? NaN : parsedFloat; // Return NaN if parsing fails
  }
  