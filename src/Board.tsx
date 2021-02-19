import React from 'react';

const Board = () => {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(<div className='square' key={i}></div>);
  }

  return <>{squares}</>;
};

export default Board;
