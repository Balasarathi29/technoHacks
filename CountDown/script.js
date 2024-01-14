let timer;
let timeInSeconds = 300; // Set the initial time in seconds (5 minutes)
let isTimerRunning = false;

function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isTimerRunning = false;
}

function resetTimer() {
    stopTimer();
    timeInSeconds = 300;
    updateTimerDisplay();
}

function updateTimer() {
    if (timeInSeconds > 0) {
        timeInSeconds--;
        updateTimerDisplay();
    } else {
        stopTimer();
        alert("Timer finished!");
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const display = document.getElementById("display");
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
