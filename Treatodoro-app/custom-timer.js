const timerInput = document.getElementById('timer-input');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const playBtnLink = document.querySelector('#play-btn').parentElement; // <a> around play button

// Parse current input into minutes and seconds
function getTime() {
  let [minutes, seconds] = timerInput.value.replace(/\s/g, '').split(':').map(Number);
  if (isNaN(minutes)) minutes = 0;
  if (isNaN(seconds)) seconds = 0;
  return { minutes, seconds };
}

// Update input display
function updateInput(minutes, seconds) {
  minutes = Math.max(0, minutes); // no negatives
  seconds = Math.min(Math.max(0, seconds), 59); // clamp 0–59
  timerInput.value = `${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`;
}

// Handle manual typing
timerInput.addEventListener('input', () => {
  // allow only numbers and colon
  let cleaned = timerInput.value.replace(/[^0-9:]/g, '');

  // split into mm:ss
  let [m, s] = cleaned.split(':');

  let minutes = parseInt(m) || 0;
  let seconds = parseInt(s) || 0;

  updateInput(minutes, seconds);
});

// Increase minutes by 1
increaseBtn.addEventListener('click', () => {
  let { minutes, seconds } = getTime();
  minutes++;
  updateInput(minutes, seconds);
});

// Decrease minutes by 1 (min 0)
decreaseBtn.addEventListener('click', () => {
  let { minutes, seconds } = getTime();
  if (minutes > 0) minutes--;
  updateInput(minutes, seconds);
});

// Update play button link & save custom time and sequence
playBtnLink.addEventListener('click', (e) => {
  const { minutes, seconds } = getTime();
  const timeStr = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;

  // Save custom time to localStorage
  localStorage.setItem("pomodoroTime", timeStr);

  // Set sequence for custom timer (strawberry)
  localStorage.setItem("chosenSequence", "strawberry-sequence");

  // Navigate to timer.html (link already points to timer.html)
  playBtnLink.href = `timer.html`;
});

// Initialize properly formatted input
updateInput(25, 0);

