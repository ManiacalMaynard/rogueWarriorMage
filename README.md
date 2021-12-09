# rogueWarriorMage
My fantastical take on building a Rock-Paper-Scissors game with JavaScript, HTML, & CSS
Created primarily as a learning exercise for both JavaScript and Git best practices. Also, hopefully, a star portfolio project to help land a sweet gig!

My goal for the computer AI is taken from this quote:
> "Therefore, this is the best way to win at rock-paper-scissors: if you lose the first round, switch to the thing that beats the thing your opponent just played. If you win, don't keep playing the same thing, but instead switch to the thing that would beat the thing that you just played. In other words, play the hand your losing opponent just played. To wit: you win a round with rock against someone else's scissors. They are about to switch to paper. You should switch to scissors. Got it? Good." [Source: Ars Technica](https://arstechnica.com/science/2014/05/win-at-rock-paper-scissors-by-knowing-thy-opponent/)

Feel free to contact me with questions, typos, or your favorite craft beer for me to check out. Cheers! 🍻

## To-Do List

### Design and art production tasks
- [ ] Design the visual language (aka theme)
- [ ] Finalize layout from sketches
- [ ] Build a wireframe for reference
- [ ] **Check wireframe for responsive design before doing the rest!**
- [ ] Create art files for characters
- [ ] Create title, buttons all assets to above standard
- [ ] Create background(s)
- [ ] Create animation for delay to outcome

### JavaScript tasks
- [ ] Add logic based on player’s previous choice and who won (see Ars Technica quote above)
- [x] Add tracker function for players previous choice and win conditions
- [x] Add a randomizer for “no previous player choice” state
- [x] Test alternatives to switch-case in getResult()
- [ ] Add a rematch button to reset the game board (keeps tracking and score)
- [ ] Add a reset button to clear the AI tracking and score
- [ ] Create win/loss counter function
- [ ] Add delay from player choice to outcome (builds drama)

### HTML & CSS tasks
- [ ] Build game board according to final tested wireframe
- [ ] Add instructions to the static state of the game board under title
- [ ] Add footer with my info, link to repo, etc
- [ ] Check for and add accesibility for all actionable items
- [ ] Instructions and character buttons must be voice reader compatable
- [ ] Test for SEO (not really necc. but could be an interesting learning experience)
- [ ] Add a download to phone button as a single page app


### Down the road maybe?

Add additional characters with further diversity in mind. 
 - Purely cosmetic, essential functions still play the same
 - Randomized at the start of each round for each role
 - Could be fun to include traditional fantasy character tropes of many cultures (i.e. ninja, samurai, mystic from Japan or ghost, hunter, shaman from indigenous Americans)
 - Add title change to match the cultural trope. Instead of "Rogue Warrior Mage" it could be "Ninja Hunter Sage" or something? (Maybe a bit too witty and hard to follow if player is unfamiliar with the tropes)

Animated SVG Images for characters
- Add animation for idle
- Add animation for chosen
- Add animation for battling
- Add animation for winning
- Add animation for losing

Add “your name” to game board
Track high scores via database
Could be fun to have a leaderboard or something but that's away's down the road.
