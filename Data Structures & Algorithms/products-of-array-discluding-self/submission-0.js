class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        return nums.map((int, i) => {
            let sum = 1;
            for(let j = 0; j < nums.length; j++) {
                if(j === i) continue;
                sum *= nums[j];
            }
            return sum;
        })
    }
}
