class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = {};

        for(let i = 0; i < nums.length; i++) {
            let curr = nums[i];
            let difference = target - curr;

            if(seen[difference] !== undefined) {
                return [seen[difference], i];
            } else {
                seen[curr] = i;
            }
        }
    }
}
