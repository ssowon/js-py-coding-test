function solution(board) {
    let turnCountO = 0, turnCountX = 0
    for (let i in board) {
        for(let j in board[i]) {
            if(board[i][j] == 'O') turnCountO++
            else if(board[i][j] == 'X') turnCountX++
        }
    }
    
    if(turnCountO < turnCountX) return 0
    else if(turnCountO - turnCountX > 1) return 0
    else if(turnCountO == turnCountX && getWinner(board) == 'O') return 0
    else if(turnCountO > turnCountX && getWinner(board) == 'X') return 0
    return 1;
}

function getWinner(board) {
    // 직선
    for(i in [0,1,2]) {
        if(board[i][0] != '.' && isSame(board[i][0], board[i][1], board[i][2])) return board[i][0]
        if(board[0][i] != '.' && isSame(board[0][i], board[1][i], board[2][i])) return board[0][i]
    }
    //대각선
    if(board[0][0] != '.' && isSame(board[0][0], board[1][1], board[2][2])) return board[0][0]
    if(board[0][2] != '.' && isSame(board[0][2], board[1][1], board[2][0])) return board[0][2]
    return false;
}

function isSame(element1, element2, element3) {
    return element1 == element2 && element2 == element3;
}