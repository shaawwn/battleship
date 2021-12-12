import { createShip, createGameBoard, Player } from './game_functions';
import {
  createPlayer, getPlayerName, gameLoop, placeShip,
} from './game.js';
import './style.css';

console.log('Loading scripts....');
// const storage = window.localStorage;

function loadStorage() {
  const storage = window.localStorage;
  return storage;
}

function loadPage() {
  // pass
  const storage = loadStorage();
  document.body.appendChild(createOutline());

//   document.addEventListener('DOMContentLoaded', () => {
//     const banner = document.querySelector('.banner');
//     banner.innerText = 'Battleship';
//   });
}

function createOutline() {
  // skeleton outline and containers for the page
  const container = document.createElement('div');
  const bannerDiv = document.createElement('div');
  const gameSpace = document.createElement('div');
  const playerDetails = document.createElement('div');

  container.classList.add('main-container');
  bannerDiv.classList.add('banner');
  gameSpace.classList.add('game-space');
  playerDetails.classList.add('player-details');

  bannerDiv.innerText = 'Battleship!';
  container.appendChild(bannerDiv);
  container.appendChild(gameSpace);
  container.appendChild(playerDetails);
  const modal = addModal();
  modal.style.display = 'block';
  container.appendChild(modal);
  // document.body.appendChild(container); // appended to body in loadpage()
  return container;
}

function populateGameSpace(gameSpace, players) {
  players.forEach((player) => {
    const playerBoard = createBoard(player);
    gameSpace.appendChild(playerBoard);
  });
}

function createBoard(player) {
  const gameBoard = document.createElement('div');
  const playerBoardHeader = document.createElement('p');
  // const rotateBtn = document.getElementsByName('rotateBtn')[0];
  gameBoard.classList.add('game-board');
  gameBoard.setAttribute('name', playerName(player));
  playerBoardHeader.classList.add('player-header');
  playerBoardHeader.innerText = playerName(player);
  gameBoard.appendChild(playerBoardHeader);

  let boardRow = 0;
  player.gameObject.playerBoard.tiles.forEach((row) => { // vertical row 0-9
    const gameBoardRow = document.createElement('div');
    let boardColumn = 0;
    gameBoardRow.classList.add('game-board-row');
    row.forEach(() => { // horizontal column 0-9
      const boardTile = document.createElement('div');
      boardTile.classList.add('game-board-tile');
      if (player.gameObject.isComputer() === true) {
        // data-tile values are coordinates on the play grid
        // data-tile-value indicates tile status -- true = occupied, hit/miss indicate attacks
        boardTile.setAttribute('data-tile-computer', [boardRow, boardColumn]); // change to data-tile-computer
        boardTile.setAttribute('data-tile-value', player.gameObject.playerBoard.tiles[boardRow][boardColumn]);
      } else {
        // boardTile.setAttribute(`data-tile${player.name}`, [boardRow, boardColumn]); // change to data-tile-player
        // boardTile.setAttribute('data-tile-value', player.gameObject.playerBoard.tiles[boardRow][boardColumn]);
        boardTile.setAttribute('data-tile-player', [boardRow, boardColumn]); // change to data-tile-player
        boardTile.setAttribute('data-tile-value', player.gameObject.playerBoard.tiles[boardRow][boardColumn]);
        if (player.gameObject.playerBoard.tiles[boardRow][boardColumn] === true) {
          // Moved inside conditional in order to hide computer ship locatations
          // move outside to view computer placements
          boardTile.classList.add('occupied'); // indicates a tile is occupied by a ship
        }
      }
      // comment out to hide computer ship positions (testing)
      // if (player.gameObject.playerBoard.tiles[boardRow][boardColumn] === true) {
      //   boardTile.classList.add('occupied'); // indicates a tile is occupied by a ship
      // }
      gameBoardRow.appendChild(boardTile);
      boardColumn++;
    });
    gameBoard.appendChild(gameBoardRow);
    boardRow++;
  });
  return gameBoard;
}

