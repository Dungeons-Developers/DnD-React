# Software Requirements
## Vision

Our plan for this project is to create a robust tool that allows players to create, track, and maintain characters & campaigns in an online database. We want to put online many of the offline elements of D&D. Things like character creation, stat tracking, equipment tracking, campaign notes, campaign progress, and DM campaign variables are typically maintained with pen and paper. This tool, if fully realized, could help create an online database to track, analyze, and crowd-source aggregate player data. This data can be used to make the game as paperless as possible. It could also help users see what kind of classes, spells, and tactics are commonly used or most effective for any given campaign. In essence, this tool could help form a metagame for a game-space that typically does not engage in metagames. 

## Scope (In/Out)
* **IN -** 
Our product will allow D&D players to create and update characters and campaigns and store that data online. The web app will also create a shared space for players to execute campaigns together. 

* **OUT -**
Our app will not be a mobile app, although we will make it responsive. 

## Minimum Viable Product vs

**MVP functionality:**
* character creation tool with persistent data storage
* character display screen with character cards and CRUD functionality
* user login
* a campaign view that allows players to share a space with their characters

**Stretch goals**
* dark mode / light mode
* image selection for character avatars
* photo upload for character avatars

## Functional Requirements
1. A user can create an account
2. A user can create, read, update, and delete character objects
3. A user can create campaigns 
4. A user can join created campaigns

## Data Flow

When a user creates an account, a user object is created. When a user creates a character, a character object is created. When a user creates a campaign, a campaign object is created. The data hierarchy of those objects will look something like this:

`user > character(s)`  
`user > campaign`  
`campaign > character(s)`  

## Non-Functional Requirements 

**Security**  
For security, we will use JSON Web Token for user validation in order to keep accounts secure. We previously did not use this for our backend app as JSON Web Token relies on a browser to be implemented. This version of our app will have a front end, and a browser, so we will be able to implement this enhanced security feature.

**Readability**  
Our app will utilize React and Material UI to present a clean and simple user interface. This will be aimed at making the app easy to understand and navigate. It will also help the app scale for a variety of screen sizes.



