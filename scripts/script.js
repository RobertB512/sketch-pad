// grab and create elements
let body = document.querySelector("body")
let container = document.querySelector(".container")

let newGridBtn = document.createElement("button")
newGridBtn.textContent = "Build Grid"
newGridBtn.classList.add("changeGridBtn")
body?.prepend(newGridBtn)

// build the grid
function getUserInput() {
  container.innerHTML = ""
  let xAxis = prompt("How many boxes do you want accross? Enter a whole, positive number less than or equal to 100: ")
  let yAxis = prompt("How many boxes do you want down? Enter a whole, positive number less than or equal to 100: ")
  let boxesPerRow = parseInt(xAxis)
  let boxesPerCol = parseInt(yAxis)
  if (isNaN(boxesPerRow) || !Number.isInteger(boxesPerRow) || boxesPerRow < 0 || boxesPerRow > 100) {
    alert("invalid input")
    return
  }
  if (isNaN(boxesPerCol) || !Number.isInteger(boxesPerCol) || boxesPerCol < 0 || boxesPerCol > 100) {
    alert("invalid input")
    return
  }

  let boxCount = boxesPerRow * boxesPerCol

  let boxWith = (100 / boxesPerRow)
  let boxHeight = (100 / boxesPerCol)
  // console.log(`x: ${boxWith}`)
  // console.log(`y: ${boxHeight}`)
  for (let box = 0; box < boxCount; box++) {
    let child = document.createElement("div")
    child.classList.add("child")
    child.setAttribute("style", `width: ${boxWith}%; height: ${boxHeight}%`)
    container?.appendChild(child)

    child.addEventListener("mousedown", () => {
      ""
    })
    child.addEventListener("mouseover", () => {
      let rgb1 = Math.floor(Math.random() * 256)
      let rgb2 = Math.floor(Math.random() * 256)
      let rgb3 = Math.floor(Math.random() * 256)
      child.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`
    })
  }
}
newGridBtn.addEventListener("click", getUserInput)


