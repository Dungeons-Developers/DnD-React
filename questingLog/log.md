# TOC

<details>
  <summary>Day 1 // 2020.08.08</summary>

**9:00am:** Setting up Team Agreement and Project Description. Also looking into using new tech for dark mode/light mode and integrating photo uploads for users. Looking into `multer` and `sharp` packages.

**10:00am:** Looking into color schemes for visual design. Building out user stories. Prep #1, 2, and 3 are done already. Need to work on Prep #4 which entails user stories, domain model, wireframes, and entity relationship diagram. Madison built a cool logo for us.

**10:45am:** Building out repo, finishing up user stories.

 **11:00am:** Lunch break until 1.

**1:00pm:** Working on wireframe, domain model, and entity relationship diagram.

**2:00pm:** Wireframes complete. Continuing work on Domain Model and ERD. Got a project board started. 

**3:00pm:** ERD complete. Working on domain model and finishing up Readme to submit prep #4.

**3:45pm:** Domain model mostly done. Building up file structuring and brainstorming on fun app names. Trying to get app live and accessing our API.

**4:30pm:** Domain model done. Not great but done. We are building a basic homepage and the site is live now. Waiting to touch base with John to get sign off to proceed with the project. 

</details>

<details>
  <summary>Day 2 // 2020.08.10</summary>

**6:45pm:** Going over project requirements. Trying to figure out what to work on next. We recalled that John said it would be good to work on the DM view early to get any issues out of the way. 

Split out backend and frontend. Build out campaign in backend. Implement routes for players. 

https://dnd-api-server.herokuapp.com/

For building out auth, we will need a way to cache it in the browser. Or store data in server/cookie. Joel thinks it might be less annoying to use local storage. For MVP, we may just use local storage and then implement JSON web token as a stretch goal. Actually, scratch that, we will just use instanced logins. We won't allow them to stay logged in. No login persistence. At least for MVP. 

**7:00pm:** Working on getting our login to work before we build out the rest of this thing. 

**7:30pm:** Working on filling our project board with discrete tasks. Trying to coordinate which MUI components we will use. 

**8:00pm:** Split tasks and all working on independent things.

**9:20pm:** Clayton built a header with a navbar with a logo. Joel made a login/signup form. Madison a campaign form. And Daniel made a character card with modal. We will push up and worry about merging tomorrow. 

</details>

<details>
  <summary>Day 3 // 2020.08.11</summary>

**6:45pm:** Team is assembled. We will do a quick code review of yesterday's work. Then Kristian will pop in for a standup. After we review with each other, we will merge each branch. 

Joel Protip: wrap cards in box and send box to center of page. Box is MUI feature.

**7:15pm:** Merged all branches with no conflicts!

**9:00pm:** Joel got password matching implemented. Daniel ran into CSS issue with character cards. Material UI CSS became very difficult to work with. Got protip to instead of flipping modal, trigger different Component for Character Details and Character Edit tab components. Clayton got header implemented on all pages. Madison got routes scaffolded and got campaign schema schema put together. Also got Update and Get 1 Routes built for characters.

**9:30pm:** Joel got sign in page working nicely. Madison did a ton of schema work for Character and Campaign. Daniel got character card edit/show popping up correctly. Clayton finished building header and footer with all routes. 

</details>

<details>
  <summary>Day 4 // 2020.08.12</summary>

**6:30pm:** Team is assembled. We will do a quick code review of yesterday's work. Then we will merge branches after reviewing.

**7:00pm:** Branches merged with minimal conflicts. Clayton is demoing the socket.io work he did for the DM campaign control. Now we are going into our individual branch work.

Joel working on login/signup page. Madison building out character create form. Clayton working on campaign sockets. Daniel continuing work on character cards with dummy data.

**9:30pm:** Joel hit a snag on the login/signup form. Daniel hit a snag trying to test variable form data. Should be resolved once we can get user logins working and we can populate store data. 

</details>

<details>
  <summary>Day 5 // 2020.08.13</summary>

