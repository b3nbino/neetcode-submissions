class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        function isAnagram(str1, str2) {
            if (str1.length !== str2.length) return false;

            let str1Sorted = str1.split("").sort().join("");
            let str2Sorted = str2.split("").sort().join("");

            return str1Sorted === str2Sorted;
        }

        let strsGrps = [];

        // Collect string groups
        for (let i = 0; i < strs.length; i++) {
            let currWord = strs[i];
            if(!strsGrps.some((arr) => arr.includes(currWord))) {
                strsGrps.push(strs.filter((word) => isAnagram(currWord, word)));
            }
        }

        return strsGrps;
    }
}
