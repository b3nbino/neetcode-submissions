class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return nums.some(elem => nums.indexOf(elem) !== nums.lastIndexOf(elem))
    }
}
