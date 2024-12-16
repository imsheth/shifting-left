const Calculator = {
  Add: (inputString) => {
    return getSumTotal(getNumbersToAdd(inputString));
  },
};

const getNumbersToAdd = (inputStringExpression) => {
  return inputStringExpression.split(/,|\n/g);
};

const getSumTotal = (numbersToAdd) => {
  let sum = 0;
  numbersToAdd.forEach((number) => {
    sum += parseFloat(number) || 0;
  });
  return sum;
};

module.exports = Calculator;
