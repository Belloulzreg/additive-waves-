class Wave{
  constructor(amp, period, phase){
    this.amplitude = amp;
    this.period = period;
    this.phase =phase;
  }
  calc(x){
    return sin(this.phase + (TWO_PI*x) /this.period) * this.amplitude;
  }
}
let waves = [];
function setup() {
  createCanvas(windowWidth, 400);
  for(let i=0; i <5; i++){
    waves[i] = new Wave(random(20, 80), random(100, 600), random(TWO_PI));
  }

}

function draw() {
  background(0);

  for(let x =0; x < width; x +=10){
    let y = 0;
    for(let wave of waves){

    y += wave.calc(x);
    }
    noStroke();
    ellipse(x, y + height/2, 10)
  }
  for(let wave of waves){
    wave.phase += 0.01;
  }
}
