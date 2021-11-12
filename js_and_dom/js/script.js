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
