const circle = document.querySelector(".progress-bar__circle");
const progressNumber = document.querySelector(".js-progress-number");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}
setProgress(37);

function increaseProgress(time) {
  let start = 37;
  let intervalId = setInterval(function () {
    if (start > 100) {
      clearInterval(intervalId);
    } else {
      setProgress(start);
      progressNumber.textContent = start;
      start += 7;
    }
  }, time);
}

$(window).scroll(function () {
  let wt = $(window).scrollTop();
  let wh = $(window).height();
  let et = $(".progress-bar").offset().top;
  let eh = $(".progress-bar").outerHeight();
  let dh = $(document).height();

  if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
    increaseProgress(2000);
  }
});
