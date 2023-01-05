// create a grid of 16x16 divs in a parent container (which is already in the html)
let body = document.querySelector("body")
let container = document.querySelector(".container")

body?.setAttribute("style", "height: 100vh;")
container?.setAttribute("style", "height: 100%; width: 100%; display: flex; flex-wrap: wrap;")

for (let box = 0; box < 256; box++) {
  let child = document.createElement("div")
  child.classList.add("child")
  child.setAttribute("style", "border: 0.5px solid black; height: 6.25%; width: 6.25%; background-color: white;")
  container?.appendChild(child)
}

