class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let brackets = s.split("");
        let stack = [];
        let correspondingBrackets = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        for (let i = 0; i < brackets.length; i++) {
            let currBracket = brackets[i];

            if (currBracket === "(" || currBracket === "{" || currBracket === "[") {
                stack.push(currBracket);
            } else {
                let lastOpenBracket = stack.pop();

                if (
                    lastOpenBracket === undefined ||
                    lastOpenBracket !== correspondingBrackets[currBracket]
                ) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
