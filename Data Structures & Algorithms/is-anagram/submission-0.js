class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let sCounts = {};
        let tCounts = {};

        for(let i = 0; i < s.length; i++) {
            let sCurr = s[i];
            let tCurr = t[i];

            if(sCounts[sCurr]) {
                sCounts[sCurr]++;
            } else {
                sCounts[sCurr] = 1;
            }
            if(tCounts[tCurr]) {
                tCounts[tCurr]++;
            } else {
                tCounts[tCurr] = 1;
            }
        }

        for(let char in sCounts) {
            if(sCounts[char] !== tCounts[char]) {
                return false;
            }
        }

        return true;
    }
}
