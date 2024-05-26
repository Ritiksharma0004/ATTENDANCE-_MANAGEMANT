// let profile = document.querySelector("#profile-container");

document.querySelector(".profile-pic").addEventListener("click", function () {
  document.querySelector("#profile-container").style.display = "block";
});

document
  .querySelector(".fa-circle-xmark")
  .addEventListener("click", function () {
    document.querySelector("#profile-container").style.display = "none";
  });

const logout = document.querySelector("#logout");

function logoutAfterTwoSecond() {
  setTimeout(() => {
    alert("Logged out !");
  }, 1000);

  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
}

logout.addEventListener("click", (e) => {
  e.preventDefault();
  logoutAfterTwoSecond();
});

// const currTime = new Date();

// // const dateString = currTime.toLocaleDateString();

// // Get the month (0 = January, 1 = February, ..., 11 = December)
// const month = currentDate.getMonth();

// // Array of months
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// // Get the current month
// const currentMonth = months[month];

// Update the content of the div

// Get the h2 element
const h2 = document.querySelector(".first-section #day");
const month = document.querySelector(".first-section #monthOfYear");
const time = document.querySelector("#time");
const week = document.querySelector("#week");

// Create a new Date object
const today = new Date();

//  today.toLocaleDateString();

// Format the date as a string
const dateString = today.getDate();
const dayOfWeek = today.getDay();
const Month = today.getMonth();
const year = today.getFullYear();
//  const hours = today.getHours()%12;
//  const minutes = today.getMinutes();
//  const seconds = today.getSeconds();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const day = daysOfWeek[dayOfWeek];

const Ymonth = monthsOfYear[Month];

// Set the text of the h2 element to the formatted date string
//  h2.textContent = dateString;

month.textContent = `${day},${dateString} ${Ymonth} ${year}`;

// week.textContent = `${day}`;

function display() {
  //  const hours = today.getHours()%12;
  //  const minutes = today.getMinutes();
  //  const seconds = today.getSeconds();

  //  time.textContent = `${hours}:${minutes}:${seconds}`;

  const today = new Date();

  const timeRange = today.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  time.textContent = `${timeRange} `;
}

setInterval(display, 1000);

//Faculty attendance btn bg-change code

let button = document.querySelector(`#btn`);

button.addEventListener("click", function () {
  let attendanceAlert = document.querySelector("#confirmation h4");
  let message = document.querySelector(".attend-btn");
  attendanceAlert.innerText = `Attendance mark on ${dateString} ${Ymonth} :)`;
  const btn = document.querySelector("#confirmation");
  button.style.backgroundColor = "green";
  button.style.color = "white";

  if (button.style.pointerEvent === "none") {
    attendanceAlert.innerText = `Attendance marked already !`;
  }

  setTimeout(() => {
    btn.style.opacity = 1;
  }, 1000);

  setTimeout(() => {
    btn.style.opacity = 0;
  }, 5000);

  if (button.style.backgroundColor == "green") {
    button.style.pointerEvent = "none";
    button.style.opacity = 0.1;
    button.style.cursor = "default";
  }

  // DATE TO BE MARKED GREEN IF PRESENT --------------------------------------------------

  setTimeout(() => {
    let attenDay = document.getElementById(`${dateString}`);
    attenDay.style.backgroundColor = "rgb(143, 241, 208)";
  }, 1500);
});

// calender js

let holiday = document.querySelector(".c3");
let span = document.querySelector("#removeAfterClicked");

holiday.addEventListener("click", (e) => {
  span.innerText = `Holiday on ${dateString}`;
  span.style.color = "rgb(120, 221, 186)";
  span.style.fontSize = "1.7rem";
  holiday.style.pointerEvent = "none";
  holiday.style.cursor = "default";
});

//  calender end
