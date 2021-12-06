import { createShip, createGameBoard, Player } from './game_functions';
import {
  createPlayer, getPlayerName, gameLoop, placeShip, placeComputerShips,
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
  createOutline();
  const player1 = Player(10); // Don't create user player here
  const computerPlayer = Player(10, true); // Probably ok to create computer, for now
  // console.log('PLAYER DEETS', player1);

  document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.banner');
    banner.innerText = 'Battleship';
    // const gameSpace = document.querySelector('.game-space');
    // populateGameSpace(gameSpace, [player1, computerPlayer]);
    // mouseHover();
  });
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

  container.appendChild(bannerDiv);
  // container.appendChild(rotateBtn);
  container.appendChild(gameSpace);
  container.appendChild(playerDetails);
  const modal = addModal();
  modal.style.display = 'block';
  container.appendChild(modal);
  document.body.appendChild(container);
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
  playerBoardHeader.classList.add('player-header');
  playerBoardHeader.innerText = playerName(player);
  gameBoard.appendChild(playerBoardHeader);

  let boardRow = 0;
  player.gameObject.playerBoard.tiles.forEach((row) => { // horizontal row 0-9
    const gameBoardRow = document.createElement('div');
    let boardColumn = 0;
    gameBoardRow.classList.add('game-board-row');
    row.forEach(() => { // horizontal column 0-9
      const boardTile = document.createElement('div');
      boardTile.classList.add('game-board-tile');
      if (player.gameObject.isComptuer === true) {
        boardTile.setAttribute('data-tile', [boardRow, boardColumn]);
        boardTile.value = player.gameObject.playerBoard.tiles[(boardRow, boardColumn)];
        boardTile.setAttribute('data-tile-value', player.gameObject.playerBoard.tiles[boardRow][boardColumn]);
      } else {
        boardTile.setAttribute(`data-tile${player.name}`, [boardRow, boardColumn]);
        boardTile.setAttribute('data-tile-value', player.gameObject.playerBoard.tiles[boardRow][boardColumn]);
      }
      boardTile.addEventListener('mouseover', (event) => {
        const elementID = parseStringArray(
          event.target.dataset[`tile${player.name.charAt(0).toLowerCase() + player.name.slice(1)}`],
        );
        // const rotation = rotateShip(rotateBtn);
        const rotateBtn = document.getElementsByName('rotateBtn')[0];
        highlightShip(elementID, 4, player, true); // Should now be coordinates [0,0], true=rotation value
      });
      if (player.gameObject.playerBoard.tiles[boardRow][boardColumn] === true) {
        boardTile.classList.add('occupied');
      }
      gameBoardRow.appendChild(boardTile);
      boardColumn++;
    });
    gameBoard.appendChild(gameBoardRow);
    boardRow++;
  });
  return gameBoard;
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

function placeShipsOnBoard(gameBoard) {
  // Player places ships on their game board
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
    placeComputerShips(computerPlayer);
    const gameSpace = document.querySelector('.game-space');
    // modal.style.display = 'none';
    namePrompt.style.display = 'none';
    modal.appendChild(placeShipMenu(player));
    // gameLoop(player, computerPlayer);
    // populateGameSpace(gameSpace, [player, computerPlayer]);
  });
  namePrompt.appendChild(header);
  namePrompt.appendChild(nameInput);
  namePrompt.appendChild(submitBtn);
  return namePrompt;
}

function placeShipMenu(player) {
  // Modal menu for placing ships on the palyers grid at the start of the game.
  // Attach prompts for adding ships
  const shipGrid = document.createElement('div');
  shipGrid.classList.add('ship-grid');
  shipGrid.appendChild(rotateButton());
  shipGrid.appendChild(createBoard(player));

  return shipGrid;
}

function displayShips() {
  // When ships are placed, their shapes should persist on the gameboard

}
function playerName(player) {
  if (player.gameObject.isComputer() === false) {
    return player.name;
  }
  return 'Computer';
}

function highlightShip(elementID, shipLength, player, rotated) {
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
      const square = document.querySelector(`[data-tile${player.name}='${[elementID[0] + i, elementID[1]]}']`);
      square.classList.add('highlighted');
      square.addEventListener('mouseout', () => {
        for (let i = 0; i < shipLength; i++) {
          const removeSquare = document.querySelector(`[data-tile${player.name}='${[elementID[0] + i, elementID[1]]}']`);
          removeSquare.classList.remove('highlighted');
          removeSquare.classList.remove('invalid');
        }
      });
    } catch {
      for (let i = 0; i < shipLength; i++) {
        const square = document.querySelector(`[data-tile${player.name}='${[elementID[0] + i, elementID[1]]}']`); // adjust on vertical axis
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
      const square = document.querySelector(`[data-tile${player.name}='${[elementID[0], elementID[1] + i]}']`);
      square.classList.add('highlighted');
      square.addEventListener('mouseout', () => {
        for (let i = 0; i < shipLength; i++) {
          const removeSquare = document.querySelector(`[data-tile${player.name}='${[elementID[0], elementID[1] + i]}']`);
          removeSquare.classList.remove('highlighted');
          removeSquare.classList.remove('invalid');
        }
      });
    } catch {
      for (let i = 0; i < shipLength; i++) {
        const square = document.querySelector(`[data-tile${player.name}='${[elementID[0], elementID[1] + i]}']`); // adjust on vertical axis
        square.classList.add('invalid');
      }
      console.log('There is no square');
    }
  }
}
loadPage();

function testElements() {
  const player1 = Player(10);
  const player2 = Player(10, true);
  // Banner

  // Display both player boards
  // document.body.appendChild(createGameSpace([player1, player2]));

  // PlayerBoard
  // document.body.appendChild(createBoard(player));
}

testElements();
