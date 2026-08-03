class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        function validRowsAndColumns(board) {
            let register = {};

            for(let y = 0; y < board.length; y++) {
                for(let x = 0; x < board[0].length; x++) {
                    let curr = board[y][x];
                    if(curr === ".") continue;

                    if(register[curr]) {
                        if(register[curr].some(pair => pair[0] === y || pair[1] === x)) {
                            return false;
                        }
                        register[curr].push([y, x]);
                    } else {
                        register[curr] = [[y, x]];
                    }
                }
            }

            return true;
        }

        function validBox(board) {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let seen = {};
                    for (let y = 0 + i * 3; y < 3 + i * 3; y++) {
                        for (let x = 0 + j * 3; x < 3 + j * 3; x++) {
                            let curr = board[y][x];

                            if (curr === ".") continue;

                            if (seen[curr] === true) {
                                return false;
                            } else {
                                seen[curr] = true;
                            }
                        }
                    }
                }
            }

            return true;
        }

        return validRowsAndColumns(board) && validBox(board);
    }
}
