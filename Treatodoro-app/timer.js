// ---------------- TIMER FUNCTIONALITY ----------------
const urlParams = new URLSearchParams(window.location.search);

// ---------------- IMAGE SEQUENCE ----------------
const sequenceContainer = document.getElementById("sequence-container");
const chosenSequence = localStorage.getItem("chosenSequence");

if (chosenSequence) {
  sequenceContainer.classList.add(chosenSequence);
}
//----------------------------------------------

// Get pomodoro time: prefer localStorage, then URL param, then default
let timeStr = localStorage.getItem("pomodoroTime") 
           || urlParams.get("time") 
           || "25:00";

let [minutes, seconds] = timeStr.split(":").map(Number);
let totalSeconds = minutes * 60 + seconds;

const timerDisplay = document.getElementById("timer");
const playPauseBtn = document.getElementById("play-pause-btn");
const btnIcon = document.getElementById("btn-icon");

let interval;
let isRunning = false;

function updateDisplay() {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const s = (totalSeconds % 60).toString().padStart(2, "0");
  timerDisplay.textContent = `${m}\u00A0:\u00A0${s}`;
}

function startTimer() {
  if (interval) return;
  interval = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateDisplay();
    } else {
      clearInterval(interval);
      isRunning = false;
      btnIcon.src = playIcon;

      // Redirect to end-page.html when timer finishes
      window.location.href = "end-page.html";
    }
  }, 1000);
  isRunning = true;
  btnIcon.src = pauseIcon;
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
  isRunning = false;
  btnIcon.src = playIcon;
}

// ---------------- ICON SWAP LOGIC ----------------
const playIcon = "Assets/play-btn.svg";
const playHoverIcon = "Assets/hover-btn/play-btn.svg";
const pauseIcon = "Assets/pause-btn.svg";
const pauseHoverIcon = "Assets/hover-btn/pause-btn.svg";

playPauseBtn.addEventListener("click", () => {
  if (isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
});

playPauseBtn.addEventListener("mouseenter", () => {
  btnIcon.src = isRunning ? pauseHoverIcon : playHoverIcon;
});

playPauseBtn.addEventListener("mouseleave", () => {
  btnIcon.src = isRunning ? pauseIcon : playIcon;
});

// ---------------- INIT ----------------
updateDisplay();
startTimer(); // auto-start


