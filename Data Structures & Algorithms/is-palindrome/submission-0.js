class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let testArr = s.split("").filter(char => /[0-9A-Z]/i.test(char));
        return testArr.join("").toLowerCase() === testArr.reverse().join("").toLowerCase();
    }
}
