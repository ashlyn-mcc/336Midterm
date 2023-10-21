let CounterB = 10
let DirB = 1;

let CounterBY = 100
let DirBY = 1;

let Direction = 4
var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.parent('sketch-container')
  canvas.style('z-index','-1');
  angleMode(DEGREES);
	rectMode(CENTER);	
	frameRate(30);
}

function draw() {
  background(156,205,221);
  CounterB = CounterB + DirB * Direction; //Bird Counters
  CounterBY = CounterBY + DirBY * 3;
	
	if (CounterB > width) { //Bird Boundaries
		DirB = -1
	}

	if (CounterB < 0) {
		DirB = 1
	}

	if (CounterBY > height) {
		DirBY = -1
	}

	if (CounterBY < 100) {
		DirBY = 1
	}

	push() //Bird Direction
	translate(CounterB, CounterBY)
	if (DirB == 1) {
		rotate(atan((DirBY * 3) / (DirB * Direction)) + 90)
	}
	if (DirB == -1) {
		rotate(atan((DirBY * 3) / (DirB * Direction)) + 270)
	}
	airplane(0, 0)
	pop()

  
}

function airplane(X,Y){
	stroke(0);
	strokeWeight(3);
	line(X,Y-45,X,Y-50);
	noStroke();
	fill(70);
	quad(X,Y-50,X,Y-52,X+36,Y-55,X+36,Y-49);
	quad(X,Y-50,X,Y-52,X-36,Y-55,X-36,Y-49);
	fill(231,51,36)
	quad(X-4,Y+36,X+4,Y+36,X+15,Y-30,X-15,Y-30);
	arc(X,Y-30,30,30,180,0);
	
	fill(255,255,89);
	rect(X-45,Y-20,50,15,5);
	rect(X+45,Y-20,50,15,5);
	rect(X,Y-25,100,5);
	
	quad(X+5,Y+35,X+5,Y+26,X+22,Y+30,X+25,Y+37);
	quad(X-5,Y+35,X-5,Y+26,X-22,Y+30,X-25,Y+37);
	
	ellipse(X-20,Y-23,7,7);
	ellipse(X+20,Y-23,7,7);
	
	strokeWeight(4);
	stroke(255,255,89);
	line(X-25,Y-15,X-9,Y-24);
	line(X+25,Y-15,X+9,Y-24);
	strokeWeight(3);
	line(X,Y+29,X,Y+41);
	
	noStroke();
	fill(25);
	arc(X,Y-10,10,15,180,0);
	arc(X,Y,10,15,180,0);
	
	fill(231,51,36);
	rect(X-50,Y-15,20,7);
	rect(X+50,Y-15,20,7);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
