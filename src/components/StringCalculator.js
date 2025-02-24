// src/components/StringCalculator.js
import React, { useState } from "react";

const StringCalculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);

  //Note: return 0 for an empty string
//   const add = (numbers) => {
//     if (numbers === "") return 0;
//     return 0;
//   };

// Note: return same number for single number
// const add = (numbers) => {
//     if (numbers === "") return 0;
//     return parseInt(numbers, 10);
//   };

// Note: return return the sum of multiple numbers

// const add = (numbers) => {
//     if (numbers === "") return 0;
//     const numArray = numbers.split(",").map(Number);
//     return numArray.reduce((sum, num) => sum + num, 0);
//   };

// Note: throw an error for negative numbers

// const add = (numbers) => {
//     if (numbers === "") return 0;
  
//     let negatives = [];
    
//     if (numbers.startsWith("//")) {
//       const delimiterLineEnd = numbers.indexOf("\n");
//       const delimiter = numbers.slice(2, delimiterLineEnd);
//       numbers = numbers.slice(delimiterLineEnd + 1);
//       numbers = numbers.replace(new RegExp(delimiter, "g"), ",");
//     }
  
//     const numArray = numbers.split(",").map(Number);
  
//     numArray.forEach((num) => {
//       if (num < 0) {
//         negatives.push(num);
//       }
//     });
  
//     if (negatives.length > 0) {
//       throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
//     }
  
//     return numArray.reduce((sum, num) => sum + num, 0);
//   };

//Note :should handle newlines as separators
const add = (numbers) => {
    if (numbers === "") return 0;
    numbers = numbers.replace(/\n/g, ",");
    const numArray = numbers.split(",").map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
  };
  
  
  
  
  
  
  
  

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCalculate = () => {
    const calculationResult = add(inputValue);
    setResult(calculationResult);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter numbers"
      />
      <button onClick={handleCalculate}>Calculate</button>
      <p data-testid="result">Result: {result}</p>
    </div>
  );
};

export default StringCalculator;
