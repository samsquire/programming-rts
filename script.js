var c = document.getElementById("game-area");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.rect(10, 10, 600, 400);
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 150, 20, 0, 2 * Math.PI, false);
ctx.stroke();

ctx.beginPath();
ctx.rect(170, 170, 10, 10);
ctx.stroke();

ctx.beginPath();
ctx.rect(10, 420, 290, 200);
ctx.stroke();

ctx.beginPath();
ctx.rect(310, 420, 290, 200);
ctx.stroke();

var start = 250;
for (var x = 0 ; x < 10 ; x++) {

ctx.beginPath();
ctx.rect(start, 100, 10, 10);
start += 15;
ctx.stroke();
}

program = `
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
}
  
`





