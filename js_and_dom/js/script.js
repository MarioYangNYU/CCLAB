let i = 0;
let r = 0
let g = 0
let b = 0

const moji = [
"     /￣＼       ",
"    ∨　　＼     ",
"   ∠＝＝=＞     ",
"  （； ・∀・）   ",
" 　/　つ† つ     ",
"  /　 _ﾉ）-）ヽ  ",
"∠_,（＿_）＿）」 "
];



function say(){
let elem = document.getElementById('name')
console.log(elem);

if(i<moji.length){
let newLelm = document.createElement('p')
newLelm.innerHTML = moji[i]
i+=1
elem.appendChild(newLelm)}

r = Math.random()*255
g = Math.random()*255
b = Math.random()*255

elem = document.getElementById('heading');
elem.style.color = "rgb(" + r + "," + g + "," + b + ")";
// elem.style.color = "rgb(255,0,0)";
}





function setup() {
  createCanvas(2000, 1000);
  background(255);
  frameRate(10);
  x = 0;
  y = 0;
  r = 0;
  langle = 0;
  once = false;
  rectMode(CENTER);
}

function drawing() {
  translate(x, y);

  length = random(100, 1000);
  angle = random(0, 360);


  rotate(-radians(angle));

  x += cos(radians(angle)) * length;
  y -= sin(radians(angle)) * length;

  if(x>-950 && x<950 && y>-450 && y<450){
  for (i = 0; i < length; i += 1) {
    translate(1, 0);
    push()
    noStroke()
    fill(map(angle,0,360,0,255),20)
    ellipse(0, 0, 5, 5);

    pop()
    r += angle;
  }}
  else{
      x -= cos(radians(angle)) * length;
  y += sin(radians(angle)) * length;

  }
  push()
  fill(map(angle,0,360,0,255),200)
      // noStroke()

  ellipse(0,0,15,15)
  pop()
}

function draw() {
  translate(width / 2, height / 2);

  drawing();

  print(x, y);
}


function mousePressed(){
  background(255);

}
