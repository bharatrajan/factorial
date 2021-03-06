
/**
 * @description - Check if n is integer
 * @utility
 * @param {integer} n - value to be validated for integer
 * @returns {boolean} - interger or not
 */
var isNInteger = function(n) {
    return (!isNaN(n) && n === parseInt(n) && !(n < 0))
}

/**
 * @description - Computes factorial for integer n
 * @utility
 * @param {integer} n - n for which factorial is calculated
 * @returns {string} - Factorial of n. Or error message
 */
var getFactorial = (function() {
    //Closure to safeguard cache array
    var cacheArr = [new BigNumber("1"), new BigNumber("1")];

    return function(n) {
        //Validation for integer
        if (!isNInteger(n)) {
            return "Invalid input";
        }

        var result = cacheArr[n];
        if (typeof result === "object") {//Already computed value
            
            return result.toString();
        } else {//Compute from biggest factorial available

            //Take last item of cache array
            var iter = cacheArr.length - 1;
            result = cacheArr[iter]

            //Iteratively find factorial from the last item of cache array
            while (iter <= n) {
                cacheArr[iter] = result = result.multiply(iter.toString());
                iter++;
            }
            return result.toString();
        }

    }

})();
