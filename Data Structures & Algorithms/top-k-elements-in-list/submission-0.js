class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counts = {};

        for(let i = 0; i < nums.length; i++) {
            let currElem = nums[i];
            if(!counts[currElem]) {
                counts[currElem] = 1;
            } else {
                counts[currElem]++;
            }
        }

        let sortedCounts = Object.entries(counts);
        sortedCounts.sort((a, b) => b[1] - a[1]);

        let result = [];
        for(let i = 0; i < k; i++) {
            result.push(sortedCounts[i][0]);
        }

        return result;
    }
}
