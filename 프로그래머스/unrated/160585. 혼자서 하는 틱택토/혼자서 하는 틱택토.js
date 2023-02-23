function solution(board) {
    var answer = -1;
    let positionO = [], positionX = []
    for (let i in board) {
        for(let j in board[i]) {
            if(board[i][j] == 'O') positionO.push([parseInt(i)+1, parseInt(j)+1])
            if(board[i][j] == 'X') positionX.push([parseInt(i)+1, parseInt(j)+1])
        }
    }
    
    if(positionO.length < positionX.length) return 0
    else if(positionO.length - positionX.length > 1) return 0
    else if(positionO.length == positionX.length && isFinish(board) == 'O') return 0
    else if(positionO.length > positionX.length && isFinish(board) == 'X') return 0
    return 1;
}

function isFinish(Board) {
    // 직선
    for(i in [0,1,2]) {
        if(Board[i][0] != '.' && Board[i][0] == Board[i][1] && Board[i][1] == Board[i][2]) return Board[i][0]
        if(Board[0][i] != '.' && Board[0][i] == Board[1][i] && Board[1][i] == Board[2][i]) return Board[0][i]
    }
    //대각선
    if(Board[0][0] != '.' && Board[0][0] == Board[1][1] && Board[1][1] == Board[2][2]) return Board[0][0]
    if(Board[0][2] != '.' && Board[0][2] == Board[1][1] && Board[1][1] == Board[2][0]) return Board[0][2]
    return false;
}