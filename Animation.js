// Select lights
const redLight = document.querySelector(".red");
const yellowLight = document.querySelector(".yellow");
const greenLight = document.querySelector(".green");
const lights = [redLight, yellowLight, greenLight];

// Fish movement config
const fishes = document.querySelectorAll(".fish");
let signalState = "green"; // start with green
let speeds = { green: 3, yellow: 1, red: 0 }; // px per frame
let directions = []; // to track direction of each fish

// Initialize fish positions + directions
fishes.forEach((fish, i) => {
  fish.style.left = 50 + i * 100 + "px";
  fish.style.top = (30 + i * 20) + "%";
  directions[i] = 1; // moving right initially
});

// Update signal lights
function setSignal(state) {
  signalState = state;
  lights.forEach(light => light.classList.remove("active"));
  if (state === "red") redLight.classList.add("active");
  if (state === "yellow") yellowLight.classList.add("active");
  if (state === "green") greenLight.classList.add("active");
}

// Auto-cycle signal
let states = ["green", "yellow", "red"];
let idx = 0;
setInterval(() => {
  setSignal(states[idx]);
  idx = (idx + 1) % states.length;
}, 4000); // change every 4 seconds

// Fish animation loop
function animateFish() {
  fishes.forEach((fish, i) => {
    let currentLeft = parseInt(fish.style.left);
    let newLeft = currentLeft + directions[i] * speeds[signalState];

    // Check boundaries
    if (newLeft >= window.innerWidth - 100) {
      directions[i] = -1; // reverse
      fish.style.transform = "scaleX(-1)"; // flip fish
    } else if (newLeft <= 0) {
      directions[i] = 1;
      fish.style.transform = "scaleX(1)";
    }

    // Apply new position
    fish.style.left = newLeft + "px";
  });

  requestAnimationFrame(animateFish);
}

setSignal("green");
animateFish();
