const addBtn = document.querySelector(".add-btn");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

addBtn.addEventListener("click", () => {
  let second = Number(seconds.innerHTML);
  let minute = Number(minutes.innerHTML);
  let hour = Number(hours.innerHTML);
  setInterval(() => {
    //increment seconds
    second += 1;
    //check to change seconds to minute
    if (second === 60) {
      second = 0;
      minute += 1;

      //check to add leading 0 if count is < 10
      if (minute < 10) {
        return (minutes.innerHTML = "0" + minute);
      }
      //render minute into dom
      minutes.innerHTML = minute;
    }
    //check to add leading 0 if count < 10
    if (second < 10) {
      return (seconds.innerHTML = "0" + second);
    }
    seconds.innerHTML = second;
    //check to convert minute to hour
    if (minute === 60) {
      minute = 0;
      hour += 1;
      if (hour < 10) {
        return (hours.innerHTML = "0" + hour);
      }
      hours.innerHTML = hour;
    }
  }, 1000);
});
