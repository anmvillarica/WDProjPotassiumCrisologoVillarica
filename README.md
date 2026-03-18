![Title Art](./media/homepage/title_art.png "Logo Art")

## Favicon: ![Favicon](./media/favicon.png "Favicon")

## Description: 
This webpage will have a simple in-browser game that will take the player on a journey in which the player must complete/type simple codes with missing elements that will allow them to progress on their journey. 

## Game Proper:
Each game level will have its own webpage. Every level will have ten codes that must be completed before a player can progress to the next level. It will be a simple side scrolling game that has a fantasy-adventure setting. A player’s end goal will be to locate a key and unlock the exit to progress.

> ## Application of JS
>JavaScript will be used for the in-browser game. It will be found in the game proper and will be used to move sprites, detect correct and incorrect inputs from players, and allow the player to progress to the next level upon completing one. It will also be used to detect clicks and instructs the other codes once a player touches a button or triggers an event. Finally, if our time and sanity permits, we will try implementing a save system. 


## Site Outline

### Home
The home page of the game will display the game’s title and a navigation bar that links to the other pages. Its background will showcase the game’s art, so that players will know what to expect.

![Homepage (Clean Version)](./media/back_end/homepage_clean.png "Homepage Display")

> *LAYOUT*
> 
> ![Homepage (Layout)](./media/back_end/homepage_frame.png "Homepage Frame")

### How to Play
This page will display a comprehensive set of rules and game mechanics. It will also include an embedded video tutorial on how to play the game.

![How to Play Page Layout](./media/back_end/htp_layout.png "How to Play Layout")

### Background
This page will discuss how we were able to ideate and create the game using HTML, CSS and JS. It will also show the behind the scenes process of our codes, original ideas, and overall experience making this game.

![Background Page Layout](./media/back_end/gbg_layout.png "Background Layout")

### About Us
This page will introduce the users to us, the creators of the game. This will show our motivations and reflections upon making this game.

![About Us Page Layout](./media/back_end/au_layout.png "About Us Layout")


### Levels (Easy, Medium, Hard)
This showcases the different levels that the game has. There will be three levels of increasing difficulty. The player will be able to unlock the next level after completing the previous level.

![Levels Page Layout](./media/back_end/level_layout.png "Levels Layout")


> ## Extra: Pages Connection/Concept Map
> 
> ![Pages Concept Map](./media/back_end/page_map.png "Pages Map")
>
> ![Levels Concept Map](./media/back_end/level_map.png "Levels Map")

# Updated Project Proposal

## Final Title: Key CODE

## Features
### Work in Progress
- Better notifications
- Added hints

### Completed features
- Mobile friendly: will work on laptop and mobile devices
- All elements will be responsive
- Saving progress in levels
- Transitions and animations in the sprites
- Video game music playing in background
- Progress bar that updates

## Details
- Local storage and JavaScript will be used to save progress
- CSS and HTML will be updated to make the game look smoother and better
- HTML input and JavaScript will be used for notifications and hints

## Definition of Complete
All features work as expected and there are very few bugs that do not disrupt user experience

# FINAL MODIFICATION PROPOSAL

## Narrative on Updating and Deleting Information 
- Add the option to sign in to the game. The user should be able to log in and log out using a password and a username of their choice. Logging in will restore the user's progress across sessions or devices. Once the user opens the game, they will be given the option to make an account or play without logging in. Playing without logging in will not store the user's progress and data in the game.
- Add an option to reset all game data in the event that the user wants to retry the game or clear all their progress. This gives users the chance to redo the game from scratch as this option will also clear all localStorage data such as the answers to the game. However, this will not clear the user's account.
- Visually show that a user has already completed a level. Completed levels will be marked by a checkmark, symbol, or have a different color. This clearly shows the user's progress throughout the game.


# References
Yavg. (2020, October 20). How can I force my web page to force a cell phone browser to be viewed in landscape mode? Stack Overflow. https://stackoverflow.com/questions/64436334/how-can-i-force-my-web-page-to-force-a-cell-phone-browser-to-be-viewed-in-landsc

Dan. (n.d.). Detect viewport orientation, if orientation is Portrait display alert message advising user of instructions. Stack Overflow. https://stackoverflow.com/questions/4917664/detect-viewport-orientation-if-orientation-is-portrait-display-alert-message-ad

W3Schools.com. (n.d.). https://www.w3schools.com/jsref/prop_win_localstorage.asp
