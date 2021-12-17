var startTime = new Date().getTime();
var square = document.getElementById("shape");

function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var makeShapeVisible = function () {
  var top = Math.random() * 400;
  var left = Math.random() * 800;
  var width = Math.random() * 200 + 50;
  square.style.top = top + "px";
  square.style.left = left + "px";
  square.style.width = width + "px";

  if (Math.random() < 0.3) {
    square.style.borderRadius = "50%";
    square.style.backgroundColor = getRandomColor();
    square.style.borderBottom = "0";
  } else if (Math.random() >= 0.3 && Math.random() <= 0.7) {
    square.style.borderRadius = "0";
    square.style.backgroundColor = getRandomColor();
    square.style.borderBottom = "0";
  } else if (Math.random() > 0.7) {
    square.style.borderRadius = "0";
    square.style.left = "0";
    square.style.width = "0";
    square.style.borderLeft = "50px solid transparent";
    square.style.borderRight = "50px solid transparent";
    square.style.borderBottom = "100px solid " + getRandomColor();
    square.style.backgroundColor = "transparent";
  }

  square.style.display = "block";
  startTime = new Date().getTime();
};

setTimeout(makeShapeVisible, Math.random() * 1000);

square.onclick = function () {
  var finishTime = new Date().getTime();
  square.style.display = "none";
  var reactionTime = (finishTime - startTime) / 1000;
  document.getElementById("reactionTime").innerHTML = reactionTime + " seconds";
  setTimeout(makeShapeVisible, Math.random() * 1000);
};
