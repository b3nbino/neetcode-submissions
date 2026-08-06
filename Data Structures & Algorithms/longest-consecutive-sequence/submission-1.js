class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let seen = {};
        let maxSequence = 0;

        function greatestSequence(num) {
            let count = 1;
            while(seen[num + 1] === true) {
                count++;
                num += 1;
            }
            return count;
        }

        nums.forEach(num => seen[num] = true);
        nums.forEach(num => {
            if(seen[num - 1] !== true) {
                maxSequence = Math.max(maxSequence, greatestSequence(num))
            }
        });

        return maxSequence;
    }
}
