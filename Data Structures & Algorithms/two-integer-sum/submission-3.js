class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let sorted = nums.toSorted((a, b) => a - b);
        let start = 0;
        let end = nums.length - 1;
        let pair = [];

        while(start < end) {
            let sum = sorted[start] + sorted[end];

            if(sum === target) {
                pair = [sorted[start], sorted[end]];
                break;
            } else if(sum < target) {
                start++;
            } else {
                end--;
            }
        }

        return [nums.indexOf(pair[0]), nums.lastIndexOf(pair[1])]
    }
}
