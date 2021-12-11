import { createShip, createGameBoard, Player } from './game_functions';

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

function gameLoop(playername) {
  // When the user enters their name and hits submit, the game starts.
  console.log('Game starting, place your ships!');
  const ships = [5, 4, 3, 3, 2];
  const player = Player(10, false);
  const computer = Player(10, true);
  computer.placeComputerShips();

  // ships.forEach((ship) => {
  //   const newShip = createShip(ship);
  //   // Prompt user to place ship at this point
  //   // User prompt should return COORDINATES and ROTATION
  //   player.playerBoard.placeShip(newShip, newShip.length, coordinates, rotation);
  // });
}

export {
  createPlayer, getPlayerName, gameLoop, placeShip,
};
