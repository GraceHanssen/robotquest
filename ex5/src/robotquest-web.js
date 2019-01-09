'use strict';
import { turn, move } from './robotquest-features.js';


function main() {

    let robot = {
        position: {
            line: 0,
            column: 0
    },
        head: 'up'

    };


    console.log("Starting now!");

    // attach events to your elements/buttons

    document.getElementById("turn-left-button").addEventListener("click", function() { turn_left(robot); }, false);
    document.getElementById("turn-right-button").addEventListener("click", function() { turn_right(robot); }, false);
    document.getElementById("move-button").addEventListener("click", function() { move_robot(robot); }, false);


    // Initialize your global variables (robot, nbOfMoves, etc...)


}

function move_robot(robot) {
    console.log("Move the robot");


    // call the move function from robotquest-features (already imported 4U)
    move(robot, maxLineIndex, maxColumnIndex, nbOfMoves);

}

function turn_left(robot) {
    console.log("Turn left");


    // you can call this function directly from robotquest-features.js (see import at top of file):
    turn(robot, 'turn-left', turns);

}


function turn_right(robot) {
    console.log("Turn right");


    // you can call this function directly from robotquest-features.js (see import at top of file):
    turn(robot, 'turn-right', turns);

}


}

// Calling main on load
window.onload = main;
