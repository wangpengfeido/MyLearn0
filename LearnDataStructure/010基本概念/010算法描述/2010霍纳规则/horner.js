/**
 * 霍纳规则是采用最少的乘法运算策略，计算多元一次多项式的方法
 */
exports.horner = function horner(x, ...coefficients) {
  if (coefficients.length === 0) {
    return 0;
  }
  const [last] = coefficients.splice(coefficients.length - 1, 1);
  return horner(x, ...coefficients) * x + last;
};



