'use strict';

let features = require('./robotquest-features');
const readline = require('readline');


// This code is inspired from https://github.com/HackYourFuture/RobotApp

const R = features.SYMBOLS.robot;
const T = features.SYMBOLS.tree;
const F = features.SYMBOLS.flag;
const W = features.SYMBOLS.water;

const PLAY_BOARD = [
    [T,   T,    '.',   F],
    [T,   '.',  '.', '.'],
    ['.', '.',  '.', '.'],
    [R,   '.',  '.',   W]
];


let ROBOT_START_STATE = {
    position: {
        line: 0,
        column: 0
    },
    head: 'up'
};

let moves = 0;
let turns = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '\n???> ' // OBS: '\n' means 'new line'
});



function main() {
    let maxLineIndex = PLAY_BOARD.length - 1;
    let maxColumnIndex = PLAY_BOARD[0].length - 1;
    let board = PLAY_BOARD.reverse(); // we play upside down, so the robot starts (0,0) in the bottom left

    let currentRobot = features.cloneRobot(ROBOT_START_STATE);
    let isFlagReached = false;
    renderBoard(board, isFlagReached);

    rl.prompt();
    rl.on('line', (inputFromUser) => {
        let step = undefined;
        let previousRobotState = features.cloneRobot(currentRobot);

        switch (inputFromUser.trim()) {
            case 'm':
                step = 'move';
                console.log('move');
                break;
            default:
                step = undefined;
                console.log(`Unknown command, not one of ('r', 'l', 'm') '${inputFromUser.trim()}'`);
                break;
        }

        let hasMoved = applyStep(currentRobot, step, maxLineIndex, maxColumnIndex);
        isFlagReached = features.checkIfFlagReached(currentRobot, board);
        features.updateBoard(board, previousRobotState, currentRobot);

        if (hasMoved) {
            renderBoard(board, isFlagReached);
        }

        rl.prompt();
    }).on('close', () => {
        console.log('\nBye...');
        process.exit(0);
    });

}


function renderBoard(board, flagReached) {
    console.clear();
    console.log('\n ' + moves + ':');

    for (let row = board.length - 1; row >= 0; row--) {
        const cells = board[row];
        let line = '';

        for (let col = 0; col < cells.length; col++) {
            line += ' ' + cells[col] + ' ';
        }
        console.log(line);
    }

    if (flagReached) {
        console.log(`Bravo! Flag reached in ${moves} moves and ${turns} turns`);
    }

    sleep(1000);
}


function applyStep(robot, step, maxLineIndex, maxColumnIndex) {


    if (step === undefined) {
        return false;
    }

    if (step === 'turn-right' || step === 'turn-left') {
        turns = features.turn(robot, step, turns);
        return false;
    }

    moves = features.move(robot, maxLineIndex, maxColumnIndex, moves);
    return true;
}


function sleep(delay) {
    let start = new Date().getTime();
    while (new Date().getTime() < start + delay) { /* Do nothing while waiting */}
}


/*
  Main method
 */

{
    // This is where the program starts.
    main();
}
