// Getting formated date from date string
let deadline = new Date("dec 31, 2024 23:59:59").getTime();

// Calling defined function at certain interval
let x = setInterval(function () {
  // Getting current date and time in required format
  let now = new Date().getTime();

  // Calculating difference
  let t = deadline - now;

  // Getting values of days,hours,minutes, seconds
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);

  // Show the output time
  // document.getElementById("day")
  //         .innerHTML = days;
  // document.getElementById("hour")
  //         .innerHTML = hours;
  // document.getElementById("minute")
  //         .innerHTML = minutes;
  // document.getElementById("second")
  //         .innerHTML = seconds;

  document.querySelector(".day").innerHTML = days;
  document.querySelector(".hour").innerHTML = hours;
  document.querySelector(".minute").innerHTML = minutes;
  document.querySelector(".second").innerHTML = seconds;
});

if (diff < 0) {
  clearInterval(x);
  document.querySelector(".end").innerHTML = "HERE WE GO!";
  document.querySelector(".day").innerHTML = "0";
  document.querySelector(".hour").innerHTML = "0";
  document.querySelector(".minute").innerHTML = "0";
  document.querySelector(".second").innerHTML = "0";
}