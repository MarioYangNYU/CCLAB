
function setup(){
var myWindow;
var moving = false
}

function openWin() {
  myWindow=window.open("", "myWindow", "width=200, height=100");
  myWindow.document.write("<p>This is 'myWindow'</p>");
}

function moveWin() {
moving = !moving
}

function draw(){

  if(moving){
  myWindow.moveBy(5, 0);
  myWindow.focus();
}
}
