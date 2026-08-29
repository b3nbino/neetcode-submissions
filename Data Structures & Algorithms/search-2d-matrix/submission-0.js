class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let start = 0;
        let end = matrix.length - 1;

        while (start <= end) {
            let mid = Math.floor((end + start) / 2);

            if (matrix[mid][0] > target) {
                end = mid - 1;
            } else if (matrix[mid][matrix[0].length - 1] < target) {
                start = mid + 1;
            } else {
                let innerStart = 0;
                let innerEnd = matrix[0].length - 1;

                while (innerStart <= innerEnd) {
                    let innerMid = Math.floor((innerEnd + innerStart) / 2);

                    if (matrix[mid][innerMid] < target) {
                        innerStart = innerMid + 1;
                    } else if (matrix[mid][innerMid] > target) {
                        innerEnd = innerMid - 1;
                    } else {
                        return true;
                    }
                }

                return false;
            }
        }

        return false;
    }
}
