function setup() {
  createCanvas(500,400)
}

function draw() {
  background(100)
  fill(250)
  
  var x = 50;
  
  // for (var count = 0; count < 8; count++){
  //   rect(x, height/2, 40, 40)
  //   x+=40;
  // }
  
 var counter = 0
  while (counter  < 8){
    if (counter % 2 === 0){
      fill('white')
    }
    else {
      fill('black')
    }
    
    rect (40 + (counter*40), 200, 40, 40)
    counter+=1
  }  
  var counter = 0
  while (counter  < 8){
    if (counter % 2 === 0){
      fill('black')
    }
    else {
      fill('white')
    }
    
    rect (40 + (counter*40), 240, 40, 40)
    counter+=1
  }
   var counter = 0
  while (counter  < 8){
    if (counter % 2 === 0){
      fill('white')
    }
    else {
      fill('black')
    }
    
    rect (40 + (counter*40), 280, 40, 40)
    counter+=1
  }
   var counter = 0
  while (counter  < 8){
    if (counter % 2 === 0){
      fill('black')
    }
    else {
      fill('white')
    }
    
    rect (40 + (counter*40), 320, 40, 40)
    counter+=1
  }
   var counter = 0
  while (counter  < 8){
    if (counter % 2 === 0){
      fill('black')
    }
    else {
      fill('white')
    }
    
    rect (40 + (counter*40), 160, 40, 40)
    counter+=1
  }
   var counter = 0
  while (counter  < 8){
    if (counter % 2 === 0){
      fill('white')
    }
    else {
      fill('black')
    }
    
    rect (40 + (counter*40), 120, 40, 40)
    counter+=1
  }
   var counter = 0
  while (counter  < 8){
    if (counter % 2 === 0){
      fill('black')
    }
    else {
      fill('white')
    }
    
    rect (40 + (counter*40), 82, 40, 40)
    counter+=1
  }
   var counter = 0
  while (counter  < 8){
    if (counter % 2 === 0){
      fill('white')
    }
    else {
      fill('black')
    }
    
    rect (40 + (counter*40), 43, 40, 40)
    counter+=1
  }
}