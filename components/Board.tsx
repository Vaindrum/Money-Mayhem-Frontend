import React from 'react';
import DiceRoller from './ui/DiceRoller';

const Board: React.FC = () => {
  const boardSize = 700;
  const gridSize = 11;
  const tileSize = boardSize / gridSize;
  const borderWidth = 4;
  const innerTileSize = tileSize - 2; // Account for border

  const styles = {
    board: {
      width: `${boardSize}px`,
      height: `${boardSize}px`,
      display: 'grid',
      gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
      gridTemplateRows: `repeat(${gridSize}, 1fr)`,
      gap: '0px',
      border: `${borderWidth}px solid #333`,
      backgroundColor: '#121221',
      color: 'white',
      position: 'relative',
    },
    tile: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '10px',
      border: '1px solid #555',
      backgroundColor: '#444',
    },
    corner: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      fontWeight: 'bold',
    },
    propertyColor: (color: string) => ({
      width: '100%',
      height: '10px',
      backgroundColor: color,
    }),
    centerArea: {
      gridColumnStart: 2,
      gridColumnEnd: gridSize,
      gridRowStart: 2,
      gridRowEnd: gridSize,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    dice: {
      fontSize: '48px',
      marginBottom: '8px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#673ab7',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '8px 0',
    },
    playerInfo: {
      fontSize: '14px',
    },
  };

  const bottomRow = [
    { name: 'Go to prison', style: { ...styles.corner, backgroundColor: '#9c27b0' }, icon: '👮' },
    { name: 'Paris', color: '#3f51b5', price: '280$' },
    { name: 'Water Company', color: '#03a9f4', price: '150$' },
    { name: 'Toulouse', color: '#3f51b5', price: '260$' },
    { name: 'Lyon', color: '#3f51b5', price: '260$' },
    { name: 'CDG Airport', color: '#607d8b', price: '200$' },
    { name: 'Shanghai', color: '#f44336', price: '240$' },
    { name: 'Beijing', color: '#f44336', price: '220$' },
    { name: 'Surprise', color: '#ff9800', price: '?' },
    { name: 'Shenzhen', color: '#f44336', price: '220$' },
    { name: 'Vacation', style: { ...styles.corner, backgroundColor: '#4caf50'}, icon: '🌴' },
  ];

  const rightColumn = [
    { name: 'Berlin', color: '#4caf50', price: '200$' },
    { name: 'Munich', color: '#4caf50', price: '180$' },
    { name: 'Treasure', color: '#ffeb3b' },
    { name: 'Frankfurt', color: '#4caf50', price: '180$' },
    { name: 'MLC Airport', color: '#607d8b', price: '200$' },
    { name: 'Rome', color: '#9c27b0', price: '160$' },
    { name: 'Milan', color: '#9c27b0', price: '140$' },
    { name: 'Electric Company', color: '#03a9f4', price: '150$' },
    { name: 'Venice', color: '#9c27b0', price: '140$' },
  ].reverse();

  const topRow = [
    { name: 'Start', style: { ...styles.corner, backgroundColor: '#4caf50' }, icon: '⭐' },
    { name: 'Sagarpur', color: '#ffeb3b', price: '60$' },
    { name: 'Treasure', color: '#ffeb3b', },
    { name: 'Tagore', color: '#ffeb3b', price: '60$' },
    { name: 'Income Tax', color: '#607d8b', price: '%10' },
    { name: 'TLV Airport', color: '#607d8b', price: '200$' },
    { name: 'Tel Aviv', color: '#3f51b5', price: '100$' },
    { name: 'Surprise', color: '#ff9800', price: '?' },
    { name: 'Haifa', color: '#3f51b5', price: '100$' },
    { name: 'Jerusalem', color: '#3f51b5', price: '120$' },
    { name: 'In Prison', style: { ...styles.corner, backgroundColor: '#9c27b0'}, icon: '👮' },
  ].reverse();

  const leftColumn = [
    { name: 'New York', color: '#e91e63', price: '400$' },
    { name: 'Luxury Tax', color: '#607d8b', price: '$75' },
    { name: 'San Francisco', color: '#e91e63', price: '380$' },
    { name: 'Surprise', color: '#ff9800', price: '?' },
    { name: 'JFK Airport', color: '#607d8b', price: '200$' },
    { name: 'London', color: '#4caf50', price: '300$' },
    { name: 'Treasure', color: '#ffeb3b' },
    { name: 'Manchester', color: '#4caf50', price: '300$' },
    { name: 'Liverpool', color: '#4caf50', price: '300$' },
  ].reverse();

  return (
    <div style={styles.board}>
      {/* Bottom Row */}
      {bottomRow.map((tile, index) => (
        <div
          key={`bottom-${index}`}
          style={{
            ...styles.tile,
            gridColumnStart: index + 1,
            gridRowStart: gridSize,
            ...(tile.style || {}),
            transformOrigin: 'center center',
          }}
        >
          {tile.color && <div style={styles.propertyColor(tile.color)} />}
          <div>{tile.name}</div>
          {tile.price && <div>{tile.price}</div>}
          {tile.icon && <div>{tile.icon}</div>}
        </div>
      ))}

      {/* Right Column */}
      {rightColumn.map((tile, index) => (
        <div
          key={`right-${index}`}
          style={{
            ...styles.tile,
            gridColumnStart: gridSize,
            gridRowStart: gridSize - 1 - index,
            transform: 'rotate(90deg)',
          }}
        >
          {tile.color && <div style={styles.propertyColor(tile.color)} />}
          <div>{tile.name}</div>
          {tile.price && <div>{tile.price}</div>}
          {tile.icon && <div>{tile.icon}</div>}
        </div>
      ))}

      {/* Top Row */}
      {topRow.map((tile, index) => (
        <div
          key={`top-${index}`}
          style={{
            ...styles.tile,
            gridColumnStart: gridSize - index,
            gridRowStart: 1,
            ...(tile.style || {}),
            transformOrigin: 'center center',
          }}
        >
          {tile.color && <div style={styles.propertyColor(tile.color)} />}
          <div>{tile.name}</div>
          {tile.price && <div>{tile.price}</div>}
          {tile.icon && <div>{tile.icon}</div>}
        </div>
      ))}

      {/* Left Column */}
      {leftColumn.map((tile, index) => (
        <div
          key={`left-${index}`}
          style={{
            ...styles.tile,
            gridColumnStart: 1,
            gridRowStart: index + 2,
            transform: 'rotate(-90deg)',
          }}
        >
          {tile.color && <div style={styles.propertyColor(tile.color)} />}
          <div>{tile.name}</div>
          {tile.price && <div>{tile.price}</div>}
          {tile.icon && <div>{tile.icon}</div>}
        </div>
      ))}

      {/* Center Area */}
      <div style={styles.centerArea}>
        <div style={{ textAlign: 'center' }}>
          <div style={styles.dice}>🎲</div>
          <div style={styles.playerInfo}>... is playing ...</div>
          <button style={styles.button}>Start Game</button>
        <DiceRoller />
          <div style={styles.playerInfo}>Joined room lafda</div>
        </div>
        {/* You would likely render the DiceRoller component here in a real application */}
      </div>
    </div>
  );
};

export default Board;