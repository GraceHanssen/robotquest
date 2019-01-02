module.exports =
    {turn, move, updateBoard, checkIfFlagReached, cloneRobot};

const SYMBOLS = {
    robot: setReverse('R'),
    tree: colorInGreen('T'),
    flag: colorInYellow('F'),
    water: setBlueBg('w')

}
module.exports.SYMBOLS = SYMBOLS;

const trailIndicators = {
    left: setBright('←'),
    right: setBright('→'),
    up: setBright('↑'),
    down: setBright('↓')
};


function turn(robot, step, turns) {

    switch (robot.head) {
        case 'up':
            robot.head = step === 'turn-left' ? 'left' : 'right';
            break;
        case 'down':
            robot.head = step === 'turn-left' ? 'right' : 'left';
            break;
        case 'left':
            robot.head = step === 'turn-left' ? 'down' : 'up';
            break;
        case 'right':
            robot.head = step === 'turn-left' ? 'up' : 'down';
            break;
    }

    turns += 1;
    return turns;
}

function move(robot, maxLineIndex, maxColumnIndex, nbOfMoves) {
    let line = robot.position.line;
    let column = robot.position.column;

    switch (robot.head) {
        case 'up':
            line = Math.min(maxLineIndex, line + 1);
            break;
        case 'down':
            line = Math.max(0, line - 1);
            break;
        case 'left':
            column = Math.max(0, column - 1);
            break;
        case 'right':
            column = Math.min(maxColumnIndex, column + 1);
            break;
    }

    robot.position.line = line;
    robot.position.column = column;

    nbOfMoves += 1;
    return nbOfMoves;
}

function updateBoard(board, previousRobotState, currentRobotState) {
    let previousLine = previousRobotState.position.line;
    let currentLine = currentRobotState.position.line;
    let previousColumn = previousRobotState.position.column;
    let currentColumn = currentRobotState.position.column;

    board[previousLine][previousColumn] = trailIndicators[previousRobotState.head];
    board[currentLine][currentColumn] = SYMBOLS.robot;
}

function checkIfFlagReached(robot, board) {
    const cell = board[robot.position.line][robot.position.column];
    let flagReached = cell === SYMBOLS.flag || cell == 'F';

    return flagReached;
}

// utils
function cloneRobot(robot) {
    let newRobot = {};
    newRobot.position = {};
    newRobot.position.line = robot.position.line;
    newRobot.position.column = robot.position.column;
    newRobot.head = robot.head;
    return newRobot;
}


// presentation utils
function colorInGreen(char) {
    return `\x1b[32m${char}\x1b[0m`;
}

function colorInYellow(char) {
    return `\x1b[33m${char}\x1b[0m`;
}

function setBlueBg(char) {
    return `\x1b[44m${char}\x1b[0m`;
}

function setReverse(char) {
    return `\x1b[7m${char}\x1b[0m`;
}

function setBright(char) {
    return `\x1b[1m${char}\x1b[0m`;
}