**6:30pm:** We are assembling the squad. Joel did a lot of work on the login page. He even got authentication working. Clayton will work on socket.io stuff. Continue building campaign connections. Daniel will work on styling character cards. Clayton suggests that header elements should be styled as block level elements so stuff cannot sit behind it. Madison will build About Us page and Ability Scores dice-rolling page.

**6:50pm:** Joel is walking us through auth/login changes he made in off-hours. We are discussing the best way to store user data after the login. Looks like for now, we will have to be okay with the user data resetting on page refresh. All user data lives in running memory. Adjusting this would be something we would work on if we had more time. 

**8:30pm:** Daniel is lost in Character Card component CSS. Madison is working on About Us page and did some work on Ability Scores visual. Joel finished the login work and is pivoting to tying character creation form to the database. Clayton is working to tie campaign creation form to database. 

John came by to help Madison get out of an Node Modules permission issue. 

**8:55pm:** Daniel tried flexbox and the MUI elements aren't taking it correctly. Daniel is lost in the sauce. No real work got done on the character card today. Daniel just slapped a margin-top on the Character Cards to worry about it later. Daniel will pivot to working on building out character edit view. 

Clayton ran into issue with data transference when creating a campaign. A wild payload appeared in the data. Joel eagle-eyed that thing and data is flowing correctly now. 

Madison finished About Me page.

**9:15pm:** Madison pivoting to dice rolling page. 

Notes: How many deities do we want to offer? Look into autocomplete select field options
add in levels, ability scores

**10:00pm:** Merging branches now to handle merge conflicts that we anticipated.

</details>

<details>
  <summary>Day 6 // 2020.08.14</summary>

**6:30pm:** Joel is showing us some work he did on the Character Creation Form. (use Form Control for input fields) Madison found a cool dice roller package to implement. Clayton showed us the socket campaign work he did. Daniel has nothing to show. 

After refactoring character edit form, Daniel will try to rebuild header and footer to no longer use AppBar from MUI. That will stop the blocking issue we had. 

**8:00pm:** Madison is working on integrating a dice package she found. The class functions within the package are causing some state issues. Team is collaborating on solutions. We will try to get John's eye on Saturday

Clayton and Joel made lots of progress on login routes and campaign socket connections. Campaign rooms are now discrete. Login page will now load when unlogged-in users try to access non-login pages. 

**9:00pm:** Daniel got Character Edit view to pull select values from our Character Options JSON. Hypothetically, the updateCharacter function should work too. Still need to get the existing character data to load.

Madison is working on the AppBar header issue. Got it looking much nicer!

**9:30pm:**
Notes: 
- Header loading on landing page
- character cards need to tie more elements to data
- put padding around edge of char cards so they dont push to edge of screen
-- put in container?
- make char cards smaller in the grid, maybe 3 or 4 across?
--- add images and level stuff to character data
--- if no image, load X
--- add campaign boolean checker to char cards
- footer could be prettier

To Hit MVP:
- allow a character to be added campaign
- get socket events to talk to each other
- finish tying character data to cards/edit/create forms

</details>

<details>
  <summary>Day 7 // 2020.08.15</summary>

**9:00am:** Talking over to-do lists for today. Clayton will continue working on sockets and campaign views. Madison is working on About Us page. Joel is working on landing page elements. Daniel is working on hooking up connections on character cards. 

XCharacter Slice - needs way to talk to User Slice to add chars to Character Array in User Slice
Persistent user login appears to have fixed this issue

Character Form - should kick out to /characters page after submit

XCharacter page - add containers to give better padding on page items, also make cards smallerX

Character delete? slice issue?

XCharacter Create form doesnt have same fields as character create slice
Getting fixed now (3:30pm)

**10:30am:** Madison finished About Us page. Now working on getting Character Slice talking to User Slice. This is a bit of a mystery. Also having issues moving data around character views.

*11:30am:** Break for lunch.

**1:30pm:** Back from lunch. Joel may have found a solution to the Slice data sharing issue. Could be related to using the populate feature. We may have to refactor how slices are being split up IRT User, Character, and Campaign slice. Populate is blurring the lines between our slices. 

