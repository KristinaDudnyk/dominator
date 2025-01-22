// TODO: https://tech-docs.corndel.com/js/arrow-functions.html

/**
 * Play a game of rock-paper-scissors.
 *
 * @param {'rock' | 'paper' | 'scissors'} player1 The choice of player 1.
 * @param {'rock' | 'paper' | 'scissors'} player2 The choice of player 2.
 * @returns {'player1' | 'player2' | 'tie'} The result of the game.
 */
export const rockPaperScissors = (player1, player2) => {
  if (player1 === player2) {
    return "tie";
  } else if (player1 === "rock") {
    if (player2 === "paper") {
      return "player2";
    } else {
      return "player1";
    }
  } else if (player1 === "scissors") {
    if (player2 === "rock") {
      return "player2";
    } else {
      return "player1";
    }
  } else if (player1 === "paper") {
    if (player2 === "scissors") {
      return "player2";
    } else {
      return "player1";
    }
  }
};
