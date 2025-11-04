let timerInterval;
let birthDate;

function startTimer() {
  const dobInput = document.getElementById("dob").value;
  if (!dobInput) {
    alert("Please enter your Date of Birth first!");
    return;
  }

  birthDate = new Date(dobInput);
  document.getElementById("inputBox").style.display = "none";
  document.getElementById("title").textContent =
    "How Much Life Journey Covered, Till Now";
  document.getElementById("timer").style.display = "flex";

  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const now = new Date();
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();
  let hours = now.getHours() - birthDate.getHours();
  let minutes = now.getMinutes() - birthDate.getMinutes();
  let seconds = now.getSeconds() - birthDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  document.getElementById("years").textContent = years
    .toString()
    .padStart(2, "0");
  document.getElementById("months").textContent = months
    .toString()
    .padStart(2, "0");
  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}
