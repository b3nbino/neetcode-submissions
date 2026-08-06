class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let testArr = s.toLowerCase().split("").filter(char => /[0-9A-Z]/i.test(char));
        return testArr.join("") === testArr.reverse().join("");
    }
}
