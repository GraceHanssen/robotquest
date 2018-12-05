const featuresToTest = require('../src/robotquest-features');

//hackathon: add features on ex3 - write test when robot reaches tree.

test('robot reaches the tree when its position meets T, then it gives out warning/message', () => {
    let maxLineIndex = 3; // 4 lines
    let maxColumnIndex = 3; // 4 columns

    const treePosition = {
        position: {
            line: 0,
            column: 2
        }

    };
    let robot = {
        position: {
            line: 0,
            column: 2
        },
        head: 'up'
    };

    let isTreeReached = featuresToTest.treeReached(robot, maxLineIndex, maxColumnIndex, treePosition);
    expect(isTreeReached).toBe(true);
});

//hackathon: add more features on ex2 - write test when robot reaches water.

test('robot reaches the water when its position meets W, then it gives out warning/message', () => {
    let maxLineIndex = 3; // 4 lines
    let maxColumnIndex = 3; // 4 columns

    const waterPosition = {
        position: {
            line: 0,
            column: 2
        }

    };
    let robot = {
        position: {
            line: 0,
            column: 2
        },
        head: 'up'
    };

    let isWaterReached = featuresToTest.waterReached(robot, maxLineIndex, maxColumnIndex, waterPosition);
    expect(isWaterReached).toBe(true);
});

//hackathon: add features on ex3 - write test when robot reaches flag.

test('robot reaches the flag when its position meets `F` on the board', () => {
    let board = [
        ['.', 'F'] // only one line to this board
    ];
    let winningRobot = {
        position: {
            line: 0,
            column: 1
        },
        head: 'right'
    };

    let anotherRobot = {
        position: {
            line: 0,
            column: 0
        },
        head: 'right'
    };

    expect(featuresToTest.checkIfFlagReached(anotherRobot, board)).toBe(false);
    expect(featuresToTest.checkIfFlagReached(winningRobot, board)).toBe(true);


});



