// selector
const day = document.querySelector(".day")
const hour = document.querySelector(".hours")
const minut = document.querySelector(".minut")
// const second = document.querySelector(".second")
 const date = new Date("May 1, 2022 00:00:00").getTime()
// const date = new Date(getFullYear()).getTime();
function countdown() {
    const newYearDate = new Date(date);
    const currentDate = new Date();
    
    const centeralTime = (newYearDate - currentDate) / 1000;
    
    const days = Math.floor(centeralTime / 3600 / 24);
    const hours = Math.floor(centeralTime / 3600) % 24;
    const mins = Math.floor(centeralTime / 60) % 60;
    // const seconds = Math.floor(centeralTime) % 60;
    
    day.innerHTML = days;
    hour.innerHTML = formatTime(hours);
    minut.innerHTML = formatTime(mins);
    // second.innerHTML = formatTime(seconds);
}
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown();
setInterval(countdown, 1000)


const input = document.querySelector("#search")
const search = document.querySelector(".search-icon");

input.addEventListener("click", () => {
    search.classList.toggle("search-active");
   
})


const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activeLink));

