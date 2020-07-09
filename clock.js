setInterval(setClock, 1000);
const hands = document.getElementsByClassName("hand");
function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotate(hands[2], secondsRatio);
  setRotate(hands[1], minutesRatio);
  setRotate(hands[0], hoursRatio);
}
function setRotate(ele, rr) {
  ele.style.setProperty("--rotation", rr * 360);
}
setClock();