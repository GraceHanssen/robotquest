# Exercise 3: Add more features to the Robotquest game

We start here with a functional version of _robotquest_. This version implements the following features: 
 - turn() and move() the robot according to a set of instructions (hard-coded in the program)
 - checks if the flag is eventually reached by the robot
 - display and refreshes the board steps after steps (with colours)

## How-to 
> You have to synchronize your forked repository with this present repository (_the upstream_), as **your** repository might not have the last updates. Follow these instructions to synchronize:

### Commit all your changes on `ex1` and/or `ex2`. 
From this directory: `/home/vagrant/Code/robotquest`, use the well known commands: 
 - `git add`, (eventually `git add .`) 
 - `git commit -m"With a nice commit message"` 
 - `git push`

### Add a reference to `upstream` (if not already done)
Enter these commands:
 - `git remote add upstream git@github.com:WeIgniteTech/robotquest.git`
 - `git remote -v` (will give you info about your repository and the _upstream_ repository)
 - `git fetch upstream`
 - `git merge upstream/master --no-edit`
 

## Description of this exercise

### Open the files in IntelliJ
Open the content of `/home/vagrant/Code/robotquest/ex3` as a project in `IntelliJ` by doing like this: 
 - open `IntelliJ`
 - choose `open project`
 - navigate to `ex3` folder (it should be: `/home/vagrant/Code/robotquest/ex3`), and press `open`

This will open the code as an independent project. Go through the code. 


### Run the program
Start from the `/home/vagrant/Code/robotquest/ex3` and type these commands: 
 - `npm install`. This command tells _npm_ to install all the necessary packages, as specified in the `package.json` file. The packages files are downloaded to the `node_modules` directory. 
 - `npm test`. This command runs the tests found in the `test` directory, usin `jest`. 
 - `node src/robotquest.js`: tells `node` to start the program `robotquest.js` 


### New features
What kind of feature(s) do you want to add to this _robotquest_ application ...? Have some ideas before hackathon begins. 

