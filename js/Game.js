class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  /**
  * Returns active player.
  * @return {Object} player - The active player.
  */
  get activePlayer() {
    return this.players.find(player => player.active);
  }

/**
 * creates two player objects
 * @return {Array} An array of two Player objects
 */
  createPlayers() {
    const players = [new Player('Player 1', 1, '#e15258', true),
                    new Player('Player 2', 2, '#e59a13')];
    return players;
  }

/**
 * Gets game ready for play
 */
  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }

  /**
   * Branches code, depending on what key player presses
   * @param {Object} e - Keydown event object
   */
  handleKeydown(e) {
    if(this.ready) {
      if(e.key === "ArrowLeft") {
        this.activePlayer.activeToken.moveLeft();
      } else if (e.key === "ArrowRight") {
        this.activePlayer.activeToken.moveRight(this.board.columns);
      } else if (e.key === "ArrowDown") {
        this.playToken();
      }
    }
  }

  /**
   * Finds Space object to drop Token into, drops Token
   */
   playToken() {
     let spaces = this.board.spaces;
     let activeToken = this.activePlayer.activeToken;
     let targetColumn = spaces[activeToken.columnLocation];
     let targetSpace = null;

     for(let space of targetColumn) {
       if(space.token === null) {
         targetSpace = space;
       }
     }

     if(targetSpace !== null) {
       game.ready = false;
       activeToken.drop(targetSpace);
     }
   }

   /**
    * Checks if there is a winner on the board after each token drop.
    * @param {Object} Targeted space for dropped token.
    * @return {boolean} Boolean value indicating whether the game has been won (true) or not (false).
    */
    checkForWin(target) {
      const owner = target.token.owner;
      let win = false;

      //  vertical
      for(let x = 0; x < this.board.columns; x++;) {
        
      }
    }
}
