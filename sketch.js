
var b1, b2
function setup() 
{
  createCanvas(400, 400);
  b1= new Box ()
  b2= new Box ()
}

function draw() 
{
  background(220);
  b1.display()
  b2.display ()
  b1.setSpeed(4)
  b2.setSpeed(6)
  b1.SpeedY(7)
  b1.SpeedY(2)
}

