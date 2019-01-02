const featuresToTest = require('../src/robotquest-features');

/*

 Tests for the features covered by the turn() function

 */

// Let's prepare a robot that we will use all over the test suite (= these tests under)
let robot = {
    position: {
        line: 0,
        column: 0
    },
    head: 'up',
};


/* Feature: Keep track of the number of turns after each turn() command/instruction
 The the number of turns applied to the robot ​after​ the turn() function is executed
  should be greater than the number of turn before the function is executed.
 */
test("Number of turns is 5. \n" +
    "When Robot receives a turn() command. \n" +
    "Then the number of turns is 6.", () => {
    let nbOfTurn = featuresToTest.turn(robot, 'turn-right', 5);
    expect(nbOfTurn).toBe(6);
});


/*
  Feature: the head of the robot turns as the robot receives the turn() command
 */
//1a
test("Given a Robot with head in position 'up'. \n" +
    "When Robot receives command 'turn-right'. \n" +
    "Then the head of the robot is in position 'right'.", () => {
    robot.head = 'up';
    featuresToTest.turn(robot, 'turn-right', 0);
    expect(robot.head).toBe('right');
});

//1b
test("Given a Robot with head in position 'up'. \n" +
    "When Robot receives command 'turn-left'. \n" +
    "Then the head of the robot is in position 'left'.", () => {
    robot.head = 'up';
    featuresToTest.turn(robot, 'turn-left', 0);
    expect(robot.head).toBe('left');
});


//2a
test("Given a Robot with head in position 'right'. \n" +
    "When Robot receives command 'turn-right'. \n" +
    "Then the head of the robot is in position 'down'.", () => {
    robot.head = 'right';
    featuresToTest.turn(robot, 'turn-right', 0);
    expect(robot.head).toBe('down');
});

//2b
test("Given a Robot with head in position 'right'. \n" +
    "When Robot receives command 'turn-left'. \n" +
    "Then the head of the robot is in position 'up'.", () => {
    robot.head = 'right';
    featuresToTest.turn(robot, 'turn-left', 0);
    expect(robot.head).toBe('up');
});


//3a
test("Given a Robot with head in position 'down'. \n" +
    "When Robot receives command 'turn-right'. \n" +
    "Then the head of the robot is in position 'left'.", () => {
    robot.head = 'down';
    featuresToTest.turn(robot, 'turn-right', 0);
    expect(robot.head).toBe('left');
});

//3b
test("Given a Robot with head in position 'down'. \n" +
    "When Robot receives command 'turn-left'. \n" +
    "Then the head of the robot is in position 'right'.", () => {
    robot.head = 'down';
    featuresToTest.turn(robot, 'turn-left', 0);
    expect(robot.head).toBe('right');
});


//4a
test("Given a Robot with head in position 'left'. \n" +
    "When Robot receives command 'turn-right'. \n" +
    "Then the head of the robot is in position 'up'.", () => {
    robot.head = 'left';
    featuresToTest.turn(robot, 'turn-right', 0);
    expect(robot.head).toBe('up');
});

//4a
test("Given a Robot with head in position 'left'. \n" +
    "When Robot receives command 'turn-left'. \n" +
    "Then the head of the robot is in position 'down'.", () => {
    robot.head = 'left';
    featuresToTest.turn(robot, 'turn-left', 0);
    expect(robot.head).toBe('down');
});