function addBoardTileListeners(player, computerPlayer) {
  // Add highlight ship, place ship listeners to board tiles.
  const boardTiles = document.querySelectorAll('.game-board-tile');
  boardTiles.forEach((tile) => {
    tile.addEventListener('mouseover', (event) => {
      placeShipHighlight(event, player);
    });
    tile.addEventListener('click', (event) => {
      const shipGrid = document.querySelector('.ship-grid');
      const tile = `tile${player.name.toLowerCase()}`;
      const coordinates = parseStringArray(event.path[0].dataset.tilePlayer);
      const rotated = document.getElementsByName('rotateBtn')[0].value;
      const { currentShip } = player.gameObject;
      const ship = player.gameObject.playerShips[currentShip];
      player.gameObject.playerBoard.placeShip(ship, ship.length, coordinates, rotated);

      // player.gameObject.currentShip++;
      if (player.gameObject.checkShipPlacement(currentShip) === true) {
        // Close modal, load gameboards and start game!
        const modal = document.querySelector('.modal');
        const gameSpace = document.querySelector('.game-space');
        modal.style.display = 'none';
        populateGameSpace(gameSpace, [player, computerPlayer]);
        gameLoop(player, computerPlayer);
        // should close the placeship grid and start the game at this point
      }
      // Change color of tiles
      addShipTiles(coordinates, ship.length, player, computerPlayer, rotated);
    });
  });
}

function changeTileValues() {
  // Change the tile values when a ship is placed
  // tile should have attrbutes changed to reflect ship occupyng space(change class)
}

function placeShipHighlight(event, player, ship) {
  const elementID = parseStringArray(
    // event.target.dataset[`tile${player.name.charAt(0).toLowerCase() + player.name.slice(1)}`],
    event.target.dataset.tilePlayer,
  );
  const rotation = document.getElementsByName('rotateBtn')[0].value;
  highlightShip(elementID, player.gameObject.playerShips[player.gameObject.currentShip]
    .length, player, rotation);
}

function rotateButton() {
  const rotateBtn = document.createElement('button');
  rotateBtn.classList.add('btn');
  rotateBtn.classList.add('rotate-btn');
  rotateBtn.name = 'rotateBtn';
  rotateBtn.innerText = 'Rotate ship';
  rotateBtn.value = true;
  rotateBtn.addEventListener('click', () => {
    if (rotateBtn.value === 'true') {
      rotateBtn.value = false;
    } else {
      rotateBtn.value = true;
    }
  });
  return rotateBtn;
}
const parseStringArray = (stringArray) => {
  const rawArray = stringArray.split(',');
  const real = [];
  rawArray.forEach((number) => {
    real.push(parseInt(number));
  });
  return real;
};

function addPlayerDetails() {
  // Player details -> Legend of player ship and computer ship status
}

function addModal() {
  // Modal for game setup, ask player name, and place ships (place ships on main game board)
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.appendChild(addNamePrompt(modal));
  return modal;
}

function addNamePrompt(modal) {
  // Prompt the player for their name
  const namePrompt = document.createElement('div');
  const header = document.createElement('p');
  const nameInput = document.createElement('input');
  const submitBtn = document.createElement('button');

  header.innerText = 'Battlestations!!';
  header.classList.add('header-sm');
  nameInput.placeholder = 'Please enter your name.';
  submitBtn.innerText = 'Submit';

  namePrompt.classList.add('modal-box');
  nameInput.classList.add('input');
  submitBtn.classList.add('btn');

  submitBtn.addEventListener('click', () => {
    const player = createPlayer(nameInput.value, false);
    const computerPlayer = createPlayer('Computer', true);
    computerPlayer.gameObject.placeComputerShips();
    const gameSpace = document.querySelector('.game-space');
    // modal.style.display = 'none';
    namePrompt.style.display = 'none';
    modal.appendChild(placeShipMenu(player));
    addBoardTileListeners(player, computerPlayer);
  });
  namePrompt.appendChild(header);
  namePrompt.appendChild(nameInput);
  namePrompt.appendChild(submitBtn);
  return namePrompt;
}

function placeShipMenu(player) {
  // Modal menu for placing ships on the palyers grid at the start of the game.
  const currentShip = player.gameObject.playerShips[player.gameObject.currentShip].shipType.charAt(0).toUpperCase()
    + player.gameObject.playerShips[player.gameObject.currentShip].shipType.slice(1);
  const shipGrid = document.createElement('div');
  const chooseShipDisplay = document.createElement('p');
  // const shipIndex = 0;
  shipGrid.classList.add('ship-grid');
  chooseShipDisplay.classList.add('header-sm');
  shipGrid.innerHTML = '';
  chooseShipDisplay.innerText = `Deploy your ${currentShip}`;
  shipGrid.appendChild(chooseShipDisplay);
  shipGrid.appendChild(rotateButton());
  shipGrid.appendChild(createBoard(player));

  const board = createBoard(player);
  console.log(board);

  return shipGrid;
}

