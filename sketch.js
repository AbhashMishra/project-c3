var wall,thickness;
var bullet,speed,weight;
var Abullet,Awall;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,51);

  bullet = createSprite(100,200,100,40);
  bullet.velocityX = speed;
  bullet.shapeColor = "yellow";

  thickness = random(50,55);
  
  wall = createSprite(1300,200,thickness,300);
  
}

function draw() {
  background(0);

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
    if(damage > 10)
    {
      wall.shapeColor = color(255,0,0);
    }

    if(damage < 10)
    {
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(Abullet,Awall) 
{
  bulletRightEdge = Abullet.x + Abullet.width;
  wallLeftEdge = Awall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
    return false;
}