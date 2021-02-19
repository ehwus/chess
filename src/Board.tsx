import React from 'react';

const Board = () => {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    let color = i % 2 === 0 ? 'white' : 'black';
    squares.push(<div className={'square ' + color} key={i}></div>);
  }

  return <>{squares}</>;
};

export default Board;
