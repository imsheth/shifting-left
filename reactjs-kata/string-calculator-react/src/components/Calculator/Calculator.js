import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const performAddition = (e) => {
    e.preventDefault();
    const numbersToAdd = getNumbersToAdd(input);
    const sumTotal = getTotal(numbersToAdd);

    setResult(sumTotal);
  };

  const getNumbersToAdd = (inputString) => {
    return input.replaceAll(/\n/g, ",").split(",");
  };

  const getTotal = (inputNumberArray) => {
    let sum = 0;
    inputNumberArray.forEach((number) => {
      sum += parseFloat(number) ? parseFloat(number) : 0;
    });
    return sum;
  };

  return (
    <div>
      <h1>String calculator</h1>
      <input
        type="text"
        aria-label="Input"
        placeholder="Input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="button"
        aria-label="Add"
        value="Add"
        onClick={(e) => performAddition(e)}
      />
      <p data-testid="result">{result}</p>
    </div>
  );
}

export default Calculator;
