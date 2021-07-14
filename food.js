class Food {
  constructor() {
    this.move = function() {
      this.x = random(0, width);
      this.x-=this.x % scl;
      this.y = random(0, height);
      this.y-=this.y % scl;
    }
    this.show = function() {
      fill(255, 0, 100);
      rect(this.x, this.y, scl, scl);
    }
  }
}