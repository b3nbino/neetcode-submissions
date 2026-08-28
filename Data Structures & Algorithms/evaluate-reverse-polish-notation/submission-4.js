class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let tokensCopy = [...tokens];

        tokensCopy.forEach((token) => {
            if (/[0-9]/g.test(token)) {
                stack.push(Number(token));
            } else {
                let right = stack.pop();
                let left = stack.pop();
                switch (token) {
                    case "+":
                        stack.push(left + right);
                        break;
                    case "-":
                        stack.push(left - right);
                        break;
                    case "*":
                        stack.push(left * right);
                        break;
                    case "/":
                        let result = left / right
                        if(result > 0) {
                            result = Math.floor(result);
                        } else if(result < 0) {
                            result = Math.ceil(result);
                        }
                        stack.push(result);
                        break;
                }
            }
        });

        return stack.pop();
    }
}
