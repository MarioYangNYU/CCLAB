class Note {
  constructor(t, p) {
    this.w = width/4.1;
    this.h = 15;
    this.x = width/8 + p*width/4;
    this.ns = 20;
    this.p = p;
    this.logged = false
    this.posLogged = false
    this.sounded = false;
    this.t = t
    this.out = false;
    }

  move() {
    this.y = this.t + yPos;;
    if (this.y > 650 && !this.logged){
     // console.log(Date.now())
     this.logged = true
    }
  }


  display() {
    push()
    fill(255)
    imageMode(CENTER)
    image(note,this.x, this.y, this.w, this.h);
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
    if(this.y > 1000 && !this.out){
      notes.splice(0,1);
      this.out = true;
    }
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
