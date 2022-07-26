const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

//timer variables
let timerStatus = "stopped";
let timer = null;

let second = Number(seconds.innerHTML);
let minute = Number(minutes.innerHTML);
let hour = Number(hours.innerHTML);
const stopWatch = () => {
  //increment seconds
  second += 1;
  //check to change seconds to minute
  if (second === 60) {
    second = 0;
    minute += 1;

    //check to add leading 0 if count is < 10
    if (minute < 10) {
      return (minutes.innerHTML = "0" + minute.toString());
    }
    //render minute into dom
    minutes.innerHTML = minute;
  }
  //check to add leading 0 if count < 10
  if (second < 10) {
    return (seconds.innerHTML = "0" + second.toString());
  }
  seconds.innerHTML = second;
  //check to convert minute to hour
  if (minute === 60) {
    minute = 0;
    hour += 1;
    if (hour < 10) {
      return (hours.innerHTML = "0" + hour.toString());
    }
    hours.innerHTML = hour;
  }
};

startBtn.addEventListener("click", () => {
  if (timerStatus === "stopped") {
    timer = window.setInterval(stopWatch, 1000);
    timerStatus = "started";
    startBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    startBtn.style.backgroundColor = "yellow";
  } else {
    window.clearInterval(timer);
    startBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    startBtn.style.backgroundColor = "green";
    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", () => {
  window.clearInterval(timer);
  timerStatus = "stopped";
  second = 0;
  minute = 0;
  hour = 0;
  minutes.innerHTML = "00";
  hours.innerHTML = "00";
  seconds.innerHTML = "00";
  startBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  startBtn.style.backgroundColor = "green";
});
