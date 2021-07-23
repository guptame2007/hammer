const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var hammer;
var stone;
var rubber;
function preload(){

}

function setup()
{
    createCanvas(1400,700);

    engine = Engine.create();
    world = engine.world;
   hammer = new Hammer(10,100,30,60);
   stone = new Stone(100,620)
rubber = new Rubber(ellipse(56, 46, 55, 55));
}

function draw()
{
    background("LIGHTBLUE");
   engine.update
   hammer.display(engine);
stone.display(engine);
rubber.display(engine);
}