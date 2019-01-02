const featuresToTest = require('../src/robotquest-features');

// We admit that we play with a 4x4 board
const MIN_LINE_INDEX = 0;
const MIN_COLUMN_INDEX = 0;
const MAX_LINE_INDEX = 3;
const MAX_COLUMN_INDEX = 3;


/* Feature: Keep track of the number of moves after each move() command/instruction
 The the number of moves applied to the robot ​after​ the move() function is executed
  should be greater than the number of moves before the function is executed.
 */
test("Number of moves is 31. \n" +
    "When Robot receives a move() command. \n" +
    "Then the number of moves is 31.", () => {
    let nbOfMoveAlreadyDone = 31;
    let robot = initRobot(2, 2, 'up'); // OBS: see the definition of the function initRobot() at the bottom

    let nbOfMove = featuresToTest.move(robot, MAX_LINE_INDEX, MAX_COLUMN_INDEX, nbOfMoveAlreadyDone);

    expect(nbOfMove).toBe(32);
});


/*
  Feature: the robot moves as the robot receives the move() command, accordingly to its head's position
 */
// test-case 1
test("Given a robot having its head in position 'up' \n" +
    "When a move() command is applied to the robot \n" +
    "Then the robot moves one line ​up​, on the same column.", () => {
    let robot = initRobot(2, 2, 'up');

    featuresToTest.move(robot, MAX_LINE_INDEX, MAX_COLUMN_INDEX, 0);

    expect(robot.position.line).toBe(3);
    expect(robot.position.column).toBe(2);
});

// test-case 2
test("Given a robot having its head in position 'right' \n" +
    "When a move() command is applied to the robot \n" +
    "Then the robot moves one column to the ​right​, on the same line.", () => {
    let robot = initRobot(2, 2, 'right');

    featuresToTest.move(robot, MAX_LINE_INDEX, MAX_COLUMN_INDEX, 0);

    expect(robot.position.line).toBe(2);
    expect(robot.position.column).toBe(3);
});

// test-case 3
test("Given a robot having its head in position 'down' \n" +
    "When a move() command is applied to the robot \n" +
    "Then the robot moves one line down, on the same column.", () => {
    let robot = initRobot(2, 2, 'down');

    featuresToTest.move(robot, MAX_LINE_INDEX, MAX_COLUMN_INDEX, 0);

    expect(robot.position.line).toBe(1);
    expect(robot.position.column).toBe(2);
});

// test-case 4
test("Given a robot having its head in position 'left' \n" +
    "When a move() command is applied to the robot \n" +
    "Then the robot moves one column to the ​left,​ on the same line.", () => {
    let robot = initRobot(2, 2, 'left');

    featuresToTest.move(robot, MAX_LINE_INDEX, MAX_COLUMN_INDEX, 0);

    expect(robot.position.line).toBe(2);
    expect(robot.position.column).toBe(1);
});


/*
  Feature: the robot can not move outside the borders of the BOARD
 */
test("Given a robot having its head in position 'left' \n" +
    "And the robot is on the first column of the board \n" +
    "When a move() command is applied to the robot \n" +
    "Then the robot stays on the same column, and on the same line.", () => {
    let robot = initRobot(2, MIN_COLUMN_INDEX, 'left');

    featuresToTest.move(robot, MAX_LINE_INDEX, MAX_COLUMN_INDEX, 0);

    expect(robot.position.line).toBe(2);
    expect(robot.position.column).toBe(MIN_COLUMN_INDEX);
});

test("Given a robot having its head in position 'down' \n" +
    "And the robot is on the first line of the board \n" +
    "When a move() command is applied to the robot \n" +
    "Then the robot stays on the same column, and on the same line.", () => {
    let robot = initRobot(MIN_LINE_INDEX, 3, 'down');

    featuresToTest.move(robot, MAX_LINE_INDEX, MAX_COLUMN_INDEX, 0);

    expect(robot.position.line).toBe(MIN_LINE_INDEX);
    expect(robot.position.column).toBe(3);
});

test("Given a robot having its head in position 'right' \n" +
    "And the robot is on the last column of the board \n" +
    "When a move() command is applied to the robot \n" +
    "Then the robot stays on the same column, and on the same line.", () => {
    let robot = initRobot(2, MAX_COLUMN_INDEX, 'right');

    featuresToTest.move(robot, MAX_LINE_INDEX, MAX_COLUMN_INDEX, 0);

    expect(robot.position.line).toBe(2);
    expect(robot.position.column).toBe(MAX_COLUMN_INDEX);
});

test("Given a robot having its head in position 'up' \n" +
    "And the robot is on the last line of the board \n" +
    "When a move() command is applied to the robot \n" +
    "Then the robot stays on the same column, and on the same line.", () => {
    let robot = initRobot(MAX_LINE_INDEX, 3, 'up');

    featuresToTest.move(robot, MAX_LINE_INDEX, MAX_COLUMN_INDEX, 0);

    expect(robot.position.line).toBe(MAX_LINE_INDEX);
    expect(robot.position.column).toBe(3);
});



// Utilities
//-----------

function initRobot(linePosition, columnPosition, headDirection) {
    return {
        position: {
            line: linePosition,
            column: columnPosition
        },
        head: headDirection
    };
}
