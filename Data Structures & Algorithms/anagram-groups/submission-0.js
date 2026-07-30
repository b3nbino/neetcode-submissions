class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        function isAnagram(str1, str2) {
            if (str1.length !== str2.length) return false;

            let letters1 = {};
            let letters2 = {};

            // Get letter counts
            for (let i = 0; i < str1.length; i++) {
                let currLetter1 = str1[i];
                let currLetter2 = str2[i];

                if (letters1[currLetter1] !== undefined) {
                    letters1[currLetter1]++;
                } else {
                    letters1[currLetter1] = 1;
                }
                if (letters2[currLetter2] !== undefined) {
                    letters2[currLetter2]++;
                } else {
                    letters2[currLetter2] = 1;
                }
            }

            // Check that letter counts are the same
            for (let letter in letters1) {
                if (letters1[letter] !== letters2[letter]) {
                    return false;
                }
            }

            return true;
        }

        let strsGrps = [];

        for (let i = 0; i < strs.length; i++) {
            let currWord = strs[i];
            if(!strsGrps.some((arr) => arr.includes(currWord))) {
                strsGrps.push(strs.filter((word) => isAnagram(currWord, word)));
            }
        }

        return strsGrps;
    }
}
