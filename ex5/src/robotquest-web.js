'use strict';
import { turn, move } from './robotquest-features.js';



function main() {
    console.log("Starting now!");

    // attach events to your elements/buttons
    document.getElementById("turn-left-button").addEventListener("click", turn_left);

    // Initialize your global variables (robot, nbOfMoves, etc...)


}

function move_robot() {
    console.log("Move the robot");
    // call the move function from robotquest-features (already imported 4U)
    move(robot, maxLineIndex, maxColumnIndex, nbOfMoves);
}

function turn_left() {
    console.log("Turn left");
    // you can call this function directly from robotquest-features.js (see import at top of file):
    //turn(robot, 'turn-left', turns);
}


function turn_right() {
    console.log("Turn right");
    // you can call this function directly from robotquest-features.js (see import at top of file):
    turn(robot, 'turn-right', turns);
}


// Calling main on load
window.onload = main;
