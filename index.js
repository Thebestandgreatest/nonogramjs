const gridHolder = document.getElementById('grid-holder');
const size = 50;
const space = 5 ;
const xOffset = 10;
const yOffset = 50;

document.getElementById('file-selector').addEventListener('change', function() {

  var reader = new FileReader();
  var fileContents = [];
  reader.onload = function() {
    fileContents = reader.result.split(/\r?\n/);
    console.log(fileContents);
  }
  reader.readAsText(this.files[0]);

  reader.addEventListener('load', function() {
    drawGrid(fileContents);
  });
});

//c o l u m n
//r
//o
//w

function drawGrid(fileContents) {
  gridHolder.innerHTML = ''; //clears the current grid
  for (columns = 0; columns < fileContents[0]; columns++) { //for each row and column specified in the file
    for (rows = 0; rows < fileContents[1]; rows++) {
      var box = document.createElement('div'); //create div
      box.id = `${columns} ${rows}`; //id is coordinates
      box.style.width = size + 'px'; //size
      box.style.height = size + 'px';
      box.style.left = columns * (size + space) + xOffset + 'px'; //position
      box.style.top = rows * (size + space) + yOffset + 'px';
      box.style.backgroundColor = 'Gray';
      box.style.position = 'absolute';

      if (box.addEventListener) { //prevents the context menu from opening when left clicking the grid
        box.addEventListener('contextmenu', function(e) {
          leftClick(box.id); //calls the funtion left click with the box id
          e.preventDefault();
        }, false);
      } else {
        box.attachEvent('oncontextmenu', function() {
          window.event.returnValue = false;
        });
      }

      gridHolder.appendChild(box);
    }
  }
}

function leftClick(boxid) {

}

function rightclick(boxid) {

}
