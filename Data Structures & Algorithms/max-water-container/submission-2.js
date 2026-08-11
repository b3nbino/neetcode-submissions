class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0;
        let end = heights.length - 1;
        let maxArea = 0;

        while(start < end) {
            let currArea = Math.min(heights[start], heights[end]) * (end - start);
            maxArea = Math.max(currArea, maxArea);

            if(heights[start] <= heights[end]) {
                start++;
            } else {
                end--;
            }
        }

        return maxArea;
    }
}
