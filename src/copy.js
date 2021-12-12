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
      const coordinates = parseStringArray(event.path[0].dataset[tile]);
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
        gameLoop();
        // should close the placeship grid and start the game at this point
      }
      // Change color of tiles
      addShipTiles(coordinates, ship.length, player, computerPlayer, rotated);
    });
  });
}

function clickToPlaceShip(player) {
  const { currentShip } = player.gameObject;
  const ship = player.gameObject.playerShips[currentShip];
  player.gameObject.playerBoard.placeShip(ship, ship.length, coordinates, rotated);
}
