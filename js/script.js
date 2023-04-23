let startTime; // start time of the timer
let elapsedTime = 0; // elapsed time in milliseconds
let timerInterval; // interval id of the timer

const timeDisplay = document.querySelector(".timeDisplay");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");

// function to format time in hh:mm:ss:ms format
function formatTime(timeInMilliseconds) {
  let time = new Date(timeInMilliseconds);
  let hours = time.getUTCHours().toString().padStart(2, "0");
  let minutes = time.getUTCMinutes().toString().padStart(2, "0");
  let seconds = time.getUTCSeconds().toString().padStart(2, "0");
  let milliseconds = time
    .getUTCMilliseconds()
    .toString()
    .padStart(3, "0");
  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

// function to update the time display
function updateTimeDisplay() {
  timeDisplay.textContent = formatTime(elapsedTime);
}

// function to start the timer
function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateTimeDisplay();
  }, 10);
}

// function to pause the timer
function pauseTimer() {
  clearInterval(timerInterval);
}

// function to reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateTimeDisplay();
}

// event listeners for buttons
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);