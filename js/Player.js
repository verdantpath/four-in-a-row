class Player {
  constructor(name, id, color, active = false, tokens) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = createTokens(21);
  }
/**
  * Creates token for our player
  * @param {number} num - Numberof token objects to be created
  * @returns {Array} An array of the newly created token objects
  */
  createTokens(num) {
    const tokens = [];

    for(var i = 0; i < num; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }
    return tokens;
  }
}
