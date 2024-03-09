// format.js

const Format = {
  // 格式化金额展示： 12341234.246 -> $ 12,341,234.25
  formatMoney: (money, symbol = "", decimals = 2) => {
    const formatToFixed = (money, decimals = 2) => {
      return (
        Math.round((parseFloat(money) + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals)
      ).toFixed(decimals);
    };

    return formatToFixed(money, decimals)
      .replace(/\B(?=(\d{3})+\b)/g, ",")
      .replace(/^/, `${symbol}`);
  },
};

export default Format;
