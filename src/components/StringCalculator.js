import React, { useState } from "react";

const StringCalculator = () => {
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState(null);
    
    const add = (numbers) => {
        let negatives = [];
        if (numbers === "") return 0;
        
        if (numbers.startsWith("//")) {
            numbers = numbers.replace(/\\n/g, "\n");
            const delimiterLineEnd = numbers.indexOf("\n");
            const delimiter = numbers.slice(2, delimiterLineEnd); 
            numbers = numbers.slice(delimiterLineEnd + 1); 
            numbers = numbers.replace(new RegExp(`\\${delimiter}`, "g"), ",");
        } else {
            
            numbers = numbers.replace(/\\n/g, '\n');  
            numbers = numbers.replace(/[\n,]/g, ",");
        }
        
        const numArray = numbers.split(",").map(Number);
        numArray.forEach((num) => {
            if (num < 0) {
                negatives.push(num);
            }
        });
        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
        }
        return numArray.reduce((sum, num) => sum + num, 0);
    };
    
    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setResult(null); 
    };
    
    const handleCalculate = () => {
        try {
            const calculationResult = add(inputValue); 
            if (isNaN(calculationResult)) {
                setResult("Invalid input. Please enter valid numbers.");
            } else {
                setResult(calculationResult); 
            }
        } catch (error) {
            setResult(error.message); 
        }
    };
    
    
    return (
        <div className="app-container">
        <header className="header">
        <h1>Smart Calculator</h1>
        </header>
        
        <main className="main-content">
        <div className="input-container">
        <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter numbers (e.g., 1, 2, 3)"
        className="input-field"
        />
        <button onClick={handleCalculate} className="calculate-button">
        Calculate
        </button>
        {result !== null && (
            <p data-testid="result" className="result-text">
            Result: {result}
            </p>
        )}
        </div>
        </main>
        
        <footer className="footer">
        <p>© 2025 Smart Calculator. All rights reserved.</p>
        </footer>
        </div>
    );
};

export default StringCalculator;
