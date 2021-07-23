class Stone 
 {
constructor(x, y , width , height) 
 { 
 var options =
{
 'isStatic':0.3
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
fill("red");
 rect(0,0,this.bodyW , this.bodyH) 
 pop();
 }
 };