class Rubber
 {
constructor(x, y , width , height) 
 { 
 var options =
{
    'density':2, 'friction': 1.0, 'restitution':0.5
};
  this.bodyX = x;
 this.bodyY = y;
  this.bodyH = 50;
 this.bodyW = 50;
this.body = Bodies.rectangle(this.bodyX, this.bodyY, this.bodyH, this.bodyW, options); 
World.add(world , this.body);
 }
  display()
  { 

push(); 
translate(this.body.position.x, this.body.position.y); 
rotate(this.body.angle);
rectMode(CENTER); 
fill("blue");
 rect(0,0,this.bodyW , this.bodyH) 
 pop();
 }
 };