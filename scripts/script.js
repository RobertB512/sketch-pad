let body = document.querySelector("body")
let container = document.querySelector(".container")
let boxCount = 256

for (let box = 0; box < boxCount; box++) {
  let child = document.createElement("div")
  child.classList.add("child")
  container?.appendChild(child)
}

