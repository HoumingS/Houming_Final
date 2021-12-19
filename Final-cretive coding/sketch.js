var scene=1;
var pressStart;//font name
var y=0;

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(255);
  fill(0);  
  rect(0,300,400,300);
  
  if (scene==1){
    scene1();}
   if (scene==2){
     scene2();}
	if (scene==3){
     scene3();}
	if (scene==4){
     scene4();}
	if (scene==5){
     scene5 ();} 
}

function scene1(){
  //textFont(pressStart);
  textSize(10);
  textAlign(CENTER);
  fill(255);
  text("Press 'return' to start your journey",200,400);
  textSize(10);
  text("Please click the screen first",200,350);
  noStroke();
  fill(224,30,30);
  triangle(30, 300+y, 55, 265+y, 80, 300+y);
  if(y<100){
    speed=-5;
    y=y+speed;
  }
}

function scene2(){
  //background(255);
  textSize(10);
  textAlign(CENTER);
  fill(255);
  text("Visiting grandma",200,400);
}

function preload(){
  //pressStart=loadFont('PressStart2P-Regular.ttf');  
}

 function keyPressed(){
  if(keyCode==RETURN){
    scene++;
   }
}