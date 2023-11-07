

function current_time() {
    let date = new Date();
    let n = date.toLocaleTimeString();
    let clock = document.querySelector("#clock")
    clock.textContent = n;
}

current_time();
setInterval(current_time, 1000);

let whatch_container = document.querySelector("#watch-container");

let black = document.querySelector("#black");
black.addEventListener("click", () => {
    whatch_container.style.cssText = "background-image: url('black.png'); height: 70vh; background-size: cover;"
})

let beige = document.querySelector("#beige");
beige.addEventListener("click", () => {
    whatch_container.style.cssText = "background-image: url('baig.png'); height: 70vh; background-size: cover;"
})

let pink = document.querySelector("#pink");
pink.addEventListener("click", () => {
    whatch_container.style.cssText = "background-image: url('burb.png'); height: 70vh; background-size: cover;"
})

let purple = document.querySelector("#purple");
purple.addEventListener("click", () => {
    whatch_container.style.cssText = "background-image: url('purp.png'); height: 70vh; background-size: cover;"
})

let orange = document.querySelector("#orange");
orange.addEventListener("click", () => {
    whatch_container.style.cssText = "background-image: url('ora.png'); height: 70vh; background-size: cover;"
})



let change = document.querySelector("#change")
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

let clockContainer = document.querySelector("#clockContainer");

function clickToChange() {
    if (clock.style.display === "block") {
        clockContainer.style.display = "block";
        clock.style.display = "none";
        updateClock();
    } else {
        clock.style.display = "block";
        clockContainer.style.display = "none";
    }
}

change.addEventListener("click", clickToChange);
  


function updateClock() {
  const d = new Date();
  const hr = d.getHours();
  const min = d.getMinutes();
  const sec = d.getSeconds();
  const hrRotation = 30 * hr + min / 2;
  const minRotation = 6 * min;
  const secRotation = 6 * sec;

  hour.style.transform = `rotate(${hrRotation}deg)`;
  minute.style.transform = `rotate(${minRotation}deg)`;
  second.style.transform = `rotate(${secRotation}deg)`;
}

setInterval(updateClock, 1000);
