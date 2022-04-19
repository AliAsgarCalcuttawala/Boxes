class Box
  {
  constructor(){
this.x = 100 ;
this.y=200;
this.w = 50;
this.h=50;

  }
  display(){
    rect (this.x, this.y, this.w, this.h)
  }
  setSpeed(z){
    this.x = this.x+z
  
  }
  SpeedY(l){
    this.y = this.y+l
  }

  }

  
