const red = document.querySelector(".red")
const yellow = document.querySelector(".yellow")
const green = document.querySelector(".green")
const lights = [red, yellow, green]

const fishes = document.querySelectorAll(".fish")
let signal = "green"
let speed = { green: 3, yellow: 1, red: 0 }
let move = []

fishes.forEach((fish, i) => {
  fish.style.left = 50 + i * 100 + "px"
  fish.style.top = 30 + i * 20 + "%"
  move[i] = 1
})

function setLight(state) {
  signal = state
  lights.forEach(l => l.classList.remove("active"))
  if (state === "red") red.classList.add("active")
  if (state === "yellow") yellow.classList.add("active")
  if (state === "green") green.classList.add("active")
}

let steps = ["green", "yellow", "red"]
let step = 0
setInterval(() => {
  setLight(steps[step])
  step = (step + 1) % steps.length
}, 4000)

function swim() {
  fishes.forEach((fish, i) => {
    let x = parseInt(fish.style.left)
    let next = x + move[i] * speed[signal]
    if (next >= window.innerWidth - 100) {
      move[i] = -1
      fish.style.transform = "scaleX(-1)"
    } else if (next <= 0) {
      move[i] = 1
      fish.style.transform = "scaleX(1)"
    }
    fish.style.left = next + "px"
  })
  requestAnimationFrame(swim)
}

setLight("green")
swim()