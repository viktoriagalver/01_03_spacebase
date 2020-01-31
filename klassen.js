class Invader {
  constructor(width, height, posX, posY, id, rand = Math.random()) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.rand = rand;
    this.appearance = this.generateInvader();
    this.id = id;
  }

  generateInvader() {
    let invadertemp = [];
    for (let u = 0; u < height; u++) {
      invadertemp[u] = " ".repeat(width * 2 + 1);
      for (let i = 0; i < width; i++) {
        let number = Math.random();
        if (number >= 0.5) {
          invadertemp[u] = (setCharsAt(invadertemp[u], i, '▣'));
          invadertemp[u] = (setCharsAt(invadertemp[u], 2 * width - i, '▣'));

        } else {
          invadertemp[u] = (setCharsAt(invadertemp[u], i, ' '));
          invadertemp[u] = (setCharsAt(invadertemp[u], 2 * width - i, ' '));
        }
      }
    }
    return invadertemp;
  }
}