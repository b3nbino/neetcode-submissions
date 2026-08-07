class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let triplets = [];
        let seen = {};

        // Collect element indexes
        nums.forEach((num, i) => {
            if (seen[num]) {
                seen[num].push(i);
            } else {
                seen[num] = [i];
            }
        });

        for (let i = 0; i < nums.length - 1; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                let third = 0 - (nums[i] + nums[j]);
                if (
                    seen[third] &&
                    seen[third].some((index) => index !== i && index !== j)
                ) {
                    let curr = [nums[i], nums[j], third];
                    if(!triplets.some(arr => arr.every(num => curr.includes(num)))) {
                        triplets.push(curr);
                    }
                }
            }
        }

        return triplets;
    }
}
