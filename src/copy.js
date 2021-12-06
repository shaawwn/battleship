const placeShip = (ship, shipLength, coordinates, rotated = false) => {
  // Update state of gamebaord with new ship using only one coordinate
  if (rotated) {
    // Along y axis
    const y = coordinates[0];
    const x = coordinates[1];
    for (let i = 0; i < shipLength; i++) {
      if (checkTile(y + i, x)) {
        // Tiles will be placed as long as THAT tile is valid,
        // can result in partial ship placements
        ship.sections[i].push([y + i, x]);
        tiles[y + i][x] = true;
      }
    }
  } else {
    // Along x axis
    const x = coordinates[1];
    const y = coordinates[0];
    for (let i = 0; i < shipLength; i++) {
      if (checkTile(y, x + i)) {
        ship.sections[i].push([y, x + i]);
        tiles[y][x + i] = true;
      }
    }
  }
  gamePieces.push(ship);
};

const placeShip = (ship, shipLength, coordinates, rotated = false) => {
  // Update state of gamebaord with new ship using only one coordinate
  if (rotated) {
    const y = coordinates[0];
    const x = coordinates[1];
    if(checkTiles(y, x, shipLength, rotated)) {
      for(let i = 0; i < shipLength;i++) {
        ship.sections[i].push(y + i, x);
        tiles[y + i][x] = true;
      }
    }
  } else {
    const x = coordinates[1];
    const y = coordinates[0];
    if(checkTiles(y, x, shipLength, rotated)) {
      for(let i = 0, i < shipLength;i++) {
        ship.sections[i].push(y, x + i);
        tiles[y][x + i]
      }
    }
  }
  gamePieces.push(ship)
};