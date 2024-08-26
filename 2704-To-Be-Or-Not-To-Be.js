/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (expectedValue) {
      if (val === expectedValue) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (unexpectedValue) {
      if (val !== unexpectedValue) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */