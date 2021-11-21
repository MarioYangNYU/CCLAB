class Note {
  constructor(t, p) {
    this.w = width/4.1;
    this.h = 10;
    this.x = width/8 + p*width/4;
    this.y = t;
    this.ns = 20;
    this.p = p;
    this.logged = false
    this.posLogged = false
    this.sounded = false;
    }

  move() {
    this.y += this.ns;
    if (this.y > 650 && !this.logged){
     // console.log(Date.now())
     this.logged = true
    }
  }


  display() {
    push()
    fill(255)
    rect(this.x, this.y, this.w, this.h,5);
    pop()

    if(this.y>=550 && !this.sounded){
      hit.play();
      this.sounded = true
    }

      if(keyIsPressed && this.y>450){
      push()
      stroke(255)
      strokeWeight(4)
      line(0,this.y,width,this.y)
      pop()
      if(!this.posLogged){
        console.log(str(550-this.y))
        this.posLogged = true
      }
    }
}

  erase() {
  }

  // keyPressed(){
  //   if(key != 'q'){
  //   push()
  //   stroke(255)
  //   strokeWeight(4)
  //   line(0,this.y,width,this.y)
  //   pop()
  // }
}
