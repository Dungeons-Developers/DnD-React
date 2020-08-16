# DnD React Character & Campaign Builder
A space for our Dungeons and Dragons React Front End Development project!

### Team Members
* [Clayton Jones - Lead Dev](https://www.linkedin.com/in/claytonjjones/)
* [Daniel Nguyen - Project Manager](https://www.linkedin.com/in/danielknguyen/)
* [Madison Stehle - Code Reviewer](https://www.linkedin.com/in/madison-stehle/)
* [Joel Watson - DevOps](https://www.linkedin.com/in/jwatsondev/)

## Project Summary

Our plan for this project is to create a robust tool that allows players to create, track, and maintain characters & campaigns in an online database. We want to put online many of the offline elements of D&D. Things like character creation, stat tracking, equipment tracking, campaign notes, campaign progress, and DM campaign variables are typically maintained with pen and paper. This tool, if fully realized, could help create an online database to track, analyze, and crowd-source aggregate player data. This data can be used to make the game as paperless as possible. It could also help users see what kind of classes, spells, and tactics are commonly used or most effective for any given campaign. In essence, this tool could help form a metagame for a game-space that typically does not engage in metagames. 


## Usage
<details>
  <summary>View More</summary>

### Start

### Login / Signup

### Main Menu

### Character Create

### View Characters

### Character Select

### Campaign Create

### Campaign Join

</details>

## [Project Board](https://github.com/orgs/Dungeons-Developers/projects/2)

## [Domain Model](https://drive.google.com/file/d/196KsNOzzaqHivEBhvdhTOhMy3-asgoYp/view?usp=sharing)

![domain model](/assets/DND_DomainModel.jpg)

## [Entity Relationship Diagram](https://drive.google.com/file/d/10cdamszok8mj23_CopDLEN0MhmDPcpwl/view?usp=sharing)

![entity relationship diagram](/assets/Entity_Relationship_Diagram.jpg)

## [Wireframes](https://drive.google.com/file/d/1AUwJ9gqLfvr8a-ldhsPsCQoHdSrsm_4X/view?usp=sharing)

![wireframes](/assets/DND_Wireframes.jpg)

## [User Stories](https://docs.google.com/document/d/1SQk5x4nBMLqfr1e801awTJqUFwUpHibxPnDktqCBGuM/edit?usp=sharing)
<details>
  <summary>View More</summary>
  
### 1. User Login 
**User Story:**
As a user, I want to be able to create an account such that my user data is only accessible to me.

**Feature Tasks:**
* Create data structure for the player object
* User login will require username, password, and email (for campaign invite reasons?)
* Build a user flow to navigate the user through account creation and account login
* Save all this info into an object tied to the user account

**Acceptance Tests:**
* Ensure that the user object is well-structured and scalable
* Ensure that the instructions for iterating through account creation are simple and easy to understand
* Give the user the chance to review and change data before the creation process finishes

### 2. New Character Creation
**User Story:**
As a user, I want to be able to create a new character by choosing from a list of common attributes: class, race, gender, name, alignment, background, etc.

**Feature Tasks:**
* Create data structure for the character object
* Build a user flow to navigate the user to select from given options for each attribute
* Save all this info into an object tied to the user account

**Acceptance Tests:**
* Ensure that the character object is well-structured and user-friendly to build
* Ensure that the instructions for iterating through character creation are simple and easy to understand
* Give the user the chance to review and change data before the creation process finishes

### 3. Character Cards
**User Story:**
As a user, I want to be able to view my created characters with each character displayed on a standardized card. I also want to be able to click on the card for an expanded view with edit options.

**Feature Tasks:**
* Utilize Material UI to build character cards
* Build an expanded view to show character details and edit options
* Have the ability to drag cards around to reorder them

**Acceptance Tests:**
* Ensure that the cards are responsive to varying screen sizes
* Ensure that the instructions for manipulating cards are clear and understandable
* Give the user the chance to review and change data before edit changes are locked in

### 4. Campaign Rooms
**User Story:**
As a user, I want to be able to create a campaign room that will host my party. I should have admin/DM access for any campaign room I create. As a user, I should be able to join previously created campaigns by using an access key. 

**Feature Tasks:**
* Create a view for the campaign that displays all player cards assigned to the campaign
* Allow the user to create an access key that is unique to their campaign
* Allow players to join campaign via that access key/invite email
* DM Powers: Allow the user to edit details about the campaign and edit player data tied to the campaign
campaign description, campaign name, player stats

**Acceptance Tests:**
* Ensure that the campaign object is well structured and can accept incoming character objects
* Ensure that the instructions for building a campaign are clear
* Ensure that the instructions for joining a campaign are clear
* Give the user the chance to review and change campaign data before saving

### 5. Campaign Invites
**User Story:**
As a user who created a campaign, I want to be able to invite my friends to join the campaign. I should be able to do this by sending users a notification by searching up their username.

**Feature Tasks:** 
* Create the ability to send invites to other players by searching for usernames.
* Invite should trigger a notification sent to the invited player. Notification will contain an access code to join the game.

**Acceptance Tests:**
* Ensure that the instructions for sending invites is clear
* Ensure that instructions for accepting invites is clear
* Ensure that invite send can properly send an email to the designated user
* Give the user to chance to review invite send details before sending

</details>

## Team Agreement
<details>
  <summary>View More</summary>

**Communication plan:** 
How will your group communicate with each other? What is your strategy for ensuring everyone’s voices are heard, and that contributions from both loud and soft voices are listened to? Do you have a plan for managing psychological safety?

Slack will be our primary channel for communication. We will be sure to have each member contribute to all discussions, assuming they feel they have something to say. Nothing is required.
In the event of psychological safety issues, concerned members should reach out to a 3rd party within the group to mediate. If that is not amenable or if that fails to mitigate the issue, the concerned members will reach out to Sonia or CF admins to escalate the issue.

**Conflict plan:** What will your group do when it encounters conflict? What will your process be to resolve it?
Should a conflict arise, we will discuss it as a group. We can either vote or refer to the lead for that scope to break ties. If the conflict is personal, we will revert to the guidelines outlined in our Communication Plan. 

**Work plan:** How you will identify tasks, assign tasks, know when they are complete, and manage work in general? In particular, make sure you know how you’ll track whether everyone is contributing equally to all parts of the application, and that each person is working on “meaty” problems. What project management tool will be used?

We will use Github Projects for task management. We will aim to balance the number of commits equally across the team. We may or may not assign a Project Manager role to the team (Daniel volunteers).

**Git process:** What is your Git flow? How many people must review a PR? Who merges PRs? How often will you merge? How will you communicate that it’s time to merge?

`Master > Dev > Feature`

Feature merges into Dev branch will require one other team member to approve. Merges from dev into master will require every member of the team to approve, pending a code review.

Merge communication will happen via Slack, or over comms via Remo.

**Anything else you feel is important:** Expectations around work times, stand-up times(outside of the ones schedule with the instructional team), taking breaks/seeking help when you’re stuck, etc.

Regarding working windows, we will stick to class hours (6:30 to 9:30pm, M-Th) as a bare minimum. If folks want to start earlier or work later, that is totally okay too! 

</details>

## Origin Story

We are all huge fans of the Dungeons & Dragons universe and the many, many fantasy worlds it has inspired. Building out some kind of D&D-focused application has been a goal for us ever since we started taking classes at Code Fellows. We are also tryhard gamers and wanted to incorporate some kind of shared tracking system into a gaming space that was traditionally managed with paper and pencil. We are hoping that our application can illustrate how making it easy to share, manipulate, and analyze D&D aggregate data could help create a digital online metagame for an analog gamespace.

## Things To Watch For
null

## Documentation
tbd

## [Software Requirements](/requirements.md)

### [Swagger]()
tbd

### [JSDocs]()
tbd

## [Questing Log](/questingLog/log.md)

## Credits

* [D&D Beyond](https://www.dndbeyond.com/)
* [D&D 5th Edition API](https://www.dnd5eapi.co/)
* [Gary Gygax](https://en.wikipedia.org/wiki/Gary_Gygax)
* [D&D 5th Edition Reference for Terminal](https://github.com/cachance7/fuzzy5e)
* [React Dice](https://www.npmjs.com/package/react-dice-complete)
