// console.log("Alarm.js Clock start");
var audio = new Audio(
  "/Media/bestringtones.net_iphone-13-pro-max-original.mp3"
);
// audio.play();

const alarmsumit = document.getElementById("alarmsumit");
alarmsumit.addEventListener("click", setAlarm);

function ringBell() {
  audio.play();
}

function setAlarm(e) {
  e.preventDefault();
  const alarm = document.getElementById("alarm");
  alarmDate = new Date(alarm.value);
  console.log(`setting Alarm for ${alarmDate}....`);
  now = new Date();

  let timeToAlarm = alarmDate - now;
  console.log(timeToAlarm);
  if (timeToAlarm >= 0) {
    setTimeout(() => {
      console.log("Ringing now");
      ringBell();
    }, timeToAlarm);
  }
}
