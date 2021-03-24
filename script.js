//Global constants
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global variables
var clueHoldTime = 1000; //how long each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
var pattern = new Array(8);
var progress;
var guessCounter;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;//is between 0.0 and 1.0
var chancesLeft = 3;
var timeChanger = 1;
var playingASong= false;

function startGame(){
  //initialize game variables
  for (let i =0; i<9; i++){
    pattern[i] = 1 + Math.floor(Math.random() * Math.floor(5));
  }
  progress = 0;
  guessCounter = 0;
  if(chancesLeft<=0) 
    stopGame();
  else{
    gamePlaying = true;
  
  
  //make one for deaf/blind people
  
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  }
}

function stopGame(){
  //initialize game variables
  gamePlaying = false;
  //pattern  = make a random array 
  //swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  
}

function loseGame(){
  stopGame();
  alert("Game Over, You Lost.");
}
function missed(){
  chancesLeft-=1;
  if(chancesLeft==0) loseGame();
  else{alert("You missed, "+ chancesLeft + " chances left, restarting the sequence");}
}

function winGame(){
  stopGame();
  alert("Good Job! You Won.");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}



function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ //for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] +" in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) //set a timeout to play that clue
    delay+=clueHoldTime
    delay +=cluePauseTime;
  }
  clueHoldTime *= timeChanger;
  cluePauseTime *= timeChanger;
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  //game logic
  if(pattern[guessCounter]== btn){// guess right
    if (guessCounter == progress){
      if(progress == pattern.length -1){
        winGame();
      }else {
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    missed();//wrong button, call miss. calls loseGame if no chances are left.
    playClueSequence();
  }
}

function cheatGetLife(){//make a button
  chancesLeft++;
}

function level1(){ //default, 2 chances before game over, no time speed up.
  chancesLeft = 3;
  timeChanger = 1;
  clueHoldTime = 1000;
  cluePauseTime = 333;
  playingASong= false;
}
function level2(){ // 1 chance before game over, time decreases by 0.9 each turn
  chancesLeft = 2;
  timeChanger = 0.85;
  clueHoldTime = 1000;
  cluePauseTime = 333;
  playingASong= false;
}
function level3(){ // no chance before game over, time decreases by 0.85 each turn
  chancesLeft = 1;
  timeChanger = 0.8;
  clueHoldTime = 1000;
  cluePauseTime = 333;
  playingASong= false;
}

function playMeASong(){
  playingASong= true;
  clueHoldTime = 600;
  cluePauseTime = 333;
  pattern = [5,3,5,4,2,3,1,2,4,4,5,3,1,4,1,2,3,4,5];
  progress = pattern.length-1;
  gamePlaying = true;
  guessCounter = 0;
  playClueSequence();
  stopGame();
}




// Sound Synthesis Functions
const freqMap = {
  1: 293.7,
  2: 329.6,
  3: 370,
  4: 415.3,
  5: 440
}
function playTone(btn,len){ 
  if(btn==1 ||btn==2 ||btn==3 ||btn==4 || (btn==5 && playingASong)){
    o.frequency.value = freqMap[btn]
  
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
  else{
    document.getElementById('perfectt').play();
  }
}
function startTone(btn){
  if(btn!=5){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
  else{
    tonePlaying=true;
    document.getElementById('perfectt').play();
    var now = new Date().getTime();
    while(new Date().getTime() < now + 100){ /* do nothing */ } 
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
var contextPerfect = new AudioContext()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
