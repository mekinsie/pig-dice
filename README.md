# _Pig Dice_

#### _A fun game to play with friends_

#### By _**Ash Porter (KirbyPaint)**_
#### Co-authored by _**Mekinsie Callahan**_

## Description

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":<br>
* If the player rolls a 1, they score nothing and it becomes the next player's turn.<br>
* If the player rolls any other number, it is added to their turn total and the player's turn continues.<br>
* If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.<br><br>
The first player to score 100 or more points wins.
## Specs:
```
 Describe: randomNumber();
 Test 1: "It will output a random number between 1 and 6."
 Expect: randomNumber().toEqual(4);

 Describe: addToPlayerScore();
 Test 2: "It will add rolled number to a specific player's score." 
 Expect: addToPlayerScore(4).toEqual(4);

 Describe: turnEnd();
 Test 3: "It will switch players at the end of the turn."
 Expect: turnEnd(player1).toEqual(player2);
```

## Setup/Installation Requirements

#### This page has been tested with both the most recent versions of Mozilla Firefox and Google Chrome

_Choose your preferred way to Install:_

### Using Git cloning (Most complete option):
* Open Git or your preferred terminal
* Navigate to your directory for Git projects (not within an existing project)
* Type the following: git clone https://github.com/KirbyPaint/EC-W4-pig-dice

### Download the project as a ZIP folder:
* Navigate to the project's page here: https://github.com/KirbyPaint/EC-W4-pig-dice
* Look for the green  ![code button](img/code.png?raw=true "code button")  button
* Click the button and you will see a drop-down menu. Look for the "Download ZIP" button
* Save your download locally and extract the files to a directory of your choice
* Double-click the file named "index.html" to view the page

### View the project in your browser (Most convenient option):
* Navigate to this link to view in your browser: https://kirbypaint.github.io/EC-W4-pig-dice/

## Known Bugs
No known bugs
## Support and contact details

Discord: @KirbyPaint#0751
<br>
Reach Mekinsie: via <a href="https://www.linkedin.com/in/mekinsie/" target="_blank">Linkedin</a> or <a href="mailto:mekinsie.aja@gmail.com" target="_blank">email</a></li>.

Checkout Mekinsie's <a href="https://github.com/mekinsie" target="_blank">github</a>.

## Technologies Used

_HTML, CSS (Bootstrap), JavaScript (jQuery)_

### License Information

_GNU Public License_

Copyright (c) 2021 **_KirbyPaint & Mekinsie Callahan_**