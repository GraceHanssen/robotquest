# Exercise 5: Convert to a web application

The goal of this fifth part of _robotquest_ is to change the user interface in our program, form a command-line interface to web-based GUI. It means that we will use a web-browser to open and run our application locally. 

We start here with a **non-functional** version of _robotquest_. 

The goal of this version 5 is to implement the following features:
 - start the application local (npm package http-server is installed after `npm install` and can be started by running the `http-server` command from project root)
 - GUI with a toolbar with three buttons: `turn-left`, `turn-right` and `move`
 - GUI with a 4x4 board 
 - turn() the robot according to its orientation
 - move() the robot according to its position
 - checks if the flag is eventually reached by the robot
 - display and refresh the board 

## How-to 
> You have to synchronize your forked repository with this present repository (_the upstream_), as **your** repository might not have the last updates. Follow these instructions to synchronize:

[Just like we usually do](https://github.com/WeIgniteTech/robotquest/tree/master/ex3#how-to)


## Description of this exercise

### Open the files in IntelliJ
Just like [ex4](https://github.com/WeIgniteTech/robotquest/blob/master/ex4/README.md#open-the-files-in-intellij), open the content of `/home/vagrant/Code/robotquest/ex5` as a project in `IntelliJ` by doing like this: 
 - open `IntelliJ`
 - choose `open project`
 - navigate to `ex5` folder (it should be: `/home/vagrant/Code/robotquest/ex5`), and press `open`

This will open the code as an independent project. Go through the code. 


### Start the webserver
Start from the `/home/vagrant/Code/robotquest/ex5` and type these commands: 
 - `npm install`. This command tells _npm_ to install all the necessary packages, as specified in the `package.json` file. The packages files are downloaded to the `node_modules` directory. 
 - `http-server`: starts a simple http server that will let you open the application in a web-browser at this URL: http://127.0.0.1:8080 or http://localhost:8080  
 - **OBS** the command `npm test` does not start the tests properly ... wil fix (**TODO**)


### Implement the features listed above
The purpose of `ex5` is to get used to work on the javascript, html and css file at the same time. That's why we start with a simple GUI (4x4), with a simple design and basic instructions and _usability_ like _turn_ and _move_. 

There is no graphics. The items are still represented by their letters and the robot is figured by a letter **R** besides an arrow indicating its direction. Both symbols are text. 


#### The toolbar and board at game start

![The toolbar and board at start](https://raw.githubusercontent.com/WeIgniteTech/robotquest/master/ex5/readme-img/board_1.png)


#### After the TURN-RIGHT button is clicked

![After the 'TURN-RIGHT' button is clicked](https://raw.githubusercontent.com/WeIgniteTech/robotquest/master/ex5/readme-img/board_2.png)


#### After the MOVE button is clicked

![After the 'MOVE' button is clicked](https://raw.githubusercontent.com/WeIgniteTech/robotquest/master/ex5/readme-img/board_3.png)

