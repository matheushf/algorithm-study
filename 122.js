/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    const isNextBigger = prices[i] < prices[i + 1];

    if (isNextBigger) {
      profit += prices[i + 1] - prices[i];
    }
  }

  return profit;
};

//const prices = [7, 1, 5, 3, 6, 4];
//const prices = [2, 4, 1];
//const prices = [3, 2, 6, 5, 0, 3];
const prices = [1, 2];
console.log(maxProfit(prices));
