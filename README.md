# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **ALI GUZELYEL**

Time spent: **9** hours spent in total

Link to project: https://color-pattern-game.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [+] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [+] "Start" button toggles between "Start" and "Stop" when clicked. 
* [+] Game buttons each light up and play a sound when clicked. 
* [+] Computer plays back sequence of clues including sound and visual cue for each button
* [+] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [+] User wins the game after guessing a complete pattern
* [+] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [+] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [+] Buttons use a pitch (frequency) other than the ones in the tutorial
* [+] More than 4 functional game buttons
* [+] Playback speeds up on each turn
* [+] Computer picks a different pattern each time the game is played
* [+] Player only loses after 3 mistakes (instead of on the first mistake)
* [+] Game button appearance change goes beyond color (e.g. add an image)
* [+] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [-] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [+] List anything else that you can get done to improve the app!
* [+] Game has three different levels that change the difficulty in terms of miss chances and speeding up.
* [+] Player can listen to a _relaxing_ song created with the game via listen music button.
* [+] Player can add additional miss chances to himself/herself (as a cheat) via Heal Up button.
* [+] Player can view a nice image that soothes one's soul.
* [+] Player can understand how to play by reading the detailed instructions.

## Video Walkthrough

Here's a walkthrough of my implementation:

Let's see what sounds our buttons make. (suprise! gifs don't have sounds ":(" )

![](https://cdn.glitch.com/b5564738-3c71-4f44-8d96-4abab7651218%2FsoundsOfButtons.gif?v=1616561768265)

They are supposed to sound like: D, E, F#, G#, _Perfect_

Before we start our walkthrough, let's listen to a song!
Click Listen Music and Start then enjoy! (_Perfect_ sound becomes note A)

![](https://cdn.glitch.com/b5564738-3c71-4f44-8d96-4abab7651218%2Fmusic.gif?v=1616556136432)

Nice tunes, right? :)

Now let's get to how you play the game. 

To start playing choose your level and press Start.

![](https://cdn.glitch.com/b5564738-3c71-4f44-8d96-4abab7651218%2Fstart_chooselev.gif?v=1616557254452)

Follow the clues to complete the game.

On Level 1, you have 2 miss chances before game over.

On Level 2, you have 1 miss chance before game over, and the game gets slightly faster in each turn.

On Level 3, you lose on your first miss, and it gets FAST!

If you miss, you get the alert:

![](https://cdn.glitch.com/b5564738-3c71-4f44-8d96-4abab7651218%2FchancesLeft.gif?v=1616557491535)

When you use up all of your miss chances, Game Over!

![](https://cdn.glitch.com/b5564738-3c71-4f44-8d96-4abab7651218%2FgameOver.gif?v=1616557599189)

When you complete the game:

![](https://cdn.glitch.com/b5564738-3c71-4f44-8d96-4abab7651218%2FyouWon.gif?v=1616557930631)

If you feel your level is getting a little too hard, you can heal yourself up!

![](https://cdn.glitch.com/b5564738-3c71-4f44-8d96-4abab7651218%2FhealUpgif.gif?v=1616558064625)

For Level 2 and Level 3, on each turn, it gets faster.

![](https://cdn.glitch.com/b5564738-3c71-4f44-8d96-4abab7651218%2Fspeeding_up.gif?v=1616557097640)





## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
* Looked at the note frequencies from web.
* Stack Overflow - how to play a sound file
* Looked at other CSS colors from W3Schools.com
* Took _Perfect_ sound from youtube.
* Eagle image from google images - pinterest.


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I was going to submit the project before adding an image and a sound effect, but then I thought that I can most probably manage to do them. So I started, adding
an image was not really hard, as it was quite similar to the things we did before. It was easy to plug it in into the code I had from tutorial. 
However, when I was implementing adding a sound effect, I found out that the code snippet given to us from tutorial about sound only covered playing sounds from frequency.
That, of course, is not usable for playing a sound file. I needed to find a leeway so that I can keep the previous code, but implement the sound effect.

Before all that, I didn't even know how to play a sound file through JavaScript and HTML. So I researched, and found it through JavaScript libraries and other websites. 
I do think that being able to find an information one is looking for from internet is an essential skill for a person living in the 21st century.

Then I implemented the code, and saw that I might need a few more if-else conditions for it to work properly. At the end I had a working code. 
I had made a 'play a music' functionality for my game previously, and I noticed that it sounded bad because of the sound effect. I altered my code in such a way
that when player was listening to music, the button would function as a note (A:440hz) rather than the sound effect; and when they are playing the game, the button functions as
the sound effect _Perfect_.

So the way I overcame my challenge was through researching and thinking more about it. If I couldn't find a solution, then I would ask my friends and colleauges.
I do not shy away from asking questions.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I had fun coding with JavaScript, would want to code with it too. I think it has a lot of potential to do many things in web design and development. 

I wish I was able to put a video with sound into the README file. 

I'm curious about how the server updates the page, and how objects connect and communicate with each other.

I tried to use AWS for a page I was designing, but couldn't manage to grasp how to. It would be perfect if we could get a little introduction to AWS too.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a little bit more time I would have implemented the clock function. What I would have done is to allow player to choose whether they want the clock 
or not, because I do think that leaving the player unlimited time is a good idea, too. It is not always good to leave user to make too many choices,
for many reasons, but this part would be a good example to benefits of user's freedom. 

Other than that, I would design how my webpage looked. Adding a background image to whole screen, then a white-ish front that makes it possible for player to focus,
and then improving how the header and the sentences looked would be perfect. 

I spent most of my time preparing the README file and the walkthrough ":)"



## License

    Copyright [Ali Guzelyel]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.s
