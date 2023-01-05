// create a grid of 16x16 divs in a parent container (which is already in the html)
let body = document.querySelector("body");
let container = document.querySelector(".container");
let child = document.createElement("div");

body?.setAttribute("style", "height: 100vh;");
container?.setAttribute("style", "height: 100%;");
child.setAttribute("style", "box-sizing: border-box; height: 25%; width: 25%; background-color: blue;");

container?.append(child);


