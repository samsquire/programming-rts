var c = document.getElementById("game-area");
var ctx = c.getContext("2d");
var currentCommand = 0;

var startVariable = {
  x: 20,
  y: 140
};

var midVariable = {
  x: 60,
  y: 150
};
var endVariable = {
  x: 60,
  y: 170
};
var start = 200;
var arrayVariables = [];
for (var x = 0; x < 10; x++) {
  arrayVariables.push({
    x: start,
    y: 130
  });
  start += 15;

}

function drawCursor(currentAnimation, color) {
  ctx.beginPath();
  ctx.arc(currentAnimation.currentX + 5, currentAnimation.currentY + 5, 5, 0, 2 * Math.PI, false);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.rect(currentAnimation.currentX, currentAnimation.currentY + 15, 10, 10);
  ctx.fill();
  ctx.stroke();
}

var commands = [
  {
    start: arrayVariables[9],
    currentX: arrayVariables[9].x,
    currentY: arrayVariables[9].y,
    startX: arrayVariables[9].x,
    startY: arrayVariables[9].y,
    target: endVariable,
    targetWaitFrames: 100,
    waitFrames: 100
  },
  {
    start: arrayVariables[4],
    currentX: arrayVariables[4].x,
    currentY: arrayVariables[4].y,
    startX: arrayVariables[4].x,
    startY: arrayVariables[4].y,
    target: midVariable,
    targetWaitFrames: 100,
    waitFrames: 100
  }
];

function ticker() {
  console.log("frame");
  ctx.beginPath();
  ctx.rect(0, 0, 800, 800);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.fillStyle = "";

  ctx.beginPath();
  ctx.rect(10, 10, 600, 400);
  ctx.stroke();

  // ctx.beginPath();
  // ctx.arc(150, 150, 20, 0, 2 * Math.PI, false);
  // ctx.stroke();

  // ctx.beginPath();
  // ctx.rect(170, 170, 10, 10);
  // ctx.stroke();

  ctx.beginPath();
  ctx.rect(10, 420, 290, 200);
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(310, 420, 290, 200);
  ctx.stroke();

  ctx.beginPath();
  ctx.font = "20px serif";
  ctx.fillStyle = "black";
  ctx.fillText("timeline", 450, 80);

  ctx.beginPath();
  ctx.font = "20px serif";
  ctx.fillStyle = "black";
  ctx.fillText("1", 430, 100);


  var start = 450;
  for (var x = 0; x < 10; x++) {
    ctx.beginPath();
    ctx.rect(start, 100, 10, 10);

    start += 15;
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.font = "20px serif";
  ctx.fillStyle = "";
  ctx.fillText("2", 430, 130);
  start = 450;
  for (var x = 0; x < 10; x++) {
    ctx.beginPath();
    ctx.rect(start, 130, 10, 10);
    start += 15;
    if (x == 4) {
      ctx.fillStyle = "red";
      ctx.fill();
    }
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.font = "20px serif";
  ctx.fillText("3", 430, 160);
  start = 450;
  for (var x = 0; x < 10; x++) {
    ctx.beginPath();
    ctx.rect(start, 160, 10, 10);
    start += 15;
    if (x == 1) {
      ctx.fillStyle = "red";
      ctx.fill();
    }
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.font = "20px serif";
  ctx.fillText("4", 430, 190);
  start = 450;
  for (var x = 0; x < 10; x++) {
    ctx.beginPath();
    ctx.rect(start, 190, 10, 10);
    start += 15;
    if (x == 0) {
      ctx.fillStyle = "red";
      ctx.fill();
    }
    ctx.stroke();
  }


  ctx.beginPath();
  ctx.font = "20px serif";
  ctx.fillStyle = "black";
  ctx.fillText("start", 20, 140);
  ctx.beginPath();
  ctx.rect(60, 130, 10, 10);
  ctx.stroke();


  ctx.beginPath();
  ctx.font = "20px serif";
  ctx.fillStyle = "black";
  ctx.fillText("mid", 20, 160);
  ctx.beginPath();
  ctx.rect(60, 150, 10, 10);
  ctx.stroke();


  ctx.beginPath();
  ctx.font = "20px serif";
  ctx.fillStyle = "black";
  ctx.fillText("end", 20, 180);
  ctx.beginPath();
  ctx.rect(60, 170, 10, 10);
  ctx.stroke();

  ctx.beginPath();
  ctx.font = "20px serif";
  ctx.fillStyle = "black";
  ctx.fillText("arr", 170, 140);
  start = 200;
  for (var x = 0; x < 10; x++) {
    ctx.beginPath();
    ctx.rect(start, 130, 10, 10);


    start += 15;
    ctx.stroke();
  }



  var currentAnimation = commands[currentCommand];
  for (var x = 0; x < currentCommand; x++) {
    drawCursor(commands[x], "gray")
  }
  if (currentAnimation.waitFrames == 0) {
    currentCommand = (currentCommand + 1);
    if (currentCommand >= commands.length) {
      currentCommand = currentCommand % commands.length;
      for (var x = 0; x < commands.length; x++) {
        console.log("animation reached end");
        commands[x].currentX = currentAnimation.startX;
        commands[x].currentY = commands[x].startY;
        commands[x].waitFrames = commands[x].targetWaitFrames
      }

    }
  }
  else if (Math.abs(currentAnimation.currentX - currentAnimation.target.x) <= 1 && Math.abs(currentAnimation.currentY - currentAnimation.target.y) <= 1) {
    console.log("reached end");
    currentAnimation.waitFrames--;
    drawCursor(currentAnimation);

  } else {
    drawCursor(currentAnimation, "red");

    if (currentAnimation.target.x > currentAnimation.currentX) {
      currentAnimation.currentX += 5;
    }
    if (currentAnimation.target.x < currentAnimation.currentX) {
      currentAnimation.currentX -= 5;
    }
    if (currentAnimation.target.y > currentAnimation.currentY) {
      currentAnimation.currentY += 5;
    }
    if (currentAnimation.target.y < currentAnimation.currentY) {
      currentAnimation.currentY -= 5;
    }
  }


}
ticker();
setInterval(ticker, 1);


progrma = `
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      return mid;
    }

    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}`




