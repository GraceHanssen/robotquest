'use strict';
import { turn, move } from './robotquest-features.js';



function main() {

    let robot = {
        position: {
            line: 3,
            column: 0
    },
        head: 'right'

    };


    console.log("Starting now!");

    // attach events to your elements/buttons

    document.getElementById("turn-left-button").addEventListener("click", function() { turn_left(); }, true);
    document.getElementById("turn-right-button").addEventListener("click", function() { turn_right(); }, false);
    document.getElementById("move-button").addEventListener("click", function() { move_robot(); }, false);


    // Initialize your global variables (robot, nbOfMoves, etc...)


}

function move_robot() {
    console.log("Move the robot");

    const maxLineIndex = 4;
    const maxColumnIndex= 4;

    let nbOfMoves = 1;
    // call the move function from robotquest-features (already imported 4U)
    move(robot, maxLineIndex, maxColumnIndex, nbOfMoves);
}

function turn_left() {
    console.log("Turn left");

    let turns = 2;

    // you can call this function directly from robotquest-features.js (see import at top of file):
    turn(robot, 'turn-left', turns);
}


function turn_right() {
    console.log("Turn right");


    let turns = 3;
    // you can call this function directly from robotquest-features.js (see import at top of file):
    turn(robot, 'turn-right', turns);
}


// Calling main on load
window.onload = main;
