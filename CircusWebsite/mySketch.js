let Counter1 = 0
let Counter2 = 0
let step1 = 5
let step2 = 7

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('blue');
  
  Counter1 = Counter1 + step1
  Counter2 = Counter2 + step2
  
  if (Counter1 > windowWidth){
    step1 = -step1
  }
  if (Counter1 < 0){
    step1 = -step1
  }
  if (Counter2 > windowHeight){
    step2 = -step2
  }
  if (Counter2 < 0){
    step2 = -step2
  }
  
  fill('red')
  ellipse(Counter1, Counter2, 30, 30)
  
}