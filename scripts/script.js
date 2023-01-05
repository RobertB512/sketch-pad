let body = document.querySelector("body")
let container = document.querySelector(".container")

let newGridBtn = document.createElement("button")
newGridBtn.textContent = "New Grid"
newGridBtn.classList.add("changeGridBtn")
// container?.appendChild(newGridBtn)

body?.prepend(newGridBtn)


function getUserInput() {
  container.innerHTML = ""
  let xAxis = prompt("How many cells do you want accross? Enter a whole, positive number less than or equal to 100: ")
  let yAxis = prompt("How many cells do you want down? Enter a whole, positive number less than or equal to 100: ")
  let rowCount = parseInt(xAxis)
  let colCount = parseInt(yAxis)
  if (!isNaN(rowCount) && Number.isInteger(rowCount) && rowCount > 0 && rowCount <= 100) {
    alert("looks good")
    console.log(`${rowCount} is ${typeof rowCount}`)
  }
  if (!isNaN(colCount) && Number.isInteger(colCount) && colCount > 0 && colCount <= 100) {
    alert("looks good")
    console.log(`${rowCount} is ${typeof rowCount}`)
  }
  let boxCount = rowCount * colCount
  console.log(`${rowCount} is ${typeof rowCount}`)
  console.log(`${colCount} is ${typeof colCount}`)

  let boxWith = (100 / rowCount)
  let boxHeight = (100 / colCount)
  console.log(`x: ${boxWith}`)
  console.log(`y: ${boxHeight}`)
  for (let box = 0; box < boxCount; box++) {
    let child = document.createElement("div")
    child.classList.add("child")
    child.setAttribute("style", `width: ${boxWith}%; height: ${boxHeight}%`)
    container?.appendChild(child)
  }
}


newGridBtn.addEventListener("click", getUserInput)

// let boxCount = 256

