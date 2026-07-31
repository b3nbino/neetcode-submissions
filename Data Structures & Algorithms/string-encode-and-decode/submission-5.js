class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 1 && strs[0].length === 0) return "NULL";
        return strs.join("Ω").split("").map(str => str.charCodeAt(0)).join("π");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length === 0 || str === "NULL") return str.length === 0 ? [] : [""];
        return str.split("π").map(code => String.fromCharCode(code)).join("").split("Ω");
    }
}
