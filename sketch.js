let osc, playing, freq, amp;
var y = 200;

function setup() {
  let cnv = createCanvas(1024,1024);
  cnv.mousePressed(drawMouse);
  osc = new p5.Oscillator('cos');
  background(0);
  frameRate(2);
}

function draw() {
  
  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  textSize(20);
  
  fill(200, 200, 200);
  text('drag mouse', 500, 20);


  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.5);
    osc.amp(amp, 0.1);
  }
}
function mouseDragged() {
    fill(52, 255, 25);
    stroke(252,0,0);
    ellipse(mouseX, mouseY, 20, 20);
    if (y == 200){
        fill(0, 0, 0);
        ellipse(mouseX, mouseY, 20, 20);
        y = y - 200;
      }
      
      else if (y == 0){
        y = y + 200;
      }
    // prevent default
    return false;
  }
function drawMouse(){
        osc.start();
        playing = true;
        
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.6);
  playing = false;
}