**2:30pm:** Joel hitting login issues with trying to get login to persist through page refresh. Madison battling NPM issues that reset her computer. Daniel battling issues with character cards data transfer being wonky. We need John!

Will try to break up character card into discrete components. This will make it such that character cards can be used in campaign view too. Also should help alleviate some of the complications we have with character display view. 

NVM looks like this was fixed via persistent user login. 

**3:30pm:** Kris jumped into chat to try and help us with several issues we have. Dice issue got a bit of progress. John now joined to help trace data on Dice issue.

Character Form redirect to /characters onSubmit is now working. 

**4:30pm:** John helped get the dice thing working correctly. Clayton noticed that a certain file wasn't being imported. 

For campaign view, need to make it so that char cards dont display edit button. Perhaps an IF THEN to hide tabs if the cards are on the campaign view.
- render all tabs on character display page
edit is true, delete is true as prop to character card
- when rendering on campaign page, as DM, edit is true, delete is false
- when rendering on campaign page, as player, edit is false, delete is false
pull out edit/delete from props

**5:45pm:** Merged all branches. Took awhile. Mostly working build is all up. Time to end the night. 

</details>

<details>
  <summary>Day 8 // 2020.08.17</summary>

**6:30pm:** Clayton is showing us some changes he made over the weekend. He added a lot of features to the campaign view and functionality. He also made some changes to the way the character edit page looks in campaign views. 

Things to work on today:
- Character Creation, tie in dice rolls, coordinate fields in db
- Character Cards, field clean up, add random unsplash based on character class for char card images
- Character Cards Edit and Delete need to be fixed
- Weird footer issue
- database switch/add-on
- add descriptions to about us page

**7:30pm:** Footer fixed. Header on campaign page removed. Dice functions improved. Character cards random image added. 

**8:30pm:** Got dice functions fully integrated into character create form. Having some issues with getting the rolled values to populate and be assigned correctly.

Fixed some style things on character cards. Character schema changed for character create form. Adjusted those to match on character detail view.

**9:10pm:** Dice functionality is fully solved now. There was some complicated work around ensuring that rolled values were properly assigned to fields and were disabled once selected for a particular attribute. 

**9:30pm:** 10 snapshot tests assembled.

**10:10pm:** Testing new form and dice function. Found issue with redirect on Character Form that caused issues with creating characters. Will address tomorrow. 

Clayton idea: implement default scores into create character form to allow faster builds. Just assign a button with some default values. 

</details>

<details>
  <summary>Day 9 // 2020.08.18</summary>

**6:30pm:** Joel fixed the redirect issue we found. Clayton put in extra work on the theme. Showing us the dark/light mode implementation. Super clean. Also walking us through how the theme changes work.  

**7:00pm:** Style update ideas:
- Add MUI toggle styling to the theme toggle button
- Fix color stuff in character show/edit tabs
- Move logout button to cleaner place
- Main element is currently overflow. Switch to something else.
- fix link color on character create link
- fix spacing issues on character create form
- adjust max height on character cards, perhaps add min height
- show header on About page when user is not logged in
- create character form needs to refresh dice numbers after character create

Still need to fix Character edit/delete functionality.

**7:50pm:** Character Delete is working now. Toggle theme button working. Campaign form styling updated. Character card height standardized.

**8:30pm:** Login form styles updated. Character create form styling updated. 

Going through and removing unused variables to help make deployment cleaner. 

**9:00pm:** A wild John has appeared to check in on us. Greenlight.

**9:15pm:** Clayton wants to register a domain for this project. What a wild child. Also got some help to fix character update functionality. 

**9:30pm:** The squad is buying a domain name. 

</details>

<details>
  <summary>Day 10 // 2020.08.19</summary>

**6:30pm:** Joel and Clayton put in extra work in off-hours. Joel got a bunch of font stuff figured out. He also fixed up some routing issues that came up after deploying to a proper URL. 

Site is live at: https://www.dungeonscribe.io/

To Do List
- add theme colors to forms
- build presentation deck, dry-run with John at 8pm.
- fix dice issue on second character create
- final style touches

</details>