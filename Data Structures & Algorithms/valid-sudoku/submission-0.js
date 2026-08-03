class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        function validRows(board) {
            for (let y = 0; y < board.length; y++) {
                let seen = {};
                for (let x = 0; x < board[0].length; x++) {
                    let curr = board[y][x];

                    if (curr === ".") continue;

                    if (seen[curr] === true) {
                        return false;
                    } else {
                        seen[curr] = true;
                    }
                }
            }

            return true;
        }

        function validColumns(board) {
            for (let y = 0; y < board.length; y++) {
                let seen = {};

                for (let x = 0; x < board[0].length; x++) {
                    let curr = board[x][y];

                    if (curr === ".") continue;

                    if (seen[curr] === true) {
                        return false;
                    } else {
                        seen[curr] = true;
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

        return validRows(board) && validColumns(board) && validBox(board);
    }
}
