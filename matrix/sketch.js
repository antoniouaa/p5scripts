let letters = [];
const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

function setup() {
  createCanvas(800, 600);
  frameRate(15);
  background(0);
}

function draw() {
  background(0);
  let startX = floor(random() * 29);
  const newLetter = new Letter(startX, 0);
  letters[startX] = newLetter;
  letters.forEach((letter) => {
    letter.show();
    letter.update();
  });
}

class Letter {
  constructor(x, y) {
    this.position = createVector(x * 30, y);
    this.character = random(alphabet);
    this.velocity = createVector(0, 30);
    this.size = 30;
    this.pastChars = [];
  }

  reset() {
    this.position = createVector(this.position.x * 30, 0);
    this.pastChars = [];
  }

  update() {
    if (this.position.y > 600) {
      this.reset();
    }
    this.position.add(this.velocity);
    this.character = random(alphabet);
    let position = this.position.copy();
    this.pastChars.unshift({
      currentChar: this.character,
      currentPos: position,
    });
    if (this.pastChars.length > 15) {
      this.pastChars.pop();
    }
  }

  show() {
    textSize(this.size);
    let { x, y } = this.position;
    text(this.character, x, y);
    fill("#fff");
    this.pastChars.forEach((char) => {
      text(char.currentChar, char.currentPos.x, char.currentPos.y);
      fill("#008F11");
    });
  }
}