function placeShipListeners() {
  // When a player clicks on VALID space, place a ship, then increment to the next ship, when the
  // final ship is placed, close ship placement grid and load game boards.
  const boardTiles = document.querySelectorAll('game-board-tile');
  boardTiles.forEach((tile) => {
    tile.addEventListener('click', () => {
      placeShip(ship, shipLength, player, rotation);
      // increment to the next ship
      playerShips += 1;
    });
  });
}

function addShipTiles(coordinates, shipLength, player, computerPlayer, rotated) {
  // When ships are placed, their shapes should persist on the gameboard
  const modal = document.querySelector('.modal');
  if (rotated === 'true') {
    permIncrementY(coordinates, shipLength, player); // add ship to grid
    modal.innerHTML = ''; // reset modal
    player.gameObject.currentShip++;
    modal.appendChild(placeShipMenu(player)); // update changes to grid
    addBoardTileListeners(player, computerPlayer);
  } else {
    permIncrementX(coordinates, shipLength, player);
    modal.innerHTML = '';
    player.gameObject.currentShip++;
    modal.appendChild(placeShipMenu(player));
    addBoardTileListeners(player, computerPlayer);
  }
}

function permIncrementY(elementID, shipLength, player) {
  // Helper for highlighShip()
  for (let i = 0; i < shipLength; i++) {
    try {
      const square = document.querySelector(`[data-tile-player='${[elementID[0] + i, elementID[1]]}']`);
      square.classList.add('highlighted');
    } catch {
      for (let i = 0; i < shipLength; i++) {
        const square = document.querySelector(`[data-tile-player='${[elementID[0] + i, elementID[1]]}']`); // adjust on vertical axis
        square.classList.add('invalid');
      }
      console.log('There is no square');
    }
  }
}

function permIncrementX(elementID, shipLength, player) {
  // Helper for highlighShip()
  for (let i = 0; i < shipLength; i++) {
    try {
      const square = document.querySelector(`[data-tile-player='${[elementID[0], elementID[1] + i]}']`);
      square.classList.add('highlighted');
    } catch {
      for (let i = 0; i < shipLength; i++) {
        const square = document.querySelector(`[data-tile-player='${[elementID[0], elementID[1] + i]}']`); // adjust on vertical axis
        square.classList.add('invalid');
      }
      console.log('There is no square');
    }
  }
}
function playerName(player) {
  if (player.gameObject.isComputer() === false) {
    return player.name;
  }
  return 'Computer';
}

function highlightShip(elementID, shipLength, player, rotated, placed) {
  // Highlights a 'ship' placement when moving the cursor over the gameboard
  if (rotated === 'true') {
    incrementY(elementID, shipLength, player);
  } else {
    incrementX(elementID, shipLength, player);
  }
}

function incrementY(elementID, shipLength, player) {
  // Helper for highlighShip()
  for (let i = 0; i < shipLength; i++) {
    try {
      const square = document.querySelector(`[data-tile-player='${[elementID[0] + i, elementID[1]]}']`);
      square.classList.add('highlighted');
      square.addEventListener('mouseout', () => {
        for (let i = 0; i < shipLength; i++) {
          const removeSquare = document.querySelector(`[data-tile-player='${[elementID[0] + i, elementID[1]]}']`);
          removeSquare.classList.remove('highlighted');
          removeSquare.classList.remove('invalid');
        }
      });
    } catch {
      for (let i = 0; i < shipLength; i++) {
        const square = document.querySelector(`[data-tile-player='${[elementID[0] + i, elementID[1]]}']`); // adjust on vertical axis
        square.classList.add('invalid');
      }
      console.log('There is no square');
    }
  }
}

function incrementX(elementID, shipLength, player) {
  // Helper for highlighShip()
  for (let i = 0; i < shipLength; i++) {
    try {
      const square = document.querySelector(`[data-tile-player='${[elementID[0], elementID[1] + i]}']`);
      square.classList.add('highlighted');
      square.addEventListener('mouseout', () => {
        for (let i = 0; i < shipLength; i++) {
          const removeSquare = document.querySelector(`[data-tile-player='${[elementID[0], elementID[1] + i]}']`);
          removeSquare.classList.remove('highlighted');
          removeSquare.classList.remove('invalid');
        }
      });
    } catch {
      for (let i = 0; i < shipLength; i++) {
        const square = document.querySelector(`[data-tile-player='${[elementID[0], elementID[1] + i]}']`); // adjust on vertical axis
        square.classList.add('invalid');
      }
      console.log('There is no square');
    }
  }
}
loadPage();

export {
  createBoard,
};
