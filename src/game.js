import {
  createShip, createGameBoard, Player, parseStringArray,
} from './game_functions';

import { createBoard } from './index.js';

console.log('Loading game scripts....');

function createPlayer(playerName, computer) {
  // Create a plyer profile after user has entered their name
  // Creates a local storage profile to keep track of current game, and past game history
  const playerProfile = {
    name: playerName,
    gameObject: Player(10, computer),
    gameRecords: [],
  };
  console.log(playerProfile);
  return playerProfile;
}

function getPlayerName() {
  // When player enters their name, get the name from the input
  // then create a new player object and create their game board
}
function placeShip(player, ship, shipLength, coordinates, rotated) {
  // Place a single ship on the gameboard
  player.playerBoard.placeShip(ship, shipLength, coordinates, rotated);
}

// function placeComputerShips(computerPlayer) {
//   // Create Carrier(5), BS(4), submarine(3)x2, destroyer(2)
//   const ships = [5, 4, 3, 3, 2];
//   const rotations = [true, false];
//   const { playerBoard } = computerPlayer.gameObject; // same as pb = CO.gameObject.playetrBoard
//   ships.forEach((ship) => {
//     const newShip = createShip(ship);
//     const rotation = rotations[Math.round(Math.random() * 1)]; // randomly gen. rotation
//     let randCoordinates = getRandomCoordinates();
//     let counter = 0;
//     while (true) {
//       counter += 1;
//       try {
//         if (playerBoard.checkTiles(randCoordinates[0], randCoordinates[1], ship, rotation)) {
//           playerBoard.placeShip(newShip, ship, randCoordinates, rotation);
//           break;
//         }
//       } catch {
//         randCoordinates = getRandomCoordinates();
//       }
//       if (counter > 100) {
//         break;
//       }
//     }
//   });
// }

function getRandomCoordinates() {
  // Generate random coordinates
  // gameBord.checkTile should rturn if coordinates are valid
  const x = Math.floor(Math.random() * (10));
  const y = Math.floor(Math.random() * (10));
  return [x, y];
}

function computerAttack(player) {
  // Computer attacks player
  const playerTiles = document.querySelectorAll('[data-tile-player]');
  const randomCoordinates = getRandomCoordinates();
  const playerTile = document.querySelector(`[data-tile-player="${randomCoordinates}"]`);
  // if (player.gameObject.playerBoard.recieveAttack(randomCoordinates)) {
  //   // Mark player gameboard with hits/misses at randomCoordinates
  //   playerTile.classList.add('hit-ship');
  // }
  // playerTile.classList.add('miss');

  // while (true) {
  //   try {
  //     if (player.gameObject.playerBoard.recieveAttack(randomCoordinates)) {
  //     // Mark player gameboard with hits/misses at randomCoordinates
  //       playerTile.classList.add('hit-ship');
  //     } else {
  //       playerTile.classList.add('miss');
  //     }
  //     break;
  //   } catch {
  //     randomCoordinates = getRandomCoordinates(); // needs to loop back up and cont. attack
  //   }
  // }
  try {
    if (player.gameObject.playerBoard.recieveAttack(randomCoordinates)) {
      playerTile.classList.add('hit-ship');
    } else {
      playerTile.classList.add('miss');
    }
    return true;
  } catch {
    return false;
  }
}

function gameLoop(player, computerPlayer) {
  // When the user enters their name and hits submit, the game starts.
  console.log('Game starting, place your ships!', player, computerPlayer);
  // starting with player 1, go back and forth firing shots
  // when a player clicks, it should mark the attack, and computer should
  // immediately make their move, only click on comptuer board
  const computerTiles = document.querySelectorAll('[data-tile-computer]');
  const playerTiles = document.querySelectorAll('[data-tile-player]');
  computerTiles.forEach((tile) => {
    const coordinates = parseStringArray(tile.dataset.tileComputer);
    tile.addEventListener('click', () => {
      if (computerPlayer.gameObject.playerBoard.recieveAttack(coordinates)) {
        tile.classList.add('hit-ship');
      } else {
        tile.classList.add('miss');
      }
      if (computerPlayer.gameObject.checkVictory()) {
        alert('You won!');
      }
      // Computer attacks player
      while (computerAttack(player) === false) {
        if (computerAttack(player)) {
          if (player.gameObject.checkVictory()) {
            alert('You lost! Oh no!');
          }
          break;
        }
      }
    });
  });
}

export {
  createPlayer, getPlayerName, gameLoop, placeShip,
};
