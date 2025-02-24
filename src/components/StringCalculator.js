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

const add = (numbers) => {
    if (numbers === "") return 0;
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
