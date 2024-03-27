/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let cheaper = Infinity;
  let bigger = -Infinity;
  let dayIndex;
  let profit = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < cheaper) {
      cheaper = prices[i];
      dayIndex = i;
    } else {
      profit = Math.max(profit, prices[i] - cheaper);
    }
  }

  return profit > 0 ? profit : 0;
};

//const prices = [7, 1, 5, 3, 6, 4];
//const prices = [2, 4, 1];
//const prices = [3, 2, 6, 5, 0, 3];
const prices = [1, 2];
console.log(maxProfit(prices));
