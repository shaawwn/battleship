// Functions for Battleship game

// Ships
const createShip = (length) => {
  // Create an array representing the ship with length provided
  const shipsDict = {
    5: 'carrier',
    4: 'battleship',
    3: 'submarine',
    2: 'destroyer',
  };

  const shipType = shipsDict[length];
  const shipSections = () => {
    const sections = {};
    for (let i = 0; i < length; i++) {
      sections[i] = [false];
    }
    return sections;
  };

  const sections = shipSections();

  const hit = (position) => {
    // Mark the given position as 'hit' (true) on the ship
    sections[position][0] = true;
  };

  const isSunk = () => {
    const sectionKeys = Object.keys(sections);
    if (sectionKeys.every((element) => sections[element][0] === true)) {
      return true;
    }
    return false;
  };

  return {
    length, sections, hit, isSunk, shipType,
  };
};

// Game Board
const createGameBoard = (size) => {
  // Create a gameboard of size x size (2d array)
  const addBoardTiles = () => {
    const newBoard = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let i = 0; i < size; i++) {
        row.push(false);
      }
      newBoard.push(row);
    }
    return newBoard;
  };

  const tiles = addBoardTiles();
  const gamePieces = [];

  const checkTile = (x, y) => {
    // checks tile(x, y) as a valid space, returns boolean
    // console.log('CHECKTILE', x, y);
    if (tiles[x][y] === true) {
      throw new Error('coordinates already occupied');
    }
    if ((x < 0 || x > size) || (y < 0 || y >= size)) {
      throw new Error('Invalid coordinates');
    }
    return true;
  };

  const checkTiles = (x, y, shipLength, rotation) => {
    // x, y as starting points, check all tiles ship
    // would take up
    if (rotation === 'true') {
      for (let i = 0; i < shipLength; i++) {
        if (tiles[x + i][y] === true) {
          throw new Error('coordinates already occupied');
        }
        if ((x + i < 0 || x + i >= size) || (y < 0 || y >= size)) {
          throw new Error('Invalid coordinates');
        }
      }
    } else {
      for (let i = 0; i < shipLength; i++) {
        if (tiles[x][y + i] === true) {
          throw new Error('coordinates already occupied');
        }
        if ((y + i < 0 || y + i >= size) || (x < 0 || x >= size)) {
          throw new Error('Invalid coordinates');
        }
      }
    }
    return true;
  };

  const placeShip = (ship, shipLength, coordinates, rotated) => {
    // Update state of gamebaord with new ship using only one coordinate
    if (rotated === 'true') {
      const y = coordinates[0];
      const x = coordinates[1];
      if (checkTiles(y, x, shipLength, rotated)) {
        for (let i = 0; i < shipLength; i++) {
          ship.sections[i].push(y + i, x);
          // console.log('XY', x, y);
          tiles[y + i][x] = true;
        }
      }
    } else {
      const x = coordinates[1];
      const y = coordinates[0];
      if (checkTiles(y, x, shipLength, rotated)) {
        for (let i = 0; i < shipLength; i++) {
          ship.sections[i].push(y, x + i);
          tiles[y][x + i] = true;
        }
      }
    }
    gamePieces.push(ship);
  };

  const recieveAttack = (coordinates) => {
    // Check coordinates for ship, if a hit, mark posiition on ship as hit
    // else mark tile as a miss, tile should go from false => 'miss'
    const x = coordinates[0];
    const y = coordinates[1];
    if ((x < 0 || x > size) || (y < 0 || y > size)) {
      throw new Error('Attack must target within board');
    }
    if (tiles[x][y] === 'hit' || tiles[x][y] === 'miss') { // Occupied space is marked true on board
      throw new Error('Tile has already been attacked');
    }

    if (tiles[x][y] === true) {
      tiles[x][y] = 'hit';
      // Have coordinates, need to match coordinates to ship position
      for (let i = 0; i < gamePieces.length; i++) {
        const ship = gamePieces[i];
        const sectionKeys = Object.keys(ship.sections); // the index of ship sections
        for (let i = 0; i < sectionKeys.length; i++) { // loops through length of ship
          const stringKey = [ship.sections[sectionKeys[i]][1],
            ship.sections[sectionKeys[i]][2]]; // ship section coords
          // console.log('String key', JSON.stringify(stringKey), JSON.stringify([x, y]));
          if (JSON.stringify(stringKey) === JSON.stringify([x, y])) {
            // console.log('Hitting ship');
            ship.hit(sectionKeys[i]);
          }
        }
      }
      return true; // added this recently
    }
    tiles[x][y] = 'miss';
  };

  const displayShips = () => {
    const shipsStatus = {};
    for (let i = 0; i < gamePieces.length; i++) {
      shipsStatus[gamePieces[i].shipType] = gamePieces[i].isSunk();
    }
    return shipsStatus;
  };

  const gameOver = () => {
    // Check that all ships have been sunk, end game if true
    if (gamePieces.every((ship) => ship.isSunk() === true)) {
      return true;
    }
    return false;
  };

  return {
    tiles, gamePieces, placeShip, recieveAttack, gameOver, displayShips, checkTiles,
  };
};
// Player

