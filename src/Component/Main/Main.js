import React from 'react';
import Box from './Box';
import "./Box.css"


const Main = () => {
    const [squares, setSquares] = React.useState(Box);
  
    const OnSquare = (id) => {
        const PrevSquares = squares.map((square) => {
          if (square.id === id) 
        {
        return  { 
                id: square.id,
                on: !square.on,
                 
                }; 
        }else {
            return square;
          }
        });
        setSquares(PrevSquares);
      };   
    return (
        <main>
        {squares.map((square) => (
          <div
            key={square.id}
            className="box"
            onClick={() => OnSquare(square.id)}
            style={{ backgroundColor: square.on ? '#222222' : 'transparent' }}
          />
        ))}
      </main>
    );
  };

export default Main;
