// THIS IS JUST MY TTESTING SHEET. Please review designs.js -- Thank you!

// Select color input

let selectedColor = document.querySelector("#colorPicker");

// Select size input

let rows = document.querySelector("#inputHeight");
let columns = document.querySelector("#inputWidth");

// When size is submitted by the user, call makeGrid()

const grid = document.querySelector("#pixelCanvas");
const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
});

submitButton.addEventListener('click', makeGrid);


function makeGrid() {

  if (grid.firstChild) {

    let body = grid.firstChild;
    grid.removeChild(body);

    for (var x = 0; x < rows.value; x++) {
      let row = grid.insertRow(x);

      for (var y = 0; y < columns.value; y++) {
        let cell = row.insertCell(y);
        cell.addEventListener('click', colorCell);
        cell.addEventListener('click', testCell);
      }
    }
  }
  else {
    for (var x = 0; x < rows.value; x++) {
      let row = grid.insertRow(x);

      for (var y = 0; y < columns.value; y++) {
        let cell = row.insertCell(y);
        cell.addEventListener('click', colorCell);
        cell.addEventListener('click', testCell);
      }
    }
  }
}

function colorCell(event) {
  //code to change cell color here
  event.target.style.backgroundColor = selectedColor.value;

}

function testCell(event) {
  console.log("a cell was clicked");
}
