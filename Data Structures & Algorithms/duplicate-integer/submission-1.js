class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let encountered = {}

        for(let i = 0; i < nums.length; i++) {
            let curr = nums[i]

            if(encountered[curr]) {
                return true;
            } 

            encountered[curr] = true;
        }

        return false;
    }
}