const Player = (boardSize, computer = false) => {
  const ships = [5, 4, 3, 3, 2];
  const currentShip = 0;
  const playerShips = [];
  ships.forEach((ship) => {
    const newShip = createShip(ship);
    playerShips.push(newShip);
  });
  const checkShipPlacement = (currentShip) => {
    currentShip++;
    // check for the final ship placement, return true, which will start the game
    if (currentShip === 5) {
      return true;
    }
    return false;
  };
  const createBoard = () => {
    // set true for human player
    const playerBoard = createGameBoard(boardSize);
    return playerBoard;
  };

  const makeAttack = (opponent, coordinates) => {
    opponent.playerBoard.recieveAttack(coordinates);
  };

  const computerAttack = (opponent) => {
    // Computer should should make a random, valid attack
    while (true) {
      const x = Math.floor(Math.random() * (boardSize));
      const y = Math.floor(Math.random() * (boardSize));
      try {
        makeAttack(opponent, [x, y]);
        break;
      } catch {
        continue;
      }
    }
  };

  const isComputer = () => computer;

  const playerBoard = createBoard(boardSize);

  const checkVictory = () => playerBoard.gameOver();

  function placeComputerShips() {
    // Create Carrier(5), BS(4), submarine(3)x2, destroyer(2)
    const ships = [5, 4, 3, 3, 2];
    const rotations = ['true', 'false'];
    // const { playerBoard } = computerPlayer.gameObject; // same as pb = CO.gameObject.playetrBoard
    ships.forEach((ship) => {
      const newShip = createShip(ship);
      const rotation = rotations[Math.round(Math.random() * 1)]; // randomly gen. rotation
      let randCoordinates = getRandomCoordinates();
      let counter = 0;
      while (true) {
        counter += 1;
        try {
          if (playerBoard.checkTiles(randCoordinates[0], randCoordinates[1], ship, rotation)) {
            playerBoard.placeShip(newShip, ship, randCoordinates, rotation);
            break;
          }
        } catch {
          randCoordinates = getRandomCoordinates();
        }
        if (counter > 100) {
          break;
        }
      }
    });
  }
  return {
    playerBoard, playerShips, currentShip, checkShipPlacement, makeAttack, computerAttack, isComputer, checkVictory, placeComputerShips,
  };
};

function getRandomCoordinates() {
  // Generate random coordinates
  // gameBord.checkTile should rturn if coordinates are valid
  const x = Math.floor(Math.random() * (10));
  const y = Math.floor(Math.random() * (10));
  return [x, y];
}

const parseStringArray = (stringArray) => {
  const rawArray = stringArray.split(',');
  const real = [];
  rawArray.forEach((number) => {
    real.push(parseInt(number));
  });
  return real;
};

module.exports = {
  createShip, createGameBoard, Player, parseStringArray,
};
