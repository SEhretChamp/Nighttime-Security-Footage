let a = 0
let value = 0

function setup() {  
createCanvas(800, 600);  
background(0); 
}  

function draw() {  
//Camera 1 Display 
 if (a === 0){ 
//Background
  fill(100)
  rect(-100,0,1000,600)
  fill(124,143,153)
  rect(250,150,300,450)
  fill(0)
  line(400,150,400,600)
  fill(75)
  rect(-100,450,1000,150)

//Camera menu window 
  fill(100);  
  rect(500,400,295,195); 

//Text in Window 
  textAlign(CENTER)  
  textSize(25)  
  fill(0)  
  textFont("Arial")  
  text("Camera 1",650,500) 

//Camera Icons 
  fill(255,255,0) 
  rect(505,405,70,50) 
  fill(150) 
  rect(505,470,70,50) 
  rect(505,540,70,50) 
 } 

//Camera 2 Display   
if (a === 1){ 
  
  Camera2(0,0)

//Camera menu window 
  fill(100);  
  rect(500,400,295,195); 

//Text in Window 
  textAlign(CENTER)  
  textSize(25)  
  fill(0)  
  textFont("Arial")  
  text("Camera 2",650,500) 

//Camera Icons 
  fill(255,255,0) 
  rect(505,470,70,50) 
  fill(150) 
  rect(505,405,70,50) 
  rect(505,540,70,50) 
 } 

//Camera 3 Display   
if (a === 2){ 
//Background
  fill(100)
  rect(-100,0,1000,600)
  fill(75)
  rect(-100,450,1000,150)

//Jumpscare Setup
  fill(64,4,4)
  textAlign(CENTER)
  text("Click me~",400,200)
  fill(0)
  quad(390,300,410,300,450,500,350,500)
  ellipse(400,300,150,100)
  fill(200)
  circle(375,310,40)
  circle(425,310,40)
  fill(0)
  circle(380,305,35)
  circle(420,305,35)
//Jumpscare
  if (value === 1){
    fill(0)
    rect(-100,0,1000,600)
    fill(200)
    ellipse(400,400,200,100)
    fill(0)
    ellipse(400,375,200,100)
    fill(200)
    circle(200,200,200)
    circle(600,200,200)
    fill(0)
    circle(200,200,50)
    circle(600,200,50)
    fill(255,0,0)
    circle(200,200,10)
    circle(600,200,10)
  }
  
//Camera menu window 
  fill(100);  
  rect(500,400,295,195); 
  
//Text in Window 
  textAlign(CENTER)  
  textSize(25)  
  fill(0)  
  textFont("Arial")  
  text("Camera 3",650,500) 

//Camera Icons 
  fill(255,255,0) 
  rect(505,540,70,50) 
  fill(150) 
  rect(505,405,70,50) 
  rect(505,470,70,50) 
 } 
} 

function keyPressed(){ 
 if (keyCode === 49){ 
  a=0 
 } 
 if (keyCode === 50){ 
  a=1 
 } 
 if (keyCode === 51){ 
  a=2 
 } 
} 

function mousePressed(){
  if (value === 0){
    value = 1
  }else{
    value = 0
  }
}

//Code for camera 2
function Camera2(){
//Background Moving Frame
  fill(100)
  rect(mouseX-1500,0,3000,600)
  fill(75)
  rect(mouseX-1500,450,3000,150)
  fill(113,93,117)
  quad(mouseX+225,125,mouseX+300,200,mouseX+200,300,mouseX+125,225)
  fill(87,69,57)
  quad(mouseX-350,350,mouseX-350,500,mouseX-250,450,mouseX-250,300)
  fill(66,52,43)
  quad(mouseX-350,350,mouseX-350,500,mouseX-450,450,mouseX-450,300)
  fill(69,55,45)
  quad(mouseX-450,300,mouseX-350,350,mouseX-250,300,mouseX-350,250)
//Shadow
  fill(0)
  rect(mouseX-1200,0,350,600)
  fill(200)
  circle(mouseX-1000,150,50)
  circle(mouseX-950,300,50)
  fill(0)
  circle(mouseX-1000,150,10)
  circle(mouseX-950,300,10)
  fill(255,0,0)
  circle(mouseX-1000,150,5)
  circle(mouseX-950,300,5)
}
