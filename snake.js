var scl = 20;

class Snake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.direction = "R";
    this.total = 0;
    this.tail = [];

    this.eat = function(fx, fy) {
      if (dist(this.x, this.y, fx, fy) == 0) {
        this.total++;
        this.tail[this.total - 1] = createVector(this.x, this.y);

        return true;
      }
      return false;
    }

    this.reborn = function(x = 0, y = 100) {
      this.x = x;
      this.y = y;
      this.direction = "R";
      this.xSpeed = 1;
      this.ySpeed = 0;
      this.total = 0;
      this.tail = [];

    }

    this.update = function() {
      for (let i = 0; i < this.total - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
      this.tail[this.total - 1] = createVector(this.x, this.y);

      this.x += this.xSpeed * scl;
      this.y += this.ySpeed * scl;

    }

    this.death = function() {
      let isDead = false;
      if (this.x < 0 || this.x > width - scl || this.y < 0 || this.y > height - scl) {
        this.reborn();
        return true;

      }
      for (let j = 0; j < this.total; j++) {
        if (dist(this.x, this.y, this.tail[j].x, this.tail[j].y) == 0) {
          // snake is reborn
          this.reborn();
          return true;
        }
      }
      return false;
    }

    this.show = function() {
      fill(100, 200, 0);
      rect(this.x, this.y, scl, scl);

      for (let i = 0; i < this.total; i++) {
        rect(this.tail[i].x, this.tail[i].y, scl, scl);
      }
    }

    this.setSpeed = function(xs, ys) {
      this.xSpeed = xs;
      this.ySpeed = ys;
    }


    this.dir = function(d = "R") {
      switch (d) {
        case "U":
          if (this.direction != "D") {
            this.direction = "U";
            this.setSpeed(0, -1);
          }
          break;

        case "D":
          if (this.direction != "U") {
            this.direction = "D";
            this.setSpeed(0, 1);
          }
          break;
        case "R":
          if (this.direction != "L") {
            this.direction = "R";
            this.setSpeed(1, 0);
          }
          break;
        case "L":
          if (this.direction != "R") {
            this.direction = "L";
            this.setSpeed(-1, 0);
          }
      }
    }
  }
}