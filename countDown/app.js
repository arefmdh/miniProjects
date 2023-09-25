let gap = 604800000;
function countDown() {
  //   const now = new Date().getTime();
  //   const sevenDays = now.setDate(now.getDate() + 7).getTime();
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  document.querySelector(".day").innerText = Math.floor(gap / day);
  document.querySelector(".hour").innerText = Math.floor((gap % day) / hour);
  document.querySelector(".min").innerText = Math.floor((gap % hour) / minute);
  document.querySelector(".sec").innerText = Math.floor(
    (gap % minute) / second
  );
  gap = gap - 1000;
}
setInterval(countDown, 1000);
