// Variable for color input.

let selectedColor = document.querySelector("#colorPicker");

// Variables for size input.

let rows = document.querySelector("#inputHeight");
let columns = document.querySelector("#inputWidth");

// Grid & Submit Button variables.

const grid = document.querySelector("#pixelCanvas");
const submitButton = document.querySelector("#submitButton");

// Prevents page refresh upon clicking submit button.

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
});

// Creates color grid upon clicking submit button.

submitButton.addEventListener('click', makeGrid);

// Function that makes color grid.

function makeGrid() {

  // Removes old table and creates new table.

  if (grid.firstChild) {

    let body = grid.firstChild;
    grid.removeChild(body);

    for (var x = 0; x < rows.value; x++) {
      let row = grid.insertRow(x);

      for (var y = 0; y < columns.value; y++) {
        let cell = row.insertCell(y);
        cell.addEventListener('click', colorCell);
      }
    }
  }

  // Creates the first table.

  else {
    for (var x = 0; x < rows.value; x++) {
      let row = grid.insertRow(x);

      for (var y = 0; y < columns.value; y++) {
        let cell = row.insertCell(y);
        cell.addEventListener('click', colorCell);
      }
    }
  }
}

// Function to change cell color.

function colorCell(event) {

  event.target.style.backgroundColor = selectedColor.value;

}
