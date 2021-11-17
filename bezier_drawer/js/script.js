let pts = [];
let ptl = [];
let stored = [];
let lstored = [];
let length = 0;
let llength = 0;
let released = true;
let bezier_mode = true;

let strokeSlider;

function setup() {
  // frameRate(20);
  let canvas = createCanvas(500, 500);

  canvas.parent("scriptContainer");
  pts = [
    createVector(50, 50),
    createVector(50, 300),
    createVector(300, 300),
    createVector(300, 50),
  ];

  ptl = [createVector(50, 50), createVector(50, 300)];
}

function key_control() {
  if (keyIsPressed && released) {
    if (key == "z") {
      if (bezier_mode) {
        if (length > 0) {
          stored.splice(length - 1, 1);
          length -= 1;
          released = false;
        }
      } else {
        if (llength > 0) {
          lstored.splice(llength - 1, 1);
          llength -= 1;
          released = false;
        }
      }
    } else if (key == "r") {
      pts = [
        createVector(50, 50),
        createVector(50, 300),
        createVector(300, 300),
        createVector(300, 50),
      ];
    } else if (key == "s") {
      bezier_mode = !bezier_mode;
      released = false;
    } else {
      draw_bez()
      released = false;
    }
  }
  if (!keyIsPressed) {
    released = true;
  }
}

function undo(){

    if (bezier_mode) {
      if (length > 0) {
        stored.splice(length - 1, 1);
        length -= 1;
        released = false;
      }
    } else {
      if (llength > 0) {
        lstored.splice(llength - 1, 1);
        llength -= 1;
        released = false;
      }
    }

}

function switch_mode(){
      bezier_mode = !bezier_mode;}

function draw_bez(){

  if (bezier_mode) {
    store_bezier_draw();
  } else {
    store_line_draw();
  }

}

function line_control() {
  background(220);
  noFill();
  stroke(0);
  strokeWeight(4);
  if (mouseIsPressed) {
    for (let pt of ptl) {
      if (dist(mouseX, mouseY, pt.x, pt.y) < 30) {
        pt.x = mouseX;
        pt.y = mouseY;
        break;
      }
    }
  }
  line(ptl[0].x, ptl[0].y, ptl[1].x, ptl[1].y);
  noStroke();
  fill(255, 100);
  for (let pt of ptl) {
    ellipse(pt.x, pt.y, 25, 25);
  }

  xl0 = ptl[0].x;
  yl0 = ptl[0].y;
  xl1 = ptl[1].x;
  yl1 = ptl[1].y;
}

function bezier_control() {
  background(220);
  noFill();
  stroke(0);
  strokeWeight(4);
  bezier(
    pts[0].x,
    pts[0].y,
    pts[1].x,
    pts[1].y,
    pts[2].x,
    pts[2].y,
    pts[3].x,
    pts[3].y
  );
  push();
  stroke(100, 100, 100, 100);
  line(pts[0].x, pts[0].y, pts[1].x, pts[1].y);
  line(pts[2].x, pts[2].y, pts[3].x, pts[3].y);
  pop();
  x0 = pts[0].x;
  y0 = pts[0].y;
  x1 = pts[1].x;
  y1 = pts[1].y;
  x2 = pts[2].x;
  y2 = pts[2].y;
  x3 = pts[3].x;
  y3 = pts[3].y;

  noStroke();
  fill(255, 100);
  for (let pt of pts) {
    ellipse(pt.x, pt.y, 25, 25);
  }

  if (mouseIsPressed) {
    for (let pt of pts) {
      if (dist(mouseX, mouseY, pt.x, pt.y) < 30) {
        pt.x = mouseX;
        pt.y = mouseY;
        break;
      }
    }
  }

  noStroke();
  fill(0);
  textSize(12);
  // print(pts[0].x, pts[0].y,
  //        pts[1].x, pts[1].y,
  //        pts[2].x, pts[2].y,
  //        pts[3].x, pts[3].y)
}

function generate(){
  lp = ["["]
  rp = ["]"]
  document.getElementById('g0').innerHTML = "bezier(" + join(stored[0],",") + ")"
  document.getElementById('g1').innerHTML = "bezier(" + join(stored[1],",") + ")"
  document.getElementById('g2').innerHTML = "bezier(" + join(stored[2],",") + ")"
  document.getElementById('g3').innerHTML = "bezier(" + join(stored[3],",") + ")"
  document.getElementById('g4').innerHTML = "bezier(" + join(stored[4],",") + ")"
  document.getElementById('g5').innerHTML = "bezier(" + join(stored[5],",") + ")"
  document.getElementById('g6').innerHTML = "bezier(" + join(stored[6],",") + ")"
  document.getElementById('g7').innerHTML = "bezier(" + join(stored[7],",") + ")"


}

function store_bezier_draw() {
  append(stored, [int(x0), int(y0), int(x1), int(y1), int(x2), int(y2), int(x3), int(y3)]);
  // print(stored)
  print("bezier", stored[length]);
  length += 1;
  //     bezier(stored[i][0].x, stored[i][0].y,
  //          stored[i][1].x, stored[i][1].y,
  //          stored[i][2].x, stored[i][2].y,
  //          stored[i][3].x, stored[i][3].y);

  //       bezier(stored[0].x, stored[0].y,
  //          stored[1].x, stored[1].y,
  //          stored[2].x, stored[2].y,
  //          stored[3].x, stored[3].y);
}

function store_line_draw() {
  append(lstored, [xl0, yl0, xl1, yl1]);
  // print(stored)
  print("line",lstored[llength]);

  llength += 1;
}

function draw_line_stored() {
  for (i = 0; i < llength; i++) {
    noFill();
    stroke(0);
    strokeWeight(4);
    line(lstored[i][0], lstored[i][1], lstored[i][2], lstored[i][3]);
  }
}

function draw_bezier_stored() {
  for (i = 0; i < length; i++) {
    noFill();
    stroke(0);
    strokeWeight(4);
    bezier(
      stored[i][0],
      stored[i][1],
      stored[i][2],
      stored[i][3],
      stored[i][4],
      stored[i][5],
      stored[i][6],
      stored[i][7]
    );
  }
}

function UI(){
push();
strokeWeight(5);
stroke(0);
line(0,0,width,0);
line(width,0,width,height);
line(width,height,0,height);
line(0,height,0,0);
pop();
}



slider.oninput = function() {

//   for(i=0;i<stored.length;i++){
//   stored[i] = stored[i].map(v=> v)
// }

}

function draw() {
  if (bezier_mode) {
    bezier_control();
  } else {
    line_control();
  }
  key_control();

  draw_bezier_stored();
  draw_line_stored();

    UI();

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = float(slider.value).toFixed(2);
}
