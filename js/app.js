const game = new Game();

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
const beginGame = document.getElementById('begin-game');
beginGame.addEventListener('click', function() {
  this.startGame();
  this.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';
});
