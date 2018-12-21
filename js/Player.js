class Player {
  constructor(name, id, color, active = false, tokens) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
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
  /**
   * Gets all tokens that haven't been dropped.
   * @return {array} Array of unused tokens.
   */
  get unusedTokens() {
    return this.tokens.filter(token => !token.dropped);
  }
  /**
   * Gets the active token by returning the firts token in the array of unused tokens.
   * @return {Object} First token object in the array of unused tokens.
   */
  get activeToken() {
    return this.unusedTokens[0];
  }

  /**
   * Check if a player has any undropped tokens left
   * @return {Boolean}
   */
  checkTokens() {
    return this.unusedTokens.length === 0 ? false : true;
  }

}
