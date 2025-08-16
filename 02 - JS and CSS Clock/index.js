const secondHand = document.getElementsByClassName("second-hand")[0];
const minuteHand = document.getElementsByClassName("min-hand")[0];
const hourHand = document.getElementsByClassName("hour-hand")[0];

const setDate = () => {
  const seconds = new Date().getSeconds();
  const secondDeg = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  const minutes = new Date().getMinutes();
  const minutesDeg = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  const hour = new Date().getHours();
  const hourDeg = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
};

setInterval(setDate, 1000);
